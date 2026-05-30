"use client";
import { motion } from "framer-motion";
import { CheckCircle2, Play } from "lucide-react";
import Image from "next/image";

const highlights = [
  "JCI-accredited hospital with international quality standards",
  "Robotic surgery suites with da Vinci precision technology",
  "AI-powered diagnostic labs for faster, accurate results",
  "Multilingual staff and international patient services",
  "Luxurious patient rooms with hotel-grade amenities",
  "Dedicated research center with 100+ active clinical trials",
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Images side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=500&q=85"
                    alt="Hospital interior"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="relative h-44 rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1551076805-e1869033e561?w=500&q=85"
                    alt="Medical technology"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative h-44 rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=500&q=85"
                    alt="Research lab"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=500&q=85"
                    alt="Doctor consultation"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              </div>
            </div>

            {/* Play button overlay */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="w-16 h-16 bg-white rounded-full shadow-2xl flex items-center justify-center group">
                <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-indigo-600 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Play className="w-5 h-5 text-white fill-white ml-0.5" />
                </div>
              </div>
            </motion.button>

            {/* Award badge */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, type: "spring" }}
              className="absolute -bottom-6 -right-4 bg-gradient-to-br from-sky-500 to-indigo-600 rounded-2xl p-5 shadow-2xl text-white"
            >
              <p className="text-4xl font-extrabold">25+</p>
              <p className="text-sm font-medium opacity-90">Years of Excellence</p>
            </motion.div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:pl-8"
          >
            <span className="inline-block bg-sky-100 text-sky-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              About MediCare Elite
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight mb-6">
              Redefining{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-600">
                Healthcare
              </span>{" "}
              Excellence
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-6">
              Since 1999, MediCare Elite has been at the forefront of medical innovation.
              We combine world-class expertise with cutting-edge technology to deliver
              care that goes beyond treatment — we deliver healing, dignity, and hope.
            </p>
            <p className="text-slate-500 leading-relaxed mb-8">
              Our multidisciplinary approach brings together specialists from around the globe,
              ensuring every patient receives a personalized treatment plan backed by the
              latest evidence-based medicine and compassionate human care.
            </p>

            <div className="space-y-3 mb-10">
              {highlights.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-sky-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-600 text-sm leading-relaxed">{item}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="#services"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-semibold px-8 py-4 rounded-2xl text-center shadow-lg shadow-sky-200"
              >
                Explore Services
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="border-2 border-slate-200 text-slate-700 font-semibold px-8 py-4 rounded-2xl text-center hover:border-sky-300 hover:text-sky-600 transition-colors"
              >
                Contact Us
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
