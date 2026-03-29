/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Phone, MapPin, Wrench, Refrigerator, Wind, Settings, 
  CheckCircle2, Menu, X, Star, ShieldCheck, Clock, 
  ChevronDown, ArrowRight, Zap, Award, Users, Mail,
  MessageCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';

const ContactPage = lazy(() => import('./pages/ContactPage'));

const services = [
  {
    title: 'Refrigerator Repair',
    description: 'Expert cooling solutions for all brands. We fix compressors, gas leaks, and thermostat issues.',
    icon: <Refrigerator className="w-10 h-10 text-orange-500" />,
    id: 'service-fridge',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Washing Machine Repair',
    description: 'Top load, front load, or semi-automatic. We resolve drum issues, motor failures, and PCB repairs.',
    icon: <Settings className="w-10 h-10 text-orange-500" />,
    id: 'service-washing',
    image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'AC Repair & Service',
    description: 'Stay cool with our professional AC servicing, gas charging, and installation services.',
    icon: <Wind className="w-10 h-10 text-orange-500" />,
    id: 'service-ac',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800'
  }
];

const testimonials = [
  {
    name: 'Rahul Sharma',
    role: 'Gurgaon Resident',
    text: 'A to Z Service is my go-to for appliance repair. They fixed my refrigerator within 2 hours of calling. Highly recommended!',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=rahul'
  },
  {
    name: 'Priya Verma',
    role: 'Sector 56',
    text: 'Very professional and polite technicians. They explained the issue clearly and charged a fair price for my washing machine repair.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=priya'
  },
  {
    name: 'Amit Gupta',
    role: 'Wazirabad',
    text: 'Excellent AC service. My AC is cooling like new again. The technician was very thorough and cleaned everything properly.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=amit'
  }
];

const faqs = [
  {
    question: 'How quickly can you arrive for a repair?',
    answer: 'We typically arrive within 60-90 minutes of your booking in Gurgaon. We offer same-day service for all major appliance repairs.'
  },
  {
    question: 'Do you provide a warranty on repairs?',
    answer: 'Yes, we provide a 90-day warranty on all our repair services and a guarantee on genuine spare parts used.'
  },
  {
    question: 'What brands do you service?',
    answer: 'We service all major brands including Samsung, LG, Whirlpool, Haier, Bosch, Godrej, Voltas, and more.'
  },
  {
    question: 'Are your technicians certified?',
    answer: 'All our technicians are highly experienced, background-verified, and certified in home appliance repair.'
  }
];

const steps = [
  {
    title: 'Book Online/Call',
    description: 'Call us or fill out the form to schedule a visit.',
    icon: <Phone className="w-6 h-6" />
  },
  {
    title: 'Expert Diagnosis',
    description: 'Our technician arrives and identifies the problem.',
    icon: <Zap className="w-6 h-6" />
  },
  {
    title: 'Fast Repair',
    description: 'We fix the issue on-site using genuine parts.',
    icon: <Wrench className="w-6 h-6" />
  },
  {
    title: 'Enjoy Peace of Mind',
    description: 'Your appliance is back to normal with a warranty.',
    icon: <ShieldCheck className="w-6 h-6" />
  }
];

function LandingPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 120;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const whatsappLink = "https://wa.me/917056330400?text=I'm%20interested%20in%20Beat%20the%20Heat%20AC%20Service%20at%20399";

  return (
    <>
      {/* Hero Section */}
      <section id="home" className="relative pt-40 pb-32 overflow-hidden bg-white">
        {/* Background Decorative Blobs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-200/40 rounded-full blur-3xl -z-10 -mr-40 -mt-40 animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-navy-200/40 rounded-full blur-3xl -z-10 -ml-20 -mb-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-3xl -z-10 animate-blob animation-delay-4000"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >

              <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-2xl shadow-sm mb-8">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map(i => <img key={i} src={`https://i.pravatar.cc/100?u=${i+10}`} className="w-7 h-7 rounded-full border-2 border-white shadow-sm" loading="lazy" />)}
                </div>
                <span className="text-sm font-bold text-navy-800">Trusted by 5,000+ Gurgaon Residents</span>
              </div>
              
              <h1 className="text-5xl md:text-8xl font-extrabold text-navy-900 leading-[0.95] mb-8 tracking-tighter">
                Expert Repair <br />
                <span className="text-gradient">At Your Doorstep</span>
              </h1>
              
              <p className="text-xl text-slate-600 mb-10 max-w-xl leading-relaxed font-medium">
                Don't let a broken appliance ruin your day. We provide fast, reliable, and affordable repair services for all your home appliances in Gurgaon.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5">
                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="orange-gradient hover:shadow-orange-500/40 text-white px-10 py-5 rounded-2xl font-black text-lg transition-all shadow-2xl shadow-orange-200 flex items-center justify-center gap-3 group transform hover:-translate-y-1"
                >
                  Book on WhatsApp
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="tel:+917056330400"
                  className="glass border-2 border-slate-200 hover:border-navy-900 text-navy-900 px-10 py-5 rounded-2xl font-black text-lg transition-all flex items-center justify-center gap-3 shadow-sm transform hover:-translate-y-1"
                >
                  <Phone className="w-5 h-5 text-orange-500" />
                  Call Support
                </a>
              </div>

              <div className="mt-12 flex flex-wrap gap-8">
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-2.5 rounded-xl shadow-sm"><ShieldCheck className="w-5 h-5 text-green-600" /></div>
                  <span className="text-sm font-bold text-navy-800">90 Days Warranty</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 p-2.5 rounded-xl shadow-sm"><Clock className="w-5 h-5 text-blue-600" /></div>
                  <span className="text-sm font-bold text-navy-800">60 Min Arrival</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-orange-100 p-2.5 rounded-xl shadow-sm"><Award className="w-5 h-5 text-orange-600" /></div>
                  <span className="text-sm font-bold text-navy-800">Expert Techs</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, type: "spring" }}
              className="relative"
            >
              <div className="relative z-10 rounded-[4rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] border-[16px] border-white aspect-square">
                <img 
                  src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=1000" 
                  alt="Technician at work" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 to-transparent"></div>
              </div>
              
              {/* Floating Stats Card */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -top-12 -right-12 glass p-8 rounded-[2.5rem] shadow-2xl z-20 hidden md:block"
              >
                <div className="flex items-center gap-5">
                  <div className="orange-gradient p-4 rounded-2xl shadow-lg shadow-orange-500/20">
                    <Star className="w-8 h-8 text-white fill-white" />
                  </div>
                  <div>
                    <p className="text-3xl font-black text-navy-900">4.9/5</p>
                    <p className="text-xs font-black text-slate-500 uppercase tracking-widest">Customer Rating</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Service Card */}
              <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="absolute -bottom-12 -left-12 glass-dark p-8 rounded-[2.5rem] shadow-2xl z-20 hidden md:block"
              >
                <div className="flex items-center gap-5">
                  <div className="orange-gradient p-4 rounded-2xl shadow-lg shadow-orange-500/20">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="text-3xl font-black text-white">5,000+</p>
                    <p className="text-xs font-black text-slate-300 uppercase tracking-widest">Repairs Completed</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Support Bar */}
      <div className="bg-white border-b border-slate-100 py-8 relative z-20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-24">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-5 group cursor-pointer" 
              onClick={() => window.open(whatsappLink, '_blank')}
            >
              <div className="w-16 h-16 bg-green-100 rounded-[1.5rem] flex items-center justify-center group-hover:bg-green-500 transition-all duration-300 shadow-lg shadow-green-500/10">
                <MessageCircle className="w-8 h-8 text-green-600 group-hover:text-white transition-colors" />
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.25em] mb-1">Book Instantly</p>
                <p className="text-xl font-black text-navy-900">WhatsApp Support</p>
                <p className="text-xs font-bold text-green-600">Online Now</p>
              </div>
            </motion.div>
            
            <div className="h-16 w-px bg-slate-200 hidden md:block"></div>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-5 group cursor-pointer" 
              onClick={() => window.location.href = 'tel:+917056330400'}
            >
              <div className="w-16 h-16 bg-blue-100 rounded-[1.5rem] flex items-center justify-center group-hover:bg-blue-600 transition-all duration-300 shadow-lg shadow-blue-500/10">
                <Phone className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.25em] mb-1">24/7 Available</p>
                <p className="text-xl font-black text-navy-900">Call Support</p>
                <p className="text-xs font-bold text-blue-600">+91 70563 30400</p>
              </div>
            </motion.div>

            <div className="h-16 w-px bg-slate-200 hidden md:block"></div>

            <div className="flex items-center gap-5 group">
              <div className="w-16 h-16 bg-orange-100 rounded-[1.5rem] flex items-center justify-center shadow-lg shadow-orange-500/10">
                <Clock className="w-8 h-8 text-orange-600" />
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.25em] mb-1">Fast Response</p>
                <p className="text-xl font-black text-navy-900">60 Min Arrival</p>
                <p className="text-xs font-bold text-orange-600">Gurgaon Wide</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Offer Highlight Section */}
      <section className="py-12 bg-orange-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-black text-navy-900 uppercase tracking-tighter mb-2">
                Beat the Heat!
              </h2>
              <p className="text-xl md:text-3xl font-black text-white uppercase tracking-widest">
                AC SERVICE at <span className="bg-navy-900 px-4 py-1 rounded-xl shadow-lg">₹399</span>
              </p>
              <p className="text-navy-900/70 font-bold mt-2 uppercase tracking-[0.2em] text-sm">Limited Time Only • Same Day Service</p>
            </div>
            <motion.a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-navy-900 text-white px-12 py-6 rounded-[2rem] font-black text-xl shadow-2xl flex items-center gap-3 group"
            >
              Claim Offer Now
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </motion.a>
          </div>
        </div>
        {/* Animated Background Elements */}
        <motion.div 
          animate={{ x: [-100, 100], opacity: [0.2, 0.5, 0.2] }}
          transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
        >
          <Zap className="absolute top-4 left-1/4 w-12 h-12 text-white/20" />
          <Zap className="absolute bottom-4 right-1/4 w-12 h-12 text-white/20" />
        </motion.div>
      </section>


      {/* Services Section */}
      <section id="services" className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-orange-500 font-black uppercase tracking-[0.25em] text-sm mb-4">Our Expertise</h2>
            <h3 className="text-4xl md:text-6xl font-extrabold text-navy-900 mb-6 tracking-tight">Professional Repair Solutions</h3>
            <p className="text-lg text-slate-600 font-medium">We specialize in fixing high-end home appliances with precision and care. No matter the brand or model, we have the expertise to fix it.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                whileHover={{ y: -15 }}
                className="group bg-slate-50 rounded-[3rem] overflow-hidden border border-slate-100 hover:bg-white hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] transition-all duration-500"
              >
                <div className="h-64 overflow-hidden relative">
                  <img src={service.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-navy-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                  <div className="absolute bottom-6 left-6 glass p-4 rounded-2xl shadow-xl transform group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                </div>
                <div className="p-10">
                  <h4 className="text-2xl font-black text-navy-900 mb-4">{service.title}</h4>
                  <p className="text-slate-600 leading-relaxed mb-8 font-medium">
                    {service.description}
                  </p>
                  <button 
                    onClick={() => window.open(whatsappLink, '_blank')}
                    className="flex items-center gap-3 font-black text-orange-500 group-hover:gap-5 transition-all uppercase tracking-widest text-sm"
                  >
                    Book on WhatsApp <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-32 bg-navy-900 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent opacity-5"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <h2 className="text-orange-500 font-black uppercase tracking-[0.25em] text-sm mb-4">How It Works</h2>
            <h3 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">Simple 4-Step Process</h3>
            <p className="text-slate-400 text-lg font-medium">Getting your appliance fixed has never been easier. We've streamlined our process for your convenience.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-12 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-16 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white/20 to-transparent -z-10"></div>
            
            {steps.map((step, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-32 h-32 glass-dark rounded-[2.5rem] flex items-center justify-center mx-auto mb-8 border border-white/10 group-hover:orange-gradient group-hover:border-orange-400 transition-all duration-500 relative shadow-2xl">
                  <div className="absolute -top-4 -right-4 w-10 h-10 orange-gradient text-white rounded-2xl flex items-center justify-center font-black text-sm shadow-lg">
                    0{index + 1}
                  </div>
                  <div className="text-white group-hover:scale-125 transition-transform duration-500">
                    {step.icon}
                  </div>
                </div>
                <h4 className="text-2xl font-black text-white mb-4">{step.title}</h4>
                <p className="text-slate-400 font-medium leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About/Stats Section */}
      <section id="about" className="py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="relative">
              {/* Bento Grid Layout for Stats */}
              <div className="grid grid-cols-2 gap-6">
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="bg-slate-100 h-80 rounded-[3rem] overflow-hidden shadow-sm"
                >
                  <img src="https://images.unsplash.com/photo-1558403194-611308249627?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" referrerPolicy="no-referrer" loading="lazy" />
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="orange-gradient p-12 rounded-[3rem] text-white flex flex-col justify-end shadow-2xl shadow-orange-500/20"
                >
                  <p className="text-6xl font-black mb-2 tracking-tighter">10+</p>
                  <p className="font-black uppercase tracking-widest text-xs opacity-90">Years Experience</p>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="bg-navy-900 p-12 rounded-[3rem] text-white flex flex-col justify-end shadow-2xl shadow-navy-900/20"
                >
                  <p className="text-6xl font-black mb-2 tracking-tighter">98%</p>
                  <p className="font-black uppercase tracking-widest text-xs opacity-90">Success Rate</p>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="bg-slate-100 h-80 rounded-[3rem] overflow-hidden shadow-sm"
                >
                  <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" referrerPolicy="no-referrer" loading="lazy" />
                </motion.div>
              </div>
              
              {/* Decorative background element */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-orange-50 rounded-full blur-3xl opacity-50"></div>
            </div>
            
            <div>
              <h2 className="text-orange-500 font-black uppercase tracking-[0.25em] text-sm mb-4">About ASAP GURGAON AC SERVICE</h2>
              <h3 className="text-4xl md:text-6xl font-extrabold text-navy-900 mb-8 tracking-tight leading-tight">Gurgaon's Most Trusted AC Service</h3>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed font-medium">
                Founded in 2016, ASAP GURGAON AC SERVICE started with a simple mission: to provide honest, high-quality appliance repair services to the residents of Gurgaon. Today, we are proud to be the first choice for thousands of families.
              </p>
              <div className="grid sm:grid-cols-2 gap-6 mb-12">
                {[
                  'Verified Technicians',
                  'Transparent Pricing',
                  'Genuine Spare Parts',
                  '7 Days Availability'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 bg-slate-50 p-5 rounded-2xl border border-slate-100 group hover:bg-white hover:shadow-lg transition-all">
                    <div className="bg-green-100 p-2 rounded-xl group-hover:scale-110 transition-transform"><CheckCircle2 className="w-5 h-5 text-green-600" /></div>
                    <span className="font-black text-navy-900 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <button onClick={() => scrollToSection('contact')} className="bg-navy-900 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-navy-800 transition-all flex items-center gap-3 shadow-xl shadow-navy-900/20 transform hover:-translate-y-1">
                Book Your Repair <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-50 -mr-48 -mt-48"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-orange-500 font-black uppercase tracking-[0.25em] text-sm mb-4">Reviews</h2>
            <h3 className="text-4xl md:text-6xl font-extrabold text-navy-900 mb-6 tracking-tight">What Our Customers Say</h3>
            <p className="text-lg text-slate-600 font-medium">Real feedback from real customers in Gurgaon. We take pride in our work.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {testimonials.map((t, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white p-12 rounded-[3rem] shadow-xl shadow-slate-200/50 border border-slate-100 relative group"
              >
                <div className="absolute top-10 right-10 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Star className="w-16 h-16 text-navy-900" />
                </div>
                <div className="flex gap-1 mb-8">
                  {[...Array(t.rating)].map((_, i) => <Star key={i} className="w-5 h-5 text-orange-500 fill-orange-500" />)}
                </div>
                <p className="text-navy-800 text-xl font-medium italic mb-10 leading-relaxed relative z-10">"{t.text}"</p>
                <div className="flex items-center gap-5">
                  <img src={t.avatar} className="w-16 h-16 rounded-2xl object-cover shadow-lg" loading="lazy" />
                  <div>
                    <p className="text-lg font-black text-navy-900">{t.name}</p>
                    <p className="text-sm font-black text-orange-500 uppercase tracking-widest">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-orange-500 font-black uppercase tracking-[0.25em] text-sm mb-4">FAQ</h2>
            <h3 className="text-4xl md:text-6xl font-extrabold text-navy-900 mb-6 tracking-tight">Common Questions</h3>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <button 
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-8 text-left bg-slate-50 hover:bg-white transition-colors"
                >
                  <span className="text-xl font-black text-navy-900">{faq.question}</span>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${activeFaq === i ? 'orange-gradient text-white rotate-180' : 'bg-white text-orange-500'}`}>
                    <ChevronDown className="w-6 h-6" />
                  </div>
                </button>
                <AnimatePresence>
                  {activeFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden bg-white"
                    >
                      <div className="p-8 text-slate-600 text-lg font-medium leading-relaxed border-t border-slate-50">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-navy-900 rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden shadow-3xl">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[120px] -mr-48 -mt-48 animate-blob"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] -ml-24 -mb-24 animate-blob animation-delay-2000"></div>
            
            <div className="relative z-10">
              <h3 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-none">Ready to fix your <br className="hidden md:block" /> appliance today?</h3>
              <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto font-medium">Get expert repair services in Gurgaon today. Fast, reliable, and guaranteed satisfaction with our 90-day warranty.</p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="orange-gradient hover:shadow-orange-500/40 text-white px-12 py-6 rounded-[2rem] font-black text-xl shadow-2xl transition-all transform hover:-translate-y-1 flex items-center justify-center"
                >
                  Book on WhatsApp
                </a>
                <a href="tel:+917056330400" className="glass-dark hover:bg-white/10 text-white px-12 py-6 rounded-[2rem] font-black text-xl transition-all flex items-center justify-center gap-3">
                  <Phone className="w-6 h-6 text-orange-500" />
                  Call +91 70563 30400
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[4rem] shadow-[0_64px_128px_-32px_rgba(0,0,0,0.1)] overflow-hidden border border-slate-100">
            <div className="grid lg:grid-cols-2">
              <div className="p-12 md:p-24">
                <h3 className="text-4xl md:text-5xl font-black text-navy-900 mb-6 tracking-tight">Get a Free Quote</h3>
                <p className="text-slate-500 mb-12 text-lg font-medium">Fill out the form below and we'll get back to you within 15 minutes.</p>
                
                <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid sm:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-xs font-black text-navy-900 uppercase tracking-[0.2em] ml-1">Full Name</label>
                      <input type="text" className="w-full bg-slate-50 border-2 border-transparent focus:border-orange-500 focus:bg-white px-8 py-5 rounded-2xl outline-none transition-all font-bold text-navy-900 shadow-sm" placeholder="John Doe" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-xs font-black text-navy-900 uppercase tracking-[0.2em] ml-1">Phone Number</label>
                      <input type="tel" className="w-full bg-slate-50 border-2 border-transparent focus:border-orange-500 focus:bg-white px-8 py-5 rounded-2xl outline-none transition-all font-bold text-navy-900 shadow-sm" placeholder="+91 00000 00000" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-black text-navy-900 uppercase tracking-[0.2em] ml-1">Service Required</label>
                    <div className="relative">
                      <select className="w-full bg-slate-50 border-2 border-transparent focus:border-orange-500 focus:bg-white px-8 py-5 rounded-2xl outline-none transition-all font-bold text-navy-900 shadow-sm appearance-none cursor-pointer">
                        <option>Refrigerator Repair</option>
                        <option>Washing Machine Repair</option>
                        <option>AC Repair & Service</option>
                        <option>Other Appliance</option>
                      </select>
                      <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 w-6 h-6 text-orange-500 pointer-events-none" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-black text-navy-900 uppercase tracking-[0.2em] ml-1">Your Message</label>
                    <textarea rows={4} className="w-full bg-slate-50 border-2 border-transparent focus:border-orange-500 focus:bg-white px-8 py-5 rounded-2xl outline-none transition-all font-bold text-navy-900 shadow-sm" placeholder="Describe the issue..."></textarea>
                  </div>
                  <button className="w-full orange-gradient hover:shadow-orange-500/40 text-white py-6 rounded-2xl font-black text-xl transition-all shadow-xl shadow-orange-500/20 transform hover:-translate-y-1">
                    Send Request
                  </button>
                </form>
              </div>
              
              <div className="bg-navy-900 p-12 md:p-24 text-white relative overflow-hidden flex flex-col justify-center">
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-500/20 rounded-full blur-[100px] -mr-32 -mb-32 animate-blob"></div>
                <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[80px] -ml-16 -mt-16 animate-blob animation-delay-2000"></div>
                
                <h3 className="text-4xl md:text-5xl font-black mb-16 relative z-10 tracking-tight">Contact Info</h3>
                
                <div className="space-y-12 relative z-10">
                  <div className="flex items-start gap-8 group">
                    <div className="glass-dark p-5 rounded-2xl group-hover:orange-gradient transition-all duration-500 shadow-xl"><Phone className="w-8 h-8 text-orange-500 group-hover:text-white transition-colors" /></div>
                    <div>
                      <p className="text-orange-500 font-black uppercase tracking-[0.2em] text-[10px] mb-2">Call Anytime</p>
                      <a href="tel:+917056330400" className="text-2xl md:text-4xl font-black hover:text-orange-400 transition-colors tracking-tight">+91 70563 30400</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-8 group">
                    <div className="glass-dark p-5 rounded-2xl group-hover:orange-gradient transition-all duration-500 shadow-xl"><MapPin className="w-8 h-8 text-orange-500 group-hover:text-white transition-colors" /></div>
                    <div>
                      <p className="text-orange-500 font-black uppercase tracking-[0.2em] text-[10px] mb-2">Our Office</p>
                      <p className="text-2xl md:text-4xl font-black tracking-tight">Shop 6, Sector 52 Market, Gurgaon</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-8 group">
                    <div className="glass-dark p-5 rounded-2xl group-hover:orange-gradient transition-all duration-500 shadow-xl"><Mail className="w-8 h-8 text-orange-500 group-hover:text-white transition-colors" /></div>
                    <div>
                      <p className="text-orange-500 font-black uppercase tracking-[0.2em] text-[10px] mb-2">Email Us</p>
                      <a href="mailto:gurgaonacservice@gmail.com" className="text-2xl md:text-4xl font-black hover:text-orange-400 transition-colors tracking-tight">gurgaonacservice@gmail.com</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-8 group">
                    <div className="glass-dark p-5 rounded-2xl group-hover:orange-gradient transition-all duration-500 shadow-xl"><Clock className="w-8 h-8 text-orange-500 group-hover:text-white transition-colors" /></div>
                    <div>
                      <p className="text-orange-500 font-black uppercase tracking-[0.2em] text-[10px] mb-2">Service Hours</p>
                      <p className="text-2xl md:text-4xl font-black tracking-tight">8:00 AM - 9:00 PM</p>
                      <p className="text-slate-400 font-black uppercase tracking-widest text-xs mt-2">Open All 7 Days</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-24 border-t border-slate-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid md:grid-cols-4 gap-16 mb-24">
            <div className="col-span-2">
              <div className="flex items-center gap-4 mb-10">
                <div className="bg-orange-500 p-3 rounded-2xl shadow-xl w-16 h-16 flex items-center justify-center">
                  <Wind className="w-10 h-10 text-white" />
                </div>
                <span className="text-3xl font-black tracking-tighter text-navy-900">
                  ASAP GURGAON <span className="text-orange-500">AC SERVICE</span>
                </span>
              </div>
              <p className="text-slate-500 text-xl max-w-md leading-relaxed font-medium">
                Gurgaon's leading AC repair service provider. We offer expert solutions for air conditioners with a commitment to quality and customer satisfaction.
              </p>
            </div>
            
            <div>
              <h4 className="text-navy-900 font-black uppercase tracking-[0.3em] text-[10px] mb-10">Quick Links</h4>
              <ul className="space-y-5">
                {['Services', 'Process', 'About', 'FAQ', 'Contact'].map(link => (
                  <li key={link}>
                    <button onClick={() => scrollToSection(link.toLowerCase())} className="text-slate-500 hover:text-orange-500 font-black transition-all hover:translate-x-2">{link}</button>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-navy-900 font-black uppercase tracking-[0.3em] text-[10px] mb-10">Contact Us</h4>
              <ul className="space-y-6">
                <li className="flex items-center gap-4 text-slate-600 font-black">
                  <div className="bg-orange-100 p-2 rounded-lg"><Phone className="w-5 h-5 text-orange-500" /></div>
                  +91 70563 30400
                </li>
                <li className="flex items-center gap-4 text-slate-600 font-black">
                  <div className="bg-orange-100 p-2 rounded-lg"><MapPin className="w-5 h-5 text-orange-500" /></div>
                  Shop 6, Sector 52 Market, Gurgaon
                </li>
                <li className="flex items-center gap-4 text-slate-600 font-black">
                  <div className="bg-orange-100 p-2 rounded-lg"><Mail className="w-5 h-5 text-orange-500" /></div>
                  gurgaonacservice@gmail.com
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-slate-400 font-black uppercase tracking-widest text-[10px]">Designed for excellence in Gurgaon.</p>
            <p className="text-slate-500 font-black text-sm">© 2026 ASAP GURGAON AC SERVICE. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-[100] md:hidden glass p-4 border-t border-white/20 shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
        <div className="flex gap-4">
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 orange-gradient text-white py-4 rounded-2xl font-black text-center flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-transform"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp
          </a>
          <a 
            href="tel:+917056330400"
            className="flex-1 bg-navy-900 text-white py-4 rounded-2xl font-black text-center flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-transform"
          >
            <Phone className="w-5 h-5" />
            Call Now
          </a>
        </div>
      </div>

      {/* Floating Call Button for Mobile */}
      <motion.a 
        href="tel:+917056330400"
        initial={{ scale: 0, x: 50, y: '-50%' }}
        animate={{ scale: 1, x: 0, y: '-50%' }}
        whileHover={{ scale: 1.05, y: '-50%', x: -5 }}
        whileTap={{ scale: 0.95, y: '-50%' }}
        className="fixed top-1/2 right-0 -translate-y-1/2 md:hidden orange-gradient text-white py-8 px-3 rounded-l-[2rem] shadow-[-10px_0_40px_rgba(249,115,22,0.4)] z-50 flex flex-col items-center justify-center gap-4 border-y-2 border-l-2 border-white/20 overflow-hidden"
      >
        <motion.div 
          animate={{ y: ['-100%', '200%'] }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-transparent -skew-y-12"
        />
        <Phone className="w-6 h-6 animate-pulse relative z-10" />
        <span className="font-black uppercase tracking-[0.2em] text-[10px] [writing-mode:vertical-lr] rotate-180 relative z-10">Call Now</span>
      </motion.a>
    </>
  );
}

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (window.location.pathname !== '/') {
      window.location.href = '/#' + id;
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      const offset = 120;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-50 selection:bg-orange-100 selection:text-orange-900">
        {/* Top Banner */}
        <div className="bg-orange-500 text-white py-4 px-4 text-center relative z-[60] overflow-hidden shadow-2xl">
          <motion.div 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="flex items-center justify-center gap-4"
          >
            <Zap className="w-5 h-5 text-navy-900 fill-navy-900" />
            <p className="text-base md:text-xl font-black uppercase tracking-[0.15em] drop-shadow-md">
              Beat the Heat! <span className="text-navy-900">AC SERVICE at 399</span> – Limited Time Only
            </p>
            <Zap className="w-5 h-5 text-navy-900 fill-navy-900" />
          </motion.div>
        </div>

        {/* Navigation */}
        <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'glass shadow-lg py-3 top-0' : 'bg-transparent py-6 top-16'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center">
              <Link to="/" className="flex items-center gap-3 cursor-pointer group">
                <div className="bg-orange-500 p-2 rounded-2xl group-hover:rotate-12 transition-transform duration-300 shadow-lg shadow-orange-500/20 w-14 h-14 flex items-center justify-center">
                  <Wind className="w-8 h-8 text-white" />
                </div>
                <span className="text-xl md:text-2xl font-black tracking-tighter">
                  <span className="text-navy-900">ASAP GURGAON</span> <span className="text-orange-500">AC SERVICE</span>
                </span>
              </Link>

              {/* Desktop Nav */}
              <div className="hidden md:flex items-center space-x-8">
                {['Services', 'Process', 'About', 'FAQ'].map((item) => (
                  <button 
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())} 
                    className="text-navy-800 hover:text-orange-500 font-bold transition-colors relative group px-2 py-1"
                  >
                    {item}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all group-hover:w-full"></span>
                  </button>
                ))}
                <Link to="/contact" className="text-navy-800 hover:text-orange-500 font-bold transition-colors relative group px-2 py-1">
                  Contact Us
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all group-hover:w-full"></span>
                </Link>
                <a href="tel:+917056330400" className="orange-gradient text-white px-7 py-3 rounded-2xl font-bold transition-all shadow-xl shadow-orange-500/30 flex items-center gap-2 transform hover:-translate-y-1 hover:shadow-orange-500/40">
                  <Phone className="w-4 h-4" />
                  +91 70563 30400
                </a>
              </div>

              {/* Mobile Menu Button */}
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                className="md:hidden p-3 text-navy-900 glass shadow-lg rounded-2xl transition-all active:scale-90"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Nav Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="md:hidden glass border-t border-slate-100 px-6 py-10 space-y-6 shadow-2xl overflow-hidden rounded-b-[3rem]"
              >
                {['Services', 'Process', 'About', 'FAQ'].map((item) => (
                  <button 
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())} 
                    className="block w-full text-left px-6 py-4 text-navy-800 font-black hover:bg-orange-50 rounded-2xl transition-all text-lg"
                  >
                    {item}
                  </button>
                ))}
                <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="block w-full text-left px-6 py-4 text-navy-800 font-black hover:bg-orange-50 rounded-2xl transition-all text-lg">
                  Contact Us
                </Link>
                <a href="tel:+917056330400" className="block w-full orange-gradient text-white text-center px-6 py-5 rounded-2xl font-black shadow-xl shadow-orange-500/20 text-lg">
                  Call Now: +91 70563 30400
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/contact" element={
            <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
              <ContactPage />
            </Suspense>
          } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
