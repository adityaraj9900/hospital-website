"use client";
import { motion } from "framer-motion";
import { HeartPulse, Phone, Mail, MapPin, ArrowUp } from "lucide-react";

const cols = {
  Services: ["Cardiology", "Neurology", "Orthopedics", "Oncology", "Pediatrics", "Emergency"],
  Hospital: ["About Us", "Our Doctors", "Research Center", "Careers", "News & Media", "Awards"],
  Patients: ["Book Appointment", "Patient Portal", "Health Records", "Insurance", "International", "Contact"],
};

const socials = [
  { label: "Facebook", d: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" },
  { label: "X/Twitter", d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
  { label: "Instagram", path: true },
  { label: "YouTube", d: "M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" },
];

export default function Footer() {
  return (
    <footer className="bg-[#07112a] text-slate-400">
      {/* CTA Banner */}
      <div className="bg-gradient-to-r from-sky-600 to-blue-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 60%), radial-gradient(circle at 80% 50%, rgba(255,255,255,0.2) 0%, transparent 60%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-1.5">
              Ready to Experience World-Class Care?
            </h3>
            <p className="text-sky-200 text-[15px]">
              Book today — same-day slots available for urgent cases.
            </p>
          </div>
          <motion.a
            href="#appointment"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="shrink-0 bg-white text-blue-700 font-bold text-[15px] px-8 py-4 rounded-2xl shadow-xl"
          >
            Book Appointment →
          </motion.a>
        </div>
      </div>

      {/* Main */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          {/* Brand */}
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-sky-500 to-blue-700 rounded-xl flex items-center justify-center">
                <HeartPulse className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-[17px] font-bold text-white">
                  MediCare<span className="text-sky-400">Elite</span>
                </p>
                <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-slate-500">
                  World-Class Care
                </p>
              </div>
            </a>
            <p className="text-[13.5px] leading-relaxed text-slate-500 mb-6 max-w-xs">
              25 years of healing excellence. 500+ world-class specialists serving patients from 70+ countries with compassion and precision.
            </p>
            <div className="space-y-2.5">
              <a href="tel:+18005551234" className="flex items-center gap-2.5 text-sm text-slate-500 hover:text-sky-400 transition-colors">
                <Phone className="w-3.5 h-3.5 text-slate-600" /> +1 (800) 555-1234
              </a>
              <a href="mailto:info@medicareelite.com" className="flex items-center gap-2.5 text-sm text-slate-500 hover:text-sky-400 transition-colors">
                <Mail className="w-3.5 h-3.5 text-slate-600" /> info@medicareelite.com
              </a>
              <p className="flex items-start gap-2.5 text-sm text-slate-500">
                <MapPin className="w-3.5 h-3.5 text-slate-600 shrink-0 mt-0.5" /> 123 Health Blvd, New York, NY 10001
              </p>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(cols).map(([title, items]) => (
            <div key={title}>
              <h4 className="text-white text-sm font-semibold mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-[13px] text-slate-500 hover:text-sky-400 transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.06] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[12.5px] text-slate-600">
            © 2024 MediCare Elite. All rights reserved. JCI & ISO 9001 Accredited.
          </p>
          <div className="flex items-center gap-2.5">
            {socials.map(({ label, d, path }) => (
              <motion.a
                key={label}
                href="#"
                aria-label={label}
                whileHover={{ scale: 1.12, y: -2 }}
                className="w-8 h-8 rounded-lg bg-white/[0.05] flex items-center justify-center text-slate-500 hover:text-sky-400 hover:bg-sky-500/10 transition-colors"
              >
                <svg className="w-4 h-4" fill={path ? "none" : "currentColor"} stroke={path ? "currentColor" : undefined} strokeWidth={path ? 2 : undefined} viewBox="0 0 24 24">
                  {path ? (
                    <>
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <circle cx="12" cy="12" r="4" fill="currentColor" stroke="none" />
                      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                    </>
                  ) : (
                    <path d={d} />
                  )}
                </svg>
              </motion.a>
            ))}
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500 to-blue-700 flex items-center justify-center text-white ml-1"
            >
              <ArrowUp className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
