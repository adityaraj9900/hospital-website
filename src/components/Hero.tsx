"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: "easeOut" as const },
});

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#0a0f1e] overflow-hidden flex flex-col justify-center">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1920&q=90"
          alt="Hospital"
          fill priority
          className="object-cover object-center opacity-25"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e] via-[#0a0f1e]/70 to-[#0a0f1e]/30" />
      </div>

      {/* Glow orbs */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-28 pb-16">
        <div className="grid lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_480px] gap-12 xl:gap-16 items-center">

          {/* ── Left ── */}
          <div>
            {/* Badge pill */}
            <motion.div {...fadeUp(0.1)}
              className="inline-flex items-center gap-2 border border-white/15 bg-white/5 rounded-full px-4 py-1.5 mb-8"
            >
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-white/70 text-xs font-medium tracking-wide">Rated #1 Hospital · 2024</span>
            </motion.div>

            <motion.h1 {...fadeUp(0.2)}
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-[-0.03em] mb-6"
            >
              Precision<br />
              Medicine,<br />
              <span className="grad-blue">Human Touch.</span>
            </motion.h1>

            <motion.p {...fadeUp(0.32)}
              className="text-white/55 text-lg leading-relaxed max-w-lg mb-10"
            >
              Where cutting-edge science meets genuine compassion.
              500+ world-class specialists dedicated to your best possible outcome.
            </motion.p>

            <motion.div {...fadeUp(0.42)} className="flex flex-wrap gap-3 mb-14">
              <motion.a href="#contact" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 bg-[#0066cc] hover:bg-blue-700 text-white font-semibold px-7 py-4 rounded-2xl shadow-xl shadow-blue-600/30 transition-colors"
              >
                Book a Consultation <ArrowRight className="w-4 h-4" />
              </motion.a>
              <motion.a href="#services" whileHover={{ scale: 1.02 }}
                className="inline-flex items-center gap-2 bg-white/8 border border-white/15 text-white font-medium px-7 py-4 rounded-2xl hover:bg-white/15 transition-colors"
              >
                Our Services
              </motion.a>
            </motion.div>

            {/* Review strip */}
            <motion.div {...fadeUp(0.52)}
              className="flex items-center gap-5 pt-8 border-t border-white/[0.08]"
            >
              <div className="flex -space-x-3">
                {[
                  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&q=80",
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80",
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80",
                  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&q=80",
                ].map((src, i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-[#0a0f1e] overflow-hidden relative">
                    <Image src={src} alt="Patient" fill className="object-cover" sizes="40px" />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex gap-0.5 mb-1">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />)}
                </div>
                <p className="text-white/50 text-sm">
                  Trusted by <span className="text-white font-semibold">150,000+</span> patients worldwide
                </p>
              </div>
            </motion.div>
          </div>

          {/* ── Right — image cards ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.25, ease: "easeOut" }}
            className="hidden lg:block relative h-[520px]"
          >
            {/* Main tall card */}
            <div className="float absolute right-0 top-0 w-[280px] h-[380px] rounded-3xl overflow-hidden shadow-2xl shadow-black/60">
              <Image
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&q=85"
                alt="Surgeon" fill className="object-cover object-top" sizes="280px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <p className="text-white/60 text-xs mb-1">Department of Surgery</p>
                <p className="text-white font-bold text-[15px]">Robotic Precision Surgery</p>
              </div>
            </div>

            {/* Second card */}
            <div className="float2 absolute left-0 bottom-4 w-[240px] h-[230px] rounded-3xl overflow-hidden shadow-2xl shadow-black/60">
              <Image
                src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=500&q=85"
                alt="Lab" fill className="object-cover" sizes="240px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <p className="text-white/60 text-xs mb-0.5">AI Diagnostics Lab</p>
                <p className="text-white font-bold text-sm">Results in 60 min</p>
              </div>
            </div>

            {/* White stat badge */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.9, type: "spring", stiffness: 180 }}
              className="absolute top-[190px] left-[50px] bg-white rounded-2xl px-5 py-4 shadow-2xl shadow-black/30"
            >
              <p className="text-3xl font-extrabold text-zinc-900 leading-none">98%</p>
              <p className="text-[#0066cc] text-xs font-bold mt-1">Patient Satisfaction</p>
              <div className="flex gap-1 mt-2">
                {[...Array(5)].map((_, i) => <div key={i} className="h-1 w-5 rounded-full bg-[#0066cc]" />)}
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
