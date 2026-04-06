import { motion } from 'motion/react';
import { ShieldCheck, Clock, Award, Zap, CheckCircle2, Phone, MessageCircle } from 'lucide-react';

const reasons = [
  {
    title: 'Expert Technicians',
    description: 'Our team consists of highly experienced, background-verified, and certified AC repair specialists.',
    icon: <Award className="w-10 h-10 text-orange-500" />
  },
  {
    title: 'Transparent Pricing',
    description: 'No hidden costs. We provide upfront estimates and fair pricing for all our services.',
    icon: <Zap className="w-10 h-10 text-orange-500" />
  },
  {
    title: '90 Days Warranty',
    description: 'We stand by our work with a 90-day warranty on all repairs and genuine spare parts.',
    icon: <ShieldCheck className="w-10 h-10 text-orange-500" />
  },
  {
    title: '60 Min Arrival',
    description: 'Fast response time across Gurgaon. We aim to reach your doorstep within an hour.',
    icon: <Clock className="w-10 h-10 text-orange-500" />
  }
];

export default function WhyUsPage() {
  const whatsappLink = "https://wa.me/917056330400?text=I'm%20interested%20in%20your%20services";

  return (
    <div className="pt-32 pb-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-orange-500 font-black uppercase tracking-[0.25em] text-sm mb-4"
          >
            Why Choose Us
          </motion.h2>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl font-extrabold text-navy-900 mb-8 tracking-tight leading-none"
          >
            The <span className="text-gradient">ASAP Difference</span>
          </motion.h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium">
            We don't just fix ACs; we build trust. Discover why thousands of Gurgaon residents choose us for their home comfort.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-32">
          {reasons.map((reason, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-12 rounded-[3.5rem] shadow-xl border border-slate-100 flex flex-col md:flex-row gap-10 items-start group hover:bg-navy-900 transition-all duration-500"
            >
              <div className="w-20 h-20 bg-slate-50 rounded-[1.5rem] flex items-center justify-center group-hover:bg-orange-500 transition-all duration-500 shadow-lg group-hover:shadow-orange-500/20 shrink-0">
                <div className="group-hover:text-white transition-colors duration-500">
                  {reason.icon}
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-black text-navy-900 mb-4 group-hover:text-white transition-colors duration-500">{reason.title}</h3>
                <p className="text-slate-600 font-medium leading-relaxed group-hover:text-slate-400 transition-colors duration-500">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Comparison Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <div className="relative">
            <div className="rounded-[4rem] overflow-hidden shadow-3xl border-[16px] border-white aspect-video">
              <img 
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1000" 
                alt="Professional Service" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-orange-50 rounded-full blur-3xl opacity-50"></div>
          </div>
          
          <div>
            <h3 className="text-3xl md:text-5xl font-black text-navy-900 mb-8 tracking-tight">Quality You Can Trust</h3>
            <div className="space-y-6">
              {[
                'Genuine Spare Parts Only',
                'Background Verified Technicians',
                'No Hidden Charges',
                'Same Day Service Guarantee',
                '90 Days Service Warranty',
                'Post-Service Support'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm group hover:border-orange-500 transition-all">
                  <div className="bg-green-100 p-2 rounded-xl group-hover:scale-110 transition-transform shadow-sm"><CheckCircle2 className="w-5 h-5 text-green-600" /></div>
                  <span className="font-black text-navy-900 text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-orange-500 rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
          <div className="relative z-10">
            <h3 className="text-4xl md:text-6xl font-black text-navy-900 mb-8 tracking-tighter uppercase">Experience the Best</h3>
            <p className="text-xl md:text-2xl font-black text-white mb-12 max-w-2xl mx-auto uppercase tracking-widest">
              Join 5,000+ happy customers in Gurgaon. Book your service now!
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-navy-900 text-white px-12 py-6 rounded-[2rem] font-black text-xl shadow-2xl flex items-center justify-center gap-3 transform hover:-translate-y-1 transition-all"
              >
                <MessageCircle className="w-6 h-6" />
                WhatsApp Us
              </a>
              <a 
                href="tel:+917056330400"
                className="bg-white text-navy-900 px-12 py-6 rounded-[2rem] font-black text-xl flex items-center justify-center gap-3 transform hover:-translate-y-1 transition-all shadow-2xl"
              >
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
