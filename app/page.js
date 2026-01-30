// renders main page with human detector section
import ObjectDetection from "@/components/object-detection";
import { ShieldCheck } from "lucide-react";

// shows title and object detection component
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-start pt-4 min-h-[calc(100vh-8rem)] px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-5xl mt-4 mx-auto">
        <ObjectDetection />
      </div>
    </div>
  );
}
