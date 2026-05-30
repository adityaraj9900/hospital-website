"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Star, BadgeCheck } from "lucide-react";

const docs = [
  { name: "Dr. Sarah Mitchell",  role: "Chief of Cardiology",    exp: "18 yrs", rating: 4.9, reviews: 312, color: "#ef4444", available: true,  img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&q=85" },
  { name: "Dr. James Okafor",   role: "Lead Neurosurgeon",      exp: "22 yrs", rating: 5.0, reviews: 418, color: "#7c3aed", available: true,  img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=500&q=85" },
  { name: "Dr. Priya Sharma",   role: "Oncology Director",      exp: "15 yrs", rating: 4.8, reviews: 276, color: "#ec4899", available: false, img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=500&q=85" },
  { name: "Dr. Michael Chen",   role: "Orthopedic Surgeon",     exp: "20 yrs", rating: 4.9, reviews: 389, color: "#f59e0b", available: true,  img: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=500&q=85" },
  { name: "Dr. Amara Williams", role: "Paediatric Specialist",  exp: "12 yrs", rating: 4.9, reviews: 501, color: "#10b981", available: true,  img: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=500&q=85" },
  { name: "Dr. Robert Torres",  role: "Emergency Medicine",     exp: "16 yrs", rating: 4.7, reviews: 224, color: "#f97316", available: true,  img: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=500&q=85" },
];

export default function Doctors() {
  return (
    <section id="doctors" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14"
        >
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#0066cc] mb-3 block">Our Specialists</span>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-zinc-900 tracking-tight leading-[1.08]">
              Meet the world's<br />finest physicians
            </h2>
          </div>
          <p className="text-zinc-400 text-[15px] max-w-xs lg:text-right leading-relaxed">
            Internationally trained. Award-winning. Genuinely dedicated to every patient.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {docs.map((d, i) => (
            <motion.div key={d.name}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group bg-white rounded-3xl overflow-hidden border border-zinc-100 hover:shadow-xl hover:shadow-zinc-200/60 transition-all duration-300"
            >
              {/* Photo */}
              <div className="relative h-72 overflow-hidden bg-zinc-100">
                <Image src={d.img} alt={d.name} fill className="object-cover object-top group-hover:scale-105 transition-transform duration-500" sizes="(max-width:640px) 100vw,(max-width:1024px) 50vw,33vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/70 via-transparent to-transparent" />
                <div className="absolute top-4 right-4">
                  <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${d.available ? "bg-emerald-400 text-white" : "bg-zinc-500/70 text-white"}`}>
                    {d.available ? "● Available" : "● Busy"}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 flex items-center gap-1.5 bg-black/40 backdrop-blur-sm rounded-full px-3 py-1.5">
                  <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                  <span className="text-white text-xs font-bold">{d.rating}</span>
                  <span className="text-white/60 text-xs">({d.reviews})</span>
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-1">
                  <div>
                    <h3 className="font-bold text-zinc-900 text-[17px]">{d.name}</h3>
                    <p className="text-sm font-semibold mt-0.5" style={{ color: d.color }}>{d.role}</p>
                    <p className="text-zinc-400 text-xs mt-0.5">{d.exp} experience</p>
                  </div>
                  <BadgeCheck className="w-5 h-5 text-[#0066cc] shrink-0 mt-0.5" />
                </div>
                <motion.a href="#contact" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                  className="mt-5 flex items-center justify-center gap-1.5 bg-[#0066cc] hover:bg-blue-700 text-white text-[13px] font-semibold py-2.5 rounded-xl transition-colors w-full"
                >
                  Book Appointment
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
