import { motion } from 'motion/react';
import { 
  Phone, MessageCircle, Star, ShieldCheck, Clock, Award, CheckCircle2, 
  Wrench, Zap, ThumbsUp, HeartHandshake, ChevronDown, ArrowRight, 
  Flame, AlertTriangle, Check, Droplets, Thermometer
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import serviceGeyserImg from '../assets/images/geyser_repair_1788705523331.jpg';

const geyserServices = [
  {
    category: "Diagnostics & Inspection",
    items: [
      { name: "Full Electrical & Heating Inspection", price: "₹249 – ₹349", description: "Multi-meter testing of heating coil, dual thermostats, thermal cutout, and earthing safety." },
      { name: "Tank Leakage & Pressure Valve Check", price: "₹249 – ₹349", description: "Inspecting inner tank seam weld, multi-function valve (MFV), and inlet/outlet connections." },
      { name: "Gas Geyser Ignition & Flue Check", price: "₹299 – ₹399", description: "Testing automatic pulse ignition, gas solenoid valve, and copper burner heat exchanger." }
    ]
  },
  {
    category: "Heating Element, Thermostat & Descaling",
    items: [
      { name: "Heavy-Duty Heating Element (2kW/3kW)", price: "₹750 – ₹1,250", description: "OEM Incoloy/copper heating coil replacement for dead heating or tripped MCB." },
      { name: "Stem / Capillary Thermostat Replacement", price: "₹450 – ₹750", description: "Fixes improper water temperature, boiling overheating, or geyser not shutting off." },
      { name: "Thermal Cut-Off / Reset Switch Fix", price: "₹350 – ₹550", description: "Restores power when high-temperature emergency safety switch has tripped or burnt." },
      { name: "Full Tank Descaling & Hard Water Cleaning", price: "₹499 – ₹799", description: "Chemical descaling to remove thick calcium/magnesium sediment, boosting heating speed." },
      { name: "Sacrificial Magnesium Anode Rod", price: "₹450 – ₹750", description: "Crucial corrosion protector preventing inner steel/glass-lined tank rust and puncture." }
    ]
  },
  {
    category: "Plumbing, Valve & Installation Services",
    items: [
      { name: "Multi-Function Safety Valve (MFV) Replacement", price: "₹350 – ₹650", description: "Fixes continuous water dripping or pressure buildup in high-rise apartments." },
      { name: "Braided SS Connection Hose Pair Replacement", price: "₹300 – ₹500", description: "High-pressure stainless steel flexible inlet and outlet hot water pipes." },
      { name: "Geyser Uninstallation & Remounting", price: "₹499 – ₹799", description: "Safe wall bracket dismounting or fresh heavy-duty anchor bolt mounting." },
      { name: "Inner Tank Leakage Gasket Sealing", price: "₹650 – ₹1,100", description: "High-temperature silicon flange gasket replacement stopping water dripping from bottom." },
      { name: "Gas Geyser Burner & Diaphragm Servicing", price: "₹550 – ₹950", description: "Clearing choked gas jets, microswitch tuning, and replacing water diaphragm rubber." }
    ]
  }
];

const commonProblems = [
  {
    title: "Geyser Water Not Heating at All",
    cause: "Burnt heating element, tripped thermal cutout, or failed primary thermostat switch.",
    solution: "Insulation testing and same-day replacement of heating coil or thermostat."
  },
  {
    title: "Electricity Tripping (MCB Trips When Turned On)",
    cause: "Heating element casing cracked or shorted to ground, leaking current into water.",
    solution: "Immediate replacement of ruptured coil with genuine glass-coated element."
  },
  {
    title: "Water Leaking from Bottom of Geyser",
    cause: "Dripping from heating element flange gasket, faulty pressure valve, or rusted tank.",
    solution: "Flange gasket tightening/replacement, pressure valve servicing, or tank leak sealing."
  },
  {
    title: "Water is Only Lukewarm / Takes Too Long to Heat",
    cause: "Thick calcium scale deposits insulating the heating element from the water.",
    solution: "Complete tank drain and acid-free descaling to restore instant hot water."
  },
  {
    title: "Unusual Hissing or Boiling Kettle Noise",
    cause: "Severe limescale crust on the heating rod causing localized steam boiling pockets.",
    solution: "Chemical descaling of the heating element and replacement of worn anode rod."
  },
  {
    title: "Continuous Dripping from Safety Valve",
    cause: "Excess pressure in building pipeline or weakened spring in multi-function valve.",
    solution: "Pressure reduction calibration or installing high-rated safety valve for high-rises."
  }
];

const geyserTypes = [
  { title: "Storage Electric Geysers", desc: "10L to 35L capacity. Ideal for families and showers. Expertise in coil, thermostat & descaling." },
  { title: "Instant Water Heaters", desc: "1L to 5L compact units for kitchen sinks & quick washbasins. High-speed 3kW/4.5kW heating." },
  { title: "LPG / PNG Gas Geysers", desc: "Instant tankless gas water heaters. Specialized in pulse igniters, copper coils & gas valves." },
  { title: "Solar & Heat Pump Backups", desc: "Commercial & residential solar electrical backup elements and heavy-duty thermostats." }
];

const brands = [
  "AO Smith", "Havells", "Racold", "Bajaj", "Crompton", "Venus", 
  "V-Guard", "Usha", "Orient", "Hindware", "Kenstar", "Morphy Richards"
];

const faqs = [
  {
    q: "Why is my geyser tripping the home MCB as soon as I switch it on?",
    a: "This is a serious safety alert. A tripping MCB usually means the heating element's outer metal sheath has corroded and water has come into direct contact with the live electric wire. Stop using it immediately and call our technician to replace the coil safely."
  },
  {
    q: "How often should a geyser in Gurgaon be descaled?",
    a: "Because Gurgaon groundwater and borewell water contain high levels of mineral hardness (calcium and magnesium), geysers build up thick scale within 1 to 2 years. We recommend descaling every season to reduce electricity bills and prevent coil burnouts."
  },
  {
    q: "Do you service high-rise apartment geysers (DLF, Golf Course Rd, Sohna Rd)?",
    a: "Yes! High-rise residential towers have heavy water pressure (6 to 8 bar) that frequently damages ordinary geysers and valves. We install heavy-duty, high-pressure safety valves and genuine manufacturer-approved components."
  },
  {
    q: "Can a leaking geyser tank be repaired?",
    a: "If the water is leaking from the heating flange gasket or loose plumbing fittings, it can easily be sealed or replaced. If the inner steel tank itself has rusted through and cracked, replacement of the inner tank or unit may be recommended."
  },
  {
    q: "What is the warranty on geyser repair and replacement parts?",
    a: "All heating elements, thermostats, and replacement spare parts are backed by our 90-day comprehensive service warranty."
  }
];

export default function GeyserRepairPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const whatsappLink = "https://wa.me/917056330400?text=Hi%2C%20I%20need%20doorstep%20Geyser%20repair%20service%20in%20Gurgaon";

  useEffect(() => {
    document.title = "Geyser Repair Gurgaon | Water Heater Element & Thermostat Service (₹249)";
    
    // Canonical link tag
    let canonical = document.querySelector("link[rel='canonical']") as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = "https://www.gurgaonacservice.com/geyser-repair-gurgaon";

    // Service Schema
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'geyser-service-schema';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Geyser and Water Heater Repair Service",
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
      "url": "https://www.gurgaonacservice.com/geyser-repair-gurgaon",
      "offers": {
        "@type": "Offer",
        "priceCurrency": "INR",
        "price": "249",
        "availability": "https://schema.org/InStock"
      }
    });
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById('geyser-service-schema');
      if (el) el.remove();
    };
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen relative overflow-hidden">
      {/* Background ambient blurs */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] -left-20 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-[40%] -right-20 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Hero Section */}
      <section className="pt-40 md:pt-48 pb-24 bg-navy-900 relative overflow-hidden text-white">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-red-500/10 rounded-full blur-3xl -ml-20 -mb-20"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 text-center lg:text-left">
              {/* Breadcrumb */}
              <div className="flex items-center justify-center lg:justify-start gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">
                <Link to="/" className="hover:text-orange-400 transition-colors">Home</Link>
                <span>/</span>
                <Link to="/services" className="hover:text-orange-400 transition-colors">Services</Link>
                <span>/</span>
                <span className="text-orange-400">Geyser Repair</span>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-400 border border-orange-500/30 px-5 py-2 rounded-full font-black text-xs uppercase tracking-widest mb-6"
              >
                <Star className="w-4 h-4 fill-orange-400" />
                Gurgaon's Trusted Water Heater & Geyser Repair • 60-Min Arrival
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-7xl font-black mb-6 tracking-tight leading-[1.05]"
              >
                Doorstep <span className="text-orange-500">Geyser Repair</span> Service in Gurgaon
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl font-medium leading-relaxed"
              >
                No hot water, leaking tank, or tripping MCB? Our certified technicians repair Storage, Instant, and Gas Geysers with genuine heavy-duty heating elements, dual thermostats, and hard water descaling.
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
                  <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">Fast Arrival</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-orange-400">90 Days</div>
                  <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">Parts Warranty</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-orange-400">High-Rise</div>
                  <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">Pressure Safe</div>
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
                    src={serviceGeyserImg} 
                    alt="Geyser repair technician in Gurgaon" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent"></div>
                  
                  <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl glass-dark border border-white/15">
                    <div className="flex items-center gap-3 mb-1">
                      <Thermometer className="w-6 h-6 text-red-400" />
                      <span className="font-black text-lg">Instant Hot Water Restored</span>
                    </div>
                    <p className="text-xs text-slate-300 font-medium">Element replacement, thermostat calibration & tank descaling.</p>
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
            { icon: <Clock className="w-6 h-6" />, title: "60-Min Arrival", sub: "All Gurgaon Localities" },
            { icon: <ShieldCheck className="w-6 h-6" />, title: "90-Day Warranty", sub: "Elements & Thermostats" },
            { icon: <ThumbsUp className="w-6 h-6" />, title: "Fixed Rates", sub: "Starting at ₹249" },
            { icon: <Award className="w-6 h-6" />, title: "Shock-Proof Safety", sub: "Tested Earthing & Wiring" }
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
            Geyser & Water Heater Repair Rates
          </h2>
          <p className="text-slate-600 font-medium">
            Standard upfront pricing with guaranteed OEM-compatible parts and 90-day service warranty.
          </p>
        </div>

        <div className="space-y-12">
          {geyserServices.map((cat, idx) => (
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
              Common Geyser Faults We Resolve
            </h2>
            <p className="text-slate-600 font-medium">
              Notice any of these issues? Protect your bathroom from electrical hazards and water leaks.
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

      {/* Types of Geysers */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-orange-600 font-black uppercase tracking-widest text-xs">All Models</span>
          <h2 className="text-3xl md:text-5xl font-black text-navy-950 mt-2 mb-4 tracking-tight">
            Every Type of Water Heater Serviced
          </h2>
          <p className="text-slate-600 font-medium">
            From instant 3L units to large 35L storage geysers and tankless gas geysers.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {geyserTypes.map((type, i) => (
            <div key={i} className="p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm hover:border-orange-300 transition-all text-center">
              <div className="w-16 h-16 rounded-3xl bg-orange-100 text-orange-600 mx-auto flex items-center justify-center mb-6">
                <Droplets className="w-8 h-8" />
              </div>
              <h3 className="font-black text-navy-950 text-xl mb-3">{type.title}</h3>
              <p className="text-sm text-slate-500 font-medium leading-relaxed">{type.desc}</p>
            </div>
          ))}
        </div>

        {/* Brands Badges */}
        <div className="mt-16 bg-navy-900 rounded-[3rem] p-10 text-white text-center">
          <h3 className="text-xl md:text-2xl font-black mb-6">All Major Geyser Brands Serviced</h3>
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
            <span className="text-orange-600 font-black uppercase tracking-widest text-xs">Safe & Reliable</span>
            <h2 className="text-3xl md:text-5xl font-black text-navy-950 mt-2 mb-4 tracking-tight">
              4 Steps to Instant Hot Water
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { num: "01", title: "Quick Booking", desc: "Contact via WhatsApp or Phone call with your geyser brand and issue." },
              { num: "02", title: "60-Min Arrival", desc: "Certified technician arrives equipped with replacement coils, thermostats, and descaling kits." },
              { num: "03", title: "Safety & Quote", desc: "Complete electrical insulation test and tank inspection with a fixed price estimate." },
              { num: "04", title: "Repair & Water Test", desc: "Immediate replacement, leak check, hot water flow test, and 90-day warranty card." }
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
          <p className="text-slate-600 font-medium">Common questions about geyser repair and safety in Gurgaon.</p>
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
            <Link to="/washing-machine-repair-gurgaon" className="p-6 bg-white rounded-2xl border border-slate-200 text-center hover:border-orange-500 hover:shadow-md transition-all group">
              <span className="block font-black text-navy-950 group-hover:text-orange-600 mb-1">Washing Machine Repair</span>
              <span className="text-xs text-slate-500">From ₹299 • Front & Top Load</span>
            </Link>
            <Link to="/microwave-repair-gurgaon" className="p-6 bg-white rounded-2xl border border-slate-200 text-center hover:border-orange-500 hover:shadow-md transition-all group">
              <span className="block font-black text-navy-950 group-hover:text-orange-600 mb-1">Microwave Repair</span>
              <span className="text-xs text-slate-500">From ₹249 • Solo, Grill & Convection</span>
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
            Fix Your Geyser in <span className="text-orange-500">60 Minutes</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto font-medium">
            Never shower in cold water again. Book our experienced water heater technicians for safe, guaranteed doorstep repair in Gurgaon.
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
            Available 8:00 AM - 9:00 PM • DLF Phases • Golf Course Extension • Sohna Road • All Gurgaon
          </p>
        </div>
      </section>
    </div>
  );
}
