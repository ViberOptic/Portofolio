'use client'
import { motion } from "framer-motion";
import { Cpu, Database, Server, Zap } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";

export default function AboutPages() {
  // Variabel animasi untuk stagger effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="about" className="py-20 scroll-mt-20 relative">
      {/* Background decoration (optional) */}
      <div className="absolute right-0 top-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-8 text-white">
          About <span className="bg-clip-text text-transparent bg-linear-to-r from-purple-400 to-pink-400">Me</span>
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Tech Stack Card */}
          <motion.div variants={itemVariants} className="md:col-span-1 h-full">
            <GlassCard className="h-full flex flex-col justify-between hover:border-purple-500/30 transition-colors">
              <div>
                <div className="p-3 bg-purple-500/20 rounded-lg w-fit mb-4">
                  <Cpu className="text-purple-400" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">Tech Stack</h3>
                <p className="text-gray-400 text-sm">Modern tools I use to build scalable applications.</p>
              </div>
              <div className="flex flex-wrap gap-2 mt-6">
                {['Next.js', 'React', 'TypeScript', 'Tailwind', 'Python', 'Supabase', 'Docker', 'YOLO'].map(tag => (
                  <span 
                    key={tag} 
                    className="px-3 py-1 bg-white/5 rounded-full text-xs border border-white/10 text-gray-300 hover:bg-purple-500/20 hover:border-purple-500/30 hover:text-white transition-all cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          {/* Backend & AI Card */}
          <motion.div variants={itemVariants} className="md:col-span-1 h-full">
            <GlassCard className="h-full bg-linear-to-br from-blue-900/10 to-black/40 border-blue-500/20 hover:border-blue-500/40 transition-colors flex flex-col justify-between">
                <div>
                  <div className="p-3 bg-blue-500/20 rounded-lg w-fit mb-4">
                    <Database className="text-blue-400" size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">Backend & AI</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Architecting robust systems with Supabase and integrating LLM for intelligent solutions.
                  </p>
                </div>
                
                <div className="mt-4">
                  <div className="flex justify-between text-xs text-gray-400 mb-2">
                    <span>System Efficiency</span>
                    <span>98%</span>
                  </div>
                  <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "98%" }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="h-full bg-linear-to-r from-blue-600 to-cyan-400 rounded-full" 
                    />
                  </div>
                  <div className="flex items-center gap-2 mt-3 text-xs text-blue-400">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                    </span>
                    Systems Operational
                  </div>
                </div>
            </GlassCard>
          </motion.div>

          {/* Stats Card */}
          <motion.div variants={itemVariants} className="md:col-span-1 h-full">
            <GlassCard className="h-full flex flex-col justify-center items-center text-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-linear-to-tr from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="grid grid-cols-1 gap-8 w-full relative z-10">
                  <div className="p-4 rounded-xl hover:bg-white/5 transition-colors">
                    <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-linear-to-b from-white to-gray-500">
                      2+
                    </h2>
                    <p className="text-sm text-purple-400 font-medium uppercase tracking-wider mt-2">Years Experience</p>
                  </div>
                  <div className="w-full h-px bg-white/10" />
                  <div className="p-4 rounded-xl hover:bg-white/5 transition-colors">
                    <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-linear-to-b from-white to-gray-500">
                      20+
                    </h2>
                    <p className="text-sm text-blue-400 font-medium uppercase tracking-wider mt-2">Projects Completed</p>
                  </div>
                </div>
            </GlassCard>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}