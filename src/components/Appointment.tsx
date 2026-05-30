"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { CalendarCheck, User, Phone, Mail, Stethoscope, CheckCircle2, Clock, Shield } from "lucide-react";
import Image from "next/image";

const depts = [
  "Cardiology", "Neurology", "Orthopedics", "Oncology",
  "Ophthalmology", "Pediatrics", "Emergency", "General Medicine",
];

const perks = [
  { icon: Clock, text: "Response within 2 hours" },
  { icon: Shield, text: "100% confidential" },
  { icon: CalendarCheck, text: "Same-day slots available" },
];

export default function Appointment() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", phone: "", dept: "", date: "", notes: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  return (
    <section id="appointment" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-[1fr_480px] gap-14 xl:gap-20 items-center">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full mb-5">
              Book Appointment
            </span>
            <h2 className="section-title text-slate-900 mb-5">
              Schedule Your{" "}
              <span
                className="clip-text"
                style={{ backgroundImage: "linear-gradient(135deg, #0ea5e9, #6366f1)" }}
              >
                Consultation
              </span>
            </h2>
            <p className="text-slate-500 text-[15px] leading-relaxed mb-8 max-w-lg">
              Connect with any of our 500+ specialists. Same-day appointments available
              for urgent needs. Multilingual coordinators ready to help you.
            </p>

            {/* Image */}
            <div className="relative h-64 rounded-3xl overflow-hidden shadow-2xl shadow-slate-200 mb-8">
              <Image
                src="https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=800&q=85"
                alt="Doctor consultation"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07112a]/60 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex justify-between items-end">
                <div className="text-white">
                  <p className="text-xs text-white/60 mb-0.5">Avg. Response</p>
                  <p className="text-2xl font-bold">&lt; 2 Hours</p>
                </div>
                <div className="text-white text-right">
                  <p className="text-xs text-white/60 mb-0.5">Availability</p>
                  <p className="text-2xl font-bold">24 / 7</p>
                </div>
              </div>
            </div>

            {/* Perks */}
            <div className="flex flex-col sm:flex-row gap-4">
              {perks.map((p) => (
                <div key={p.text} className="flex items-center gap-2.5 text-sm text-slate-600 font-medium">
                  <div className="w-8 h-8 bg-sky-100 rounded-xl flex items-center justify-center shrink-0">
                    <p.icon className="w-4 h-4 text-sky-600" />
                  </div>
                  {p.text}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-3xl p-10 text-center shadow-lg shadow-slate-200/60 border border-slate-100"
              >
                <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-emerald-500" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Appointment Requested!</h3>
                <p className="text-slate-500 text-[15px] mb-8">
                  Our coordinators will reach out within 2 hours to confirm your specialist and time slot.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold px-8 py-3 rounded-2xl"
                >
                  Book Another
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                className="bg-white rounded-3xl p-8 shadow-lg shadow-slate-200/60 border border-slate-100 space-y-4"
              >
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-0.5">Patient Details</h3>
                  <p className="text-slate-400 text-sm">All fields required unless marked optional.</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { name: "name", placeholder: "Full Name", icon: User, type: "text" },
                    { name: "phone", placeholder: "Phone Number", icon: Phone, type: "tel" },
                  ].map((f) => (
                    <label key={f.name} className="relative block">
                      <f.icon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300 pointer-events-none" />
                      <input
                        type={f.type}
                        name={f.name}
                        placeholder={f.placeholder}
                        required
                        value={form[f.name as keyof typeof form]}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 text-sm rounded-xl border border-slate-200 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent"
                      />
                    </label>
                  ))}
                </div>

                <label className="relative block">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300 pointer-events-none" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 text-sm rounded-xl border border-slate-200 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent"
                  />
                </label>

                <div className="grid sm:grid-cols-2 gap-4">
                  <label className="relative block">
                    <Stethoscope className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300 pointer-events-none" />
                    <select
                      name="dept"
                      required
                      value={form.dept}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 text-sm rounded-xl border border-slate-200 text-slate-700 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent appearance-none bg-white"
                    >
                      <option value="">Department</option>
                      {depts.map((d) => <option key={d} value={d}>{d}</option>)}
                    </select>
                  </label>
                  <label className="relative block">
                    <CalendarCheck className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300 pointer-events-none" />
                    <input
                      type="date"
                      name="date"
                      required
                      value={form.date}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 text-sm rounded-xl border border-slate-200 text-slate-700 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent"
                    />
                  </label>
                </div>

                <textarea
                  name="notes"
                  placeholder="Describe your symptoms or reason for visit (optional)"
                  rows={3}
                  value={form.notes}
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent resize-none"
                />

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold text-[15px] py-4 rounded-2xl shadow-lg shadow-sky-400/25 transition-shadow hover:shadow-sky-400/40"
                >
                  Request Appointment →
                </motion.button>

                <p className="text-center text-xs text-slate-400">
                  Your data is encrypted and never shared. HIPAA compliant.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
