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
        <div ref={ref} className="relative h-[70vh] overflow-hidden rounded-2xl group cursor-pointer">
          <motion.div
            style={{ y }}
            className="absolute inset-0 z-0"
          >
            {/* Using a clear white bg portrait portrait image with a strong focus */}
            <img
              src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=2670"
              alt="Human interaction focus"
              className="w-full h-[120%] object-cover object-top transition-all duration-700"
            />
            {/* Darker overlay on hover */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-colors duration-700" />
            
            {/* Base subtle gradient so text is always slightly readable at bottom if needed */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </motion.div>

          <div className="relative z-10 h-full w-full flex flex-col justify-end p-8 md:p-12">
            {/* The orange pulse dot is positioned centrally when inactive */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse opacity-100 group-hover:opacity-0 transition-opacity duration-500" />
            
            <div className="opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 flex flex-col items-start text-left max-w-2xl">
              <h3 className="text-3xl md:text-5xl font-heading text-white font-medium mb-4">Focus on the Human</h3>
              <p className="text-white/80 text-lg md:text-xl font-body max-w-lg">
                Our technology is designed to amplify human capability, not replace it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
