"use client";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Image from "next/image";

const points = [
  "JCI & ISO 9001 accredited with international quality standards",
  "da Vinci robotic surgery suites for ultra-precision procedures",
  "AI-powered diagnostics delivering results in under 60 minutes",
  "100+ active clinical trials at our dedicated research campus",
  "International patient concierge — visa, accommodation & translation",
  "Luxurious private suites with hotel-grade amenities",
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">

          {/* Image mosaic */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative h-[540px]"
          >
            {/* Large top-right */}
            <div className="absolute top-0 right-0 w-[58%] h-[58%] rounded-3xl overflow-hidden shadow-2xl shadow-slate-200">
              <Image
                src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=700&q=85"
                alt="Modern hospital"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 30vw"
              />
            </div>
            {/* Bottom-left */}
            <div className="absolute bottom-0 left-0 w-[55%] h-[55%] rounded-3xl overflow-hidden shadow-2xl shadow-slate-200">
              <Image
                src="https://images.unsplash.com/photo-1551076805-e1869033e561?w=600&q=85"
                alt="Medical team"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 28vw"
              />
            </div>
            {/* Top-left small */}
            <div className="absolute top-0 left-0 w-[40%] h-[40%] rounded-3xl overflow-hidden shadow-xl shadow-slate-200">
              <Image
                src="https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=400&q=85"
                alt="Research lab"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 30vw, 20vw"
              />
            </div>
            {/* Bottom-right small */}
            <div className="absolute bottom-0 right-0 w-[38%] h-[40%] rounded-3xl overflow-hidden shadow-xl shadow-slate-200">
              <Image
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&q=85"
                alt="Caring staff"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 30vw, 20vw"
              />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-gradient-to-br from-sky-500 to-blue-700 rounded-2xl p-5 text-center shadow-2xl shadow-blue-400/40"
            >
              <div className="text-4xl font-extrabold text-white leading-none">25+</div>
              <div className="text-sky-200 text-[11px] font-semibold mt-1 uppercase tracking-wider">Years of<br />Excellence</div>
            </motion.div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full mb-5">
              About Us
            </span>

            <h2 className="section-title text-slate-900 mb-6">
              Redefining What{" "}
              <span
                className="clip-text"
                style={{ backgroundImage: "linear-gradient(135deg, #0ea5e9, #6366f1)" }}
              >
                Healthcare
              </span>{" "}
              Looks Like
            </h2>

            <p className="text-slate-500 text-[15px] leading-relaxed mb-4">
              Founded in 1999, MediCare Elite has grown into a globally recognised centre of
              medical excellence, welcoming patients from over 70 countries. Our philosophy is
              simple: marry world-class clinical expertise with genuine human compassion.
            </p>
            <p className="text-slate-500 text-[15px] leading-relaxed mb-8">
              Every treatment plan is built around you — your genome, your lifestyle, your goals —
              supported by a multidisciplinary team that does not stop until you are well.
            </p>

            <div className="space-y-3 mb-10">
              {points.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-sky-500 shrink-0 mt-0.5" />
                  <span className="text-slate-600 text-sm">{p}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <motion.a
                href="#services"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold text-[15px] px-7 py-4 rounded-2xl shadow-lg shadow-sky-400/25"
              >
                Our Services <ArrowRight className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                className="inline-flex items-center justify-center gap-2 border-2 border-slate-200 text-slate-700 font-semibold text-[15px] px-7 py-4 rounded-2xl hover:border-sky-300 hover:text-sky-600 transition-colors"
              >
                Contact Us
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
