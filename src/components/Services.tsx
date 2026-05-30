"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const services = [
  {
    title: "Cardiology",
    tag: "Heart & Vascular",
    image: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=600&q=80",
    accent: "#ef4444",
    desc: "Minimally invasive cardiac procedures, 24/7 heart monitoring, and world-leading bypass surgery.",
  },
  {
    title: "Neurology",
    tag: "Brain & Spine",
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&q=80",
    accent: "#8b5cf6",
    desc: "Advanced neurological diagnostics, deep brain stimulation, and stroke intervention.",
  },
  {
    title: "Orthopedics",
    tag: "Bone & Joint",
    image: "https://images.unsplash.com/photo-1597764690523-15bea4c581c9?w=600&q=80",
    accent: "#f59e0b",
    desc: "Robotic-assisted joint replacement, sports injuries, and complex spinal reconstruction.",
  },
  {
    title: "Oncology",
    tag: "Cancer Care",
    image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=600&q=80",
    accent: "#ec4899",
    desc: "Personalized immunotherapy, precision radiation, and multidisciplinary tumour boards.",
  },
  {
    title: "Ophthalmology",
    tag: "Eye & Vision",
    image: "https://images.unsplash.com/photo-1512684584886-f5b7aa946f38?w=600&q=80",
    accent: "#0ea5e9",
    desc: "LASIK, cataract surgery, retinal treatment, and corneal transplantation.",
  },
  {
    title: "Pediatrics",
    tag: "Children's Health",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80",
    accent: "#10b981",
    desc: "Comprehensive child health in a safe, nurturing environment designed for young patients.",
  },
  {
    title: "Emergency",
    tag: "24/7 Trauma",
    image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=600&q=80",
    accent: "#f97316",
    desc: "Fastest triage times in the region. Level I Trauma Centre staffed around the clock.",
  },
  {
    title: "General Medicine",
    tag: "Preventive Care",
    image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&q=80",
    accent: "#6366f1",
    desc: "Holistic health assessments, chronic disease management, and executive health plans.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14"
        >
          <div>
            <span className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full mb-4">
              48 Specialties
            </span>
            <h2 className="section-title text-slate-900">
              Expert Care Across<br />
              <span
                className="clip-text"
                style={{ backgroundImage: "linear-gradient(135deg, #0ea5e9, #6366f1)" }}
              >
                Every Specialty
              </span>
            </h2>
          </div>
          <p className="text-slate-500 text-[15px] leading-relaxed max-w-xs sm:text-right">
            Powered by cutting-edge technology and internationally trained specialists.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="group relative bg-white rounded-2xl overflow-hidden cursor-pointer card-hover border border-slate-100"
              style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                {/* Overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-50 transition-opacity duration-300"
                  style={{ background: `linear-gradient(135deg, ${s.accent}88, ${s.accent}22)` }}
                />
                {/* Tag */}
                <div className="absolute top-3 left-3">
                  <span
                    className="text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
                    style={{ background: s.accent }}
                  >
                    {s.tag}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-slate-900 text-[16px] group-hover:text-sky-600 transition-colors">
                    {s.title}
                  </h3>
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-1 group-hover:translate-y-0 shrink-0"
                    style={{ background: `${s.accent}18`, color: s.accent }}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
                <p className="text-slate-400 text-[13px] leading-relaxed">{s.desc}</p>
              </div>

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                style={{ background: s.accent }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
