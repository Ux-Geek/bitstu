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
    { text: "Every system we design carries one non-negotiable constraint:", emphasized: false },
    { text: "it must feel ", emphasized: false, suffix: "human", suffixOrange: true, after: ". Not human-like. Not almost-human." },
  ],
  // Group 2
  [
    { text: "", prefix: "Human.", prefixOrange: true, after: " We call this ", suffix: "Human Hospitality", suffixOrange: true, suffixAfter: " —" },
    { text: "the principle that no matter how autonomous our agents become," },
  ],
  // Group 3
  [
    { text: "they will always carry the warmth, care, and intentionality" },
    { text: "of a real person on the other side." },
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
    // Animate label first
    gsap.from(labelRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
        once: true,
      } as ScrollTrigger.Vars,
    });

    // Each group gets its own ScrollTrigger
    groupRefs.current.forEach((groupEl, i) => {
      if (!groupEl) return;
      const lines = groupEl.querySelectorAll(".line-item");

      // Start hidden
      gsap.set(lines, { opacity: 0, y: 30 });

      ScrollTrigger.create({
        trigger: groupEl,
        start: "top 87%",
        once: true,
        onEnter: () => {
          gsap.to(lines, {
            opacity: 1,
            y: 0,
            duration: 0.85,
            stagger: 0.1,
            ease: "power3.out",
          });
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, { scope: container });

  return (
    <section
      ref={container}
      className="bg-[#F9F9F9] py-32 px-6 md:px-12 min-h-[60vh]"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-start gap-0">
        {/* Label */}
        <div
          ref={labelRef}
          className="text-brand-orange font-bold uppercase tracking-[0.2em] mb-10 text-sm md:text-base"
        >
          OUR PROMISE —
        </div>

        {/* Line groups */}
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
    </section>
  );
}
