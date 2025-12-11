'use client'

import { useState } from "react";
import Navbar from "@/components/Navbar";
import SplashScreen from "@/components/shared/SplashScreen";

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
        <main className="min-h-screen bg-[#050505] text-white selection:bg-purple-500/30">
          <Navbar />
          
          <div className="container mx-auto px-4 md:px-8">
            <HomePage />
            <AboutPages />
            <ProjectsPage />
            <ContactPages />
          </div>
        </main>
      )}
    </>
  );
}