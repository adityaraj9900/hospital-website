"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  { q: "How do I book an appointment with a specialist?", a: "Use the 'Book Now' button on any page to submit your details. Our coordinators will confirm your specialist and time slot within 2 hours. Same-day appointments are available for urgent cases." },
  { q: "Do you accept international patients?", a: "Absolutely — 30% of our patients travel from abroad. We provide full visa support letters, accommodation recommendations, airport transfers, multilingual patient coordinators, and translation services at no extra charge." },
  { q: "How long does a typical surgical procedure take from booking to recovery?", a: "Most elective surgical consultations can be scheduled within 3–5 days. Surgery is typically performed within 1–2 weeks of your consultation. Recovery varies by procedure; our team will give you a personalised timeline after your initial assessment." },
  { q: "What insurance plans do you accept?", a: "We work with over 200 insurance providers globally including Cigna, Bupa, Aetna, AXA, and most major national health schemes. Our billing team will verify your coverage before any chargeable consultation." },
  { q: "Is your emergency department open around the clock?", a: "Yes. Our Level I Trauma Centre is staffed 24/7 with emergency physicians, trauma surgeons, and full imaging capability. Average time from arrival to physician assessment is under 4 minutes." },
  { q: "Can I get a second opinion on a diagnosis I received elsewhere?", a: "We encourage it. Our Second Opinion Service connects you with a senior consultant in the relevant specialty within 48 hours. You can submit your existing reports and scans digitally via our patient portal." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 lg:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#0066cc] mb-3 block">FAQ</span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-zinc-900 tracking-tight">Common questions</h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((f, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className={`rounded-2xl border transition-colors ${open === i ? "border-[#0066cc]/30 bg-blue-50/50" : "border-zinc-100 bg-zinc-50/50 hover:bg-zinc-50"}`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className={`font-semibold text-[15px] leading-snug ${open === i ? "text-[#0066cc]" : "text-zinc-900"}`}>
                  {f.q}
                </span>
                <span className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors ${open === i ? "bg-[#0066cc] text-white" : "bg-zinc-200 text-zinc-500"}`}>
                  {open === i ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                </span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 text-zinc-500 text-[15px] leading-relaxed">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
