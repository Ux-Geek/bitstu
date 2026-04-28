import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

export default function Promise() {
  const container = useRef(null);
  const textRef = useRef(null);
  const labelRef = useRef(null);

  useGSAP(() => {
    // Split text into lines for animation
    const split = new SplitType(textRef.current, { types: 'lines', lineClass: 'overflow-hidden' });
    
    // Animate the label
    gsap.from(labelRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
      }
    });

    // We wrap lines' inner text to enable a "slide up" effect if we want, or just animate the lines.
    // split-type creates <div class="line overflow-hidden">content</div>.
    // To slide from bottom, we actually need inner wrappers, but simple y+opacity works beautifully too.
    gsap.from(split.lines, {
      y: 40,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: container.current,
        start: "top 75%",
      }
    });

    return () => {
      split.revert();
    };
  }, { scope: container });

  return (
    <section ref={container} className="bg-[#F9F9F9] py-32 px-6 md:px-12 flex items-center min-h-[60vh]">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        <div ref={labelRef} className="text-brand-orange font-bold uppercase tracking-[0.2em] mb-6 text-sm md:text-base">
          OUR PROMISE —
        </div>
        <h2 
          ref={textRef}
          className="text-[clamp(24px,3.5vw,46px)] leading-[1.35] font-heading text-brand-heading tracking-[-0.5px] md:tracking-[-1px] font-medium"
        >
          We build AI that never loses the human touch. Every system we design carries one non-negotiable constraint: it must feel <span className="text-brand-orange">human</span>. Not human-like. Not almost-human. <span className="text-brand-orange">Human.</span> We call this <span className="text-brand-orange">Human Hospitality</span> — the principle that no matter how autonomous our agents become, they will always carry the warmth, care, and intentionality of a real person on the other side. AI should make people feel seen, not processed.
        </h2>
      </div>
    </section>
  );
}
