import { motion } from "motion/react";
import Logo from "./assets/Logo.svg";

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-40 px-6 md:px-12 pt-5 pointer-events-none">
      <div className="max-w-6xl mx-auto pointer-events-auto">
        <motion.nav
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex items-center justify-between w-full"
        >
          {/* Logo + Nav Links on one side */}
          <div className="flex items-center gap-10">
            {/* Logo + Brand Name */}
            <a href="/" className="flex items-center gap-2.5 bg-white/90 backdrop-blur-md border border-gray-200/80 rounded-full px-5 py-3 shadow-sm">
              <img
                src={Logo}
                alt="BitStu logo"
                className="h-[20px] w-auto"
              />
              <span className="font-heading font-semibold text-brand-heading tracking-[-0.4px] text-[17px] leading-none">
                BitStu <span className="text-brand-orange">AI</span>
              </span>
            </a>

            {/* Nav links */}
            <div className="hidden md:flex items-center gap-7 bg-white/90 backdrop-blur-md border border-gray-200/80 rounded-full px-7 py-3 shadow-sm">
              <a href="#" className="text-[14px] font-medium text-brand-body hover:text-brand-heading transition-colors">Our Promise</a>
              <a href="#" className="text-[14px] font-medium text-brand-body hover:text-brand-heading transition-colors">What We Build</a>
              <a href="#" className="text-[14px] font-medium text-brand-body hover:text-brand-heading transition-colors">Team</a>
            </div>
          </div>

          {/* CTA on the other side */}
          <div className="flex bg-white/90 backdrop-blur-md border border-gray-200/80 rounded-full p-1 shadow-sm">
             <button className="cta-primary">Book a Call</button>
          </div>
        </motion.nav>
      </div>
    </div>
  );
}

