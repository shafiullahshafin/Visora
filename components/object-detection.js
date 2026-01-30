// enables client side rendering for webcam and detection
"use client";

// builds object detection experience with webcam and coco ssd
import React, { useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import * as tf from "@tensorflow/tfjs";
import { load as cocoSSDLoad } from "@tensorflow-models/coco-ssd";
import "@tensorflow/tfjs-backend-webgl";
import { renderPredictions, initAudio } from "@/utils/render-predictions";
import { Loader2, ScanFace } from "lucide-react";

const ObjectDetection = () => {
  // tracks loading state and detection status
  const [isLoading, setIsLoading] = useState(true);
  const [isStarted, setIsStarted] = useState(false);

  // holds references for webcam, canvas and timers
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const detectIntervalRef = useRef(null);
  const netRef = useRef(null);

  // loads coco ssd model and starts detection loop
  async function runCoco() {
    setIsLoading(true);
    const net = await cocoSSDLoad();
    netRef.current = net;
    setIsLoading(false);
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
      renderPredictions(detectedObjects, context);
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
    });

    return () => {
      // cleans detection interval when component unmounts
      if (detectIntervalRef.current) {
        clearInterval(detectIntervalRef.current);
      }
    };
  }, []);

  // starts detection loop and unlocks audio
  const startDetection = () => {
    initAudio();
    setIsStarted(true);

    let isDetecting = false;

    detectIntervalRef.current = setInterval(async () => {
      if (isDetecting || !netRef.current) {
        return;
      }

      isDetecting = true;
      await runObjectDetection(netRef.current);
      showmyVideo();
      isDetecting = false;
    }, 200);
  };

  // renders webcam view and detection canvas
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      {isLoading ? (
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="h-12 w-12 animate-spin text-blue-500" />
          <p className="text-lg font-medium text-gray-400">Loading AI Model...</p>
        </div>
      ) : !isStarted ? (
        <button
          onClick={startDetection}
          className="group relative inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-all hover:scale-105 shadow-lg hover:shadow-blue-500/25"
        >
          <ScanFace className="w-6 h-6" />
          <span>Start Detection</span>
        </button>
      ) : (
        <div className="relative flex justify-center items-center w-full max-w-4xl max-h-full mx-auto overflow-hidden rounded-2xl border border-white/10 shadow-2xl bg-black/50 backdrop-blur-sm">
          <Webcam
            ref={webcamRef}
            className="w-full h-auto object-cover"
            muted
            playsInline
            videoConstraints={{
              facingMode: "user",
            }}
          />
          <canvas
            ref={canvasRef}
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </div>
      )}
    </div>
  );
};

export default ObjectDetection;
