'use client'
import { motion } from "framer-motion";
import Image from "next/image";

export default function HomePage() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full max-w-6xl">
        
        {/* Kolom Teks */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 md:order-1 text-center md:text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs font-medium mb-4 border border-purple-500/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
            Available for Hire
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-linear-to-b from-white to-white/60 mb-6 leading-tight">
            Building the Future with <br /> 
            <span className="text-purple-500">Code & AI</span>
          </h1>
          
          <p className="text-lg text-gray-400 max-w-xl leading-relaxed mx-auto md:mx-0">
            Hi, I'm a Fullstack Developer & AI Engineer. I craft high-performance web applications and intelligent systems using modern technologies.
          </p>

          <div className="mt-8 flex gap-4 justify-center md:justify-start">
            <a href="#projects" className="px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-colors">
              View Work
            </a>
            <a href="#contact" className="px-6 py-3 rounded-full border border-white/20 text-white font-semibold hover:bg-white/10 transition-colors">
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* Kolom Foto Profil */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-1 md:order-2 flex justify-center md:justify-end relative"
        >
          {/* Efek Glow di belakang foto */}
          <div className="absolute inset-0 bg-purple-500/20 blur-[100px] rounded-full w-64 h-64 mx-auto md:mr-0 z-0" />
          
          <div className="relative w-64 h-64 md:w-80 md:h-80 z-10 rounded-full border-2 border-purple-500/30 p-2 bg-white/5 backdrop-blur-sm">
            <div className="relative w-full h-full rounded-full overflow-hidden">
              <Image
                src="/profile.png"
                alt="Profile Picture"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}