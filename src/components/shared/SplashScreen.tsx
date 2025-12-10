'use client'
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function SplashScreen({ onFinish }: { onFinish: () => void }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onFinish, 500);
    }, 2000);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          // UPDATE: z-100 (Tailwind v4 support number values natively)
          className="fixed inset-0 z-100 flex items-center justify-center bg-black text-white"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            {/* UPDATE: bg-linear-to-r */}
            <h1 className="text-4xl font-bold tracking-tighter bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-purple-500">
              PORTOFOLIO
            </h1>
            <p className="mt-2 text-sm text-gray-400 tracking-widest">FULLSTACK & AI</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}