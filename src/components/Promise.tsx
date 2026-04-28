import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

export default function Promise() {
  const container = useRef(null);
  const heroLineRef = useRef<HTMLParagraphElement>(null);
  const bodyRef = useRef<HTMLParagraphElement>(null);
  const labelRef = useRef(null);

  useGSAP(() => {
    // ── Hero sentence: reveals on its own ──────────────────────
    gsap.set(heroLineRef.current, { opacity: 0, y: 30 });

    ScrollTrigger.create({
      trigger: heroLineRef.current,
      start: "top 85%",
      once: true,
      onEnter: () => {
        gsap.to(heroLineRef.current, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
        });
      },
    });

    // ── Body lines: 2 at a time ─────────────────────────────────
    const split = new SplitType(bodyRef.current!, { types: "lines" });
    const lines = split.lines || [];

    gsap.set(lines, { opacity: 0, y: 30 });

    const pairCount = Math.ceil(lines.length / 2);
    for (let i = 0; i < pairCount; i++) {
      const pair = lines.slice(i * 2, i * 2 + 2);
      ScrollTrigger.create({
        trigger: pair[0],
        start: "top 88%",
        once: true,
        onEnter: () => {
          gsap.to(pair, {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.09,
            ease: "power3.out",
          });
        },
      });
    }

    // ── Label ───────────────────────────────────────────────────
    gsap.from(labelRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: container.current,
        start: "top 82%",
      },
    });

    return () => {
      split.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, { scope: container });

  return (
    <section
      ref={container}
      className="bg-[#F9F9F9] py-32 px-6 md:px-12 min-h-screen"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-start gap-10">
        {/* Label */}
        <div
          ref={labelRef}
          className="text-brand-orange font-bold uppercase tracking-[0.2em] text-sm md:text-base"
        >
          OUR PROMISE —
        </div>

        {/* Hero sentence — reveals alone */}
        <p
          ref={heroLineRef}
          className="text-[clamp(28px,4vw,52px)] leading-[1.2] font-heading font-semibold text-brand-heading tracking-[-1px]"
        >
          We build AI that never loses the human touch.
        </p>

        {/* Body — reveals 2 lines at a time */}
        <p
          ref={bodyRef}
          className="text-[clamp(20px,2.6vw,36px)] leading-[1.4] font-heading font-medium text-brand-heading tracking-[-0.5px] max-w-5xl"
        >
          Every system we design carries one non-negotiable constraint: it must feel{" "}
          <span className="text-brand-orange">human</span>. Not human-like. Not almost-human.{" "}
          <span className="text-brand-orange">Human.</span> We call this{" "}
          <span className="text-brand-orange">Human Hospitality</span> — the principle that no matter how autonomous our agents become, they will always carry the warmth, care, and intentionality of a real person on the other side. AI should make people feel seen, not processed.
        </p>
      </div>
    </section>
  );
}
