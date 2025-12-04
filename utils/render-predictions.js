let audioInstance = null;

export const renderPredictions = (predictions, ctx) => {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  let personDetected = false;

  // Fonts
  const font = "16px sans-serif";
  ctx.font = font;
  ctx.textBaseline = "top";

  predictions.forEach((prediction) => {
    const [x, y, width, height] = prediction["bbox"];

    const isPerson = prediction.class === "person";

    // bounding box
    ctx.strokeStyle = isPerson ? "#FF0000" : "#00FFFF";
    ctx.lineWidth = 4;
    ctx.strokeRect(x, y, width, height);

    // fill the color
    ctx.fillStyle = `rgba(255, 0, 0, ${isPerson ? 0.2 : 0})`;
    ctx.fillRect(x, y, width, height);

    // Draw the label background.
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

  if (personDetected) {
    if (audioInstance === null) {
      audioInstance = new Audio("/alert.wav");
    }
    
    // Play the audio only if it's currently paused
    if (audioInstance.paused) {
      audioInstance.play().catch(() => {});
    }
  } else {
    // Stop and rewind the audio immediately if no person is detected
    if (audioInstance !== null && !audioInstance.paused) {
      audioInstance.pause();
      audioInstance.currentTime = 0;
    }
  }
};