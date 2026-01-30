// renders footer with copyright and credits
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full border-t border-white/10 bg-black/50 py-8 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Visora. All rights reserved.
        </p>
        <div className="flex items-center gap-1 text-sm text-gray-400">
          <span>Built with</span>
          <Heart className="h-4 w-4 fill-red-500 text-red-500" />
          <span>using Next.js & TensorFlow.js</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
