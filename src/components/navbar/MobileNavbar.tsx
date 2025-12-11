'use client'
import { Home, User, Code, Mail } from "lucide-react";
import Link from "next/link";

export default function MobileNavbar() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 block md:hidden border-t border-white/10 bg-black/80 backdrop-blur-xl pb-safe">
      <div className="flex justify-around items-center p-4">
        <Link href="/" className="flex flex-col items-center gap-1 text-gray-400 hover:text-white">
          <Home size={20} />
          <span className="text-[10px]">Home</span>
        </Link>
        <Link href="#projects" className="flex flex-col items-center gap-1 text-gray-400 hover:text-white">
          <Code size={20} />
          <span className="text-[10px]">Projects</span>
        </Link>
        <Link href="#about" className="flex flex-col items-center gap-1 text-gray-400 hover:text-white">
          <User size={20} />
          <span className="text-[10px]">About</span>
        </Link>
        <Link href="#contact" className="flex flex-col items-center gap-1 text-gray-400 hover:text-white">
          <Mail size={20} />
          <span className="text-[10px]">Contact</span>
        </Link>
      </div>
    </nav>
  );
}