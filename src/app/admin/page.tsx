"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard, Calendar, Users, Settings, HeartPulse,
  TrendingUp, Clock, CheckCircle2, XCircle, AlertCircle,
  Search, Plus, ChevronDown, Bell, LogOut, Eye, Trash2,
  ArrowUpRight, ArrowDownRight, Activity
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

/* ── Types ─────────────────────────────────────────────── */
type ApptStatus = "Confirmed" | "Pending" | "Cancelled";
interface Appt {
  id: number; patient: string; doctor: string; dept: string;
  date: string; time: string; status: ApptStatus;
}
interface Doctor { id: number; name: string; role: string; dept: string; patients: number; available: boolean; img: string; }

/* ── Seed data ──────────────────────────────────────────── */
const INIT_APPTS: Appt[] = [
  { id: 1,  patient: "Emily Johnson",    doctor: "Dr. Sarah Mitchell", dept: "Cardiology",   date: "2024-07-15", time: "09:00 AM", status: "Confirmed"  },
  { id: 2,  patient: "David Park",       doctor: "Dr. Michael Chen",   dept: "Orthopedics",  date: "2024-07-15", time: "10:30 AM", status: "Pending"    },
  { id: 3,  patient: "Fatima Al-Rashid", doctor: "Dr. Priya Sharma",   dept: "Oncology",     date: "2024-07-16", time: "02:00 PM", status: "Confirmed"  },
  { id: 4,  patient: "Marcus Thompson",  doctor: "Dr. James Okafor",   dept: "Neurology",    date: "2024-07-16", time: "11:00 AM", status: "Cancelled"  },
  { id: 5,  patient: "Yuki Tanaka",      doctor: "Dr. Amara Williams", dept: "Pediatrics",   date: "2024-07-17", time: "03:30 PM", status: "Pending"    },
  { id: 6,  patient: "Carlos Mendez",    doctor: "Dr. Robert Torres",  dept: "Emergency",    date: "2024-07-17", time: "08:00 AM", status: "Confirmed"  },
  { id: 7,  patient: "Anna Schmidt",     doctor: "Dr. Sarah Mitchell", dept: "Cardiology",   date: "2024-07-18", time: "01:00 PM", status: "Pending"    },
  { id: 8,  patient: "Li Wei",           doctor: "Dr. Michael Chen",   dept: "Orthopedics",  date: "2024-07-18", time: "04:00 PM", status: "Confirmed"  },
];

