"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 150000, suffix: "+", label: "Patients Treated", desc: "Lives changed across 40+ countries" },
  { value: 500, suffix: "+", label: "Expert Physicians", desc: "World-leading specialists on staff" },
  { value: 48, suffix: "", label: "Departments", desc: "Covering every medical specialty" },
  { value: 98, suffix: "%", label: "Satisfaction Rate", desc: "Consistently rated #1 by patients" },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2200;
    const fps = 60;
    const totalFrames = Math.round((duration / 1000) * fps);
    let frame = 0;

    const tick = () => {
      frame++;
      const progress = frame / totalFrames;
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);
      setCount(current);
      if (frame < totalFrames) {
        requestAnimationFrame(tick);
      } else {
        setCount(target);
      }
    };
    requestAnimationFrame(tick);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count >= 1000 ? `${(count / 1000).toFixed(count % 1000 === 0 ? 0 : 0)}K` : count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="bg-gradient-to-br from-[#07112a] to-[#0c1f4a] rounded-3xl px-8 py-14 sm:px-14 relative overflow-hidden">
          {/* Decoration */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-indigo-500/10 rounded-full blur-3xl" />

          <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center lg:text-left lg:pl-6 lg:border-l lg:border-white/10 first:border-l-0 first:pl-0"
              >
                <div className="text-4xl sm:text-5xl font-extrabold text-white mb-1 tracking-tight">
                  <Counter target={s.value} suffix={s.suffix} />
                </div>
                <div className="text-sky-400 font-semibold text-sm mb-1">{s.label}</div>
                <div className="text-slate-500 text-xs leading-relaxed">{s.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
