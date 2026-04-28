import { motion } from "motion/react";
import { useState, useEffect } from "react";

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const letters = ["A", "E", "U", "O", "I"];
  const [isAmp, setIsAmp] = useState(false);
  
  useEffect(() => {
    // Start the '&' transformation sooner
    const ampTimer = setTimeout(() => setIsAmp(true), 1200);
    // Extend the splash screen so the slow 2.4s beep has time to cycle!
    const endTimer = setTimeout(() => onComplete(), 3600);
    return () => {
      clearTimeout(ampTimer);
      clearTimeout(endTimer);
    };
  }, [onComplete]);

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-white"
    >
      <div className="flex gap-4 md:gap-8">
        {letters.map((letter, i) => {
          const isO = letter === "O";
          const stay = letter === "U" || letter === "I" || isO;

          return (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: stay ? 1 : [0, 1, 1, 0],
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
              {isO ? (
                <motion.span
                  animate={isAmp ? { color: ["#FF5C00", "#111111", "#FF5C00"] } : {}}
                  transition={{ duration: 2.4, repeat: Infinity, ease: "linear" }}
                  className={isAmp ? "inline-block" : ""}
                >
                  {isAmp ? "&" : "O"}
                </motion.span>
              ) : (
                letter
              )}
            </motion.span>
          );
        })}
      </div>
    </motion.div>
  );
}
