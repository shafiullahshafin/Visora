// enables client side rendering for webcam and detection
"use client";

// builds object detection experience with webcam and coco ssd
import React from "react";
import Webcam from "react-webcam";
import { useEffect, useRef, useState } from "react";
import * as tf from "@tensorflow/tfjs";
import { load as cocoSSDLoad } from "@tensorflow-models/coco-ssd";
import "@tensorflow/tfjs-backend-webgl";
import { renderPredictions } from "@/utils/render-predictions";

const ObjectDetection = () => {
  // tracks loading state for model and control alert volume
  const [isLoading, setIsLoading] = useState(true);
  const [volume, setVolume] = useState(0.4);

  // holds references for webcam, canvas and timers
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const detectIntervalRef = useRef(null);
  const volumeRef = useRef(0.4);

  // loads coco ssd model and starts detection loop
  async function runCoco() {
    setIsLoading(true);
    const net = await cocoSSDLoad();
    setIsLoading(false);

    let isDetecting = false;

    detectIntervalRef.current = setInterval(async () => {
      if (isDetecting) {
        return;
      }

      isDetecting = true;
      await runObjectDetection(net);
      isDetecting = false;
    }, 200);
  }

  // runs detection on current webcam frame
  async function runObjectDetection(net) {
    if (
      canvasRef.current &&
      webcamRef.current !== null &&
      webcamRef.current.video?.readyState === 4
    ) {
      canvasRef.current.width = webcamRef.current.video.videoWidth;
      canvasRef.current.height = webcamRef.current.video.videoHeight;

      const detectedObjects = await net.detect(
        webcamRef.current.video,
        undefined,
        0.6
      );

      const context = canvasRef.current.getContext("2d");
      renderPredictions(detectedObjects, context, volumeRef.current);
    }
  }

  // syncs video element size with actual stream size
  const showmyVideo = () => {
    if (
      webcamRef.current !== null &&
      webcamRef.current.video?.readyState === 4
    ) {
      const myVideoWidth = webcamRef.current.video.videoWidth;
      const myVideoHeight = webcamRef.current.video.videoHeight;

      webcamRef.current.video.width = myVideoWidth;
      webcamRef.current.video.height = myVideoHeight;
    }
  };

  // initializes tensorflow and sets up detection on mount
  useEffect(() => {
    tf.ready().then(() => {
      runCoco();
      showmyVideo();
    });

    return () => {
      // cleans detection interval when component unmounts
      if (detectIntervalRef.current) {
        clearInterval(detectIntervalRef.current);
      }
    };
  }, []);

  // updates alert volume from slider input
  const handleVolumeChange = (event) => {
    const value = Number(event.target.value);
    setVolume(value);
    volumeRef.current = value;
  };

  // renders webcam view, drawing canvas and volume control
  return (
    <div className="mt-8 w-full flex flex-col items-center">
      {isLoading ? (
        <div className="gradient-text">Loading AI Model...</div>
      ) : (
        <div className="relative flex justify-center items-center gradient p-1.5 rounded-md">
          <Webcam
            ref={webcamRef}
            className="rounded-md w-full lg:h-[720px]"
            muted
          />
          <canvas
            ref={canvasRef}
            className="absolute top-0 left-0 z-[99999] w-full lg:h-[720px]"
          />
        </div>
      )}
      <div className="mt-4 w-full max-w-md">
        <label className="block mb-1 text-sm font-medium">
          Alert volume
        </label>
        <input
          type="range"
          min="0"
          max="1"
          step="0.05"
          value={volume}
          onChange={handleVolumeChange}
          className="w-full"
        />
      </div>
    </div>
  );
};

export default ObjectDetection;
