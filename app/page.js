// renders main page with human detector section
import ObjectDetection from "@/components/object-detection";
import { ShieldCheck } from "lucide-react";

// shows title and object detection component
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center max-w-3xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-white/80 mb-4">
          <ShieldCheck className="w-4 h-4" />
          <span>AI Powered Security</span>
        </div>
        
        <h1 className="gradient-title font-extrabold text-5xl md:text-7xl lg:text-8xl tracking-tighter text-center">
          Visora AI
        </h1>
        
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Advanced real-time person detection system. Secure your environment with intelligent visual and audio alerts powered by TensorFlow.js.
        </p>
      </div>

      <div className="w-full max-w-5xl mt-12 mx-auto">
        <ObjectDetection />
      </div>
    </div>
  );
}
