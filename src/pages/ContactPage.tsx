import { Phone, MapPin, Mail, Clock, ArrowRight, Wind } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-orange-100 px-4 py-2 rounded-2xl mb-6"
          >
            <span className="text-orange-600 font-black uppercase tracking-widest text-xs">Contact Us</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-navy-900 tracking-tighter mb-6"
          >
            Get in Touch
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-600 max-w-2xl mx-auto font-medium"
          >
            We're here to help with all your appliance repair needs in Gurgaon. Reach out to us anytime.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white p-10 rounded-[3rem] shadow-xl shadow-slate-200/50 border border-slate-100 text-center group hover:bg-navy-900 transition-all duration-500"
          >
            <div className="w-20 h-20 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:bg-orange-500 transition-colors">
              <Phone className="w-10 h-10 text-orange-500 group-hover:text-white" />
            </div>
            <h3 className="text-2xl font-black text-navy-900 mb-4 group-hover:text-white">Call Us</h3>
            <p className="text-slate-500 mb-6 font-medium group-hover:text-slate-400">Available 8 AM - 9 PM</p>
            <a href="tel:+917056330400" className="text-xl font-black text-orange-500 hover:text-orange-600 transition-colors">+91 70563 30400</a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white p-10 rounded-[3rem] shadow-xl shadow-slate-200/50 border border-slate-100 text-center group hover:bg-navy-900 transition-all duration-500"
          >
            <div className="w-20 h-20 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:bg-orange-500 transition-colors">
              <MapPin className="w-10 h-10 text-orange-500 group-hover:text-white" />
            </div>
            <h3 className="text-2xl font-black text-navy-900 mb-4 group-hover:text-white">Visit Us</h3>
            <p className="text-slate-500 mb-6 font-medium group-hover:text-slate-400">Our Shop Location</p>
            <p className="text-xl font-black text-orange-500">Shop 6, Sector 52 Market, Gurgaon</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white p-10 rounded-[3rem] shadow-xl shadow-slate-200/50 border border-slate-100 text-center group hover:bg-navy-900 transition-all duration-500"
          >
            <div className="w-20 h-20 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:bg-orange-500 transition-colors">
              <Mail className="w-10 h-10 text-orange-500 group-hover:text-white" />
            </div>
            <h3 className="text-2xl font-black text-navy-900 mb-4 group-hover:text-white">Email Us</h3>
            <p className="text-slate-500 mb-6 font-medium group-hover:text-slate-400">Send us an inquiry</p>
            <a href="mailto:gurgaonacservice@gmail.com" className="text-xl font-black text-orange-500 hover:text-orange-600 transition-colors">gurgaonacservice@gmail.com</a>
          </motion.div>
        </div>

        <div className="bg-white rounded-[4rem] shadow-2xl overflow-hidden border border-slate-100">
          <div className="grid lg:grid-cols-2">
            <div className="p-12 md:p-20">
              <h2 className="text-4xl font-black text-navy-900 mb-8 tracking-tight">Send a Message</h2>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black text-navy-900 uppercase tracking-widest ml-1">Name</label>
                    <input type="text" className="w-full bg-slate-50 border-2 border-transparent focus:border-orange-500 focus:bg-white px-6 py-4 rounded-2xl outline-none transition-all font-bold" placeholder="Your Name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-navy-900 uppercase tracking-widest ml-1">Phone</label>
                    <input type="tel" className="w-full bg-slate-50 border-2 border-transparent focus:border-orange-500 focus:bg-white px-6 py-4 rounded-2xl outline-none transition-all font-bold" placeholder="Your Phone" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-navy-900 uppercase tracking-widest ml-1">Message</label>
                  <textarea rows={4} className="w-full bg-slate-50 border-2 border-transparent focus:border-orange-500 focus:bg-white px-6 py-4 rounded-2xl outline-none transition-all font-bold" placeholder="How can we help?"></textarea>
                </div>
                <button className="w-full orange-gradient text-white py-5 rounded-2xl font-black text-lg shadow-xl shadow-orange-500/20 transform hover:-translate-y-1 transition-all">
                  Send Message
                </button>
              </form>
            </div>
            <div className="bg-navy-900 p-12 md:p-20 text-white flex flex-col justify-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
              <h2 className="text-4xl font-black mb-10 tracking-tight relative z-10">Business Hours</h2>
              <div className="space-y-6 relative z-10">
                <div className="flex justify-between items-center pb-4 border-b border-white/10">
                  <span className="font-bold text-slate-400">Monday - Sunday</span>
                  <span className="font-black text-orange-500">8:00 AM - 9:00 PM</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-white/10">
                  <span className="font-bold text-slate-400">Emergency Service</span>
                  <span className="font-black text-orange-500">24/7 Available</span>
                </div>
              </div>
              <div className="mt-12 p-8 bg-white/5 rounded-3xl border border-white/10 relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-orange-500 p-2 rounded-xl"><Wind className="w-6 h-6 text-white" /></div>
                  <span className="text-xl font-black tracking-tighter">ASAP GURGAON AC SERVICE</span>
                </div>
                <p className="text-slate-400 font-medium leading-relaxed">
                  Providing professional appliance repair services across Gurgaon since 2016.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link to="/" className="inline-flex items-center gap-2 font-black text-navy-900 hover:text-orange-500 transition-colors uppercase tracking-widest text-sm">
            <ArrowRight className="w-5 h-5 rotate-180" /> Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
