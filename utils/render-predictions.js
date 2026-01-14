// keeps single audio instance for alert sound
let audioInstance = null;

// draws predictions and controls alert sound based on detections
export const renderPredictions = (predictions, ctx, volume = 1) => {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  let personDetected = false;

  // sets font used for labels on canvas
  const font = "16px sans-serif";
  ctx.font = font;
  ctx.textBaseline = "top";

  // loops through every prediction and draws bounding boxes
  predictions.forEach((prediction) => {
    const [x, y, width, height] = prediction["bbox"];

    const isPerson = prediction.class === "person";

    // styles rectangle differently for person class
    ctx.strokeStyle = isPerson ? "#FF0000" : "#00FFFF";
    ctx.lineWidth = 4;
    ctx.strokeRect(x, y, width, height);

    // applies transparent fill when person appears
    ctx.fillStyle = `rgba(255, 0, 0, ${isPerson ? 0.2 : 0})`;
    ctx.fillRect(x, y, width, height);

    // draws background shape behind class label text
    ctx.fillStyle = isPerson ? "#FF0000" : "#00FFFF";
    const textWidth = ctx.measureText(prediction.class).width;
    const textHeight = parseInt(font, 10);
    ctx.fillRect(x, y, textWidth + 4, textHeight + 4);

    ctx.fillStyle = "#000000";
    ctx.fillText(prediction.class, x, y);

    if (isPerson) {
      personDetected = true;
    }
  });

  // manages alert sound based on person presence
  if (personDetected) {
    if (audioInstance === null) {
      audioInstance = new Audio("/alert.wav");
    }

    const clampedVolume = Math.min(1, Math.max(0, volume));
    audioInstance.volume = clampedVolume;

    if (audioInstance.paused) {
      audioInstance.play().catch(() => {});
    }
  } else {
    if (audioInstance !== null && !audioInstance.paused) {
      audioInstance.pause();
      audioInstance.currentTime = 0;
    }
  }
};
