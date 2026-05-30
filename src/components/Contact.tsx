"use client";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const cards = [
  {
    icon: MapPin,
    label: "Location",
    lines: ["123 Health Boulevard, Suite 500", "New York, NY 10001, USA"],
    accent: "#0ea5e9",
    bg: "bg-sky-50",
  },
  {
    icon: Phone,
    label: "Emergency & Appointments",
    lines: ["Emergency: +1 (800) 555-9111", "Appts: +1 (800) 555-1234"],
    accent: "#10b981",
    bg: "bg-emerald-50",
  },
  {
    icon: Mail,
    label: "Email",
    lines: ["info@medicareelite.com", "international@medicareelite.com"],
    accent: "#6366f1",
    bg: "bg-indigo-50",
  },
  {
    icon: Clock,
    label: "Hours",
    lines: ["Emergency: 24 / 7", "Outpatient: Mon–Fri 7AM–9PM", "Weekend Clinics: 8AM–5PM"],
    accent: "#f59e0b",
    bg: "bg-amber-50",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 bg-sky-50 text-sky-700 text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full mb-4">
            Get In Touch
          </span>
          <h2 className="section-title text-slate-900 mb-4">
            We&apos;re Here{" "}
            <span
              className="clip-text"
              style={{ backgroundImage: "linear-gradient(135deg, #0ea5e9, #6366f1)" }}
            >
              Whenever You Need
            </span>
          </h2>
          <p className="text-slate-400 text-[15px] max-w-md mx-auto">
            Our team is always ready to help you find the right specialist, navigate treatment options, or simply answer questions.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {cards.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.09, duration: 0.45 }}
              className="bg-white rounded-2xl p-6 border border-slate-100 card-hover"
              style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}
            >
              <div
                className={`${c.bg} w-12 h-12 rounded-xl flex items-center justify-center mb-5`}
              >
                <c.icon className="w-6 h-6" style={{ color: c.accent }} />
              </div>
              <h3 className="font-bold text-slate-900 text-[15px] mb-3">{c.label}</h3>
              {c.lines.map((l, j) => (
                <p key={j} className={`text-[13px] ${j === 0 ? "text-slate-700 font-medium" : "text-slate-500"}`}>
                  {l}
                </p>
              ))}
            </motion.div>
          ))}
        </div>

        {/* Map banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-br from-[#07112a] to-[#0c1f4a] rounded-3xl h-64 flex items-center justify-center overflow-hidden shadow-2xl shadow-slate-300/40"
        >
          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          <div className="absolute top-0 right-1/4 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl" />

          <div className="relative z-10 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-sky-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl shadow-sky-500/40">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-1">123 Health Boulevard, New York</h3>
            <p className="text-slate-400 mb-6">MediCare Elite Medical Center — Suite 500</p>
            <motion.a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold text-[14px] px-6 py-3 rounded-full shadow-lg shadow-sky-500/30"
            >
              Get Directions →
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
