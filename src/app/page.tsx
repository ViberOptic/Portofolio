'use client'
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import Navbar from "@/components/Navbar";
import GlassCard from "@/components/ui/GlassCard";
import SplashScreen from "@/components/shared/SplashScreen";
import { motion } from "framer-motion";
import { Github, ExternalLink, Cpu, Database } from "lucide-react";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const { data, error } = await supabase.from('projects').select('*');
      if (data) setProjects(data);
      if (error) console.error(error);
    };
    fetchProjects();
  }, []);

  return (
    <>
      {showSplash ? (
        <SplashScreen onFinish={() => setShowSplash(false)} />
      ) : (
        <main className="min-h-screen bg-[#050505] text-white selection:bg-purple-500/30">
          <Navbar />
          
          <div className="container mx-auto px-4 pt-24 pb-24 md:pt-32">
            
            {/* Hero Section */}
            <section className="mb-20">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-3xl"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs font-medium mb-4 border border-purple-500/20">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                  </span>
                  Available for Hire
                </div>
                {/* UPDATE: bg-linear-to-b */}
                <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-linear-to-b from-white to-white/60 mb-6">
                  Building the Future with <br /> 
                  <span className="text-purple-500">Code & AI</span>
                </h1>
                <p className="text-lg text-gray-400 max-w-xl leading-relaxed">
                  Hi, I'm a Fullstack Developer & AI Engineer. I craft high-performance web applications and intelligent systems using modern technologies.
                </p>
              </motion.div>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6" id="projects">
              
              {/* Tech Stack Card */}
              <GlassCard className="md:col-span-1 min-h-[300px] flex flex-col justify-between">
                <div>
                  <Cpu className="text-purple-400 mb-4" size={32} />
                  <h3 className="text-xl font-bold mb-2">Tech Stack</h3>
                  <p className="text-gray-400 text-sm">Tools I use to build magic.</p>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {['Next.js', 'React', 'TypeScript', 'Tailwind', 'Python', 'PyTorch'].map(tag => (
                    <span key={tag} className="px-3 py-1 bg-white/5 rounded-md text-xs border border-white/5">{tag}</span>
                  ))}
                </div>
              </GlassCard>

              {/* Featured Project */}
              <GlassCard className="md:col-span-2 relative group min-h-[300px]">
                {/* UPDATE: bg-linear-to-br */}
                <div className="absolute inset-0 bg-linear-to-br from-purple-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <h3 className="text-2xl font-bold mb-4 relative z-10">Featured Projects</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
                  {projects.map((project) => (
                    <div key={project.id} className="bg-black/40 p-4 rounded-xl border border-white/5 hover:border-purple-500/30 transition-colors">
                      <div className="h-32 w-full relative mb-3 rounded-lg overflow-hidden">
                        <div className="absolute inset-0 bg-gray-800" /> 
                      </div>
                      <h4 className="font-semibold text-lg">{project.title}</h4>
                      <p className="text-xs text-gray-400 line-clamp-2 mt-1">{project.description}</p>
                      <div className="flex gap-2 mt-3">
                         <a href={project.repo_url} target="_blank" className="p-2 bg-white/5 rounded-full hover:bg-white/20"><Github size={14}/></a>
                         <a href={project.demo_url} target="_blank" className="p-2 bg-white/5 rounded-full hover:bg-white/20"><ExternalLink size={14}/></a>
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>

              {/* Database & Backend Card */}
              {/* UPDATE: bg-linear-to-br */}
              <GlassCard className="md:col-span-1 bg-linear-to-br from-blue-900/20 to-black border-blue-500/20">
                 <Database className="text-blue-400 mb-4" size={32} />
                 <h3 className="text-xl font-bold mb-2">Backend & AI</h3>
                 <p className="text-gray-400 text-sm mb-4">Scalable architecture with Supabase & LLM Integration.</p>
                 <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full w-[85%] bg-blue-500" />
                 </div>
                 <p className="text-right text-xs text-blue-400 mt-1">System Status: Online</p>
              </GlassCard>

               {/* Stats / About Card */}
              <GlassCard className="md:col-span-2 flex items-center justify-between px-10">
                 <div className="text-center">
                    <h2 className="text-4xl font-bold text-white">3+</h2>
                    <p className="text-sm text-gray-400">Years Exp</p>
                 </div>
                 {/* UPDATE: w-px menggantikan w-[1px] */}
                 <div className="h-12 w-px bg-white/10" />
                 <div className="text-center">
                    <h2 className="text-4xl font-bold text-white">20+</h2>
                    <p className="text-sm text-gray-400">Projects</p>
                 </div>
                 {/* UPDATE: w-px menggantikan w-[1px] */}
                 <div className="h-12 w-px bg-white/10" />
                 <div className="text-center">
                    <h2 className="text-4xl font-bold text-white">100%</h2>
                    <p className="text-sm text-gray-400">Dedication</p>
                 </div>
              </GlassCard>

            </div>
          </div>
        </main>
      )}
    </>
  );
}