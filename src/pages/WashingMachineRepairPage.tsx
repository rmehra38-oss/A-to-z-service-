import { motion } from 'motion/react';
import { 
  Phone, MessageCircle, Star, ShieldCheck, Clock, Award, CheckCircle2, 
  Wrench, Zap, ThumbsUp, HeartHandshake, ChevronDown, ArrowRight, 
  RotateCw, AlertTriangle, Check, Droplets
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import serviceWashingImg from '../assets/images/service_washing_machine_repair_1781461892008.jpg';

const washingServices = [
  {
    category: "Inspection & Diagnostics",
    items: [
      { name: "Full Machine Diagnostics & Error Scan", price: "₹249 – ₹349", description: "Inspection of motor, drum assembly, inlet/drain valves, and electronic control board." },
      { name: "Drum Alignment & Suspension Check", price: "₹299 – ₹399", description: "Diagnosing violent shaking, unbalanced load issues, and abnormal spin noises." },
      { name: "Water Inflow & Drainage Test", price: "₹249 – ₹349", description: "Checking inlet solenoid valves, flow sensors, pressure switch, and drain motor." }
    ]
  },
  {
    category: "Drainage, Water & Mechanical Repairs",
    items: [
      { name: "Drain Pump Cleaning & Unclogging", price: "₹399 – ₹549", description: "Clearing coins, lint, and debris trapped in the drain filter or pump impeller." },
      { name: "Inlet Solenoid Valve Replacement", price: "₹450 – ₹750", description: "Fixes slow water filling, continuous water inflow, or error code E1 / 4E." },
      { name: "Drain Pump Motor Replacement", price: "₹750 – ₹1,250", description: "OEM replacement when washing machine fails to drain water out before spinning." },
      { name: "Drive Belt Replacement (Top/Front Load)", price: "₹450 – ₹850", description: "Heavy-duty grooved rubber belt replacement for slipping or snapped drum belts." },
      { name: "Door Lock Switch / Interlock Replacement", price: "₹550 – ₹950", description: "Fixes door not latching, dE error, or front load machine refusing to start." },
      { name: "Suspension Rods / Shock Absorber Set", price: "₹850 – ₹1,650", description: "Eliminates violent thumping and walking during high-speed spin cycles." }
    ]
  },
  {
    category: "Motor, Bearing & Electronics",
    items: [
      { name: "Drum Bearing & Spider Assembly Fix", price: "₹1,800 – ₹3,200", description: "Replaces worn metal bearings and corroded spider brackets causing grinding noise." },
      { name: "PCB Motherboard Repair (Chip-Level)", price: "₹1,500 – ₹2,800", description: "Fixing power failures, program skipping, motor triac blowouts, and display dead faults." },
      { name: "Wash / Spin Motor Rewinding or Replacement", price: "₹1,400 – ₹2,600", description: "Restores motor torque when drum refuses to rotate under wash load." },
      { name: "Capacitor & Sensor Replacement", price: "₹350 – ₹600", description: "Start/run capacitor replacement for semi-automatic wash and spin tubs." },
      { name: "Pulsator Plate Replacement", price: "₹650 – ₹1,100", description: "Fixes stripped center splines where agitator spins freely without moving clothes." }
    ]
  }
];

const commonProblems = [
  {
    title: "Washing Machine Drum Not Spinning",
    cause: "Broken drive belt, worn motor carbon brushes, faulty door lock, or motor start capacitor.",
    solution: "On-site belt inspection, motor testing, or interlock replacement in 45 minutes."
  },
  {
    title: "Water Not Draining Out (Error OE / 5E)",
    cause: "Choked coin trap filter, blocked drain hose, or burnt drain pump impeller motor.",
    solution: "Manual water release, foreign object extraction, and pump testing/replacement."
  },
  {
    title: "Excessive Vibration & Banging Noise",
    cause: "Weak suspension rods, damaged shock absorbers, or broken drum spider shaft.",
    solution: "Leveling calibration, heavy-duty suspension rod replacement, or bearing overhaul."
  },
  {
    title: "Water Filling Very Slowly or Not at All",
    cause: "Clogged inlet mesh filter, low water pressure sensor fault, or burnt inlet solenoid.",
    solution: "Filter descaling, water pressure sensor calibration, or dual-valve replacement."
  },
  {
    title: "Machine Not Powering On / Dead Display",
    cause: "Tripped internal fuse, voltage surge on PCB, or burnt power transformer.",
    solution: "Micro-soldering PCB circuit fix, replacing blown diodes, and surge protection check."
  },
  {
    title: "Water Leaking From Bottom or Front Door",
    cause: "Torn door bellow boot gasket, loose tub seal, or punctured internal water hose.",
    solution: "Seal clamp replacement, silicon gasket refitting, or OEM bellow replacement."
  }
];

const machineTypes = [
  { title: "Front Load Fully Automatic", desc: "Expert care for high-end European & Asian front loaders. Inverter direct-drive & belt-driven." },
  { title: "Top Load Fully Automatic", desc: "Agitator & pulsator models. Specialized in balance sensors, water levels, and PCB repairs." },
  { title: "Semi-Automatic Washers", desc: "Twin-tub wash & spin systems. Fast fix for spin motors, gearboxes, and drain selectors." },
  { title: "Washer-Dryer Combos", desc: "Complex integrated dryer systems, condenser lint traps, and dual-heating elements." }
];

const brands = [
  "LG", "Samsung", "IFB", "Bosch", "Whirlpool", "Haier", 
  "Godrej", "Siemens", "Panasonic", "Voltas Beko", "Electrolux", "Onida"
];

const faqs = [
  {
    q: "Can you fix Front Load washing machine drum bearing noise in Gurgaon?",
    a: "Yes! High-speed screeching or metal grinding noise during spin cycle is caused by worn drum bearings. Our senior technicians carry heavy-duty SKF bearings and spider assemblies to rebuild your drum."
  },
  {
    q: "Do you provide original spare parts for IFB and Bosch washing machines?",
    a: "Absolutely. We supply 100% genuine OEM spare parts—including inlet valves, drain pumps, shock absorbers, and PCB boards—specifically designed for IFB, Bosch, LG, and Samsung machines."
  },
  {
    q: "How soon can you send a technician to my location in Gurgaon?",
    a: "We have certified mobile technicians operating across DLF, Sector 56, Sohna Road, Golf Course Extension, South City, and all key sectors. We typically arrive within 45 to 60 minutes."
  },
  {
    q: "What warranty do you offer on washing machine repairs?",
    a: "We provide a 90-day comprehensive warranty on all replacement spare parts and labor. If the same issue returns within the warranty window, we fix it with zero extra charges."
  },
  {
    q: "Why is my washing machine stopping mid-cycle and displaying an error code?",
    a: "Common codes like 4E/IE (water inlet failure), 5E/OE (drain failure), dE (door lock error), or UE (unbalanced drum) indicate a sensor or hardware trigger. Our technician can decipher the exact fault code and resolve it."
  }
];

export default function WashingMachineRepairPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const whatsappLink = "https://wa.me/917056330400?text=Hi%2C%20I%20need%20doorstep%20Washing%20Machine%20repair%20service%20in%20Gurgaon";

  useEffect(() => {
    document.title = "Washing Machine Repair Gurgaon | Front & Top Load Service (₹299)";
    
    // Canonical link tag
    let canonical = document.querySelector("link[rel='canonical']") as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = "https://www.gurgaonacservice.com/washing-machine-repair-gurgaon";

    // Service Schema
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'washing-service-schema';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Washing Machine Repair Service",
      "provider": {
        "@type": "LocalBusiness",
        "name": "ASAP Gurgaon AC & Appliance Service",
        "telephone": "+917056330400",
        "url": "https://www.gurgaonacservice.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Shop 6, Sector 52 Market",
          "addressLocality": "Gurgaon",
          "addressRegion": "Haryana",
          "postalCode": "122003",
          "addressCountry": "IN"
        }
      },
      "areaServed": "Gurgaon",
      "url": "https://www.gurgaonacservice.com/washing-machine-repair-gurgaon",
      "offers": {
        "@type": "Offer",
        "priceCurrency": "INR",
        "price": "299",
        "availability": "https://schema.org/InStock"
      }
    });
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById('washing-service-schema');
      if (el) el.remove();
    };
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen relative overflow-hidden">
      {/* Background ambient blurs */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] -left-20 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-[40%] -right-20 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Hero Section */}
      <section className="pt-40 md:pt-48 pb-24 bg-navy-900 relative overflow-hidden text-white">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-3xl -ml-20 -mb-20"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 text-center lg:text-left">
              {/* Breadcrumb */}
              <div className="flex items-center justify-center lg:justify-start gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">
                <Link to="/" className="hover:text-orange-400 transition-colors">Home</Link>
                <span>/</span>
                <Link to="/services" className="hover:text-orange-400 transition-colors">Services</Link>
                <span>/</span>
                <span className="text-orange-400">Washing Machine Repair</span>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-400 border border-orange-500/30 px-5 py-2 rounded-full font-black text-xs uppercase tracking-widest mb-6"
              >
                <Star className="w-4 h-4 fill-orange-400" />
                Gurgaon's Trusted Washing Machine Specialist • 60-Min Arrival
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-7xl font-black mb-6 tracking-tight leading-[1.05]"
              >
                Doorstep <span className="text-orange-500">Washing Machine</span> Repair in Gurgaon
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl font-medium leading-relaxed"
              >
                Front Load, Top Load, or Semi-Automatic — we fix drum spinning failures, water drainage issues, vibration noise, and electronic PCB errors with genuine OEM parts and a 90-day guarantee.
              </motion.p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="orange-gradient text-white px-8 py-5 rounded-2xl font-black text-lg shadow-xl shadow-orange-500/30 flex items-center justify-center gap-3 hover:-translate-y-1 transition-all active:scale-95"
                >
                  <MessageCircle className="w-6 h-6" />
                  Book via WhatsApp
                </a>
                <a 
                  href="tel:+917056330400"
                  className="glass-dark border border-white/10 text-white px-8 py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 hover:bg-white/10 hover:-translate-y-1 transition-all active:scale-95"
                >
                  <Phone className="w-6 h-6 text-orange-400" />
                  Call +91 70563 30400
                </a>
              </div>

              {/* Quick trust metrics */}
              <div className="grid grid-cols-3 gap-4 pt-10 mt-10 border-t border-white/10 text-left">
                <div>
                  <div className="text-2xl font-black text-orange-400">60 Mins</div>
                  <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">Doorstep Response</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-orange-400">90 Days</div>
                  <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">Parts Warranty</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-orange-400">All Brands</div>
                  <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">IFB, Bosch, LG, Samsung</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="relative"
              >
                <div className="rounded-[3rem] overflow-hidden border-4 border-white/10 shadow-2xl relative aspect-[4/3]">
                  <img 
                    src={serviceWashingImg} 
                    alt="Washing machine repair technician in Gurgaon" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent"></div>
                  
                  <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl glass-dark border border-white/15">
                    <div className="flex items-center gap-3 mb-1">
                      <RotateCw className="w-6 h-6 text-orange-400" />
                      <span className="font-black text-lg">Same-Day Spin Restoration</span>
                    </div>
                    <p className="text-xs text-slate-300 font-medium">Drum, motor, drain pump & PCB problems repaired at your home.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantees Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="bg-white rounded-[2.5rem] p-6 md:p-8 shadow-xl border border-slate-100 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: <Clock className="w-6 h-6" />, title: "60-Min Arrival", sub: "Quick Gurgaon Service" },
            { icon: <ShieldCheck className="w-6 h-6" />, title: "90-Day Warranty", sub: "Spares & Labor" },
            { icon: <ThumbsUp className="w-6 h-6" />, title: "Fair Pricing", sub: "Starting at ₹249" },
            { icon: <Award className="w-6 h-6" />, title: "Original Spares", sub: "Bosch, IFB, LG, Samsung" }
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
                {item.icon}
              </div>
              <div>
                <h4 className="font-black text-navy-950 text-base">{item.title}</h4>
                <p className="text-xs text-slate-400 font-semibold">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing Rate Card */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-orange-600 font-black uppercase tracking-widest text-xs">Transparent Rate Card</span>
          <h2 className="text-3xl md:text-5xl font-black text-navy-950 mt-2 mb-4 tracking-tight">
            Washing Machine Repair Charges
          </h2>
          <p className="text-slate-600 font-medium">
            Clear, honest pricing with guaranteed genuine spare parts. Inspection fee waived upon repair.
          </p>
        </div>

        <div className="space-y-12">
          {washingServices.map((cat, idx) => (
            <div key={idx} className="bg-white rounded-[3rem] p-8 md:p-12 border border-slate-100 shadow-sm">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 orange-gradient rounded-2xl flex items-center justify-center text-white font-bold shadow-md shadow-orange-500/20">
                  <Wrench className="w-6 h-6" />
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-navy-950 tracking-tight">{cat.category}</h3>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cat.items.map((item, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-orange-200 hover:bg-orange-50/20 transition-all flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <h4 className="font-black text-navy-950 text-lg">{item.name}</h4>
                      </div>
                      <p className="text-sm text-slate-500 font-medium mb-4 leading-relaxed">{item.description}</p>
                    </div>
                    <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Estimated Cost</span>
                      <span className="text-orange-600 font-black text-base bg-white px-3 py-1 rounded-xl shadow-xs border border-slate-100">{item.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Common Problems & Solutions */}
      <section className="py-20 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-orange-600 font-black uppercase tracking-widest text-xs">Diagnostic Guide</span>
            <h2 className="text-3xl md:text-5xl font-black text-navy-950 mt-2 mb-4 tracking-tight">
              Washing Machine Issues We Fix Daily
            </h2>
            <p className="text-slate-600 font-medium">
              Experiencing any of these common glitches? Our certified engineers solve them quickly on-site.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {commonProblems.map((prob, idx) => (
              <div key={idx} className="p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center mb-6">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black text-navy-950 mb-3">{prob.title}</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-bold text-slate-700">Root Cause: </span>
                    <span className="text-slate-500">{prob.cause}</span>
                  </div>
                  <div>
                    <span className="font-bold text-green-700">Our Fix: </span>
                    <span className="text-slate-600 font-medium">{prob.solution}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Types of Machines */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-orange-600 font-black uppercase tracking-widest text-xs">Versatile Expertise</span>
          <h2 className="text-3xl md:text-5xl font-black text-navy-950 mt-2 mb-4 tracking-tight">
            All Washing Machine Types Serviced
          </h2>
          <p className="text-slate-600 font-medium">
            We handle everything from standard top loaders to smart direct-drive inverter front loaders.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {machineTypes.map((type, i) => (
            <div key={i} className="p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm hover:border-orange-300 transition-all text-center">
              <div className="w-16 h-16 rounded-3xl bg-orange-100 text-orange-600 mx-auto flex items-center justify-center mb-6">
                <RotateCw className="w-8 h-8" />
              </div>
              <h3 className="font-black text-navy-950 text-xl mb-3">{type.title}</h3>
              <p className="text-sm text-slate-500 font-medium leading-relaxed">{type.desc}</p>
            </div>
          ))}
        </div>

        {/* Brands Badges */}
        <div className="mt-16 bg-navy-900 rounded-[3rem] p-10 text-white text-center">
          <h3 className="text-xl md:text-2xl font-black mb-6">All Major Washing Machine Brands Serviced</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {brands.map((b, i) => (
              <span key={i} className="px-5 py-2.5 rounded-2xl bg-white/10 text-white font-bold text-sm tracking-wide border border-white/10 hover:bg-orange-500 transition-colors">
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Step-by-Step Process */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-orange-600 font-black uppercase tracking-widest text-xs">Smooth Service</span>
            <h2 className="text-3xl md:text-5xl font-black text-navy-950 mt-2 mb-4 tracking-tight">
              Simple 4-Step Doorstep Repair
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { num: "01", title: "Book Instant Visit", desc: "Share your machine brand and error via Call or WhatsApp. Instant time slot allotted." },
              { num: "02", title: "60-Min Arrival", desc: "Our certified technician arrives at your Gurgaon doorstep with tools and parts." },
              { num: "03", title: "Transparent Estimate", desc: "We inspect the drum, pump, and electricals, giving you a fixed price before starting." },
              { num: "04", title: "Same-Day Fix & Test", desc: "Doorstep replacement, spin cycle test under load, and 90-day warranty slip." }
            ].map((step, i) => (
              <div key={i} className="p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 relative group">
                <div className="text-5xl font-black text-slate-200 group-hover:text-orange-200 transition-colors mb-4">{step.num}</div>
                <h3 className="text-xl font-black text-navy-950 mb-2">{step.title}</h3>
                <p className="text-sm text-slate-500 font-medium leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-orange-600 font-black uppercase tracking-widest text-xs">Got Questions?</span>
          <h2 className="text-3xl md:text-5xl font-black text-navy-950 mt-2 mb-4 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 font-medium">All about our washing machine repair services in Gurgaon.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs">
              <button 
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full text-left p-6 flex justify-between items-center gap-4 font-black text-navy-950 text-lg hover:text-orange-600 transition-colors"
              >
                <span>{faq.q}</span>
                <ChevronDown className={`w-5 h-5 shrink-0 text-slate-400 transition-transform duration-300 ${openFaq === idx ? 'rotate-180 text-orange-500' : ''}`} />
              </button>
              {openFaq === idx && (
                <div className="px-6 pb-6 pt-1 text-slate-600 font-medium leading-relaxed text-sm border-t border-slate-100">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Other Appliances Switcher */}
      <section className="py-16 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-black text-navy-950">Looking for Other Appliance Repairs in Gurgaon?</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link to="/fridge-repair-gurgaon" className="p-6 bg-white rounded-2xl border border-slate-200 text-center hover:border-orange-500 hover:shadow-md transition-all group">
              <span className="block font-black text-navy-950 group-hover:text-orange-600 mb-1">Refrigerator Repair</span>
              <span className="text-xs text-slate-500">From ₹249 • Single & Double Door</span>
            </Link>
            <Link to="/microwave-repair-gurgaon" className="p-6 bg-white rounded-2xl border border-slate-200 text-center hover:border-orange-500 hover:shadow-md transition-all group">
              <span className="block font-black text-navy-950 group-hover:text-orange-600 mb-1">Microwave Repair</span>
              <span className="text-xs text-slate-500">From ₹249 • Magnetron & Touchpad</span>
            </Link>
            <Link to="/geyser-repair-gurgaon" className="p-6 bg-white rounded-2xl border border-slate-200 text-center hover:border-orange-500 hover:shadow-md transition-all group">
              <span className="block font-black text-navy-950 group-hover:text-orange-600 mb-1">Geyser Repair</span>
              <span className="text-xs text-slate-500">From ₹249 • Heating Element & Tank</span>
            </Link>
            <Link to="/services" className="p-6 bg-white rounded-2xl border border-slate-200 text-center hover:border-orange-500 hover:shadow-md transition-all group">
              <span className="block font-black text-navy-950 group-hover:text-orange-600 mb-1">AC Repair & Service</span>
              <span className="text-xs text-slate-500">From ₹499 • Jet Service & Gas Refill</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-navy-900 text-white text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[100px]"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
            Schedule Your Washing Machine Repair in <span className="text-orange-500">60 Minutes</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto font-medium">
            Don't let unwashed clothes pile up. Connect with our expert appliance technicians now for prompt doorstep resolution.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="orange-gradient text-white px-10 py-5 rounded-3xl font-black text-xl shadow-xl shadow-orange-500/30 flex items-center justify-center gap-3 hover:-translate-y-1 transition-all active:scale-95"
            >
              <MessageCircle className="w-7 h-7" />
              Book on WhatsApp
            </a>
            <a 
              href="tel:+917056330400"
              className="glass-dark border border-white/10 text-white px-10 py-5 rounded-3xl font-black text-xl flex items-center justify-center gap-3 hover:bg-white/10 hover:-translate-y-1 transition-all active:scale-95"
            >
              <Phone className="w-7 h-7 text-orange-400" />
              Call +91 70563 30400
            </a>
          </div>
          <p className="mt-8 text-slate-400 text-xs uppercase tracking-widest font-black">
            Available 8:00 AM - 9:00 PM • DLF Phases 1-5 • Sohna Road • Golf Course Rd • All Gurgaon
          </p>
        </div>
      </section>
    </div>
  );
}
