// renders footer with copyright and credits
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full border-t border-white/10 bg-black/50 py-4 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-4 px-6 md:flex-row">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Visora. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
