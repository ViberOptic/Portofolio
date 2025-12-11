'use client'
import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, GraduationCap, ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-12 md:pt-20 md:pb-0 overflow-hidden">
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center w-full max-w-6xl relative z-10">
        
        {/* Kolom Teks */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center lg:text-left order-2 lg:order-1"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs md:text-sm text-gray-300 mb-6 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Open to Work
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
            Building <br />
            <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient-x">
              Digital Reality
            </span>
          </h1>
          
          <p className="text-base md:text-lg text-gray-400 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed px-2 lg:px-0">
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

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start px-4 lg:px-0">
            <a 
              href="#projects" 
              className="px-8 py-3.5 rounded-full bg-white text-black font-bold hover:bg-gray-200 transition-all flex items-center justify-center gap-2 group w-full sm:w-auto"
            >
              Explore Work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3.5 rounded-full border border-white/10 bg-white/5 text-white font-medium hover:bg-white/10 hover:border-white/20 transition-all backdrop-blur-sm w-full sm:w-auto"
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
          className="flex justify-center lg:justify-end relative order-1 lg:order-2"
        >
          {/* --- PERBAIKAN CAHAYA (Decorative Circles) --- */}
          {/* Mobile: w-380px, blur-90px
             Desktop: w-600px (diperbesar dari 500px), blur-120px (diperbesar dari 100px)
             Tujuannya agar gradasi cahaya habis sebelum menyentuh tepi kotak div.
          */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] md:w-[600px] md:h-[600px] bg-linear-to-tr from-purple-600/30 to-blue-600/30 rounded-full blur-[90px] md:blur-[120px] animate-pulse pointer-events-none -z-10" />
          {/* ------------------------------------------- */}
          
          <div className="relative w-64 h-64 md:w-96 md:h-96 z-10">
             {/* Gradient Border Ring */}
            <div className="absolute inset-0 rounded-full bg-linear-to-tr from-blue-500 via-purple-500 to-pink-500 p-0.5">
               <div className="w-full h-full rounded-full bg-[#0a0a0a] flex items-center justify-center overflow-hidden">
                  <div className="relative w-full h-full">
                    <Image
                        src="/profile.png"
                        alt="Muhammad Azka Wijasena"
                        fill
                        className="object-cover scale-105 hover:scale-110 transition-transform duration-700"
                        priority
                        sizes="(max-width: 768px) 256px, 384px"
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