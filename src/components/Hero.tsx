"use client";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Clock, Award, ChevronDown } from "lucide-react";
import Image from "next/image";

const badges = [
  { icon: Shield, label: "ISO Certified", color: "from-emerald-400 to-teal-500" },
  { icon: Award, label: "#1 Ranked Hospital", color: "from-amber-400 to-orange-500" },
  { icon: Clock, label: "24/7 Emergency", color: "from-sky-400 to-blue-500" },
];

const floatingCards = [
  { title: "Expert Doctors", value: "500+", color: "bg-white", textColor: "text-slate-800" },
  { title: "Patient Satisfaction", value: "98%", color: "bg-sky-500", textColor: "text-white" },
  { title: "Years of Excellence", value: "25+", color: "bg-indigo-600", textColor: "text-white" },
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1920&q=90"
          alt="Modern hospital interior"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
      </div>

      {/* Animated orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-1000" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            {/* Badges */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap gap-2 mb-8"
            >
              {badges.map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-medium px-3 py-1.5 rounded-full"
                >
                  <div className={`w-4 h-4 rounded-full bg-gradient-to-br ${badge.color} flex items-center justify-center`}>
                    <badge.icon className="w-2.5 h-2.5 text-white" />
                  </div>
                  {badge.label}
                </div>
              ))}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-6"
            >
              Your Health,{" "}
              <span className="relative">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">
                  Our
                </span>
              </span>{" "}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-indigo-300 to-purple-300">
                Priority
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg text-slate-300 leading-relaxed max-w-lg mb-10"
            >
              World-class medical care delivered by over 500 expert physicians.
              Cutting-edge technology meets compassionate healing — because you
              deserve nothing less than the best.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href="#appointment"
                whileHover={{ scale: 1.04, boxShadow: "0 20px 40px rgba(14,165,233,0.4)" }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-semibold px-8 py-4 rounded-2xl shadow-xl shadow-sky-500/30 transition-all"
              >
                Book Appointment
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#services"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold px-8 py-4 rounded-2xl hover:bg-white/20 transition-all"
              >
                Explore Services
              </motion.a>
            </motion.div>
          </div>

          {/* Right — Floating cards */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex flex-col gap-4"
          >
            {floatingCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.12 }}
                whileHover={{ x: -8, scale: 1.02 }}
                className={`${card.color} ${card.textColor} rounded-2xl p-6 flex items-center justify-between shadow-2xl backdrop-blur-sm`}
                style={{ marginLeft: `${i * 24}px` }}
              >
                <div>
                  <p className={`text-sm font-medium ${card.textColor === "text-white" ? "opacity-80" : "text-slate-500"}`}>
                    {card.title}
                  </p>
                  <p className="text-4xl font-bold mt-1">{card.value}</p>
                </div>
                <div className={`w-16 h-16 rounded-xl ${card.textColor === "text-white" ? "bg-white/20" : "bg-sky-50"} flex items-center justify-center`}>
                  <Award className={`w-8 h-8 ${card.textColor === "text-white" ? "text-white" : "text-sky-500"}`} />
                </div>
              </motion.div>
            ))}

            {/* Doctor image card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 }}
              className="relative rounded-2xl overflow-hidden h-52 shadow-2xl"
              style={{ marginLeft: "72px" }}
            >
              <Image
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&q=85"
                alt="Expert surgeon team"
                fill
                className="object-cover"
                sizes="300px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-xs font-medium opacity-80">Featured Department</p>
                <p className="text-lg font-bold">Advanced Surgery Center</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-white/60 text-xs font-medium"
        >
          <span>Scroll to explore</span>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
