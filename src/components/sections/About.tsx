'use client'
import { Cpu, Database } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";

export default function AboutPages() {
  return (
    <section id="about" className="py-20 scroll-mt-20">
      <h2 className="text-3xl font-bold mb-8 text-white">About Me</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Tech Stack Card */}
        <GlassCard className="md:col-span-1 min-h-[300px] flex flex-col justify-between">
          <div>
            <Cpu className="text-purple-400 mb-4" size={32} />
            <h3 className="text-xl font-bold mb-2 text-white">Tech Stack</h3>
            <p className="text-gray-400 text-sm">Tools I use to build magic.</p>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {['Next.js', 'React.js', 'TypeScript', 'JavaScript', 'Tailwind', 'Python', 'Supabase', 'Docker', 'YOLO'].map(tag => (
              <span key={tag} className="px-3 py-1 bg-white/5 rounded-md text-xs border border-white/5 text-gray-300">
                {tag}
              </span>
            ))}
          </div>
        </GlassCard>

        {/* Database & Backend Card */}
        <GlassCard className="md:col-span-1 bg-linear-to-br from-blue-900/20 to-black border-blue-500/20">
            <Database className="text-blue-400 mb-4" size={32} />
            <h3 className="text-xl font-bold mb-2 text-white">Backend & AI</h3>
            <p className="text-gray-400 text-sm mb-4">Scalable architecture with Supabase & LLM Integration.</p>
            <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
              <div className="h-full w-[85%] bg-blue-500" />
            </div>
            <p className="text-right text-xs text-blue-400 mt-1">System Status: Online</p>
        </GlassCard>

        {/* Stats Card */}
        <GlassCard className="md:col-span-1 flex flex-col justify-center items-center text-center">
            <div className="grid grid-cols-2 gap-8 w-full">
              <div>
                <h2 className="text-4xl font-bold text-white">2+</h2>
                <p className="text-xs text-gray-400 uppercase tracking-wider mt-1">Years Exp</p>
              </div>
              <div>
                <h2 className="text-4xl font-bold text-white">20+</h2>
                <p className="text-xs text-gray-400 uppercase tracking-wider mt-1">Projects</p>
              </div>
            </div>
        </GlassCard>
      </div>
    </section>
  );
}