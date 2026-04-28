import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const letters = ["A", "E", "U", "O", "I"];
  
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2800);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-white"
    >
      <div className="flex gap-4 md:gap-8">
        {letters.map((letter, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: (letter === "U" || letter === "I") ? 1 : [0, 1, 1, 0],
              y: 0 
            }}
            transition={{ 
              duration: 1.5,
              delay: i * 0.1,
              times: [0, 0.2, 0.8, 1],
              ease: "circOut"
            }}
            className="text-[clamp(64px,15vw,180px)] font-heading font-bold text-brand-heading"
          >
            {letter}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}
