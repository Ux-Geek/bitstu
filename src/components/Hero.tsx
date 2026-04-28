import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 max-w-7xl mx-auto py-20">
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 className="flex flex-col">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-brand-heading/60"
            >
              It’s no longer AI.
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="mt-2"
            >
              It’s <span className="text-brand-heading">U </span>
              <motion.span 
                initial={{ color: "#FF5C00" }}
                animate={{ color: "#111111" }}
                transition={{ duration: 1.5, delay: 2.5, ease: "easeInOut" }}
                className="inline-block font-bold"
              >
                &
              </motion.span>
              <span className="text-brand-heading"> I.</span>
            </motion.span>
          </h1>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="max-w-2xl text-lg md:text-xl text-brand-body font-body"
        >
          We design, build, and deploy custom agentic AI systems for businesses and consumers — built with technical precision and human hospitality at the core.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="flex flex-wrap gap-4 pt-4"
        >
          <button className="cta-primary">Book a Call</button>
          <button className="cta-secondary">Read Our Story</button>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 1, delay: 2 }}
          className="text-sm font-medium tracking-wide uppercase text-brand-body/60"
        >
          Custom agents. Human-centred systems. Built to spec.
        </motion.p>
      </div>
    </section>
  );
}
