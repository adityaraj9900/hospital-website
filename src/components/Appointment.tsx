"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, User, Phone, Mail, Stethoscope, CheckCircle2 } from "lucide-react";
import Image from "next/image";

const departments = [
  "Cardiology", "Neurology", "Orthopedics", "Oncology",
  "Ophthalmology", "Pediatrics", "Emergency", "General Medicine",
];

export default function Appointment() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", phone: "", department: "", date: "", message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="appointment" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-sky-50/60 to-indigo-50/60" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block bg-emerald-100 text-emerald-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              Book Appointment
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight mb-6">
              Schedule Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-600">
                Consultation
              </span>
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-8">
              Book with any of our 500+ specialists. We offer same-day appointments for urgent cases
              and flexible scheduling for routine consultations.
            </p>

            <div className="relative h-72 rounded-2xl overflow-hidden shadow-2xl mb-8">
              <Image
                src="https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=700&q=85"
                alt="Doctor consultation"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                <div className="text-white">
                  <p className="text-sm opacity-80">Response time</p>
                  <p className="text-2xl font-bold">Under 2 Hours</p>
                </div>
                <div className="text-white text-right">
                  <p className="text-sm opacity-80">Availability</p>
                  <p className="text-2xl font-bold">24 / 7</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-3xl p-10 shadow-xl text-center border border-slate-100"
              >
                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-emerald-500" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Appointment Requested!</h3>
                <p className="text-slate-500 mb-6">
                  Our team will contact you within 2 hours to confirm your appointment with the specialist.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-semibold px-8 py-3 rounded-xl"
                >
                  Book Another
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100 space-y-5"
              >
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Patient Details</h3>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Full Name"
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent text-sm"
                    />
                  </div>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      placeholder="Phone Number"
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent text-sm"
                    />
                  </div>
                </div>

                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="Email Address"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent text-sm"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="relative">
                    <Stethoscope className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <select
                      name="department"
                      value={form.department}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-slate-700 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent text-sm appearance-none bg-white"
                    >
                      <option value="">Select Department</option>
                      {departments.map((d) => (
                        <option key={d} value={d}>{d}</option>
                      ))}
                    </select>
                  </div>
                  <div className="relative">
                    <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="date"
                      name="date"
                      value={form.date}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-slate-700 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent text-sm"
                    />
                  </div>
                </div>

                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Describe your symptoms or concerns (optional)"
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent text-sm resize-none"
                />

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(14,165,233,0.3)" }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-semibold py-4 rounded-2xl shadow-lg shadow-sky-200 transition-all"
                >
                  Request Appointment
                </motion.button>

                <p className="text-xs text-slate-400 text-center">
                  By submitting, you agree to our privacy policy. We never share your medical data.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
