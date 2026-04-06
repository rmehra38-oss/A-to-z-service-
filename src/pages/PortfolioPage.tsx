import { motion } from 'motion/react';
import { Star, CheckCircle2, MessageCircle, Phone } from 'lucide-react';

const portfolioItems = [
  {
    title: 'Split AC Installation',
    location: 'Sector 56, Gurgaon',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800',
    description: 'Professional installation of a 1.5 Ton inverter AC with precise copper piping and outdoor unit mounting.'
  },
  {
    title: 'Washing Machine Repair',
    location: 'Sector 45, Gurgaon',
    image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&q=80&w=800',
    description: 'Fixed a front-load washing machine with motor issues. Restored to full functionality within 2 hours.'
  },
  {
    title: 'Refrigerator Servicing',
    location: 'DLF Phase 3, Gurgaon',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=800',
    description: 'Expert gas refilling and compressor maintenance for a double-door refrigerator.'
  },
  {
    title: 'AC Jet Cleaning',
    location: 'Wazirabad, Gurgaon',
    image: 'https://images.unsplash.com/photo-1558403194-611308249627?auto=format&fit=crop&q=80&w=800',
    description: 'Deep foam and jet cleaning service for a window AC unit, significantly improving cooling efficiency.'
  }
];

export default function PortfolioPage() {
  const whatsappLink = "https://wa.me/917056330400?text=I'm%20interested%20in%20your%20services";

  return (
    <div className="pt-32 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-orange-500 font-black uppercase tracking-[0.25em] text-sm mb-4"
          >
            Our Work
          </motion.h2>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl font-extrabold text-navy-900 mb-8 tracking-tight leading-none"
          >
            Recent <span className="text-gradient">Projects</span>
          </motion.h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium">
            Take a look at some of our recent repair and installation projects across Gurgaon. Quality and precision in every job.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-32">
          {portfolioItems.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-slate-50 rounded-[4rem] overflow-hidden border border-slate-100 group hover:bg-white hover:shadow-3xl transition-all duration-500"
            >
              <div className="h-80 overflow-hidden relative">
                <img src={item.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-navy-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                <div className="absolute top-8 right-8 glass p-4 rounded-2xl shadow-xl flex items-center gap-2">
                  <Star className="w-5 h-5 text-orange-500 fill-orange-500" />
                  <span className="font-black text-navy-900">4.9/5</span>
                </div>
              </div>
              <div className="p-12">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-3xl font-black text-navy-900 mb-2">{item.title}</h3>
                    <p className="text-orange-500 font-black uppercase tracking-widest text-xs">{item.location}</p>
                  </div>
                  <div className="bg-green-100 p-3 rounded-2xl shadow-sm"><CheckCircle2 className="w-6 h-6 text-green-600" /></div>
                </div>
                <p className="text-slate-600 font-medium leading-relaxed mb-8 text-lg">{item.description}</p>
                <button 
                  onClick={() => window.open(whatsappLink, '_blank')}
                  className="bg-navy-900 text-white px-8 py-4 rounded-2xl font-black text-lg hover:bg-navy-800 transition-all flex items-center gap-3 shadow-xl shadow-navy-900/20 transform hover:-translate-y-1"
                >
                  Book Similar Service <MessageCircle className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-navy-900 rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[120px] -mr-48 -mt-48 animate-blob"></div>
          <div className="relative z-10">
            <h3 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-none">Your Appliance <br /> Could Be Next!</h3>
            <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto font-medium">Join our list of satisfied customers. We provide same-day service and expert solutions for all your home appliances.</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="orange-gradient text-white px-12 py-6 rounded-[2rem] font-black text-xl shadow-2xl transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3"
              >
                <MessageCircle className="w-6 h-6" />
                WhatsApp Us
              </a>
              <a href="tel:+917056330400" className="glass-dark text-white px-12 py-6 rounded-[2rem] font-black text-xl transition-all flex items-center justify-center gap-3 transform hover:-translate-y-1">
                <Phone className="w-6 h-6 text-orange-500" />
                Call +91 70563 30400
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
