import { motion } from "motion/react";
import Logo from "./assets/Logo.svg";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["our-promise", "what-we-build", "team"];
      let current = "";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Active if the top is above middle of screen and bottom is below it
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            current = id;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "our-promise", label: "Our Promise" },
    { id: "what-we-build", label: "What We Build" },
    { id: "team", label: "Team" },
  ];

  return (
    <>
      {/* Eyebrow Banner */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-brand-heading text-white text-[13px] py-2.5 text-center font-medium font-body flex items-center justify-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
        PRE-SEED, NOW OPEN.
      </div>

      {/* Main Navbar */}
      <div className="fixed top-0 left-0 right-0 z-40 px-6 md:px-12 pt-16 pointer-events-none">
        <div className="max-w-6xl mx-auto pointer-events-auto">
          <motion.nav
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex items-center justify-between w-full"
          >
            {/* Logo + Nav Links in the same bar */}
            <div className="flex items-center gap-6 md:gap-8 bg-white/90 backdrop-blur-md border border-gray-200/80 rounded-full pl-5 pr-5 md:pr-7 h-[55px] shadow-sm">
              {/* Logo + Brand Name */}
              <a href="/" className="flex items-center gap-2.5">
                <img
                  src={Logo}
                  alt="BitStu logo"
                  className="h-[18px] w-auto" // 1.125x of 16px
                />
                <span className="font-heading font-normal text-brand-heading tracking-[-0.4px] text-[16px] leading-none">
                  BitStu <span className="text-brand-orange">AI</span>
                </span>
              </a>

              {/* Divider */}
              <div className="hidden md:block w-px h-4 bg-gray-200"></div>

              {/* Nav links */}
              <div className="hidden md:flex items-center h-full gap-6">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <a
                      key={link.id}
                      href={`#${link.id}`}
                      className={`relative text-[14px] font-medium transition-colors h-full flex items-center ${
                        isActive ? "text-brand-heading" : "text-brand-body/60 hover:text-brand-heading/80"
                      }`}
                    >
                      {link.label}
                      {isActive && (
                        <motion.div
                          layoutId="activeDot"
                          className="absolute bottom-3 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-brand-heading"
                        />
                      )}
                    </a>
                  );
                })}
              </div>
            </div>

            {/* CTA on the other side */}
            <div className="flex items-center bg-white/90 backdrop-blur-md border border-gray-200/80 rounded-full px-2 h-[55px] shadow-sm">
               <button className="cta-primary">Book a Call</button>
            </div>
          </motion.nav>
        </div>
      </div>
    </>
  );
}

