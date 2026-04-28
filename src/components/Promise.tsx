import { motion, useInView } from "motion/react";
import { useRef } from "react";

export default function Promise() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.02,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    },
  };

  const text = "We build AI that never loses the human touch. Every system we design carries one non-negotiable constraint: it must feel human. Not human-like. Not almost-human. Human. We call this Human Hospitality — the principle that no matter how autonomous our agents become, they will always carry the warmth, care, and intentionality of a real person on the other side. AI should make people feel seen, not processed.";
  const words = text.split(" ");

  return (
    <section ref={ref} className="bg-[#F9F9F9] py-32 px-6 md:px-12 flex items-center min-h-[60vh]">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-[clamp(24px,3.5vw,46px)] leading-[1.35] font-heading text-brand-heading tracking-[-0.5px] md:tracking-[-1px] font-medium"
        >
          {words.map((word, i) => {
            // Emphasize specific words by changing their color to brand-orange
            const isEmphasized = word === "Human" || word === "Hospitality" || word === "Hospitality" || word.includes("Human.");
            return (
              <motion.span 
                key={i} 
                variants={wordVariants} 
                className={`inline-block mr-[0.25em] mb-[0.1em] ${isEmphasized ? 'text-brand-orange' : ''}`}
              >
                {word}
              </motion.span>
            );
          })}
        </motion.h2>
      </div>
    </section>
  );
}
