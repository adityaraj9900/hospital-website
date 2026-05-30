"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, HeartPulse } from "lucide-react";

const links = [
  { label: "Services", href: "#services" },
  { label: "Doctors", href: "#doctors" },
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/96 backdrop-blur-xl shadow-sm border-b border-slate-100"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 h-[72px] flex items-center justify-between gap-8">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 shrink-0">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-sky-500 to-blue-700 flex items-center justify-center shadow-lg shadow-sky-500/30">
              <HeartPulse className="w-5 h-5 text-white" />
            </div>
            <div className="leading-tight">
              <p className={`text-[17px] font-bold tracking-tight ${scrolled ? "text-slate-900" : "text-white"}`}>
                MediCare<span className="text-sky-400">Elite</span>
              </p>
              <p className={`text-[9px] font-semibold uppercase tracking-[0.15em] ${scrolled ? "text-slate-400" : "text-sky-300/80"}`}>
                World-Class Care
              </p>
            </div>
          </a>

          {/* Links */}
          <div className="hidden lg:flex items-center gap-0.5">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className={`px-4 py-2 rounded-xl text-[13.5px] font-medium transition-all duration-200 ${
                  scrolled
                    ? "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
                    : "text-white/75 hover:text-white hover:bg-white/10"
                }`}
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4 shrink-0">
            <a
              href="tel:+18005551234"
              className={`flex items-center gap-2 text-[13px] font-medium transition-colors ${
                scrolled ? "text-slate-500 hover:text-sky-600" : "text-white/75 hover:text-white"
              }`}
            >
              <Phone className="w-3.5 h-3.5" />
              1-800-555-1234
            </a>
            <motion.a
              href="#appointment"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-gradient-to-r from-sky-500 to-blue-600 text-white text-[13.5px] font-semibold px-5 py-2.5 rounded-full shadow-lg shadow-sky-500/20"
            >
              Book Now
            </motion.a>
          </div>

          {/* Mobile */}
          <button
            onClick={() => setOpen(!open)}
            className={`lg:hidden p-2 rounded-xl ${scrolled ? "text-slate-700" : "text-white"}`}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed inset-x-0 top-[72px] z-40 bg-white border-b border-slate-100 shadow-xl lg:hidden overflow-hidden"
          >
            <div className="px-5 py-4 flex flex-col gap-1">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 text-slate-700 font-medium rounded-xl hover:bg-sky-50 hover:text-sky-600"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#appointment"
                onClick={() => setOpen(false)}
                className="mt-2 bg-gradient-to-r from-sky-500 to-blue-600 text-white text-center font-semibold py-3.5 rounded-xl"
              >
                Book Appointment
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
