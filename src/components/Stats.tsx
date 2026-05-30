"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { n: 150000, suffix: "+", label: "Patients Treated", sub: "Across 70+ countries" },
  { n: 500,    suffix: "+", label: "Specialists",       sub: "World-leading physicians" },
  { n: 25,     suffix: " yrs", label: "Of Excellence",  sub: "Founded 1999" },
  { n: 98,     suffix: "%",  label: "Satisfaction",     sub: "Independently verified" },
];

function Count({ n, suffix }: { n: number; suffix: string }) {
  const [v, setV] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 2000;
    const raf = (now: number) => {
      const p = Math.min((now - start) / dur, 1);
      const e = 1 - Math.pow(1 - p, 3);
      setV(Math.round(e * n));
      if (p < 1) requestAnimationFrame(raf);
      else setV(n);
    };
    requestAnimationFrame(raf);
  }, [inView, n]);

  const display = n >= 10000 ? `${Math.round(v / 1000)}K` : v;
  return <span ref={ref}>{display}{suffix}</span>;
}

export default function Stats() {
  return (
    <section className="py-24 bg-[#f5f3ee]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#0066cc] mb-3 block">By the Numbers</span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-zinc-900 tracking-tight">
            Results that speak<br />for themselves
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white rounded-3xl p-8 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-4xl lg:text-5xl font-extrabold text-zinc-900 tracking-tight mb-1">
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
