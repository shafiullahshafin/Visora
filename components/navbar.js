// renders navigation bar with brand and links
import Link from "next/link";
import { ShieldCheck } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/50 backdrop-blur-md">
      <div className="flex h-16 w-full items-center justify-between px-6 lg:px-8">
        <Link href="/" className="text-xl font-bold tracking-tight text-white hover:opacity-80 transition-opacity">
          Visora
        </Link>
        <div className="flex items-center gap-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-white/80">
            <ShieldCheck className="w-4 h-4" />
            <span>AI Powered Security</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
