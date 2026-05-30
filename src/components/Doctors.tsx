"use client";
import { motion } from "framer-motion";
import { Star, BadgeCheck, CalendarCheck } from "lucide-react";
import Image from "next/image";

const doctors = [
  {
    name: "Dr. Sarah Mitchell",
    title: "Chief of Cardiology",
    exp: "18 yrs",
    rating: 4.9,
    reviews: 312,
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&q=85",
    color: "#ef4444",
    available: true,
  },
  {
    name: "Dr. James Okafor",
    title: "Lead Neurosurgeon",
    exp: "22 yrs",
    rating: 5.0,
    reviews: 418,
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=500&q=85",
    color: "#8b5cf6",
    available: true,
  },
  {
    name: "Dr. Priya Sharma",
    title: "Oncology Director",
    exp: "15 yrs",
    rating: 4.8,
    reviews: 276,
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=500&q=85",
    color: "#ec4899",
    available: false,
  },
  {
    name: "Dr. Michael Chen",
    title: "Orthopedic Surgeon",
    exp: "20 yrs",
    rating: 4.9,
    reviews: 389,
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=500&q=85",
    color: "#f59e0b",
    available: true,
  },
  {
    name: "Dr. Amara Williams",
    title: "Paediatric Specialist",
    exp: "12 yrs",
    rating: 4.9,
    reviews: 501,
    image: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=500&q=85",
    color: "#10b981",
    available: true,
  },
  {
    name: "Dr. Robert Torres",
    title: "Emergency Medicine",
    exp: "16 yrs",
    rating: 4.7,
    reviews: 224,
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=500&q=85",
    color: "#f97316",
    available: true,
  },
];

export default function Doctors() {
  return (
    <section id="doctors" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full mb-4">
            Our Specialists
          </span>
          <h2 className="section-title text-slate-900 mb-4">
            Meet the{" "}
            <span
              className="clip-text"
              style={{ backgroundImage: "linear-gradient(135deg, #0ea5e9, #6366f1)" }}
            >
              World's Best
            </span>
          </h2>
          <p className="text-slate-400 text-[15px] max-w-lg mx-auto">
            Award-winning physicians trained at the world's top institutions. Genuinely dedicated to your health.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctors.map((doc, i) => (
            <motion.div
              key={doc.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="group relative bg-white rounded-3xl overflow-hidden border border-slate-100 card-hover"
              style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden bg-slate-100">
                <Image
                  src={doc.image}
                  alt={doc.name}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Gradient at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />

                {/* Available badge */}
                <div className="absolute top-4 right-4">
                  <span
                    className={`text-xs font-bold px-3 py-1 rounded-full ${
                      doc.available ? "bg-emerald-400 text-white" : "bg-slate-600/80 text-white"
                    }`}
                  >
                    {doc.available ? "● Available" : "● Busy"}
                  </span>
                </div>

                {/* Rating overlay */}
                <div className="absolute bottom-4 left-4 flex items-center gap-1.5 bg-black/40 backdrop-blur-sm rounded-full px-3 py-1.5">
                  <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  <span className="text-white text-xs font-bold">{doc.rating}</span>
                  <span className="text-white/60 text-xs">({doc.reviews})</span>
                </div>

                {/* Experience badge */}
                <div
                  className="absolute top-4 left-4 text-white text-[11px] font-bold px-2.5 py-1 rounded-lg"
                  style={{ background: doc.color + "cc" }}
                >
                  {doc.exp} exp
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-1">
                  <div>
                    <h3 className="font-bold text-slate-900 text-[17px]">{doc.name}</h3>
                    <p className="text-sm font-medium mt-0.5" style={{ color: doc.color }}>
                      {doc.title}
                    </p>
                  </div>
                  <BadgeCheck className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                </div>

                <div className="flex items-center gap-3 mt-5">
                  <motion.a
                    href="#appointment"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex-1 flex items-center justify-center gap-1.5 bg-gradient-to-r from-sky-500 to-blue-600 text-white text-[13px] font-semibold py-2.5 rounded-xl"
                  >
                    <CalendarCheck className="w-4 h-4" />
                    Book Now
                  </motion.a>
                  <button className="w-10 h-10 rounded-xl border border-slate-200 flex items-center justify-center text-slate-400 hover:text-sky-500 hover:border-sky-200 hover:bg-sky-50 transition-colors shrink-0">
                    <Star className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <a href="#contact" className="inline-flex items-center gap-2 text-sky-600 font-semibold text-[15px] hover:text-blue-700 transition-colors">
            Browse all 500+ specialists →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
