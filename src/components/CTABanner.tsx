"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { CalendarCheck, CheckCircle2, User, Phone, Mail, Stethoscope } from "lucide-react";

const depts = ["Cardiology","Neurology","Orthopedics","Oncology","Ophthalmology","Pediatrics","Emergency","General Medicine"];

export default function CTABanner() {
  const [sent, setSent] = useState(false);
  const [f, setF] = useState({ name:"", email:"", phone:"", dept:"", date:"" });
  const ch = (e: React.ChangeEvent<HTMLInputElement|HTMLSelectElement>) => setF(p => ({ ...p, [e.target.name]: e.target.value }));

  return (
    <section id="contact" className="py-24 bg-[#0a0f1e] relative overflow-hidden">
      {/* Decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-14 xl:gap-20 items-center">

          {/* Left */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <span className="text-xs font-bold uppercase tracking-[0.15em] text-blue-400 mb-4 block">Book Appointment</span>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.08] mb-6">
              Start your journey<br />to better health<br />
              <span className="grad-blue">today.</span>
            </h2>
            <p className="text-zinc-400 text-[15px] leading-relaxed mb-10 max-w-md">
              Fill out the form and our team will confirm your appointment within 2 hours. Same-day slots available for urgent cases.
            </p>
            <div className="space-y-4">
              {[
                { icon: CalendarCheck, t: "Same-day appointments available", s: "For urgent and priority cases" },
                { icon: CheckCircle2,  t: "Confirmation within 2 hours",     s: "Via SMS and email" },
                { icon: Phone,         t: "24/7 helpline support",           s: "+1 (800) 555-9111" },
              ].map(({ icon: Icon, t, s }) => (
                <div key={t} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-[14px]">{t}</p>
                    <p className="text-zinc-500 text-xs">{s}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            {sent ? (
              <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                className="bg-white rounded-3xl p-10 text-center"
              >
                <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-emerald-500" />
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 mb-3">You're all set!</h3>
                <p className="text-zinc-500 mb-8">We'll confirm your appointment within 2 hours by email and phone.</p>
                <button onClick={() => setSent(false)} className="bg-[#0066cc] text-white font-semibold px-8 py-3 rounded-xl hover:bg-blue-700 transition-colors">
                  Book Another
                </button>
              </motion.div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                className="bg-white rounded-3xl p-8 space-y-4"
              >
                <h3 className="text-xl font-bold text-zinc-900 mb-1">Patient Details</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {([["name","Full Name",User,"text"],["phone","Phone Number",Phone,"tel"]] as const).map(([n,ph,Icon,t]) => (
                    <label key={n} className="relative block">
                      <Icon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-300 pointer-events-none" />
                      <input type={t} name={n} placeholder={ph} required value={f[n]} onChange={ch}
                        className="w-full pl-10 pr-4 py-3 text-sm rounded-xl border border-zinc-200 text-zinc-800 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#0066cc]/40 focus:border-[#0066cc]"
                      />
                    </label>
                  ))}
                </div>
                <label className="relative block">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-300 pointer-events-none" />
                  <input type="email" name="email" placeholder="Email Address" required value={f.email} onChange={ch}
                    className="w-full pl-10 pr-4 py-3 text-sm rounded-xl border border-zinc-200 text-zinc-800 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#0066cc]/40 focus:border-[#0066cc]"
                  />
                </label>
                <div className="grid sm:grid-cols-2 gap-4">
                  <label className="relative block">
                    <Stethoscope className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-300 pointer-events-none" />
                    <select name="dept" required value={f.dept} onChange={ch}
                      className="w-full pl-10 pr-4 py-3 text-sm rounded-xl border border-zinc-200 text-zinc-700 focus:outline-none focus:ring-2 focus:ring-[#0066cc]/40 focus:border-[#0066cc] appearance-none bg-white"
                    >
                      <option value="">Department</option>
                      {depts.map(d => <option key={d}>{d}</option>)}
                    </select>
                  </label>
                  <label className="relative block">
                    <CalendarCheck className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-300 pointer-events-none" />
                    <input type="date" name="date" required value={f.date} onChange={ch}
                      className="w-full pl-10 pr-4 py-3 text-sm rounded-xl border border-zinc-200 text-zinc-700 focus:outline-none focus:ring-2 focus:ring-[#0066cc]/40 focus:border-[#0066cc]"
                    />
                  </label>
                </div>
                <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                  className="w-full bg-[#0066cc] hover:bg-blue-700 text-white font-semibold text-[15px] py-4 rounded-2xl shadow-lg shadow-blue-600/25 transition-colors"
                >
                  Request Appointment →
                </motion.button>
                <p className="text-center text-xs text-zinc-400">HIPAA compliant · End-to-end encrypted · Never shared</p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
