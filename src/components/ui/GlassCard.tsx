import { cn } from "@/lib/utils"; // Pastikan buat utils clsx/tailwind-merge jika perlu, atau hapus cn
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export default function GlassCard({ children, className = "" }: GlassCardProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:shadow-xl hover:shadow-purple-500/10 ${className}`}
    >
      {children}
    </div>
  );
}