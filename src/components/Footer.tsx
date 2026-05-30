"use client";
import { HeartPulse, Phone, Mail, MapPin, ArrowUp } from "lucide-react";
import Link from "next/link";

const cols = {
  Specialties: ["Cardiology","Neurology","Orthopedics","Oncology","Pediatrics","Emergency"],
  Hospital:    ["About Us","Our Team","Research","Careers","News","Awards & Accreditation"],
  Patients:    ["Book Appointment","Patient Portal","Health Records","Insurance","International Patients","Contact"],
};

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-500">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-6">
              <div className="w-9 h-9 bg-[#0066cc] rounded-xl flex items-center justify-center">
                <HeartPulse className="w-5 h-5 text-white" />
              </div>
              <span className="text-[17px] font-bold text-white">MediCare<span className="text-[#0066cc]">Elite</span></span>
            </Link>
            <p className="text-[13.5px] leading-relaxed text-zinc-500 max-w-xs mb-6">
              25 years redefining what healthcare looks like. 500+ specialists. 150,000+ lives changed. JCI & ISO 9001 accredited.
            </p>
            <div className="space-y-2.5 text-sm">
              <a href="tel:+18005551234" className="flex items-center gap-2.5 hover:text-zinc-300 transition-colors"><Phone className="w-3.5 h-3.5 text-zinc-600" />+1 (800) 555-1234</a>
              <a href="mailto:info@medicareelite.com" className="flex items-center gap-2.5 hover:text-zinc-300 transition-colors"><Mail className="w-3.5 h-3.5 text-zinc-600" />info@medicareelite.com</a>
              <p className="flex items-start gap-2.5"><MapPin className="w-3.5 h-3.5 text-zinc-600 shrink-0 mt-0.5" />123 Health Blvd, New York, NY 10001</p>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(cols).map(([title, items]) => (
            <div key={title}>
              <h4 className="text-zinc-100 text-sm font-semibold mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {items.map(item => (
                  <li key={item}>
                    <a href="#" className="text-[13px] text-zinc-500 hover:text-zinc-300 transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-zinc-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-600">© 2024 MediCare Elite. All rights reserved. JCI & ISO 9001 Accredited.</p>
          <div className="flex items-center gap-3">
            <Link href="/admin" className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors border border-zinc-800 px-3 py-1.5 rounded-lg hover:border-zinc-600">
              Admin Panel →
            </Link>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="w-8 h-8 rounded-lg bg-zinc-800 hover:bg-[#0066cc] flex items-center justify-center text-zinc-400 hover:text-white transition-colors"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
