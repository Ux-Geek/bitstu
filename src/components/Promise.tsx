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
        staggerChildren: 0.1,
      },
    },
  };

  const lineVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    },
  };

  return (
    <section ref={ref} className="bg-[#F9F9F9] py-32 px-6 md:px-12">
      <div className="max-w-4xl mx-auto space-y-16">
        <motion.h2 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-brand-heading font-heading leading-tight"
        >
          {["We build AI that", "never loses the", "human touch."].map((line, i) => (
            <motion.span key={i} variants={lineVariants} className="block">
              {line}
            </motion.span>
          ))}
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="space-y-8 max-w-2xl"
        >
          <p className="text-xl font-medium text-brand-heading leading-relaxed">
            Every system we design carries one non-negotiable constraint: it must feel human. Not human-like. Not almost-human. Human.
          </p>
          <div className="space-y-6 text-brand-body leading-relaxed">
            <p>
              We call this <span className="text-brand-orange font-semibold">Human Hospitality</span> — the principle that no matter how autonomous our agents become, they still carry warmth, care, and intention.
            </p>
            <p>
              AI should make people feel seen, not processed.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
