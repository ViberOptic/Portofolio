'use client'
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl text-center md:text-left"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs font-medium mb-4 border border-purple-500/20">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
          </span>
          Available for Hire
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-linear-to-b from-white to-white/60 mb-6">
          Building the Future with <br /> 
          <span className="text-purple-500">Code & AI</span>
        </h1>
        
        <p className="text-lg text-gray-400 max-w-xl leading-relaxed mx-auto md:mx-0">
          Hi, I'm a Fullstack Developer & AI Engineer. I craft high-performance web applications and intelligent systems using modern technologies.
        </p>
      </motion.div>
    </section>
  );
}