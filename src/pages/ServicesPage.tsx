import { motion } from 'motion/react';
import { 
  MessageCircle, Phone, ArrowRight, CheckCircle2, Wind, Zap, Wrench, Settings, 
  ShieldCheck, Clock, Award, Star, ThumbsUp, HeartHandshake, Check
} from 'lucide-react';

const acServices = [
  {
    category: "Standard AC Servicing",
    icon: <Wind className="w-8 h-8" />,
    description: "Keep your AC running at peak efficiency with our deep cleaning services.",
    items: [
      { name: "Window AC Jet Service", price: "₹399 – ₹549", description: "High-pressure water jet cleaning of filters and coils." },
      { name: "Split AC Jet Service", price: "₹499 – ₹699", description: "Deep cleaning of indoor and outdoor units to improve airflow." },
      { name: "Foam & Jet Deep Cleaning", price: "₹549 – ₹649", description: "Uses specialized foam to remove stubborn grease and dust from coils." },
      { name: "Anti-Rust Coating Service", price: "₹679 – ₹999", description: "Prevents gas leakage by protecting coils from corrosion." }
    ]
  },
  {
    category: "Gas Refilling & Leakage",
    icon: <Zap className="w-8 h-8" />,
    description: "Expert leak detection and high-quality refrigerant refilling.",
    items: [
      { name: "Full Gas Charging (Up to 2 Ton)", price: "₹2,399 – ₹2,800", description: "Includes leak detection, fixing, and a complete refill of refrigerant gas." },
      { name: "Gas Leak Detection Only", price: "₹199 – ₹299", description: "Inspection of joints and coils to find exact leak sources." },
      { name: "Water Leakage Repair", price: "₹449 – ₹699", description: "Drainage cleaning and pipe adjustment to stop internal dripping." }
    ]
  },
  {
    category: "Repair & Replacement",
    icon: <Wrench className="w-8 h-8" />,
    description: "Genuine spare parts and expert labor for all major AC components.",
    items: [
      { name: "AC Inspection / Diagnosis", price: "₹289 – ₹399", description: "Professional inspection to identify issues." },
      { name: "Capacitor Replacement", price: "₹250 – ₹600", description: "Replacement of faulty start/run capacitors." },
      { name: "PCB Repair (Non-Inverter)", price: "₹1,500 – ₹2,500", description: "Expert repair of non-inverter control boards." },
      { name: "PCB Repair (Inverter)", price: "₹4,000 – ₹5,800", description: "Specialized repair for inverter AC PCBs." },
      { name: "Condenser Coil Repair", price: "₹500 onwards", description: "Fixing leaks or damage in the condenser coil." },
      { name: "Fan Motor (Outdoor/Split)", price: "₹1,800 – ₹2,500", description: "Replacement of faulty fan motors." },
      { name: "Blower Motor Replacement", price: "₹2,200 onwards", description: "Replacement of indoor unit blower motors." },
      { name: "Compressor Replacement (1.5 Ton)", price: "₹7,500 – ₹9,999", description: "Full replacement of the AC compressor." }
    ]
  },
  {
    category: "Installation & Setup",
    icon: <Settings className="w-8 h-8" />,
    description: "Safe and secure installation or removal of your AC units.",
    items: [
      { name: "Window AC Installation", price: "₹799 – ₹1,039", description: "Secure mounting and setup of window AC." },
      { name: "Split AC Installation", price: "₹1,439 – ₹2,028", description: "Professional installation of indoor and outdoor units." },
      { name: "Window AC Uninstallation", price: "₹449 – ₹659", description: "Safe removal of window AC units." },
      { name: "Split AC Uninstallation", price: "₹699 – ₹1,050", description: "Safe removal of split AC units." }
    ]
  }
];

const guarantees = [
  { icon: <ShieldCheck className="w-6 h-6" />, title: "90-Day Warranty", text: "On all repair services" },
  { icon: <ThumbsUp className="w-6 h-6" />, title: "Genuine Parts", text: "100% authentic spares" },
  { icon: <Clock className="w-6 h-6" />, title: "On-Time Service", text: "Arrival within 60 mins" },
  { icon: <HeartHandshake className="w-6 h-6" />, title: "Expert Techs", text: "Certified professionals" }
];

const brands = [
  "Samsung", "LG", "Whirlpool", "Daikin", "Voltas", "Blue Star", "Hitachi", "Haier", "Lloyd", "Panasonic", "Godrej", "Mitsubishi"
];

