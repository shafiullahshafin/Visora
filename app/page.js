// renders main page with human detector section
import ObjectDetection from "@/components/object-detection";

// shows title and object detection component
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <h1 className="gradient-title font-extrabold text-3xl md:text-6xl lg:text-8xl tracking-tighter md:px-6 text-center">
        Human Detector Application
      </h1>
      <ObjectDetection />
    </main>
  );
}
