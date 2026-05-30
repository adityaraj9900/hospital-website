"use client";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Clock4, Star, ChevronDown, Stethoscope } from "lucide-react";
import Image from "next/image";

const trust = [
  { icon: ShieldCheck, text: "JCI Accredited" },
  { icon: Star, text: "#1 Ranked Hospital" },
  { icon: Clock4, text: "24 / 7 Emergency" },
  { icon: Stethoscope, text: "500+ Specialists" },
];

const heroImages = [
  "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&q=85",
  "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=85",
  "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=600&q=85",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#07112a]"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=1920&q=85"
          alt="Hospital"
          fill
          className="object-cover object-center opacity-20"
          priority
          sizes="100vw"
        />
      </div>

      {/* Gradient mesh */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#07112a] via-[#091b40]/95 to-[#0b1f4a]" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sky-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 pt-24 pb-12 w-full">
        <div className="grid lg:grid-cols-[1fr_480px] gap-12 xl:gap-20 items-center">

          {/* Left — text */}
          <div>
            {/* Trust pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap gap-2 mb-8"
            >
              {trust.map((t) => (
                <div
                  key={t.text}
                  className="glass flex items-center gap-2 text-white text-xs font-medium px-3.5 py-1.5 rounded-full"
                >
                  <t.icon className="w-3.5 h-3.5 text-sky-400" />
                  {t.text}
                </div>
              ))}
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl sm:text-6xl xl:text-7xl font-extrabold text-white leading-[1.06] tracking-[-0.03em] mb-6"
            >
              Advanced Care,{" "}
              <span
                className="clip-text"
                style={{ backgroundImage: "linear-gradient(135deg, #38bdf8, #818cf8, #c084fc)" }}
              >
                Exceptional
              </span>
              <br />
              Outcomes.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-slate-400 text-lg leading-relaxed max-w-[520px] mb-10"
            >
              World-renowned physicians. Robotic precision surgery. AI-powered diagnostics.
              At MediCare Elite, every detail of your care is crafted to perfection.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <motion.a
                href="#appointment"
                whileHover={{ scale: 1.03, boxShadow: "0 0 40px rgba(14,165,233,0.5)" }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold text-[15px] px-7 py-4 rounded-2xl shadow-lg shadow-sky-500/30 transition-all"
              >
                Book Appointment
                <ArrowRight className="w-4.5 h-4.5" />
              </motion.a>
              <motion.a
                href="#services"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 bg-white/8 border border-white/15 text-white font-semibold text-[15px] px-7 py-4 rounded-2xl hover:bg-white/15 transition-all"
              >
                Explore Services
              </motion.a>
            </motion.div>

            {/* Quick stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex gap-8 mt-12 pt-10 border-t border-white/10"
            >
              {[
                { val: "150K+", label: "Patients Treated" },
                { val: "98%", label: "Satisfaction Rate" },
                { val: "25 Yrs", label: "Excellence" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-2xl font-bold text-white mb-0.5">{s.val}</p>
                  <p className="text-xs text-slate-500 font-medium">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — image collage */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="hidden lg:block relative h-[580px]"
          >
            {/* Main large image */}
            <motion.div
              className="float absolute top-0 right-0 w-[300px] h-[380px] rounded-3xl overflow-hidden shadow-2xl shadow-black/40"
            >
              <Image
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&q=85"
                alt="Expert surgeon"
                fill
                className="object-cover object-top"
                sizes="300px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07112a]/60 to-transparent" />
            </motion.div>

            {/* Second image */}
            <motion.div
              className="float2 absolute bottom-0 left-0 w-[240px] h-[280px] rounded-3xl overflow-hidden shadow-2xl shadow-black/40"
            >
              <Image
                src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=500&q=85"
                alt="Medical technology"
                fill
                className="object-cover"
                sizes="240px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07112a]/60 to-transparent" />
            </motion.div>

            {/* Stat card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.8, type: "spring" }}
              className="absolute top-[200px] left-[30px] glass rounded-2xl p-5 w-[180px] shadow-2xl"
            >
              <div className="text-3xl font-extrabold text-white mb-1">98%</div>
              <div className="text-sky-400 text-xs font-semibold mb-2">Patient Satisfaction</div>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-6 h-1 rounded-full bg-sky-400" />
                ))}
              </div>
            </motion.div>

            {/* Award card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, type: "spring" }}
              className="absolute top-[20px] left-[-10px] glass rounded-2xl px-4 py-3 flex items-center gap-3 w-[195px]"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shrink-0">
                <Star className="w-5 h-5 text-white fill-white" />
              </div>
              <div>
                <p className="text-white text-xs font-bold">#1 Ranked</p>
                <p className="text-slate-400 text-[10px]">Best Hospital 2024</p>
              </div>
            </motion.div>

            {/* Doctor available card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="absolute bottom-[30px] right-[-10px] glass rounded-2xl px-4 py-3 flex items-center gap-3"
            >
              <div className="relative w-9 h-9 rounded-full overflow-hidden border-2 border-emerald-400">
                <Image
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&q=85"
                  alt="Doctor"
                  fill
                  className="object-cover object-top"
                  sizes="36px"
                />
              </div>
              <div>
                <p className="text-white text-xs font-bold">Dr. Mitchell</p>
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                  <span className="text-emerald-400 text-[10px] font-medium">Available now</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
        >
          <ChevronDown className="w-5 h-5 text-white/30" />
        </motion.div>
      </motion.div>
    </section>
  );
}
