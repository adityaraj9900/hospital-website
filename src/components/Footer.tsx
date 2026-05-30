"use client";
import { motion } from "framer-motion";
import { Heart, Phone, Mail, MapPin, ArrowUp } from "lucide-react";

const footerLinks = {
  Services: ["Cardiology", "Neurology", "Orthopedics", "Oncology", "Pediatrics", "Emergency Care"],
  Hospital: ["About Us", "Our Doctors", "Research Center", "News & Media", "Careers", "Awards"],
  Patients: ["Book Appointment", "Patient Portal", "Health Records", "Insurance", "International Patients", "Contact"],
};

const socials = [
  {
    label: "Facebook",
    href: "#",
    svg: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
  },
  {
    label: "X / Twitter",
    href: "#",
    svg: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    svg: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    svg: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* CTA Banner */}
      <div className="bg-gradient-to-r from-sky-600 via-indigo-600 to-purple-700 animated-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-1">
                Ready to Experience World-Class Care?
              </h3>
              <p className="text-white/80">
                Book your appointment today. Same-day slots available for urgent cases.
              </p>
            </div>
            <motion.a
              href="#appointment"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="flex-shrink-0 bg-white text-indigo-700 font-bold px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow"
            >
              Book Appointment →
            </motion.a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2">
            <a href="#home" className="flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 bg-gradient-to-br from-sky-500 to-indigo-600 rounded-xl flex items-center justify-center">
                <Heart className="w-5 h-5 text-white fill-white" />
              </div>
              <div>
                <span className="text-xl font-bold text-white">
                  MediCare<span className="text-sky-400">Elite</span>
                </span>
                <p className="text-xs text-slate-400">World-Class Healthcare</p>
              </div>
            </a>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-xs">
              25 years of healing excellence. Your health is our highest calling —
              delivered by 500+ world-class specialists with compassion and precision.
            </p>
            <div className="space-y-2 text-sm">
              <a href="tel:+18005551234" className="flex items-center gap-2 text-slate-400 hover:text-sky-400 transition-colors">
                <Phone className="w-4 h-4" /> +1 (800) 555-1234
              </a>
              <a href="mailto:info@medicareelite.com" className="flex items-center gap-2 text-slate-400 hover:text-sky-400 transition-colors">
                <Mail className="w-4 h-4" /> info@medicareelite.com
              </a>
              <p className="flex items-center gap-2 text-slate-400">
                <MapPin className="w-4 h-4 flex-shrink-0" /> 123 Health Blvd, New York, NY
              </p>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-slate-400 text-sm hover:text-sky-400 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © 2024 MediCare Elite. All rights reserved. JCI Accredited Hospital.
          </p>
          <div className="flex items-center gap-3">
            {socials.map(({ label, href, svg }) => (
              <motion.a
                key={label}
                href={href}
                aria-label={label}
                whileHover={{ scale: 1.15, y: -2 }}
                className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:text-sky-400 hover:bg-slate-700 transition-colors"
              >
                {svg}
              </motion.a>
            ))}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-9 h-9 bg-gradient-to-br from-sky-500 to-indigo-600 rounded-lg flex items-center justify-center text-white ml-2"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
