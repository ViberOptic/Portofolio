'use client'

import { useState } from "react";
import Navbar from "@/components/navbar";
import SplashScreen from "@/components/shared/SplashScreen";
import AnimatedBackground from "@/components/ui/AnimatedBackground"; // Import komponen baru

// Import Sections
import HomePage from "@/components/sections/Home";
import ProjectsPage from "@/components/sections/Projects";
import AboutPages from "@/components/sections/About";
import ContactPages from "@/components/sections/Contact";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {showSplash ? (
        <SplashScreen onFinish={() => setShowSplash(false)} />
      ) : (
        // Hapus background color statis di sini karena sudah ada di globals.css dan AnimatedBackground
        <main className="min-h-screen text-white selection:bg-purple-500/30 relative">
          
          {/* Background Dinamis */}
          <AnimatedBackground />
          
          {/* Konten Utama */}
          <div className="relative z-10">
            <Navbar />
            <div className="container mx-auto px-4 md:px-8">
              <HomePage />
              <AboutPages />
              <ProjectsPage />
              <ContactPages />
            </div>
          </div>
          
        </main>
      )}
    </>
  );
}