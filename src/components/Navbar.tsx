import { motion } from "motion/react";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-40 px-6 md:px-12 py-5 flex items-center justify-between bg-white/80 backdrop-blur-md border-b border-gray-100"
    >
      {/* Logo + Brand Name */}
      <a href="/" className="flex items-center gap-2.5 group">
        {/* Logo mark — geometric "B" mark at 32px height */}
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-shrink-0"
        >
          {/* Outer square rounded */}
          <rect width="32" height="32" rx="8" fill="#353535" />
          {/* "B" letterform made of two rectangles */}
          <rect x="9" y="8" width="4" height="16" rx="1" fill="white" />
          <path
            d="M13 8h5.5a4 4 0 0 1 0 8H13V8z"
            fill="#FF6A1A"
          />
          <path
            d="M13 16h6a4 4 0 0 1 0 8H13v-8z"
            fill="white"
          />
        </svg>

        {/* Brand text — same 32px line height */}
        <span
          className="font-heading font-semibold text-brand-heading tracking-[-0.5px] leading-none"
          style={{ fontSize: "20px", lineHeight: "32px" }}
        >
          BitStu <span className="text-brand-orange">AI</span>
        </span>
      </a>

      {/* Nav links */}
      <div className="hidden md:flex items-center gap-8">
        <a href="#" className="text-sm font-medium text-brand-body hover:text-brand-heading transition-colors">Work</a>
        <a href="#" className="text-sm font-medium text-brand-body hover:text-brand-heading transition-colors">About</a>
        <a href="#" className="text-sm font-medium text-brand-body hover:text-brand-heading transition-colors">Team</a>
        <button className="cta-primary !py-2 !px-5 !text-sm">Book a Call</button>
      </div>
    </motion.nav>
  );
}
