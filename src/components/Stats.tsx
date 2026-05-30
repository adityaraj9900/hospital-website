"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Star, Building2, Trophy } from "lucide-react";

const stats = [
  { icon: Users, value: 150000, suffix: "+", label: "Patients Treated", color: "from-sky-400 to-blue-600", bg: "bg-sky-50", iconColor: "text-sky-500" },
  { icon: Trophy, value: 500, suffix: "+", label: "Expert Doctors", color: "from-indigo-400 to-purple-600", bg: "bg-indigo-50", iconColor: "text-indigo-500" },
  { icon: Building2, value: 48, suffix: "", label: "Departments", color: "from-emerald-400 to-teal-600", bg: "bg-emerald-50", iconColor: "text-emerald-500" },
  { icon: Star, value: 98, suffix: "%", label: "Patient Satisfaction", color: "from-amber-400 to-orange-500", bg: "bg-amber-50", iconColor: "text-amber-500" },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-sky-50/30" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block bg-sky-100 text-sky-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Our Impact
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight">
            Numbers That{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-600">
              Speak for Themselves
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg shadow-slate-100 border border-slate-100 text-center group cursor-default"
            >
              <div className={`w-14 h-14 ${stat.bg} rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className={`w-7 h-7 ${stat.iconColor}`} />
              </div>
              <div className={`text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br ${stat.color} mb-2`}>
                <Counter target={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-slate-500 font-medium text-sm sm:text-base">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
