import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function ImageBreak() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section className="py-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="relative h-[70vh] overflow-hidden rounded-2xl">
          <motion.div
            style={{ y }}
            className="absolute inset-0 z-0"
          >
            <img
              src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=2670"
              alt="Technical Workspace"
              className="w-full h-[120%] object-cover grayscale-[20%] brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/10" />
          </motion.div>

          <div className="relative z-10 h-full flex items-center justify-center pointer-events-none">
            <div className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
