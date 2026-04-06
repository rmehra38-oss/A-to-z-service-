import { 
  Phone, Menu, X, Wind, MessageCircle, MapPin, Mail
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';

// Lazy load pages
const HomePage = lazy(() => import('./pages/HomePage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const WhyUsPage = lazy(() => import('./pages/WhyUsPage'));
const PortfolioPage = lazy(() => import('./pages/PortfolioPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage'));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About Us', path: '/about' },
    { name: 'Why Us', path: '/why-us' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'glass shadow-lg py-3 top-0' : 'bg-transparent py-6 top-0 md:top-12'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 cursor-pointer group">
            <div className="bg-orange-500 p-2 rounded-2xl group-hover:rotate-12 transition-transform duration-300 shadow-lg shadow-orange-500/20 w-12 h-12 flex items-center justify-center">
              <Wind className="w-7 h-7 text-white" />
            </div>
            <span className="text-xl md:text-2xl font-black tracking-tighter">
              <span className="text-navy-900">ASAP GURGAON</span> <span className="text-orange-500">AC SERVICE</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.path}
                to={link.path}
                className={`font-bold transition-colors relative group px-2 py-1 ${location.pathname === link.path ? 'text-orange-500' : 'text-navy-800 hover:text-orange-500'}`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-orange-500 transition-all ${location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </Link>
            ))}
            <a href="tel:+917056330400" className="orange-gradient text-white px-7 py-3 rounded-2xl font-bold transition-all shadow-xl shadow-orange-500/30 flex items-center gap-2 transform hover:-translate-y-1">
              <Phone className="w-4 h-4" />
              +91 70563 30400
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="lg:hidden p-3 text-navy-900 glass shadow-lg rounded-2xl transition-all active:scale-90"
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
            className="lg:hidden glass border-t border-slate-100 px-6 py-10 space-y-4 shadow-2xl overflow-hidden rounded-b-[3rem]"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block w-full text-left px-6 py-4 font-black rounded-2xl transition-all text-lg ${location.pathname === link.path ? 'bg-orange-500 text-white' : 'text-navy-800 hover:bg-orange-50'}`}
              >
                {link.name}
              </Link>
            ))}
            <a href="tel:+917056330400" className="block w-full orange-gradient text-white text-center px-6 py-5 rounded-2xl font-black shadow-xl shadow-orange-500/20 text-lg">
              Call Now: +91 70563 30400
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function Footer() {
  const whatsappLink = "https://wa.me/917056330400?text=I'm%20interested%20in%20your%20services";
  
  return (
    <footer className="bg-white py-24 border-t border-slate-100 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-full blur-3xl -mr-32 -mt-32"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid md:grid-cols-4 gap-16 mb-24">
          <div className="col-span-2">
            <div className="flex items-center gap-4 mb-10">
              <div className="bg-orange-500 p-3 rounded-2xl shadow-xl w-14 h-14 flex items-center justify-center">
                <Wind className="w-8 h-8 text-white" />
              </div>
              <span className="text-2xl font-black tracking-tighter text-navy-900">
                ASAP GURGAON <span className="text-orange-500">AC SERVICE</span>
              </span>
            </div>
            <p className="text-slate-500 text-lg max-w-md leading-relaxed font-medium">
              Gurgaon's leading AC repair service provider. We offer expert solutions for air conditioners with a commitment to quality and customer satisfaction.
            </p>
          </div>
          
          <div>
            <h4 className="text-navy-900 font-black uppercase tracking-[0.3em] text-[10px] mb-10">Quick Links</h4>
            <ul className="space-y-5">
              {[
                { name: 'Home', path: '/' },
                { name: 'Services', path: '/services' },
                { name: 'About Us', path: '/about' },
                { name: 'Why Us', path: '/why-us' },
                { name: 'Portfolio', path: '/portfolio' },
                { name: 'Privacy Policy', path: '/privacy-policy' }
              ].map(link => (
                <li key={link.path}>
                  <Link to={link.path} className="text-slate-500 hover:text-orange-500 font-black transition-all hover:translate-x-2 block">{link.name}</Link>
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
  );
}

function TopBanner() {
  return (
    <div className="bg-orange-500 text-white py-3 px-4 text-center relative z-[60] overflow-hidden shadow-2xl hidden md:block">
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="flex items-center justify-center gap-4"
      >
        <Wind className="w-4 h-4 text-navy-900 fill-navy-900" />
        <p className="text-sm font-black uppercase tracking-[0.15em] drop-shadow-md">
          Premium AC Service – <span className="text-navy-900">Limited Time Offers</span> Available Now
        </p>
        <Wind className="w-4 h-4 text-navy-900 fill-navy-900" />
      </motion.div>
    </div>
  );
}

function MobileCTA() {
  const whatsappLink = "https://wa.me/917056330400?text=I'm%20interested%20in%20your%20services";
  return (
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
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-slate-50 selection:bg-orange-100 selection:text-orange-900">
        <TopBanner />
        <Navbar />
        
        <main>
          <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center">
              <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
          }>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/why-us" element={<WhyUsPage />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            </Routes>
          </Suspense>
        </main>

        <Footer />
        <MobileCTA />
      </div>
    </BrowserRouter>
  );
}
