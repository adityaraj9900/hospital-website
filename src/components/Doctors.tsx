"use client";
import { motion } from "framer-motion";
import { Star, Award, Phone } from "lucide-react";
import Image from "next/image";

const doctors = [
  {
    name: "Dr. Sarah Mitchell",
    specialty: "Chief Cardiologist",
    experience: "18 Years Exp.",
    rating: 4.9,
    reviews: 312,
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=85",
    awards: ["AHA Fellow", "Best Cardiologist 2023"],
    available: true,
  },
  {
    name: "Dr. James Okafor",
    specialty: "Lead Neurosurgeon",
    experience: "22 Years Exp.",
    rating: 5.0,
    reviews: 418,
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=85",
    awards: ["Brain Surgery Pioneer", "Top Doctor 2024"],
    available: true,
  },
  {
    name: "Dr. Priya Sharma",
    specialty: "Oncology Director",
    experience: "15 Years Exp.",
    rating: 4.8,
    reviews: 276,
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=85",
    awards: ["Cancer Research Award", "WHO Ambassador"],
    available: false,
  },
  {
    name: "Dr. Michael Chen",
    specialty: "Orthopedic Surgeon",
    experience: "20 Years Exp.",
    rating: 4.9,
    reviews: 389,
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&q=85",
    awards: ["Robotic Surgery Expert", "Top Surgeon 2023"],
    available: true,
  },
  {
    name: "Dr. Amara Williams",
    specialty: "Pediatric Specialist",
    experience: "12 Years Exp.",
    rating: 4.9,
    reviews: 501,
    image: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=400&q=85",
    awards: ["Children's Health Champion"],
    available: true,
  },
  {
    name: "Dr. Robert Torres",
    specialty: "Emergency Medicine",
    experience: "16 Years Exp.",
    rating: 4.7,
    reviews: 224,
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&q=85",
    awards: ["Trauma Expert", "Fastest Response Award"],
    available: true,
  },
];

export default function Doctors() {
  return (
    <section id="doctors" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 to-white" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-indigo-100 text-indigo-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Our Specialists
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-5 leading-tight">
            Meet Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-600">
              Expert Physicians
            </span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Internationally trained, award-winning doctors dedicated to your health and well-being.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor, i) => (
            <motion.div
              key={doctor.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg shadow-slate-100/60 border border-slate-100 hover:shadow-2xl hover:shadow-sky-100/50 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                <div className="absolute top-4 right-4">
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                    doctor.available
                      ? "bg-emerald-400 text-white"
                      : "bg-slate-400 text-white"
                  }`}>
                    {doctor.available ? "Available" : "Busy"}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-1 text-white mb-1">
                    {[...Array(Math.floor(doctor.rating))].map((_, j) => (
                      <Star key={j} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="text-xs ml-1 opacity-90">{doctor.rating} ({doctor.reviews})</span>
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="font-bold text-slate-900 text-xl mb-0.5 group-hover:text-sky-600 transition-colors">
                  {doctor.name}
                </h3>
                <p className="text-sky-500 font-semibold text-sm mb-1">{doctor.specialty}</p>
                <p className="text-slate-400 text-xs mb-4">{doctor.experience}</p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {doctor.awards.map((award) => (
                    <span
                      key={award}
                      className="flex items-center gap-1 bg-indigo-50 text-indigo-600 text-xs font-medium px-2.5 py-1 rounded-full"
                    >
                      <Award className="w-3 h-3" />
                      {award}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <motion.a
                    href="#appointment"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex-1 bg-gradient-to-r from-sky-500 to-indigo-600 text-white text-sm font-semibold py-2.5 rounded-xl text-center"
                  >
                    Book Now
                  </motion.a>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-500 hover:text-sky-500 hover:border-sky-200 hover:bg-sky-50 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sky-600 font-semibold hover:text-indigo-600 transition-colors"
          >
            View all 500+ specialists →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
