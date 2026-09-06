import { motion } from 'motion/react';
import { 
  Phone, MessageCircle, Star, ShieldCheck, Clock, Award, CheckCircle2, 
  Wrench, Zap, ThumbsUp, HeartHandshake, ChevronDown, ArrowRight, 
  ThermometerSnowflake, AlertTriangle, Check, RefreshCw
} from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import serviceFridgeImg from '../assets/images/service_refrigerator_repair_1781461875534.jpg';

const fridgeServices = [
  {
    category: "Diagnostic & Inspection",
    items: [
      { name: "Complete Refrigerator Health Check", price: "₹249 – ₹349", description: "Comprehensive checkup of compressor, cooling coils, thermostat, and gas pressures." },
      { name: "Gas Leakage Inspection & Testing", price: "₹299 – ₹399", description: "Nitrogen pressure leak check on copper joints, evaporator, and condenser lines." },
      { name: "Electrical & Sensor Diagnostics", price: "₹249 – ₹349", description: "Multi-meter testing of defrost sensors, thermal fuse, and PCB relays." }
    ]
  },
  {
    category: "Cooling & Gas Charging",
    items: [
      { name: "Single Door Gas Refill (R134a/R600a)", price: "₹1,499 – ₹1,999", description: "Full vacuuming, moisture extraction, filter replacement, and precision refrigerant refill." },
      { name: "Double Door / Frost-Free Gas Charging", price: "₹1,899 – ₹2,499", description: "Complete gas charging package with leak sealing, pin valve, and 90-day warranty." },
      { name: "Side-by-Side / Inverter Gas Refill", price: "₹2,699 – ₹3,499", description: "High-grade R600a hydrocarbon charging for multi-door inverter compressors." },
      { name: "Capillary Tube & Filter Drier Replacement", price: "₹650 – ₹950", description: "Clearing choked refrigerant lines causing weak or zero cooling." }
    ]
  },
  {
    category: "Component Repair & Spares",
    items: [
      { name: "Thermostat Replacement", price: "₹450 – ₹750", description: "OEM replacement for improper temperature control or over-freezing issues." },
      { name: "Defrost Timer & Bimetal Sensor Fix", price: "₹550 – ₹850", description: "Fixes ice blockage in freezer while lower compartment remains warm." },
      { name: "Inverter PCB Motherboard Repair", price: "₹1,800 – ₹3,200", description: "Chip-level circuit repair for inverter compressor controller boards." },
      { name: "Compressor Relay & Overload Protector (OLP)", price: "₹350 – ₹650", description: "Fixes clicking sounds and compressor failing to start." },
      { name: "Evaporator Fan Motor Replacement", price: "₹850 – ₹1,450", description: "Restores airflow when fan is noisy or stopped circulating cool air." },
      { name: "Door Gasket / Magnetic Seal Replacement", price: "₹650 – ₹1,200", description: "Stops air leakages and moisture condensation around door edges." },
      { name: "Compressor Replacement (Single/Double Door)", price: "₹4,500 – ₹7,500", description: "Brand-new high-efficiency compressor with new gas charging and 1-year warranty." }
    ]
  }
];

const commonProblems = [
  {
    title: "Refrigerator Not Cooling at All",
    cause: "Faulty relay, blown capacitor, compressor lock, or complete refrigerant gas leakage.",
    solution: "On-site electrical testing, gas pressure assessment, and same-day component restoration."
  },
  {
    title: "Freezer Works but Lower Fridge is Warm",
    cause: "Defrost heater/sensor failure causing thick ice to choke cold air circulation ducts.",
    solution: "Manual coil defrosting, testing defrost timer/bimetal switch, and restoring duct damper."
  },
  {
    title: "Water Leakage on the Floor / Vegetable Box",
    cause: "Clogged defrost drain pipe, cracked drain pan, or broken water dispenser line.",
    solution: "High-pressure drain line flush, clearing ice blockage, and drain tray sealing."
  },
  {
    title: "Frequent Clicking Sound & No Cooling",
    cause: "Compressor start relay or capacitor is failing to kick-start the motor windings.",
    solution: "Instant replacement with genuine PTC relay and heavy-duty overload protector."
  },
  {
    title: "Excessive Ice Buildup / Snowing in Freezer",
    cause: "Damaged magnetic door rubber gasket allowing humid room air inside, or stuck thermostat.",
    solution: "Thermal door gasket realignment or replacement, plus thermostat calibration."
  },
  {
    title: "Fridge Tripping House MCB",
    cause: "Short circuit in heating element, grounded compressor motor, or faulty internal wiring.",
    solution: "Insulation resistance testing, ground-fault repair, and electrical safety check."
  }
];

