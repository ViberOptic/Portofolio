'use client'
import { Mail, Linkedin, Twitter } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";

export default function ContactPages() {
  return (
    <section id="contact" className="py-20 pb-40 scroll-mt-20">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-white">Let's Connect</h2>
        <p className="text-gray-400 mb-8">
          Interested in working together? Feel free to reach out directly.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <a href="mailto:email@anda.com" className="group">
            <GlassCard className="flex flex-col items-center justify-center py-8 hover:border-purple-500/50 cursor-pointer">
              <Mail className="mb-3 text-gray-300 group-hover:text-purple-400 transition-colors" />
              <span className="text-sm text-white">Email Me</span>
            </GlassCard>
          </a>
          
          <a href="https://linkedin.com/in/username" target="_blank" rel="noreferrer" className="group">
            <GlassCard className="flex flex-col items-center justify-center py-8 hover:border-blue-500/50 cursor-pointer">
              <Linkedin className="mb-3 text-gray-300 group-hover:text-blue-400 transition-colors" />
              <span className="text-sm text-white">LinkedIn</span>
            </GlassCard>
          </a>

          <a href="https://twitter.com/username" target="_blank" rel="noreferrer" className="group">
            <GlassCard className="flex flex-col items-center justify-center py-8 hover:border-sky-500/50 cursor-pointer">
              <Twitter className="mb-3 text-gray-300 group-hover:text-sky-400 transition-colors" />
              <span className="text-sm text-white">Twitter</span>
            </GlassCard>
          </a>
        </div>
      </div>
    </section>
  );
}