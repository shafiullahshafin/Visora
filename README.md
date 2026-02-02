# Visora

Visora is a real-time AI-powered human detection application built with Next.js and TensorFlow.js. It uses the browser's webcam to detect people in the video feed and provides immediate visual and audio alerts, all running entirely client-side for privacy and speed.

![Visora Preview](./public/preview.png)

## Features

- **Real-time Detection**: Uses the COCO-SSD model to detect objects in the video stream with high accuracy.
- **Human-Specific Alerts**: specifically highlights detected persons with distinct red bounding boxes.
- **Audio Alarm**: Triggers an audible alert sound immediately when a person is detected in the frame.
- **Privacy First**: All processing happens locally in your browser; no video data is sent to any server.
- **Responsive Design**: Fully responsive UI featuring glassmorphism effects, optimized for both desktop and mobile devices.
- **Mobile Compatibility**: optimized for mobile browsers with specific handling for audio autoplay restrictions.

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Library**: [React 19](https://react.dev/)
- **AI/ML**: [TensorFlow.js](https://www.tensorflow.org/js) with [COCO-SSD](https://github.com/tensorflow/tfjs-models/tree/master/coco-ssd)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)

## Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/yourusername/visora.git
    cd visora
    ```

2.  Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

3.  Run the development server:
    ```bash
    npm run dev
    # or
    yarn dev
    ```

4.  Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Usage

1.  Allow the browser to access your webcam when prompted.
2.  Click the **"Start Detection"** button. This initializes the AI model and prepares the audio engine (required for mobile browsers).
3.  Once the model loads, the webcam feed will appear.
4.  If a person enters the frame, a red bounding box will appear around them, and an alert sound will play.
5.  Other objects (if detected) will be shown with cyan bounding boxes.

## Project Structure

- `app/`: Next.js App Router pages and layouts.
- `components/`: Reusable React components (ObjectDetection, Navbar, Footer).
- `utils/`: Helper functions for drawing predictions and managing audio context.
- `public/`: Static assets like the alert sound file.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
