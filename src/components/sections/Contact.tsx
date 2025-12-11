'use client'
import { Mail, Linkedin, Instagram } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";

export default function ContactPages() {
  return (
    <section id="contact" className="py-20 pb-40 scroll-mt-20">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-white">Let's Connect</h2>
        <p className="text-gray-400 mb-8">
          Interested in working together or have a question? Feel free to reach out.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Email */}
          <a href="mailto:muhamad0azka@gmail.com" className="group">
            <GlassCard className="flex flex-col items-center justify-center py-8 hover:border-purple-500/50 cursor-pointer transition-all">
              <Mail className="mb-3 text-gray-300 group-hover:text-purple-400 transition-colors" />
              <span className="text-sm text-white">Email Me</span>
              <span className="text-[10px] text-gray-500 mt-1">muhamad0azka@gmail.com</span>
            </GlassCard>
          </a>
          
          {/* LinkedIn - Placeholder */}
          <div className="group cursor-not-allowed opacity-70">
            <GlassCard className="flex flex-col items-center justify-center py-8 border-white/5 bg-white/5">
              <Linkedin className="mb-3 text-gray-500" />
              <span className="text-sm text-gray-400">LinkedIn</span>
              <span className="text-[10px] text-gray-600 mt-1">Coming Soon</span>
            </GlassCard>
          </div>

          {/* Instagram */}
          <a href="https://www.instagram.com/m_azka_w/" target="_blank" rel="noreferrer" className="group">
            <GlassCard className="flex flex-col items-center justify-center py-8 hover:border-pink-500/50 cursor-pointer transition-all">
              <Instagram className="mb-3 text-gray-300 group-hover:text-pink-400 transition-colors" />
              <span className="text-sm text-white">Instagram</span>
              <span className="text-[10px] text-gray-500 mt-1">@m_azka_w</span>
            </GlassCard>
          </a>
        </div>
      </div>
    </section>
  );
}