"use client";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Our Location",
    lines: ["MediCare Elite Medical Center", "123 Health Boulevard, Suite 500", "New York, NY 10001"],
    color: "from-sky-400 to-blue-600",
    bg: "bg-sky-50",
    iconColor: "text-sky-500",
  },
  {
    icon: Phone,
    title: "Call Us",
    lines: ["Emergency: +1 (800) 555-9111", "Appointments: +1 (800) 555-1234", "International: +1 (212) 555-8800"],
    color: "from-emerald-400 to-teal-600",
    bg: "bg-emerald-50",
    iconColor: "text-emerald-500",
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: ["info@medicareelite.com", "appointments@medicareelite.com", "international@medicareelite.com"],
    color: "from-indigo-400 to-purple-600",
    bg: "bg-indigo-50",
    iconColor: "text-indigo-500",
  },
  {
    icon: Clock,
    title: "Working Hours",
    lines: ["Emergency: 24/7", "Outpatient: Mon–Fri 7AM–9PM", "Weekend Clinics: Sat–Sun 8AM–5PM"],
    color: "from-amber-400 to-orange-500",
    bg: "bg-amber-50",
    iconColor: "text-amber-500",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-sky-100 text-sky-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Get In Touch
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-5 leading-tight">
            We&apos;re Here{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-600">
              For You
            </span>
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Reach out anytime. Our team is always ready to help you find the right care.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-2xl p-6 shadow-md shadow-slate-100 border border-slate-100 hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-12 h-12 ${item.bg} rounded-xl flex items-center justify-center mb-5`}>
                <item.icon className={`w-6 h-6 ${item.iconColor}`} />
              </div>
              <h3 className="font-bold text-slate-900 mb-3">{item.title}</h3>
              {item.lines.map((line, j) => (
                <p key={j} className={`text-sm leading-relaxed ${j === 0 ? "text-slate-700 font-medium" : "text-slate-500"}`}>
                  {line}
                </p>
              ))}
            </motion.div>
          ))}
        </div>

        {/* Map placeholder + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden h-72 bg-gradient-to-br from-slate-800 to-slate-900 shadow-2xl flex items-center justify-center"
        >
          <div className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            }}
          />
          <div className="text-center text-white z-10">
            <div className="w-16 h-16 bg-gradient-to-br from-sky-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-2">123 Health Boulevard, New York</h3>
            <p className="text-slate-400 mb-6">MediCare Elite Medical Center — Suite 500</p>
            <motion.a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg"
            >
              Get Directions
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
