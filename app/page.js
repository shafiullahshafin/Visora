// renders main page with human detector section
import ObjectDetection from "@/components/object-detection";
import { ShieldCheck } from "lucide-react";

// shows title and object detection component
export default function Home() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-4 overflow-hidden">
      <div className="w-full h-full flex items-center justify-center relative">
        <ObjectDetection />
      </div>
    </div>
  );
}
