# Human Detector Application

A small web application that uses your webcam and a COCO-SSD model to detect people in real time, draw bounding boxes around them, and play an audio alert with adjustable volume.

## Features

- Detects people in the webcam feed using TensorFlow.js COCO-SSD  
- Draws bounding boxes and labels over detected people  
- Plays an alert sound when a person appears in frame  
- Provides a volume control slider for the alert sound  
- Runs fully in the browser using the Next.js App Router  

## Tech Stack

- Next.js 16 (App Router)  
- React 19  
- TensorFlow.js and `@tensorflow-models/coco-ssd`  
- `react-webcam` for camera access  
- Tailwind CSS v4 (via `app/globals.css`)  

## Getting Started

### Prerequisites

- Node.js and npm installed  
- A modern browser that supports `getUserMedia` and WebGL  
- A webcam connected and allowed in the browser  

### Installation

```bash
npm install
```

### Run the Development Server

```bash
npm run dev
```

Then open http://localhost:3000 in your browser.

## Usage

- Allow camera access when the browser asks  
- Wait for the model to load and the loading message to disappear  
- Move into the camera frame so the app can detect a person  
- Adjust the alert volume slider until the sound feels comfortable  

## Available Scripts

In the project directory, you can run:

- `npm run dev` – starts the development server  
- `npm run build` – builds the production bundle  
- `npm run start` – runs the production server after a build  
- `npm run lint` – runs ESLint on the project files  

## Project Structure

- `app/` – Next.js App Router entry, global layout, and main page  
- `components/` – React components, including the `ObjectDetection` webcam view  
- `utils/` – helper modules such as prediction rendering and alert handling  
- `public/` – static assets such as `alert.wav` and icons  

## Notes

- The alert volume slider only affects the detection alert sound  
- Detection threshold and interval are configured in the `ObjectDetection` component and can be tuned in code if needed  
