import { motion } from "motion/react";

export default function GetInvolved() {
  const pills = ["Early Clients", "Design Partners", "Pre-Seed Investors", "Engineers"];

  return (
    <section className="py-32 px-6 md:px-12 bg-[#F9F9F9]">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <h2 className="text-5xl md:text-7xl">Ground floor is open.</h2>
        
        <p className="text-xl max-w-2xl mx-auto">
          We’re in our pre-seed stage and looking for people who believe AI should serve people — not replace them.
        </p>

        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <button className="cta-primary">Book a Call</button>
          <button className="cta-secondary">Email Us</button>
        </div>

        <div className="flex flex-wrap justify-center gap-3 pt-8">
          {pills.map((pill, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="pill"
            >
              {pill}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