const INIT_DOCTORS: Doctor[] = [
  { id: 1, name: "Dr. Sarah Mitchell",  role: "Chief Cardiologist",   dept: "Cardiology",  patients: 312, available: true,  img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&q=80" },
  { id: 2, name: "Dr. James Okafor",   role: "Lead Neurosurgeon",    dept: "Neurology",   patients: 418, available: true,  img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&q=80" },
  { id: 3, name: "Dr. Priya Sharma",   role: "Oncology Director",    dept: "Oncology",    patients: 276, available: false, img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=200&q=80" },
  { id: 4, name: "Dr. Michael Chen",   role: "Orthopaedic Surgeon",  dept: "Orthopedics", patients: 389, available: true,  img: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=200&q=80" },
  { id: 5, name: "Dr. Amara Williams", role: "Paediatric Specialist", dept: "Pediatrics",  patients: 501, available: true,  img: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=200&q=80" },
  { id: 6, name: "Dr. Robert Torres",  role: "Emergency Medicine",   dept: "Emergency",   patients: 224, available: false, img: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=200&q=80" },
];

/* ── Helpers ────────────────────────────────────────────── */
const statusCfg: Record<ApptStatus, { bg: string; text: string; dot: string }> = {
  Confirmed: { bg: "bg-emerald-50", text: "text-emerald-700", dot: "bg-emerald-400" },
  Pending:   { bg: "bg-amber-50",   text: "text-amber-700",   dot: "bg-amber-400"   },
  Cancelled: { bg: "bg-red-50",     text: "text-red-600",     dot: "bg-red-400"     },
};

const navItems = [
  { id: "dashboard",    label: "Dashboard",    icon: LayoutDashboard },
  { id: "appointments", label: "Appointments", icon: Calendar },
  { id: "doctors",      label: "Doctors",      icon: Users },
  { id: "settings",     label: "Settings",     icon: Settings },
];

/* ── Sub-components ─────────────────────────────────────── */
function StatCard({ icon: Icon, label, value, change, up, color }: {
  icon: React.ElementType; label: string; value: string; change: string; up: boolean; color: string;
}) {
  return (
    <div className="bg-white rounded-2xl p-6 border border-zinc-100 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${color}`}>
          <Icon className="w-5 h-5 text-white" />
        </div>
        <span className={`flex items-center gap-1 text-xs font-semibold ${up ? "text-emerald-600" : "text-red-500"}`}>
          {up ? <ArrowUpRight className="w-3.5 h-3.5" /> : <ArrowDownRight className="w-3.5 h-3.5" />}
          {change}
        </span>
      </div>
      <p className="text-3xl font-extrabold text-zinc-900 tracking-tight">{value}</p>
      <p className="text-zinc-400 text-sm mt-1">{label}</p>
    </div>
  );
}

/* ── Dashboard view ─────────────────────────────────────── */
function Dashboard({ appts, doctors }: { appts: Appt[]; doctors: Doctor[] }) {
  const confirmed = appts.filter(a => a.status === "Confirmed").length;
  const pending   = appts.filter(a => a.status === "Pending").length;
  const available = doctors.filter(d => d.available).length;

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-extrabold text-zinc-900 mb-1">Dashboard</h2>
        <p className="text-zinc-400 text-sm">Welcome back, Administrator. Here's today's overview.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard icon={Calendar}  label="Total Appointments" value={String(appts.length)} change="12%"    up={true}  color="bg-[#0066cc]" />
        <StatCard icon={CheckCircle2} label="Confirmed"        value={String(confirmed)}    change="8%"     up={true}  color="bg-emerald-500" />
        <StatCard icon={Clock}     label="Pending Review"      value={String(pending)}      change="3%"     up={false} color="bg-amber-500" />
        <StatCard icon={Users}     label="Doctors Available"   value={`${available}/${doctors.length}`} change="5%" up={true} color="bg-violet-500" />
      </div>

      {/* Recent appointments */}
      <div className="bg-white rounded-2xl border border-zinc-100 overflow-hidden">
        <div className="px-6 py-4 border-b border-zinc-100 flex items-center justify-between">
          <h3 className="font-bold text-zinc-900">Recent Appointments</h3>
          <span className="text-xs text-zinc-400">{appts.length} total</span>
        </div>
        <div className="divide-y divide-zinc-50">
          {appts.slice(0, 5).map(a => (
            <div key={a.id} className="px-6 py-4 flex items-center gap-4">
              <div className="w-9 h-9 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-500 text-sm font-bold shrink-0">
                {a.patient.charAt(0)}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-zinc-800 text-sm truncate">{a.patient}</p>
                <p className="text-zinc-400 text-xs">{a.doctor} · {a.dept}</p>
              </div>
              <div className="text-right shrink-0">
                <p className="text-zinc-700 text-xs font-medium">{a.date}</p>
                <p className="text-zinc-400 text-xs">{a.time}</p>
              </div>
              <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${statusCfg[a.status].bg} ${statusCfg[a.status].text}`}>
                {a.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Doctor availability */}
      <div className="bg-white rounded-2xl border border-zinc-100 overflow-hidden">
        <div className="px-6 py-4 border-b border-zinc-100">
          <h3 className="font-bold text-zinc-900">Doctor Availability</h3>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
          {doctors.map(d => (
            <div key={d.id} className="flex items-center gap-3 p-3 rounded-xl border border-zinc-100 hover:bg-zinc-50 transition-colors">
              <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0">
                <Image src={d.img} alt={d.name} fill className="object-cover object-top" sizes="40px" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-zinc-800 text-sm font-semibold truncate">{d.name}</p>
                <p className="text-zinc-400 text-xs truncate">{d.dept}</p>
              </div>
              <span className={`w-2.5 h-2.5 rounded-full shrink-0 ${d.available ? "bg-emerald-400" : "bg-zinc-300"}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Appointments view ──────────────────────────────────── */
function Appointments({ appts, setAppts }: { appts: Appt[]; setAppts: React.Dispatch<React.SetStateAction<Appt[]>> }) {
  const [q, setQ] = useState("");
  const [filter, setFilter] = useState<"All" | ApptStatus>("All");

  const filtered = appts.filter(a => {
    const matchQ = a.patient.toLowerCase().includes(q.toLowerCase()) || a.doctor.toLowerCase().includes(q.toLowerCase()) || a.dept.toLowerCase().includes(q.toLowerCase());
    const matchF = filter === "All" || a.status === filter;
    return matchQ && matchF;
  });

  const setStatus = (id: number, status: ApptStatus) =>
    setAppts(p => p.map(a => a.id === id ? { ...a, status } : a));
  const remove = (id: number) => setAppts(p => p.filter(a => a.id !== id));

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-extrabold text-zinc-900">Appointments</h2>
          <p className="text-zinc-400 text-sm">{appts.length} total appointments</p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
          <input value={q} onChange={e => setQ(e.target.value)} placeholder="Search patient, doctor, department…"
            className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-[#0066cc]/30 focus:border-[#0066cc]"
          />
        </div>
        <div className="flex gap-2">
          {(["All","Confirmed","Pending","Cancelled"] as const).map(s => (
            <button key={s} onClick={() => setFilter(s)}
              className={`px-3 py-2 rounded-lg text-xs font-semibold transition-colors ${filter === s ? "bg-[#0066cc] text-white" : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"}`}
            >{s}</button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl border border-zinc-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-zinc-100 bg-zinc-50">
                {["Patient","Doctor","Department","Date & Time","Status","Actions"].map(h => (
                  <th key={h} className="px-5 py-3.5 text-left text-xs font-semibold text-zinc-500 uppercase tracking-wide">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-50">
              {filtered.map(a => (
                <tr key={a.id} className="hover:bg-zinc-50/50 transition-colors">
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#0066cc]/10 flex items-center justify-center text-[#0066cc] text-xs font-bold">
                        {a.patient.charAt(0)}
                      </div>
                      <span className="font-medium text-zinc-800 text-sm whitespace-nowrap">{a.patient}</span>
                    </div>
                  </td>
                  <td className="px-5 py-4 text-sm text-zinc-600 whitespace-nowrap">{a.doctor}</td>
                  <td className="px-5 py-4">
                    <span className="text-xs font-medium bg-zinc-100 text-zinc-600 px-2.5 py-1 rounded-full">{a.dept}</span>
                  </td>
                  <td className="px-5 py-4 text-sm text-zinc-600 whitespace-nowrap">
                    <p className="font-medium text-zinc-800">{a.date}</p>
                    <p className="text-zinc-400 text-xs">{a.time}</p>
                  </td>
                  <td className="px-5 py-4">
                    <span className={`flex items-center gap-1.5 text-xs font-bold w-fit px-2.5 py-1 rounded-full ${statusCfg[a.status].bg} ${statusCfg[a.status].text}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${statusCfg[a.status].dot}`} />
                      {a.status}
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-1">
                      {a.status === "Pending" && (
                        <>
                          <button onClick={() => setStatus(a.id, "Confirmed")} title="Confirm"
                            className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center hover:bg-emerald-100 transition-colors"
                          ><CheckCircle2 className="w-3.5 h-3.5" /></button>
                          <button onClick={() => setStatus(a.id, "Cancelled")} title="Cancel"
                            className="w-7 h-7 rounded-lg bg-red-50 text-red-500 flex items-center justify-center hover:bg-red-100 transition-colors"
                          ><XCircle className="w-3.5 h-3.5" /></button>
                        </>
                      )}
                      <button onClick={() => remove(a.id)} title="Delete"
                        className="w-7 h-7 rounded-lg bg-zinc-50 text-zinc-400 flex items-center justify-center hover:bg-zinc-100 hover:text-zinc-600 transition-colors"
                      ><Trash2 className="w-3.5 h-3.5" /></button>
                    </div>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr><td colSpan={6} className="px-5 py-12 text-center text-zinc-400 text-sm">No appointments found.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

/* ── Doctors management view ────────────────────────────── */
function DoctorsView({ doctors, setDoctors }: { doctors: Doctor[]; setDoctors: React.Dispatch<React.SetStateAction<Doctor[]>> }) {
  const toggle = (id: number) => setDoctors(p => p.map(d => d.id === id ? { ...d, available: !d.available } : d));

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-extrabold text-zinc-900">Doctors</h2>
          <p className="text-zinc-400 text-sm">{doctors.filter(d => d.available).length} of {doctors.length} available</p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {doctors.map(d => (
          <div key={d.id} className="bg-white rounded-2xl border border-zinc-100 overflow-hidden hover:shadow-md transition-shadow">
            <div className="relative h-48 bg-zinc-100 overflow-hidden">
              <Image src={d.img} alt={d.name} fill className="object-cover object-top" sizes="(max-width:640px) 100vw,(max-width:1024px) 50vw,33vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 to-transparent" />
              <div className="absolute top-3 right-3">
                <button onClick={() => toggle(d.id)}
                  className={`text-[11px] font-bold px-2.5 py-1 rounded-full transition-colors ${d.available ? "bg-emerald-400 text-white hover:bg-emerald-500" : "bg-zinc-500 text-white hover:bg-zinc-600"}`}
                >
                  {d.available ? "● Available" : "● Busy"}
                </button>
              </div>
              <div className="absolute bottom-3 left-4">
                <p className="text-white font-bold text-[15px]">{d.name}</p>
                <p className="text-white/70 text-xs">{d.role}</p>
              </div>
            </div>
            <div className="px-5 py-4 flex items-center justify-between">
              <div>
                <p className="text-[#0066cc] text-xs font-semibold">{d.dept}</p>
                <p className="text-zinc-400 text-xs">{d.patients} patients seen</p>
              </div>
              <div className="flex gap-1.5">
                <button className="w-8 h-8 rounded-lg bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-400 hover:text-[#0066cc] hover:border-blue-200 transition-colors">
                  <Eye className="w-3.5 h-3.5" />
                </button>
                <button className="w-8 h-8 rounded-lg bg-red-50 border border-red-100 flex items-center justify-center text-red-400 hover:text-red-600 transition-colors"
                  onClick={() => setDoctors(p => p.filter(x => x.id !== d.id))}
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Settings view ──────────────────────────────────────── */
function SettingsView() {
  const [saved, setSaved] = useState(false);
  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <h2 className="text-2xl font-extrabold text-zinc-900">Settings</h2>
        <p className="text-zinc-400 text-sm">Manage hospital and system preferences</p>
      </div>
      <div className="bg-white rounded-2xl border border-zinc-100 p-6 space-y-5">
        <h3 className="font-bold text-zinc-800 text-[15px]">Hospital Information</h3>
        {[["Hospital Name","MediCare Elite"],["Contact Email","info@medicareelite.com"],["Phone","1-800-555-1234"],["Address","123 Health Blvd, New York, NY 10001"]].map(([label, val]) => (
          <div key={label}>
            <label className="block text-xs font-semibold text-zinc-500 uppercase tracking-wide mb-1.5">{label}</label>
            <input defaultValue={val} className="w-full px-4 py-2.5 text-sm rounded-xl border border-zinc-200 text-zinc-700 focus:outline-none focus:ring-2 focus:ring-[#0066cc]/30 focus:border-[#0066cc]" />
          </div>
        ))}
      </div>
      <div className="bg-white rounded-2xl border border-zinc-100 p-6 space-y-4">
        <h3 className="font-bold text-zinc-800 text-[15px]">Notifications</h3>
        {[["Email alerts for new appointments","true"],["SMS notifications for cancellations","true"],["Weekly summary report","false"]].map(([label, defVal]) => (
          <div key={label} className="flex items-center justify-between">
            <p className="text-sm text-zinc-600">{label}</p>
            <button className={`w-11 h-6 rounded-full relative transition-colors ${defVal === "true" ? "bg-[#0066cc]" : "bg-zinc-200"}`}>
              <span className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-transform ${defVal === "true" ? "left-6" : "left-1"}`} />
            </button>
          </div>
        ))}
      </div>
      <button onClick={() => { setSaved(true); setTimeout(() => setSaved(false), 2000); }}
        className="bg-[#0066cc] text-white font-semibold px-7 py-3 rounded-xl hover:bg-blue-700 transition-colors flex items-center gap-2"
      >
        {saved ? <><CheckCircle2 className="w-4 h-4" />Saved!</> : "Save Changes"}
      </button>
    </div>
  );
}

/* ── Main Admin Page ────────────────────────────────────── */
export default function AdminPage() {
  const [view, setView]       = useState<"dashboard"|"appointments"|"doctors"|"settings">("dashboard");
  const [appts, setAppts]     = useState<Appt[]>(INIT_APPTS);
  const [doctors, setDoctors] = useState<Doctor[]>(INIT_DOCTORS);

  return (
    <div className="min-h-screen bg-zinc-50 flex">
      {/* Sidebar */}
      <aside className="w-60 bg-[#0f172a] flex flex-col shrink-0 fixed left-0 top-0 bottom-0 z-40">
        {/* Logo */}
        <div className="px-5 h-[70px] flex items-center border-b border-white/5">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-[#0066cc] rounded-lg flex items-center justify-center">
              <HeartPulse className="w-4 h-4 text-white" />
            </div>
            <span className="text-[15px] font-bold text-white">MediCare<span className="text-[#0066cc]">Elite</span></span>
          </Link>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3 py-5 space-y-0.5">
          {navItems.map(({ id, label, icon: Icon }) => (
            <button key={id} onClick={() => setView(id as typeof view)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                view === id ? "bg-[#0066cc] text-white" : "text-zinc-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <Icon className="w-4 h-4 shrink-0" />
              {label}
            </button>
          ))}
        </nav>

        {/* Footer */}
        <div className="px-3 py-4 border-t border-white/5">
          <div className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/5 cursor-pointer mb-1">
            <div className="w-7 h-7 bg-zinc-700 rounded-full flex items-center justify-center text-white text-xs font-bold">A</div>
            <div className="flex-1 min-w-0">
              <p className="text-white text-xs font-semibold truncate">Administrator</p>
              <p className="text-zinc-500 text-[10px]">admin@medicareelite.com</p>
            </div>
          </div>
          <Link href="/" className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-zinc-500 hover:text-white hover:bg-white/5 transition-colors text-sm">
            <LogOut className="w-4 h-4" />
            Back to Site
          </Link>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 ml-60 flex flex-col min-h-screen">
        {/* Top bar */}
        <header className="h-[70px] bg-white border-b border-zinc-100 flex items-center justify-between px-8 sticky top-0 z-30">
          <div>
            <p className="text-zinc-400 text-xs uppercase tracking-widest font-semibold">MediCare Elite</p>
            <p className="text-zinc-900 font-bold text-[15px] capitalize">{view}</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="relative w-9 h-9 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-500 hover:text-zinc-900 transition-colors">
              <Bell className="w-4 h-4" />
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-red-500 rounded-full text-white text-[9px] font-bold flex items-center justify-center">
                {appts.filter(a => a.status === "Pending").length}
              </span>
            </button>
            <div className="w-9 h-9 bg-[#0066cc] rounded-xl flex items-center justify-center text-white text-sm font-bold">A</div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-8">
          <AnimatePresence mode="wait">
            <motion.div key={view} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.3 }}>
              {view === "dashboard"    && <Dashboard appts={appts} doctors={doctors} />}
              {view === "appointments" && <Appointments appts={appts} setAppts={setAppts} />}
              {view === "doctors"      && <DoctorsView doctors={doctors} setDoctors={setDoctors} />}
              {view === "settings"     && <SettingsView />}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}
