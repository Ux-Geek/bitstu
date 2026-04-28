import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

// Each entry is a "reveal group":
//   - index 0 → solo (first line)
//   - all others → pairs of 2
const LINES = [
  // Group 0 — solo
  [
    { text: "We build AI that never loses the human touch.", emphasized: false },
  ],
  // Group 1
  [
    { text: "Every system we design carries one non-negotiable constraint: it must feel ", suffix: "human", suffixOrange: true, emphasized: false },
    { text: "", emphasized: false, after: "Not human-like. Not almost-human." },
  ],
  // Group 2
  [
    { text: "We call this ", suffix: "Human Hospitality ", suffixOrange: true, suffixAfter: " — the principle that" },
    { text: "no matter how autonomous our agents become," },
  ],
  // Group 3
  [
    { text: "they will always carry the warmth, care, and intentionality of a real person on the other side." },
    // { text: "of a real person on the other side." },
  ],
  // Group 4 — solo last line
  [
    { text: "AI should make people feel seen, not processed." },
  ],
];

type LineData = {
  text?: string;
  emphasized?: boolean;
  prefix?: string;
  prefixOrange?: boolean;
  after?: string;
  suffix?: string;
  suffixOrange?: boolean;
  suffixAfter?: string;
};

function renderLine(line: LineData) {
  return (
    <>
      {line.prefix && (
        <span className={line.prefixOrange ? "text-brand-orange" : ""}>{line.prefix}</span>
      )}
      {line.prefix && line.after && <span>{line.after}</span>}
      {line.text && <span>{line.text} </span>}
      {line.suffix && (
        <span className={line.suffixOrange ? "text-brand-orange" : ""}>{line.suffix}</span>
      )}
      {line.suffixAfter && <span>{line.suffixAfter}</span>}
    </>
  );
}

export default function Promise() {
  const container = useRef<HTMLElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const groupRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    gsap.from(labelRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
        once: true,
      },
    });
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "+=300%", // more scroll distance = clearer step-by-step reveal
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });
    groupRefs.current.forEach((groupEl, index) => {
      if (!groupEl) return;
      const lines = groupEl.querySelectorAll(".line-item");
      gsap.set(lines, { opacity: 0, y: 40 });
      // add scroll gap before each group, except the first
      if (index !== 0) {
        tl.to({}, { duration: 0.6 });
      }
      tl.to(lines, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.18,
        ease: "power3.out",
      });
      // hold the revealed group before next scroll reveal
      tl.to({}, { duration: 0.45 });
    });
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, { scope: container });

  return (
    <section
      id="our-promise"
      ref={container}
      className="bg-white py-32 px-6 md:px-12 min-h-screen flex items-center justify-center"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-start gap-0 w-full">
        {/* Label */}
        <div
          ref={labelRef}
          className="text-brand-orange font-bold uppercase tracking-[0.2em] mb-10 text-sm md:text-base"
        >
          OUR PROMISE —
        </div>

        {/* Line groups */}
        <div className="w-full">
          {LINES.map((group, gi) => (
            <div
              key={gi}
              ref={(el) => { groupRefs.current[gi] = el; }}
              className="mb-0"
            >
              {group.map((line, li) => (
                <div
                  key={li}
                  className="line-item text-[clamp(24px,3.5vw,46px)] leading-[1.35] font-heading text-brand-heading tracking-[-0.5px] md:tracking-[-1px] font-medium"
                >
                  {renderLine(line)}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