const fridgeTypes = [
  { title: "Single Door Refrigerators", desc: "Direct cool models from 170L to 230L. Expert in thermostat, capillary, and relay issues." },
  { title: "Double Door Frost-Free", desc: "Top & bottom freezer models (250L – 500L). Specialized in auto-defrost and PCB repairs." },
  { title: "Side-by-Side & French Door", desc: "High-capacity smart refrigerators. Inverter compressor and multi-sensor diagnostics." },
  { title: "Deep Freezers & Commercial", desc: "Chest freezers, display coolers, and under-counter commercial cooling equipment." }
];

const brands = [
  "Samsung", "LG", "Whirlpool", "Haier", "Godrej", "Bosch", 
  "Hitachi", "Panasonic", "Siemens", "Kelvinator", "Electrolux", "Voltas Beko"
];

const faqs = [
  {
    q: "How quickly can your technician arrive in Gurgaon for fridge repair?",
    a: "Our technicians are stationed across all prime Gurgaon hubs (DLF Phases 1-5, Golf Course Road, Sohna Road, Sector 14, 52, 56, etc.) and typically reach your doorstep within 45 to 60 minutes of booking."
  },
  {
    q: "Do you provide a warranty on refrigerator repairs and spare parts?",
    a: "Yes! All refrigerator repair services, replacement parts, and gas charging come with a solid 90-day service warranty. Compressors carry manufacturer warranties of up to 1 to 5 years."
  },
  {
    q: "Why is my fridge running continuously without turning off?",
    a: "A refrigerator running non-stop is usually caused by low refrigerant levels, a broken thermostat unable to sense the set temperature, or a worn-out door gasket letting cold air escape."
  },
  {
    q: "Do you repair Inverter Refrigerator PCB motherboards?",
    a: "Yes. Our senior technicians carry advanced diagnostic tools to perform chip-level and capacitor repairs on inverter refrigerator motherboards for LG, Samsung, Whirlpool, and other brands."
  },
  {
    q: "What are your visiting/inspection charges if I don't proceed with repair?",
    a: "Our basic inspection charge is only ₹249, which covers doorstep diagnosis. If you proceed with the suggested repair, the inspection fee is completely waived!"
  }
];

