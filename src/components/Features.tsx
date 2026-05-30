"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const features = [
  {
    tag: "01 · Advanced Surgery",
    title: "Robotic Precision You Can Trust",
    body: "Our da Vinci® surgical suites deliver millimetre-perfect outcomes with dramatically shorter recovery times. Our surgeons have performed over 12,000 robotic procedures — one of the highest volumes globally.",
    cta: "Explore Surgery Centre",
    image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=900&q=85",
    stat: { val: "12,000+", label: "Robotic procedures performed" },
    dark: false,
  },
  {
    tag: "02 · AI Diagnostics",
    title: "Answers in 60 Minutes, Not Days",
    body: "Our AI-powered pathology lab cross-references 40 million data points per scan, catching conditions that conventional methods miss. Accurate. Fast. Life-changing.",
    cta: "Learn About Diagnostics",
    image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=900&q=85",
    stat: { val: "99.4%", label: "Diagnostic accuracy rate" },
    dark: true,
  },
  {
    tag: "03 · Personalised Oncology",
    title: "Cancer Treatment Built Around You",
    body: "No two cancers are alike. Our tumour board reviews every case with genomic sequencing, precision radiation, and immunotherapy tailored to your biology — not a textbook.",
    cta: "Cancer Care Centre",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=900&q=85",
    stat: { val: "87%", label: "5-year survival improvement" },
    dark: false,
  },
];

export default function Features() {
  return (
    <section id="services">
      {features.map((f, i) => (
        <div key={f.tag} className={f.dark ? "bg-[#0a0f1e]" : "bg-white"}>
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20 lg:py-28">
            <div className={`grid lg:grid-cols-2 gap-14 xl:gap-24 items-center ${i % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>

              {/* ── Text ── */}
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 1 ? 36 : -36 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={i % 2 === 1 ? "lg:col-start-2" : ""}
              >
                <span className={`inline-block text-[11px] font-bold uppercase tracking-[0.2em] mb-6 ${f.dark ? "text-blue-400" : "text-[#0066cc]"}`}>
                  {f.tag}
                </span>
                <h2 className={`text-4xl lg:text-[2.75rem] font-extrabold leading-[1.1] tracking-tight mb-6 ${f.dark ? "text-white" : "text-zinc-900"}`}>
                  {f.title}
                </h2>
                <p className={`text-[15.5px] leading-[1.75] mb-8 ${f.dark ? "text-zinc-400" : "text-zinc-500"}`}>
                  {f.body}
                </p>

                {/* Stat chip */}
                <div className={`inline-flex items-center gap-4 rounded-2xl px-6 py-4 mb-8 ${f.dark ? "bg-white/5 border border-white/10" : "bg-blue-50 border border-blue-100"}`}>
                  <div>
                    <p className={`text-3xl font-extrabold leading-none tracking-tight ${f.dark ? "text-white" : "text-zinc-900"}`}>
                      {f.stat.val}
                    </p>
                    <p className={`text-xs mt-1.5 font-medium ${f.dark ? "text-zinc-500" : "text-zinc-400"}`}>
                      {f.stat.label}
                    </p>
                  </div>
                </div>

                <div>
                  <motion.a
                    href="#contact"
                    whileHover={{ x: 5 }}
                    className={`inline-flex items-center gap-2 font-semibold text-[15px] ${f.dark ? "text-blue-400 hover:text-blue-300" : "text-[#0066cc] hover:text-blue-800"} transition-colors`}
                  >
                    {f.cta} <ArrowRight className="w-4 h-4" />
                  </motion.a>
                </div>
              </motion.div>

              {/* ── Image ── */}
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                className={`relative h-[380px] lg:h-[460px] rounded-3xl overflow-hidden shadow-2xl ${i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}
              >
                <Image
                  src={f.image} alt={f.title} fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width:1024px) 100vw, 50vw"
                />
                <div className={`absolute inset-0 ${f.dark ? "bg-gradient-to-tr from-[#0a0f1e]/50 to-transparent" : "bg-gradient-to-tr from-zinc-900/20 to-transparent"}`} />
              </motion.div>

            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
