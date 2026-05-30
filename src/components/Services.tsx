"use client";
import { motion } from "framer-motion";
import { Heart, Brain, Eye, Bone, Baby, Activity, Stethoscope, Microscope, ArrowRight } from "lucide-react";
import Image from "next/image";

const services = [
  {
    icon: Heart,
    title: "Cardiology",
    description: "State-of-the-art cardiac care with minimally invasive procedures and 24/7 heart monitoring.",
    image: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=400&q=80",
    color: "from-red-400 to-rose-600",
    bg: "bg-red-50",
    iconColor: "text-red-500",
  },
  {
    icon: Brain,
    title: "Neurology",
    description: "Advanced neurological diagnostics and treatment from world-leading brain specialists.",
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&q=80",
    color: "from-purple-400 to-violet-600",
    bg: "bg-purple-50",
    iconColor: "text-purple-500",
  },
  {
    icon: Eye,
    title: "Ophthalmology",
    description: "Laser eye surgery, cataract removal, and comprehensive vision care by expert surgeons.",
    image: "https://images.unsplash.com/photo-1512684584886-f5b7aa946f38?w=400&q=80",
    color: "from-sky-400 to-blue-600",
    bg: "bg-sky-50",
    iconColor: "text-sky-500",
  },
  {
    icon: Bone,
    title: "Orthopedics",
    description: "Joint replacement, sports injury treatment, and spine care with robotic-assisted surgery.",
    image: "https://images.unsplash.com/photo-1597764690523-15bea4c581c9?w=400&q=80",
    color: "from-amber-400 to-orange-600",
    bg: "bg-amber-50",
    iconColor: "text-amber-500",
  },
  {
    icon: Baby,
    title: "Pediatrics",
    description: "Comprehensive child health services in a warm, child-friendly environment.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&q=80",
    color: "from-emerald-400 to-teal-600",
    bg: "bg-emerald-50",
    iconColor: "text-emerald-500",
  },
  {
    icon: Activity,
    title: "Emergency Care",
    description: "Round-the-clock emergency response with the fastest triage times in the region.",
    image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=400&q=80",
    color: "from-indigo-400 to-blue-600",
    bg: "bg-indigo-50",
    iconColor: "text-indigo-500",
  },
  {
    icon: Stethoscope,
    title: "General Medicine",
    description: "Holistic general healthcare, preventive screenings, and chronic disease management.",
    image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=400&q=80",
    color: "from-cyan-400 to-sky-600",
    bg: "bg-cyan-50",
    iconColor: "text-cyan-500",
  },
  {
    icon: Microscope,
    title: "Oncology",
    description: "Personalized cancer treatment combining immunotherapy, chemotherapy, and precision medicine.",
    image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=400&q=80",
    color: "from-pink-400 to-rose-600",
    bg: "bg-pink-50",
    iconColor: "text-pink-500",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-sky-100 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl opacity-60" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-100 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl opacity-60" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-sky-100 text-sky-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Medical Services
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-5 leading-tight">
            World-Class Care{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-600">
              Across Every Specialty
            </span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
            48 specialized departments powered by the latest medical technology and staffed by internationally trained physicians.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={{ y: -8 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-md shadow-slate-100 border border-slate-100 hover:shadow-xl hover:shadow-slate-200/60 transition-all duration-300 cursor-pointer"
            >
              <div className="relative h-36 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-60 group-hover:opacity-70 transition-opacity`} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/30">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-slate-900 text-lg mb-2 group-hover:text-sky-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">{service.description}</p>
                <div className="flex items-center gap-1 text-sky-500 text-sm font-semibold group-hover:gap-2 transition-all">
                  Learn more <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