export default function ServicesPage() {
  const whatsappLink = "https://wa.me/917056330400?text=I'm%20interested%20in%20your%20services";

  return (
    <div className="bg-slate-50 min-h-screen relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] -left-20 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-[40%] -right-20 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-orange-500/5 rounded-full blur-[120px]"></div>
      </div>

      {/* Hero Section */}
      <section className="pt-48 pb-32 bg-navy-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-3xl -ml-20 -mb-20"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-500 px-6 py-2 rounded-full font-black uppercase tracking-[0.2em] text-xs mb-8 border border-orange-500/30"
            >
              <Star className="w-4 h-4 fill-orange-500" />
              Gurgaon's #1 Rated Service
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-[0.9]"
            >
              Premium <span className="text-orange-500">AC Services</span> <br />
              & Transparent Pricing
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-400 max-w-3xl mx-auto font-medium leading-relaxed"
            >
              From quick jet servicing to complex PCB repairs, we provide expert solutions for all AC brands with upfront pricing and no hidden costs.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Guarantees Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
        <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl border border-slate-100 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {guarantees.map((g, i) => (
            <div key={i} className="flex items-center gap-5 group">
              <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-500 group-hover:orange-gradient group-hover:text-white transition-all duration-300 shadow-lg shadow-orange-500/10">
                {g.icon}
              </div>
              <div>
                <p className="font-black text-navy-900 tracking-tight">{g.title}</p>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{g.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        {/* Services Grid */}
        <div className="space-y-24">
          {acServices.map((section, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                <div className="max-w-2xl">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 orange-gradient rounded-[1.5rem] flex items-center justify-center text-white shadow-xl shadow-orange-500/20">
                      {section.icon}
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-navy-900 tracking-tight">{section.category}</h2>
                  </div>
                  <p className="text-lg text-slate-500 font-medium ml-20">{section.description}</p>
                </div>
                <div className="hidden md:block h-px flex-1 bg-slate-200 mx-12 mb-6"></div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {section.items.map((item, i) => (
                  <motion.div 
                    key={i} 
                    whileHover={{ scale: 1.02 }}
                    className="p-8 rounded-[2.5rem] bg-white border border-slate-100 hover:border-orange-200 transition-all group shadow-sm hover:shadow-xl relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
                    <div className="relative z-10">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-black text-navy-900 group-hover:text-orange-500 transition-colors tracking-tight">{item.name}</h3>
                        <div className="bg-slate-50 px-4 py-2 rounded-xl border border-slate-100">
                          <span className="text-orange-600 font-black whitespace-nowrap">{item.price}</span>
                        </div>
                      </div>
                      <p className="text-slate-500 font-medium leading-relaxed pr-12">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Brands Section */}
        <div className="mt-32 py-24 bg-white rounded-[4rem] border border-slate-100 shadow-xl overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-5xl font-black text-navy-900 mb-4 tracking-tight">Brands We Service</h3>
            <p className="text-slate-500 font-medium">We provide expert repair and service for all major air conditioner brands.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 px-8">
            {brands.map((brand, i) => (
              <div key={i} className="bg-slate-50 px-8 py-4 rounded-2xl border border-slate-100 text-navy-900 font-black text-lg hover:orange-gradient hover:text-white transition-all cursor-default shadow-sm">
                {brand}
              </div>
            ))}
          </div>
        </div>

        {/* Service Process */}
        <div className="mt-32">
          <div className="text-center mb-20">
            <h3 className="text-3xl md:text-5xl font-black text-navy-900 mb-6 tracking-tight">Our Service Process</h3>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto font-medium">We follow a professional, systematic approach to ensure your AC is serviced to the highest standards.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { step: "01", title: "Deep Cleaning", text: "High-pressure jet cleaning of filters, coils, and drain trays to remove all dust and debris." },
              { step: "02", title: "Performance Check", text: "Testing gas levels, electrical components, and airflow to ensure peak efficiency." },
              { step: "03", title: "Final Sanitization", text: "Applying anti-bacterial spray and cleaning the outer unit for a fresh, healthy environment." }
            ].map((s, i) => (
              <div key={i} className="relative group p-10 bg-white rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all">
                <div className="text-6xl font-black text-slate-100 absolute top-8 right-8 group-hover:text-orange-100 transition-colors">{s.step}</div>
                <h4 className="text-2xl font-black text-navy-900 mb-4 relative z-10">{s.title}</h4>
                <p className="text-slate-500 font-medium leading-relaxed relative z-10">{s.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-32 bg-navy-900 rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden shadow-[0_64px_128px_-32px_rgba(0,0,0,0.3)]">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-orange-500/10 rounded-full blur-[120px] -mr-96 -mt-96 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px] -ml-64 -mb-64"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto">
            <h3 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-tight">
              Ready to Restore Your <br />
              <span className="text-orange-500">AC's Performance?</span>
            </h3>
            <p className="text-xl text-slate-400 mb-16 max-w-2xl mx-auto font-medium leading-relaxed">
              Don't wait for a total breakdown. Our experts are ready to provide fast, reliable, and affordable service anywhere in Gurgaon.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center">
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="orange-gradient text-white px-12 py-6 rounded-3xl font-black text-2xl shadow-2xl shadow-orange-500/40 flex items-center justify-center gap-4 transform hover:-translate-y-2 hover:scale-105 transition-all active:scale-95"
              >
                <MessageCircle className="w-8 h-8" />
                Book via WhatsApp
              </a>
              <a 
                href="tel:+917056330400"
                className="glass-dark text-white px-12 py-6 rounded-3xl font-black text-2xl flex items-center justify-center gap-4 transform hover:-translate-y-2 hover:scale-105 transition-all active:scale-95 border border-white/10"
              >
                <Phone className="w-8 h-8 text-orange-500" />
                Call Support
              </a>
            </div>
            <p className="mt-12 text-slate-500 font-black uppercase tracking-[0.3em] text-xs">Available 8:00 AM - 9:00 PM • All 7 Days</p>
          </div>
        </div>
      </div>
    </div>
  );
}
