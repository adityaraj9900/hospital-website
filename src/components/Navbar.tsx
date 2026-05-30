"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, HeartPulse } from "lucide-react";
import Link from "next/link";

const links = ["Services","Doctors","About","FAQ","Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-white/90 backdrop-blur-xl shadow-sm border-b border-zinc-100" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 h-[70px] flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 bg-[#0066cc] rounded-xl flex items-center justify-center">
              <HeartPulse className="w-5 h-5 text-white" />
            </div>
            <span className={`text-[17px] font-bold tracking-tight transition-colors ${scrolled ? "text-zinc-900" : "text-white"}`}>
              MediCare<span className="text-[#0066cc]">Elite</span>
            </span>
          </Link>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map(l => (
              <a key={l} href={`#${l.toLowerCase()}`}
                className={`px-4 py-2 text-[13.5px] font-medium rounded-lg transition-colors ${
                  scrolled ? "text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50" : "text-white/70 hover:text-white hover:bg-white/10"
                }`}
              >{l}</a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/admin"
              className={`text-[13px] font-medium transition-colors ${scrolled ? "text-zinc-500 hover:text-zinc-900" : "text-white/60 hover:text-white"}`}
            >
              Admin ↗
            </Link>
            <motion.a href="#contact" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
              className="bg-[#0066cc] text-white text-[13.5px] font-semibold px-5 py-2.5 rounded-full shadow-lg shadow-blue-500/25 hover:bg-blue-700 transition-colors"
            >
              Book Now
            </motion.a>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setOpen(!open)} className={`md:hidden p-2 rounded-lg ${scrolled ? "text-zinc-700" : "text-white"}`}>
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            className="fixed inset-x-0 top-[70px] z-40 bg-white border-b border-zinc-100 shadow-xl md:hidden"
          >
            <div className="px-6 py-5 flex flex-col gap-1">
              {links.map(l => (
                <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}
                  className="px-4 py-3 text-zinc-700 font-medium rounded-xl hover:bg-zinc-50 transition-colors"
                >{l}</a>
              ))}
              <Link href="/admin" onClick={() => setOpen(false)} className="px-4 py-3 text-blue-600 font-medium rounded-xl hover:bg-blue-50">Admin Panel ↗</Link>
              <a href="#contact" onClick={() => setOpen(false)}
                className="mt-2 bg-[#0066cc] text-white text-center font-semibold py-3.5 rounded-xl hover:bg-blue-700 transition-colors"
              >Book Appointment</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
