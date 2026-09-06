import { motion } from 'motion/react';
import { 
  Phone, MessageCircle, Star, ShieldCheck, Clock, Award, CheckCircle2, 
  Wrench, Zap, ThumbsUp, HeartHandshake, ChevronDown, ArrowRight, 
  Flame, AlertTriangle, Check, Sparkles
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import serviceMicrowaveImg from '../assets/images/microwave_repair_1788705508248.jpg';

const microwaveServices = [
  {
    category: "Diagnostics & Safety Inspection",
    items: [
      { name: "Full Microwave Safety & Radiation Scan", price: "₹249 – ₹349", description: "Testing high-voltage circuit, RF radiation leakage around door seals, and power transformer." },
      { name: "Electrical & Touchpad Continuity Test", price: "₹249 – ₹349", description: "Testing touchpad membrane ribbon cables, microswitches, and PCB control relays." },
      { name: "Heating Chamber Inspection", price: "₹199 – ₹299", description: "Checking cavity condition, mica waveguide sheet, and turntable drive spindle." }
    ]
  },
  {
    category: "Heating, Magnetron & High-Voltage Repairs",
    items: [
      { name: "Magnetron Replacement (OEM)", price: "₹1,199 – ₹1,899", description: "Fixes microwave running normally and counting down but food staying stone cold." },
      { name: "High-Voltage Capacitor Replacement", price: "₹450 – ₹750", description: "Fixes heavy buzzing noise or blown main fuse caused by shorted HV capacitor." },
      { name: "High-Voltage Rectifier Diode Fix", price: "₹350 – ₹550", description: "Crucial one-way diode replacement restoring proper magnetron high-voltage supply." },
      { name: "Mica Waveguide Cover Replacement", price: "₹249 – ₹450", description: "Stops scary electrical sparking and arcing inside the microwave cooking chamber." },
      { name: "HV Power Transformer Replacement", price: "₹1,400 – ₹2,200", description: "Replacement of burnt step-up copper transformer causing burning smell or tripping MCB." }
    ]
  },
  {
    category: "Turntable, Door & Electronic Spares",
    items: [
      { name: "Turntable Synchronous Motor Replacement", price: "₹399 – ₹650", description: "Restores glass plate rotation for uniform cooking and reheating." },
      { name: "Touchpad Membrane Keypad Replacement", price: "₹750 – ₹1,350", description: "Fixes unresponsive start button, frozen keypad buttons, or random number inputs." },
      { name: "Door Interlock Microswitch Replacement", price: "₹350 – ₹600", description: "Fixes microwave blowing house fuse when opening door or refusing to start." },
      { name: "Main PCB Control Board Repair", price: "₹850 – ₹1,750", description: "Chip-level circuit repair for dead displays, relay clicks, and program errors." },
      { name: "Glass Turntable Plate & Roller Ring", price: "₹350 – ₹750", description: "Heavy-duty heat-resistant borosilicate glass plate and rotating roller ring." }
    ]
  }
];

const commonProblems = [
  {
    title: "Microwave Runs but Doesn't Heat Food",
    cause: "Burnt magnetron filament, shorted high-voltage capacitor, or blown HV diode/fuse.",
    solution: "On-site HV circuit discharge and testing, replacing the faulty magnetron or diode."
  },
  {
    title: "Sparking & Flames Inside Chamber",
    cause: "Burnt or grease-stained mica waveguide sheet, or scratched metal cavity paint.",
    solution: "Cavity cleaning and installing a fresh heat-resistant mica waveguide plate."
  },
  {
    title: "Turntable Glass Plate Not Rotating",
    cause: "Stripped drive coupler spindle or burnt bottom synchronous turntable motor.",
    solution: "Quick motor or roller ring replacement to restore 360-degree plate rotation."
  },
  {
    title: "Touchpad Buttons Not Responding",
    cause: "Moisture ingress or cracked carbon traces on the flexible membrane keypad ribbon.",
    solution: "Replacement of the OEM membrane keypad or keypad interface micro-controller."
  },
  {
    title: "Loud Buzzing / Humming Noise",
    cause: "Overloaded high-voltage transformer, vibrating fan motor, or defective capacitor.",
    solution: "Transformer vibration dampening or replacing shorted capacitor and cooling fan."
  },
  {
    title: "Microwave Shuts Down After a Few Seconds",
    cause: "Thermal overload cut-off sensor tripping due to blocked cooling fan or airflow.",
    solution: "Cleaning ventilation grills, testing thermal protector, and fan motor servicing."
  }
];

const microwaveTypes = [
  { title: "Solo Microwaves", desc: "Essential models for reheating, defrosting, and simple cooking (20L – 25L). Fast, affordable fixes." },
  { title: "Grill Microwaves", desc: "Equipped with radiant heating coils for toasting and grilling alongside microwave energy." },
  { title: "Convection Microwaves", desc: "High-end units with heating coils and circulation fans for baking, roasting, and crisping." },
  { title: "Built-in / Over-the-Range Ovens", desc: "Integrated modular kitchen appliances. Specialized in precision extraction and cabinet fitting." }
];

const brands = [
  "LG", "Samsung", "IFB", "Panasonic", "Whirlpool", "Morphy Richards", 
  "Bajaj", "Godrej", "Bosch", "Haier", "Kenstar", "Siemens"
];

const faqs = [
  {
    q: "Is it safe to repair a microwave oven at home?",
    a: "Microwave ovens store lethal high voltages (over 2,000V) in their capacitors even when unplugged. You should NEVER open a microwave yourself. Our certified technicians carry insulated safety dischargers and precision RF radiation detectors to fix it safely at your doorstep."
  },
  {
    q: "Why is my microwave running normally but the food is completely cold?",
    a: "This is the classic symptom of a failed Magnetron or blown High-Voltage (HV) diode. The digital timer, fan, and light work, but no micro-waves are being emitted. We replace magnetrons on-site with a 90-day warranty."
  },
  {
    q: "Can you fix unresponsive or frozen buttons on the touch panel?",
    a: "Yes! When the Start button or numeric keypad stops responding, we replace the model-specific membrane keypad ribbon or service the control PCB to restore full touch functionality."
  },
  {
    q: "How fast can your microwave technician arrive in Gurgaon?",
    a: "Our technicians carry standard microwave spares (magnetrons, diodes, capacitors, mica plates, motors) in their service kits and typically arrive at your home within 45 to 60 minutes."
  },
  {
    q: "What is your visiting / inspection charge?",
    a: "The visiting and diagnostic charge is ₹249. If you proceed with the suggested repair, this inspection fee is completely waived!"
  }
];

export default function MicrowaveRepairPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const whatsappLink = "https://wa.me/917056330400?text=Hi%2C%20I%20need%20doorstep%20Microwave%20Oven%20repair%20service%20in%20Gurgaon";

  useEffect(() => {
    document.title = "Microwave Repair Gurgaon | Microwave Oven Magnetron & Touchpad Service (₹249)";
    
    // Canonical link tag
    let canonical = document.querySelector("link[rel='canonical']") as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = "https://www.gurgaonacservice.com/microwave-repair-gurgaon";

    // Service Schema
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'microwave-service-schema';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Microwave Oven Repair Service",
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
      "url": "https://www.gurgaonacservice.com/microwave-repair-gurgaon",
      "offers": {
        "@type": "Offer",
        "priceCurrency": "INR",
        "price": "249",
        "availability": "https://schema.org/InStock"
      }
    });
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById('microwave-service-schema');
      if (el) el.remove();
    };
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen relative overflow-hidden">
      {/* Background ambient blurs */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] -left-20 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-[40%] -right-20 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Hero Section */}
      <section className="pt-40 md:pt-48 pb-24 bg-navy-900 relative overflow-hidden text-white">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-3xl -ml-20 -mb-20"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 text-center lg:text-left">
              {/* Breadcrumb */}
              <div className="flex items-center justify-center lg:justify-start gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">
                <Link to="/" className="hover:text-orange-400 transition-colors">Home</Link>
                <span>/</span>
                <Link to="/services" className="hover:text-orange-400 transition-colors">Services</Link>
                <span>/</span>
                <span className="text-orange-400">Microwave Repair</span>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-400 border border-orange-500/30 px-5 py-2 rounded-full font-black text-xs uppercase tracking-widest mb-6"
              >
                <Star className="w-4 h-4 fill-orange-400" />
                Gurgaon's Certified Microwave Specialists • 60 Mins Arrival
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-7xl font-black mb-6 tracking-tight leading-[1.05]"
              >
                Doorstep <span className="text-orange-500">Microwave Oven</span> Repair in Gurgaon
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl font-medium leading-relaxed"
              >
                Is your microwave not heating, sparking inside, or refusing to turn on? Our certified technicians repair Solo, Grill, and Convection ovens right at your home with genuine spare parts and a 90-day warranty.
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
                  <div className="text-2xl font-black text-orange-400">OEM Parts</div>
                  <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">Magnetron & Diodes</div>
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
                    src={serviceMicrowaveImg} 
                    alt="Microwave oven repair technician in Gurgaon" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent"></div>
                  
                  <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl glass-dark border border-white/15">
                    <div className="flex items-center gap-3 mb-1">
                      <Flame className="w-6 h-6 text-orange-400" />
                      <span className="font-black text-lg">Instant Heating Restoration</span>
                    </div>
                    <p className="text-xs text-slate-300 font-medium">Magnetron replacement, sparking fixes & touchpad repairs.</p>
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
            { icon: <Clock className="w-6 h-6" />, title: "60-Min Arrival", sub: "Doorstep in Gurgaon" },
            { icon: <ShieldCheck className="w-6 h-6" />, title: "90-Day Warranty", sub: "Magnetron & Electronics" },
            { icon: <ThumbsUp className="w-6 h-6" />, title: "Fixed Charges", sub: "Starting at ₹249" },
            { icon: <Award className="w-6 h-6" />, title: "Radiation Tested", sub: "100% Safe Cooking" }
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
          <span className="text-orange-600 font-black uppercase tracking-widest text-xs">Upfront Rate Card</span>
          <h2 className="text-3xl md:text-5xl font-black text-navy-950 mt-2 mb-4 tracking-tight">
            Microwave Oven Repair Rates
          </h2>
          <p className="text-slate-600 font-medium">
            Clear, fixed pricing with genuine manufacturer-compatible spare parts. No hidden fees.
          </p>
        </div>

        <div className="space-y-12">
          {microwaveServices.map((cat, idx) => (
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
              Common Microwave Problems We Fix
            </h2>
            <p className="text-slate-600 font-medium">
              Don't compromise on kitchen safety. We fix all heating and electrical issues in one visit.
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

      {/* Types of Microwaves */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-orange-600 font-black uppercase tracking-widest text-xs">All Models</span>
          <h2 className="text-3xl md:text-5xl font-black text-navy-950 mt-2 mb-4 tracking-tight">
            Solo, Grill & Convection Ovens Serviced
          </h2>
          <p className="text-slate-600 font-medium">
            We service all countertop and built-in microwave models from 20L to 34L+.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {microwaveTypes.map((type, i) => (
            <div key={i} className="p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm hover:border-orange-300 transition-all text-center">
              <div className="w-16 h-16 rounded-3xl bg-orange-100 text-orange-600 mx-auto flex items-center justify-center mb-6">
                <Sparkles className="w-8 h-8" />
              </div>
              <h3 className="font-black text-navy-950 text-xl mb-3">{type.title}</h3>
              <p className="text-sm text-slate-500 font-medium leading-relaxed">{type.desc}</p>
            </div>
          ))}
        </div>

        {/* Brands Badges */}
        <div className="mt-16 bg-navy-900 rounded-[3rem] p-10 text-white text-center">
          <h3 className="text-xl md:text-2xl font-black mb-6">All Major Microwave Brands Serviced</h3>
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
            <span className="text-orange-600 font-black uppercase tracking-widest text-xs">Effortless Booking</span>
            <h2 className="text-3xl md:text-5xl font-black text-navy-950 mt-2 mb-4 tracking-tight">
              Doorstep Microwave Repair in 4 Easy Steps
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { num: "01", title: "Instant Booking", desc: "Share your microwave model and problem over WhatsApp or a phone call." },
              { num: "02", title: "60-Min Arrival", desc: "Certified electrical technician reaches your home with diagnostic gear." },
              { num: "03", title: "Upfront Quote", desc: "Inspection of magnetron, capacitor, and PCB with a guaranteed fixed quote." },
              { num: "04", title: "Doorstep Fix & Safety Test", desc: "Same-day repair, glass plate test, RF radiation safety check, and 90-day warranty." }
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
          <p className="text-slate-600 font-medium">Common queries regarding microwave repair in Gurgaon.</p>
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
            <Link to="/geyser-repair-gurgaon" className="p-6 bg-white rounded-2xl border border-slate-200 text-center hover:border-orange-500 hover:shadow-md transition-all group">
              <span className="block font-black text-navy-950 group-hover:text-orange-600 mb-1">Geyser Repair</span>
              <span className="text-xs text-slate-500">From ₹249 • Instant & Storage</span>
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
            Fix Your Microwave in <span className="text-orange-500">60 Minutes</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto font-medium">
            Enjoy hot, effortless meals again without delay. Book our expert microwave technician for doorstep repair anywhere in Gurgaon.
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
            Doorstep Service Across DLF Phases 1-5 • Golf Course Road • Sohna Road • Sector 56 • All Gurgaon
          </p>
        </div>
      </section>
    </div>
  );
}