export default function FridgeRepairPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const whatsappLink = "https://wa.me/917056330400?text=Hi%2C%20I%20need%20doorstep%20Refrigerator%20repair%20service%20in%20Gurgaon";

  return (
    <div className="bg-slate-50 min-h-screen relative overflow-hidden">
      {/* Background ambient blurs */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] -left-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-[40%] -right-20 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-3xl"></div>
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
                <span className="text-orange-400">Refrigerator Repair</span>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-400 border border-orange-500/30 px-5 py-2 rounded-full font-black text-xs uppercase tracking-widest mb-6"
              >
                <Star className="w-4 h-4 fill-orange-400" />
                Gurgaon's #1 Doorstep Refrigerator Repair • 60 Mins Arrival
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-7xl font-black mb-6 tracking-tight leading-[1.05]"
              >
                Expert <span className="text-orange-500">Fridge Repair</span> Service in Gurgaon
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl font-medium leading-relaxed"
              >
                Is your refrigerator not cooling, leaking water, or making clicking sounds? Our certified technicians fix Single Door, Double Door, and Side-by-Side refrigerators at your doorstep with 100% genuine spares and a 90-day warranty.
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
                  <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">Service Warranty</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-orange-400">100%</div>
                  <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">Genuine Spares</div>
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
                    src={serviceFridgeImg} 
                    alt="Refrigerator repair technician in Gurgaon" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent"></div>
                  
                  <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl glass-dark border border-white/15">
                    <div className="flex items-center gap-3 mb-1">
                      <ThermometerSnowflake className="w-6 h-6 text-blue-400" />
                      <span className="font-black text-lg">Instant Cooling Restoration</span>
                    </div>
                    <p className="text-xs text-slate-300 font-medium">Compressor, gas refilling & thermostat issues fixed on the spot.</p>
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
            { icon: <Clock className="w-6 h-6" />, title: "60-Min Arrival", sub: "All Gurgaon Sectors" },
            { icon: <ShieldCheck className="w-6 h-6" />, title: "90-Day Warranty", sub: "Parts & Workmanship" },
            { icon: <ThumbsUp className="w-6 h-6" />, title: "Fixed Pricing", sub: "No Hidden Costs" },
            { icon: <Award className="w-6 h-6" />, title: "OEM Spare Parts", sub: "Certified Compatible" }
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
          <span className="text-orange-600 font-black uppercase tracking-widest text-xs">Transparent Pricing</span>
          <h2 className="text-3xl md:text-5xl font-black text-navy-950 mt-2 mb-4 tracking-tight">
            Refrigerator Repair Rate Card
          </h2>
          <p className="text-slate-600 font-medium">
            Affordable, transparent service charges with zero hidden surprises. Every repair is backed by a 90-day warranty.
          </p>
        </div>

        <div className="space-y-12">
          {fridgeServices.map((cat, idx) => (
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
            <span className="text-orange-600 font-black uppercase tracking-widest text-xs">Troubleshooting Guide</span>
            <h2 className="text-3xl md:text-5xl font-black text-navy-950 mt-2 mb-4 tracking-tight">
              Common Refrigerator Problems We Fix
            </h2>
            <p className="text-slate-600 font-medium">
              Notice any of these symptoms in your fridge? Our Gurgaon technicians resolve them in a single doorstep visit.
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

      {/* Refrigerator Types */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-orange-600 font-black uppercase tracking-widest text-xs">All Configurations</span>
          <h2 className="text-3xl md:text-5xl font-black text-navy-950 mt-2 mb-4 tracking-tight">
            We Service Every Refrigerator Type
          </h2>
          <p className="text-slate-600 font-medium">
            From vintage compact single doors to modern multi-zone IoT inverter refrigerators.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {fridgeTypes.map((type, i) => (
            <div key={i} className="p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm hover:border-orange-300 transition-all text-center">
              <div className="w-16 h-16 rounded-3xl bg-orange-100 text-orange-600 mx-auto flex items-center justify-center mb-6">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="font-black text-navy-950 text-xl mb-3">{type.title}</h3>
              <p className="text-sm text-slate-500 font-medium leading-relaxed">{type.desc}</p>
            </div>
          ))}
        </div>

        {/* Brands Badges */}
        <div className="mt-16 bg-navy-900 rounded-[3rem] p-10 text-white text-center">
          <h3 className="text-xl md:text-2xl font-black mb-6">All Major Refrigerator Brands Serviced</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {brands.map((b, i) => (
              <span key={i} className="px-5 py-2.5 rounded-2xl bg-white/10 text-white font-bold text-sm tracking-wide border border-white/10 hover:bg-orange-500 transition-colors">
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Step-by-Step Doorstep Process */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-orange-600 font-black uppercase tracking-widest text-xs">Hassle-Free Experience</span>
            <h2 className="text-3xl md:text-5xl font-black text-navy-950 mt-2 mb-4 tracking-tight">
              Our 4-Step Doorstep Repair Process
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { num: "01", title: "Book in 60 Secs", desc: "Call or WhatsApp with your fridge model and issue. No advance payment required." },
              { num: "02", title: "60-Min Arrival", desc: "Certified technician reaches your home with diagnostic gear and genuine spares." },
              { num: "03", title: "Transparent Quote", desc: "Complete inspection followed by an honest, upfront price quote for approval." },
              { num: "04", title: "Test & 90-Day Warranty", desc: "Immediate doorstep repair, cooling test, and invoice with warranty protection." }
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
          <p className="text-slate-600 font-medium">Everything you need to know about our refrigerator repair service in Gurgaon.</p>
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
            <Link to="/washing-machine-repair" className="p-6 bg-white rounded-2xl border border-slate-200 text-center hover:border-orange-500 hover:shadow-md transition-all group">
              <span className="block font-black text-navy-950 group-hover:text-orange-600 mb-1">Washing Machine Repair</span>
              <span className="text-xs text-slate-500">From ₹299 • All Brands</span>
            </Link>
            <Link to="/microwave-repair" className="p-6 bg-white rounded-2xl border border-slate-200 text-center hover:border-orange-500 hover:shadow-md transition-all group">
              <span className="block font-black text-navy-950 group-hover:text-orange-600 mb-1">Microwave Repair</span>
              <span className="text-xs text-slate-500">From ₹249 • Solo, Grill & Convection</span>
            </Link>
            <Link to="/geyser-repair" className="p-6 bg-white rounded-2xl border border-slate-200 text-center hover:border-orange-500 hover:shadow-md transition-all group">
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
            Get Your Fridge Fixed in <span className="text-orange-500">60 Minutes</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto font-medium">
            Don't let your food spoil. Call our emergency appliance technician now or book via WhatsApp for doorstep service in Gurgaon.
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
            Serving DLF Phases 1-5 • Sector 56 • Golf Course Road • Sohna Road • Cyber City • All Gurgaon
          </p>
        </div>
      </section>
    </div>
  );
}
