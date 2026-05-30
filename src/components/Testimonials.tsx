"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Emily Johnson",
    role: "Cardiac Surgery Patient",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=85",
    rating: 5,
    text: "After my open-heart surgery, the entire team at MediCare Elite was extraordinary. Dr. Mitchell's skill and the nursing staff's compassion made a terrifying experience feel manageable. I am alive and thriving today because of them.",
    city: "New York, USA",
  },
  {
    name: "David Park",
    role: "Orthopedic Surgery Patient",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=85",
    rating: 5,
    text: "I flew from South Korea specifically to see Dr. Chen for my knee replacement. The robotic surgery precision was incredible — I was walking without pain within two weeks. Truly world-class care that lives up to the name.",
    city: "Seoul, South Korea",
  },
  {
    name: "Fatima Al-Rashid",
    role: "Cancer Survivor",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&q=85",
    rating: 5,
    text: "Dr. Sharma's personalized immunotherapy protocol gave me a second chance at life. The oncology team's dedication and the hospital's world-class facilities exceeded every expectation. MediCare Elite is truly exceptional.",
    city: "Dubai, UAE",
  },
  {
    name: "Marcus Thompson",
    role: "Emergency Care Patient",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=85",
    rating: 5,
    text: "The emergency team responded in under 4 minutes and performed life-saving intervention. The speed, expertise, and technology they deployed was unlike anything I'd seen. MediCare Elite didn't just save my life — they gave me back my future.",
    city: "London, UK",
  },
  {
    name: "Yuki Tanaka",
    role: "Neurology Patient",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=85",
    rating: 5,
    text: "After years of misdiagnosis elsewhere, Dr. Okafor identified my condition within days. The multilingual team and seamless international patient services made my stay completely comfortable. I cannot recommend them highly enough.",
    city: "Tokyo, Japan",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-sky-500/20 text-sky-400 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-sky-500/20">
            Patient Stories
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
            Lives Changed,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">
              Stories Told
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Real stories from patients around the world whose lives were transformed by our care.
          </p>
        </motion.div>

        {/* Main testimonial */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 0.97 }}
              transition={{ duration: 0.4 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 sm:p-12 relative"
            >
              <Quote className="absolute top-8 right-8 w-16 h-16 text-sky-500/20" />
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-slate-200 text-xl sm:text-2xl leading-relaxed font-light mb-10 italic">
                &ldquo;{testimonials[current].text}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-sky-400/50">
                  <Image
                    src={testimonials[current].image}
                    alt={testimonials[current].name}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </div>
                <div>
                  <p className="text-white font-bold text-lg">{testimonials[current].name}</p>
                  <p className="text-sky-400 text-sm font-medium">{testimonials[current].role}</p>
                  <p className="text-slate-500 text-xs">{testimonials[current].city}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === current ? "bg-sky-400 w-8" : "bg-white/20 w-4 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-3">
              <motion.button
                onClick={prev}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </motion.button>
              <motion.button
                onClick={next}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 rounded-full bg-gradient-to-r from-sky-500 to-indigo-600 flex items-center justify-center text-white"
              >
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Bottom thumbnails */}
        <div className="flex justify-center gap-4 mt-12">
          {testimonials.map((t, i) => (
            <motion.button
              key={t.name}
              onClick={() => setCurrent(i)}
              whileHover={{ scale: 1.1 }}
              className={`relative w-12 h-12 rounded-full overflow-hidden border-2 transition-all ${
                i === current ? "border-sky-400 scale-110" : "border-white/20 opacity-50"
              }`}
            >
              <Image
                src={t.image}
                alt={t.name}
                fill
                className="object-cover"
                sizes="48px"
              />
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
