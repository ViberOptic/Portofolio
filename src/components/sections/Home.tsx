'use client'
import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, GraduationCap, ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full max-w-6xl relative z-10">
        
        {/* Kolom Teks */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 mb-6 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Open to Work
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
            Building <br />
            {/* PERBAIKAN: bg-gradient-to-r -> bg-linear-to-r */}
            <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient-x">
              Digital Reality
            </span>
          </h1>
          
          <p className="text-lg text-gray-400 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
            I am <b>Muhammad Azka Wijasena</b>. A Fullstack Developer & AI Engineer focused on creating scalable applications with seamless user experiences.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <GraduationCap className="text-purple-500" size={18} />
              <span>Computer Engineering, UNDIP</span>
            </div>
            <div className="hidden md:block w-px h-4 bg-white/10" />
            <div className="flex items-center gap-2">
              <MapPin className="text-blue-500" size={18} />
              <span>Semarang, ID</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a 
              href="#projects" 
              className="px-8 py-3.5 rounded-full bg-white text-black font-bold hover:bg-gray-200 transition-all flex items-center justify-center gap-2 group"
            >
              Explore Work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3.5 rounded-full border border-white/10 bg-white/5 text-white font-medium hover:bg-white/10 hover:border-white/20 transition-all backdrop-blur-sm"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* Kolom Visual / Foto */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center lg:justify-end relative"
        >
          {/* Decorative Circles */}
          {/* PERBAIKAN: bg-gradient-to-tr -> bg-linear-to-tr */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-linear-to-tr from-purple-500/20 to-blue-500/20 rounded-full blur-[100px] animate-pulse" />
          
          <div className="relative w-72 h-72 md:w-96 md:h-96 z-10">
             {/* Gradient Border Ring */}
             {/* PERBAIKAN: bg-gradient-to-tr -> bg-linear-to-tr, p-[2px] -> p-0.5 */}
            <div className="absolute inset-0 rounded-full bg-linear-to-tr from-blue-500 via-purple-500 to-pink-500 p-0.5">
               <div className="w-full h-full rounded-full bg-[#0a0a0a] flex items-center justify-center overflow-hidden">
                  <div className="relative w-full h-full">
                    <Image
                        src="/profile.png"
                        alt="Muhammad Azka Wijasena"
                        fill
                        className="object-cover scale-105 hover:scale-110 transition-transform duration-700"
                        priority
                    />
                  </div>
               </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}