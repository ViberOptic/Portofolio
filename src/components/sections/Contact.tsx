'use client'
import { motion } from "framer-motion";
import { Mail, Linkedin, Instagram, ArrowUpRight, Send } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import { cn } from "@/lib/utils";

export default function ContactPages() {
  
  const contactLinks = [
    {
      id: "email",
      label: "Email",
      value: "muhamad0azka@gmail.com",
      icon: Mail,
      href: "mailto:muhamad0azka@gmail.com",
      iconColor: "text-purple-400",
      groupColor: "group-hover:border-purple-500/50 group-hover:bg-purple-500/10",
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      value: "Professional Profile",
      icon: Linkedin,
      href: "#",
      iconColor: "text-blue-400",
      groupColor: "group-hover:border-blue-500/50 group-hover:bg-blue-500/10",
      disabled: true
    },
    {
      id: "instagram",
      label: "Instagram",
      value: "@m_azka_w",
      icon: Instagram,
      href: "https://www.instagram.com/m_azka_w/",
      iconColor: "text-pink-400",
      groupColor: "group-hover:border-pink-500/50 group-hover:bg-pink-500/10",
    }
  ];

  return (
    <section id="contact" className="py-24 scroll-mt-20">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto px-4"
      >
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 mb-6 backdrop-blur-sm">
            <Send size={14} className="text-purple-400" />
            <span className="text-xs font-medium tracking-wide uppercase">Get In Touch</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Let's <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-400 via-purple-500 to-pink-500">Connect</span>
          </h2>
          
          <p className="text-gray-400 max-w-xl mx-auto text-lg leading-relaxed">
            Have a project in mind or just want to say hi? <br/>
            My inbox is always open.
          </p>
        </div>
        
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactLinks.map((item) => (
            <div key={item.id} className={cn("h-full", item.disabled && "opacity-60 cursor-not-allowed")}>
              <a 
                href={item.disabled ? undefined : item.href}
                target={item.id !== 'email' && !item.disabled ? "_blank" : undefined}
                rel="noreferrer"
                className={cn("block h-full group relative", item.disabled && "pointer-events-none")}
              >
                <GlassCard className={cn(
                  "h-full flex flex-col items-center justify-center py-12 px-6 transition-all duration-300 relative",
                  !item.disabled && item.groupColor
                )}>
                  
                  {/* Absolute Arrow Icon */}
                  {!item.disabled && (
                    <div className="absolute top-5 right-5 text-gray-600 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                      <ArrowUpRight size={20} />
                    </div>
                  )}

                  {/* Icon Container */}
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white/5 border border-white/10 mb-6 transition-transform duration-500 group-hover:scale-110">
                    <item.icon className={cn("w-7 h-7 transition-colors", item.iconColor)} />
                  </div>

                  {/* Text Content */}
                  <div className="text-center w-full relative z-10">
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-white transition-colors">
                      {item.label}
                    </h3>
                    
                    {/* PERBAIKAN: Mengganti break-words menjadi break-all */}
                    <p className="text-sm text-gray-400 font-medium font-mono group-hover:text-gray-300 transition-colors break-all w-full px-2">
                      {item.value}
                    </p>

                    {item.disabled && (
                      <span className="inline-block mt-3 px-3 py-1 rounded text-[10px] bg-white/10 text-gray-500 uppercase tracking-widest font-semibold border border-white/5">
                        Coming Soon
                      </span>
                    )}
                  </div>

                </GlassCard>
              </a>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}