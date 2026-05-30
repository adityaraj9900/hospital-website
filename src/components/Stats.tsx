"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { n: 150000, suffix: "+",    label: "Patients Treated", sub: "Across 70+ countries" },
  { n: 500,    suffix: "+",    label: "Specialists",       sub: "World-leading physicians" },
  { n: 25,     suffix: " yrs", label: "Of Excellence",     sub: "Founded 1999" },
  { n: 98,     suffix: "%",    label: "Satisfaction",      sub: "Independently verified" },
];

function Count({ n, suffix }: { n: number; suffix: string }) {
  const [v, setV] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!inView) return;
    // interval-based: reliable in all environments (no rAF throttling)
    const duration = 1800;
    const steps = 60;
    const interval = duration / steps;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = Math.min(step / steps, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setV(Math.round(eased * n));
      if (step >= steps) {
        setV(n);
        clearInterval(timer);
      }
    }, interval);
    return () => clearInterval(timer);
  }, [inView, n]);

  const display = n >= 10000 ? `${Math.round(v / 1000)}K` : v;
  return <span ref={ref}>{display}{suffix}</span>;
}

export default function Stats() {
  return (
    <section id="stats" className="py-24 lg:py-32 bg-[#f5f3ee]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#0066cc] mb-4 block">By the Numbers</span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-zinc-900 tracking-tight leading-tight">
            Results that speak<br />for themselves
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white rounded-3xl p-8 lg:p-10 text-center shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-4xl lg:text-5xl font-extrabold text-zinc-900 tracking-tight mb-2">
                <Count n={s.n} suffix={s.suffix} />
              </div>
              <div className="text-[#0066cc] font-semibold text-sm mb-1">{s.label}</div>
              <div className="text-zinc-400 text-xs">{s.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
