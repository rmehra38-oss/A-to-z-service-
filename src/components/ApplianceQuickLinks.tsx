import { Link } from 'react-router-dom';
import { ShieldCheck, Clock, CheckCircle2, ArrowRight, Phone, MessageCircle } from 'lucide-react';

const applianceItems = [
  {
    id: "fridge",
    name: "Fridge Repair Gurgaon",
    title: "Refrigerator Repair in Gurgaon",
    path: "/fridge-repair-gurgaon",
    canonicalUrl: "https://www.gurgaonacservice.com/fridge-repair-gurgaon",
    price: "From ₹249",
    tag: "60-Min Arrival",
    desc: "Single door, double door & side-by-side inverter fridge repair, genuine gas refilling (R600a/R134a), compressor replacement & PCB fixing.",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200"
  },
  {
    id: "washing-machine",
    name: "Washing Machine Gurgaon",
    title: "Washing Machine Repair Gurgaon",
    path: "/washing-machine-repair-gurgaon",
    canonicalUrl: "https://www.gurgaonacservice.com/washing-machine-repair-gurgaon",
    price: "From ₹299",
    tag: "Top & Front Load",
    desc: "Certified technicians for drum vibration, motor belt, spin dryer, water drainage failure, inlet valve & inverter motherboard PCB repair.",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200"
  },
  {
    id: "microwave",
    name: "Microwave Repair Gurgaon",
    title: "Microwave Oven Repair Gurgaon",
    path: "/microwave-repair-gurgaon",
    canonicalUrl: "https://www.gurgaonacservice.com/microwave-repair-gurgaon",
    price: "From ₹249",
    tag: "Solo, Grill & Convection",
    desc: "Magnetron heating element replacement, touchpad membrane panel repair, internal sparking, fuse replacement & turntable motor repair.",
    badgeColor: "bg-amber-50 text-amber-700 border-amber-200"
  },
  {
    id: "geyser",
    name: "Geyser Repair Gurgaon",
    title: "Geyser & Water Heater Gurgaon",
    path: "/geyser-repair-gurgaon",
    canonicalUrl: "https://www.gurgaonacservice.com/geyser-repair-gurgaon",
    price: "From ₹249",
    tag: "Storage & Instant",
    desc: "Heavy-duty 2kW/3kW incoloy heating coils, dual thermostats, high-temperature thermal cut-off, hard water chemical descaling & leak repair.",
    badgeColor: "bg-red-50 text-red-700 border-red-200"
  }
];

const gurgaonLocalities = [
  "DLF Phase 1-5", "Golf Course Road", "Golf Course Ext. Road", "Sohna Road",
  "Sector 56", "Sector 57", "Sector 45", "Sector 46", "Sector 48", "Sector 49",
  "Nirvana Country", "South City 1 & 2", "Sushant Lok 1-3", "Palam Vihar", "MG Road"
];

export default function ApplianceQuickLinks() {
  const whatsappBase = "https://wa.me/917056330400?text=";

  return (
    <section className="bg-slate-900 text-white py-16 border-t border-slate-800 relative overflow-hidden" id="appliance-services-gurgaon">
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-400 border border-orange-500/30 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider mb-3">
              <Clock className="w-3.5 h-3.5" /> 60-Minute Doorstep Service in All Gurgaon
            </div>
            <h3 className="text-2xl sm:text-4xl font-black tracking-tight text-white">
              Doorstep Appliance Repairs in Gurgaon
            </h3>
            <p className="text-slate-400 text-sm md:text-base mt-2 max-w-2xl font-medium">
              Same-day repair with 100% OEM spare parts, verified technicians, and a transparent 90-day post-service warranty.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a 
              href="tel:+917056330400"
              className="px-5 py-3 rounded-2xl bg-white/10 hover:bg-white/20 text-white text-xs font-black tracking-wide border border-white/15 flex items-center gap-2 transition-all"
            >
              <Phone className="w-4 h-4 text-orange-400" />
              Call +91 70563 30400
            </a>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {applianceItems.map((item) => (
            <div 
              key={item.id}
              className="bg-slate-800/80 rounded-3xl p-6 border border-slate-700/80 hover:border-orange-500/60 hover:bg-slate-800 transition-all flex flex-col justify-between group shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-black px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 border border-orange-500/30">
                    {item.price}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    {item.tag}
                  </span>
                </div>

                <Link 
                  to={item.path}
                  className="block group-hover:text-orange-400 transition-colors"
                >
                  <h4 className="text-xl font-black text-white group-hover:text-orange-400 transition-colors mb-2">
                    {item.title}
                  </h4>
                </Link>

                <p className="text-slate-400 text-xs leading-relaxed font-medium mb-6">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-700/60 flex flex-col gap-3">
                <Link 
                  to={item.path}
                  className="flex items-center justify-between text-xs font-black text-orange-400 hover:text-orange-300 transition-colors"
                >
                  <span>View Rates & Problems</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <a 
                  href={`${whatsappBase}${encodeURIComponent(`Hi, I need urgent ${item.name} at my doorstep in Gurgaon.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 px-3 rounded-xl bg-slate-700/70 hover:bg-emerald-600 hover:text-white text-slate-300 text-[11px] font-black flex items-center justify-center gap-1.5 transition-all"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400 group-hover:text-white" />
                  <span>Book via WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Coverage Localities Strip */}
        <div className="mt-10 pt-8 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-orange-400 shrink-0" />
            <span className="font-bold text-slate-300">Service Coverage in Gurgaon:</span>
          </div>
          <div className="flex flex-wrap justify-center md:justify-end gap-x-3 gap-y-1 text-slate-400 font-medium">
            {gurgaonLocalities.map((loc, idx) => (
              <span key={idx} className="hover:text-white transition-colors cursor-default">
                {loc}{idx < gurgaonLocalities.length - 1 ? " •" : ""}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
