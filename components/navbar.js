// renders navigation bar with brand and links
import Link from "next/link";
import { Github } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/50 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="text-xl font-bold tracking-tight text-white hover:opacity-80 transition-opacity">
          Visora
        </Link>
        <div className="flex items-center gap-6">
          <Link
            href="https://github.com"
            target="_blank"
            className="text-gray-300 hover:text-white transition-colors"
          >
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
