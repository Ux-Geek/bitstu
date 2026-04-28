import { motion, AnimatePresence } from "motion/react";
import { useState, useRef, useEffect } from "react";

const WORK_ITEMS = [
  {
    title: "Custom AI Agents",
    description: "Autonomous systems built to your exact specifications. From architecture to deployment — agents that actually do the work.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000",
    color: "brand-orange"
  },
  {
    title: "Agentic Workflows",
    description: "Multi-step, multi-tool agent pipelines that handle complex processes end-to-end. No manual handoffs. No babysitting.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1000",
    color: "brand-blue"
  },
  {
    title: "AI Integration",
    description: "Seamlessly embed intelligent agents into your existing products and infrastructure. We meet you where you are.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000",
    color: "brand-blue"
  }
];

export default function WhatWeBuild() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);

  return (
    <section id="what-we-build" className="py-32 px-6 md:px-12 max-w-7xl mx-auto" ref={sectionRef}>
      <h2 className="mb-20">Agentic AI, built to spec.</h2>
      
      <div className="flex flex-col lg:flex-row gap-16 relative">
        {/* Left Side: Cards */}
        <div className="lg:w-1/2 space-y-8">
          {WORK_ITEMS.map((item, i) => (
            <motion.div
              key={i}
              onMouseEnter={() => setActiveIndex(i)}
              className={`p-10 rounded-2xl border-2 transition-all duration-500 cursor-pointer ${
                activeIndex === i 
                ? i === 0 ? "border-brand-orange bg-white shadow-xl" : "border-brand-blue bg-white shadow-xl"
                : "border-gray-100 bg-gray-50 opacity-60"
              }`}
            >
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-lg">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Right Side: Visual (Sticky) */}
        <div className="hidden lg:block lg:w-1/2 lg:sticky lg:top-32 lg:h-[600px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="w-full h-full rounded-3xl overflow-hidden shadow-2xl relative"
            >
              <img 
                src={WORK_ITEMS[activeIndex].image} 
                alt={WORK_ITEMS[activeIndex].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              
              <div className="absolute bottom-8 left-8 right-8">
                <div className={`w-12 h-1 mb-4 ${WORK_ITEMS[activeIndex].color === 'brand-orange' ? 'bg-brand-orange' : 'bg-brand-blue'}`} />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
