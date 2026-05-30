"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Image from "next/image";

const reviews = [
  {
    name: "Emily Johnson",
    role: "Cardiac Surgery Patient",
    location: "New York, USA",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=85",
    rating: 5,
    text: "After my open-heart surgery, the care I received was extraordinary. Dr. Mitchell's skill and the nursing team's compassion made a terrifying experience feel completely manageable. I am alive and thriving because of MediCare Elite.",
  },
  {
    name: "David Park",
    role: "Orthopaedic Reconstruction",
    location: "Seoul, South Korea",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=85",
    rating: 5,
    text: "I flew from South Korea specifically for Dr. Chen's robotic knee replacement. The precision was incredible — walking without pain within two weeks. Truly world-class care that lives up to its name.",
  },
  {
    name: "Fatima Al-Rashid",
    role: "Oncology Patient",
    location: "Dubai, UAE",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&q=85",
    rating: 5,
    text: "Dr. Sharma's personalised immunotherapy protocol gave me a second chance at life. The international patient team handled every detail — visa, accommodation, translation. I felt at home throughout my treatment.",
  },
  {
    name: "Marcus Thompson",
    role: "Emergency Trauma Patient",
    location: "London, UK",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=85",
    rating: 5,
    text: "The emergency team responded in under four minutes and performed life-saving intervention immediately. The speed, expertise, and technology they deployed was unlike anything I'd seen. They didn't just save my life — they gave me back my future.",
  },
  {
    name: "Yuki Tanaka",
    role: "Neurology Patient",
    location: "Tokyo, Japan",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=85",
    rating: 5,
    text: "After years of misdiagnosis elsewhere, Dr. Okafor identified my condition within days using their AI diagnostic suite. The multilingual staff and seamless international services made everything effortless. I cannot recommend them enough.",
  },
];

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const [auto, setAuto] = useState(true);

  useEffect(() => {
    if (!auto) return;
    const t = setInterval(() => setIdx((c) => (c + 1) % reviews.length), 6000);
    return () => clearInterval(t);
  }, [auto]);

  const go = (n: number) => { setIdx(n); setAuto(false); };
  const prev = () => go((idx - 1 + reviews.length) % reviews.length);
  const next = () => go((idx + 1) % reviews.length);

  return (
    <section id="testimonials" className="py-24 bg-[#07112a] relative overflow-hidden">
      {/* Blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-500/8 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/8 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 bg-sky-500/15 text-sky-400 text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full mb-4 border border-sky-500/20">
            Patient Stories
          </span>
          <h2 className="section-title text-white mb-4">
            Real Voices,{" "}
            <span
              className="clip-text"
              style={{ backgroundImage: "linear-gradient(135deg, #38bdf8, #818cf8)" }}
            >
              Real Healing
            </span>
          </h2>
          <p className="text-slate-500 text-[15px] max-w-md mx-auto">
            From across the globe — stories of lives restored at MediCare Elite.
          </p>
        </motion.div>

        {/* Card */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="relative rounded-3xl p-8 sm:p-12 border border-white/8 overflow-hidden"
              style={{ background: "rgba(255,255,255,0.04)" }}
            >
              <Quote className="absolute top-8 right-8 w-20 h-20 text-sky-500/10" />

              <div className="flex gap-1 mb-6">
                {[...Array(reviews[idx].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-slate-300 text-xl sm:text-2xl leading-relaxed font-light italic mb-10">
                &ldquo;{reviews[idx].text}&rdquo;
              </p>

              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-sky-500/40 shrink-0">
                  <Image
                    src={reviews[idx].image}
                    alt={reviews[idx].name}
                    fill
                    className="object-cover"
                    sizes="56px"
                  />
                </div>
                <div>
                  <p className="text-white font-bold text-[16px]">{reviews[idx].name}</p>
                  <p className="text-sky-400 text-sm font-medium">{reviews[idx].role}</p>
                  <p className="text-slate-600 text-xs">{reviews[idx].location}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex gap-2 items-center">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === idx
                      ? "bg-sky-400 w-8 h-1.5"
                      : "bg-white/15 w-4 h-1.5 hover:bg-white/30"
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-2.5">
              <motion.button
                onClick={prev}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.93 }}
                className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </motion.button>
              <motion.button
                onClick={next}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.93 }}
                className="w-11 h-11 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-sky-500/30"
              >
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>

          {/* Avatar strip */}
          <div className="flex justify-center gap-3 mt-10">
            {reviews.map((r, i) => (
              <motion.button
                key={r.name}
                onClick={() => go(i)}
                whileHover={{ scale: 1.1 }}
                className={`relative w-11 h-11 rounded-full overflow-hidden border-2 transition-all ${
                  i === idx ? "border-sky-400 scale-110" : "border-white/15 opacity-50"
                }`}
              >
                <Image src={r.image} alt={r.name} fill className="object-cover" sizes="44px" />
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
