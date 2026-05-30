"use client";
const items = [
  "🏥 JCI Accredited",
  "⭐ #1 Ranked Hospital 2024",
  "🔬 AI-Powered Diagnostics",
  "🤖 Robotic Surgery",
  "🌍 70+ Countries Served",
  "🏆 ISO 9001 Certified",
  "💊 100+ Clinical Trials",
  "🚑 24/7 Emergency",
  "👨‍⚕️ 500+ Specialists",
  "❤️ 150,000+ Lives Changed",
];

export default function Marquee() {
  const repeated = [...items, ...items];
  return (
    <div className="border-y border-zinc-100 bg-white py-4 overflow-hidden">
      <div className="marquee flex gap-0 whitespace-nowrap" style={{ width: "max-content" }}>
        {repeated.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-3 px-8 text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors cursor-default">
            {item}
            <span className="text-zinc-200">|</span>
          </span>
        ))}
      </div>
    </div>
  );
}
