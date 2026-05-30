"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Star, ArrowLeft, ArrowRight } from "lucide-react";

const reviews = [
  { name: "Emily Johnson",   role: "Cardiac Surgery",     loc: "New York, USA",        img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=85", rating: 5, text: "After my open-heart surgery I expected a long, painful recovery. The team at MediCare Elite had me walking in two days. Dr. Mitchell is nothing short of extraordinary — her skill and the entire team's compassion changed my life." },
  { name: "David Park",      role: "Knee Reconstruction", loc: "Seoul, South Korea",   img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=85", rating: 5, text: "I flew from Seoul specifically to see Dr. Chen. The robotic surgery was unlike anything I experienced at home — the precision was remarkable and I was back on a ski slope within six weeks. Worth every mile of travel." },
  { name: "Fatima Al-Rashid",role: "Cancer Treatment",    loc: "Dubai, UAE",           img: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&q=85", rating: 5, text: "When I was diagnosed, I was terrified. Dr. Sharma's team built a treatment plan around my specific genome — something I'd never heard of before. Two years later I am cancer-free. MediCare Elite gave me back my life." },
  { name: "Marcus Thompson", role: "Emergency Trauma",    loc: "London, UK",           img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=85", rating: 5, text: "I was in a critical accident while visiting New York. The emergency team responded in under four minutes and performed life-saving surgery that same hour. The speed and precision of this hospital is genuinely unmatched." },
];

export default function Testimonials() {
  const [i, setI] = useState(0);
  const prev = () => setI((c) => (c - 1 + reviews.length) % reviews.length);
  const next = () => setI((c) => (c + 1) % reviews.length);
  const r = reviews[i];

  return (
    <section id="about" className="py-24 lg:py-32 bg-[#f5f3ee]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#0066cc] mb-3 block">Patient Stories</span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-zinc-900 tracking-tight">Real people, real outcomes</h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Large testimonial */}
          <div className="bg-white rounded-3xl p-8 lg:p-14 shadow-sm relative overflow-hidden">
            {/* Quote mark */}
            <div className="absolute top-8 right-8 text-9xl font-serif text-zinc-100 leading-none select-none">"</div>

            <AnimatePresence mode="wait">
              <motion.div key={i}
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4 }}
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(r.rating)].map((_, j) => <Star key={j} className="w-5 h-5 fill-amber-400 text-amber-400" />)}
                </div>
                <p className="text-zinc-700 text-xl lg:text-2xl leading-relaxed font-light italic mb-10 relative z-10">
                  "{r.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-zinc-100 shrink-0">
                    <Image src={r.img} alt={r.name} fill className="object-cover" sizes="56px" />
                  </div>
                  <div>
                    <p className="font-bold text-zinc-900 text-[16px]">{r.name}</p>
                    <p className="text-[#0066cc] text-sm font-medium">{r.role}</p>
                    <p className="text-zinc-400 text-xs">{r.loc}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex gap-2">
              {reviews.map((_, j) => (
                <button key={j} onClick={() => setI(j)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${j === i ? "bg-[#0066cc] w-8" : "bg-zinc-300 w-4 hover:bg-zinc-400"}`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <motion.button onClick={prev} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
                className="w-11 h-11 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-500 hover:border-zinc-400 hover:text-zinc-900 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
              </motion.button>
              <motion.button onClick={next} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
                className="w-11 h-11 rounded-full bg-[#0066cc] flex items-center justify-center text-white"
              >
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
