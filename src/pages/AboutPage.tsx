import { motion } from 'motion/react';
import { ShieldCheck, Clock, Award, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AboutPage() {
  return (
    <div className="pt-32 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-orange-500 font-black uppercase tracking-[0.25em] text-sm mb-4">Our Story</h2>
            <h1 className="text-4xl md:text-7xl font-extrabold text-navy-900 mb-8 tracking-tight leading-none">
              Gurgaon's Most <br />
              <span className="text-gradient">Trusted AC Service</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed font-medium">
              Founded in 2016, ASAP GURGAON AC SERVICE started with a simple mission: to provide honest, high-quality appliance repair services to the residents of Gurgaon. Today, we are proud to be the first choice for thousands of families.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link to="/contact" className="bg-navy-900 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-navy-800 transition-all flex items-center justify-center gap-3 shadow-xl shadow-navy-900/20 transform hover:-translate-y-1">
                Contact Us <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="rounded-[4rem] overflow-hidden shadow-3xl border-[16px] border-slate-50 aspect-square">
              <img 
                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=1000" 
                alt="Our Team" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-12 -right-12 orange-gradient p-12 rounded-[3rem] text-white shadow-2xl hidden md:block">
              <p className="text-6xl font-black mb-2 tracking-tighter">10+</p>
              <p className="font-black uppercase tracking-widest text-xs opacity-90">Years Experience</p>
            </div>
          </motion.div>
        </div>

        {/* Mission/Vision */}
        <div className="grid md:grid-cols-3 gap-12 mb-32">
          <div className="bg-slate-50 p-12 rounded-[3rem] border border-slate-100">
            <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 mb-8 shadow-lg">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black text-navy-900 mb-4">Our Mission</h3>
            <p className="text-slate-600 font-medium leading-relaxed">To provide the most reliable, transparent, and affordable AC repair and maintenance services in Gurgaon, ensuring every home stays cool and comfortable.</p>
          </div>
          <div className="bg-navy-900 p-12 rounded-[3rem] text-white shadow-2xl">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-orange-400 mb-8 shadow-lg">
              <Award className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black mb-4">Our Vision</h3>
            <p className="text-slate-400 font-medium leading-relaxed">To be the undisputed leader in home appliance services across the NCR region, known for our technical excellence and customer-centric approach.</p>
          </div>
          <div className="bg-slate-50 p-12 rounded-[3rem] border border-slate-100">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-8 shadow-lg">
              <Users className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black text-navy-900 mb-4">Our Values</h3>
            <p className="text-slate-600 font-medium leading-relaxed">Integrity, transparency, and technical precision are at the heart of everything we do. We treat every appliance as if it were our own.</p>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-slate-50 rounded-[4rem] p-12 md:p-24 border border-slate-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-50 -mr-48 -mt-48"></div>
          <div className="grid md:grid-cols-4 gap-12 text-center relative z-10">
            <div>
              <p className="text-6xl font-black text-navy-900 mb-2 tracking-tighter">5,000+</p>
              <p className="text-orange-500 font-black uppercase tracking-widest text-xs">Happy Customers</p>
            </div>
            <div>
              <p className="text-6xl font-black text-navy-900 mb-2 tracking-tighter">15+</p>
              <p className="text-orange-500 font-black uppercase tracking-widest text-xs">Expert Technicians</p>
            </div>
            <div>
              <p className="text-6xl font-black text-navy-900 mb-2 tracking-tighter">98%</p>
              <p className="text-orange-500 font-black uppercase tracking-widest text-xs">Success Rate</p>
            </div>
            <div>
              <p className="text-6xl font-black text-navy-900 mb-2 tracking-tighter">60 Min</p>
              <p className="text-orange-500 font-black uppercase tracking-widest text-xs">Response Time</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
