'use client'
import { motion } from "framer-motion";
import { Home, User, Code, Mail } from "lucide-react";
import Link from "next/link";

const navItems = [
  { name: "Home", icon: Home, href: "/" },
  { name: "Projects", icon: Code, href: "#projects" },
  { name: "About", icon: User, href: "#about" },
  { name: "Contact", icon: Mail, href: "#contact" },
];

export default function DesktopNavbar() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden md:block"
    >
      <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/50 backdrop-blur-xl px-6 py-3 shadow-2xl">
        {navItems.map((item) => (
          <Link 
            key={item.name} 
            href={item.href}
            className="flex items-center gap-2 rounded-full px-4 py-2 text-sm text-gray-300 transition-colors hover:bg-white/10 hover:text-white"
          >
            <item.icon size={16} />
            {item.name}
          </Link>
        ))}
      </div>
    </motion.nav>
  );
}