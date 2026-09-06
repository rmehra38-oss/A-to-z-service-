import { 
  Phone, Menu, X, Wind, MessageCircle, MapPin, Mail
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';

// Lazy load pages
const HomePage = lazy(() => import('./pages/HomePage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const FridgeRepairPage = lazy(() => import('./pages/FridgeRepairPage'));
const WashingMachineRepairPage = lazy(() => import('./pages/WashingMachineRepairPage'));
const MicrowaveRepairPage = lazy(() => import('./pages/MicrowaveRepairPage'));
const GeyserRepairPage = lazy(() => import('./pages/GeyserRepairPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const WhyUsPage = lazy(() => import('./pages/WhyUsPage'));
const PortfolioPage = lazy(() => import('./pages/PortfolioPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage'));
const SeoBlogPage = lazy(() => import('./pages/SeoBlogPage'));
const LocationPage = lazy(() => import('./pages/LocationPage'));
const FaqHubPage = lazy(() => import('./pages/FaqHubPage'));

import ApplianceQuickLinks from './components/ApplianceQuickLinks';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAppliancesOpen, setIsAppliancesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const applianceLinks = [
    { name: 'Fridge Repair Gurgaon', path: '/fridge-repair-gurgaon', tag: 'From ₹249' },
    { name: 'Washing Machine Gurgaon', path: '/washing-machine-repair-gurgaon', tag: 'From ₹299' },
    { name: 'Microwave Repair Gurgaon', path: '/microwave-repair-gurgaon', tag: 'From ₹249' },
    { name: 'Geyser Repair Gurgaon', path: '/geyser-repair-gurgaon', tag: 'From ₹249' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300">
      {/* Top Banner - crisp high-contrast announcement bar */}
      <div className="bg-orange-500 text-white py-2 px-4 text-center relative z-[60] overflow-hidden shadow-sm hidden md:block border-b border-orange-600/20">
        <div className="flex items-center justify-center gap-3 max-w-7xl mx-auto text-xs font-black uppercase tracking-wider">
          <Wind className="w-3.5 h-3.5 text-navy-950 fill-navy-950 shrink-0" />
          <span>
            PREMIUM AC & APPLIANCE SERVICE – <span className="text-navy-950 underline decoration-navy-950/40">LIMITED TIME OFFERS</span> AVAILABLE IN GURGAON
          </span>
          <Wind className="w-3.5 h-3.5 text-navy-950 fill-navy-950 shrink-0" />
        </div>
      </div>

      {/* Main Navbar - Solid White Background with WCAG AA High Contrast on EVERY page */}
      <nav className={`w-full bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all duration-300 ${scrolled ? 'py-2 shadow-md' : 'py-3'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center gap-2">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 sm:gap-3 cursor-pointer group shrink-0">
              <div className="bg-orange-500 p-2 rounded-2xl group-hover:rotate-12 transition-transform duration-300 shadow-md shadow-orange-500/20 w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center shrink-0">
                <Wind className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-2 leading-none">
                <span className="text-base sm:text-lg md:text-xl font-black text-navy-950 tracking-tight whitespace-nowrap">
                  ASAP GURGAON
                </span>
                <span className="text-[11px] sm:text-xs md:text-sm font-black text-orange-600 tracking-wider uppercase whitespace-nowrap">
                  AC SERVICE
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              <Link 
                to="/"
                className={`px-3 py-1.5 rounded-xl font-bold text-sm transition-colors ${
                  location.pathname === '/' ? 'text-orange-600 bg-orange-50 font-black' : 'text-slate-800 hover:text-orange-600 hover:bg-slate-50'
                }`}
              >
                Home
              </Link>

              <Link 
                to="/services"
                className={`px-3 py-1.5 rounded-xl font-bold text-sm transition-colors ${
                  location.pathname === '/services' ? 'text-orange-600 bg-orange-50 font-black' : 'text-slate-800 hover:text-orange-600 hover:bg-slate-50'
                }`}
              >
                AC Services
              </Link>

              {/* Appliance Repairs Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setIsAppliancesOpen(true)}
                onMouseLeave={() => setIsAppliancesOpen(false)}
              >
                <button 
                  className={`px-3 py-1.5 rounded-xl font-bold text-sm transition-colors flex items-center gap-1.5 ${
                    ['fridge', 'washing-machine', 'microwave', 'geyser'].some(slug => location.pathname.includes(slug))
                      ? 'text-orange-600 bg-orange-50 font-black' 
                      : 'text-slate-800 hover:text-orange-600 hover:bg-slate-50'
                  }`}
                >
                  <span>Appliances</span>
                  <span className="bg-orange-500 text-white px-1.5 py-0.5 rounded-full font-black uppercase text-[9px] tracking-wider">New</span>
                </button>

                <AnimatePresence>
                  {isAppliancesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-1 w-72 bg-white rounded-2xl shadow-2xl border border-slate-100 p-2.5 z-50"
                    >
                      <div className="text-[10px] uppercase font-black tracking-widest text-slate-400 px-3 py-1.5 border-b border-slate-100 mb-1">
                        Doorstep Repair in Gurgaon
                      </div>
                      {applianceLinks.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          onClick={() => setIsAppliancesOpen(false)}
                          className={`flex items-center justify-between px-3 py-2.5 rounded-xl transition-all font-bold text-sm ${
                            location.pathname === item.path 
                              ? 'bg-orange-50 text-orange-600 font-black' 
                              : 'text-slate-800 hover:bg-slate-50 hover:text-orange-600'
                          }`}
                        >
                          <span>{item.name}</span>
                          <span className="text-[10px] text-slate-500 font-bold bg-slate-100 px-2 py-0.5 rounded-md">{item.tag}</span>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link 
                to="/location/dlf-gurgaon"
                className={`px-3 py-1.5 rounded-xl font-bold text-sm transition-colors ${
                  location.pathname.startsWith('/location') ? 'text-orange-600 bg-orange-50 font-black' : 'text-slate-800 hover:text-orange-600 hover:bg-slate-50'
                }`}
              >
                Localities
              </Link>

              <Link 
                to="/faqs"
                className={`px-3 py-1.5 rounded-xl font-bold text-sm transition-colors ${
                  location.pathname === '/faqs' ? 'text-orange-600 bg-orange-50 font-black' : 'text-slate-800 hover:text-orange-600 hover:bg-slate-50'
                }`}
              >
                FAQs
              </Link>

              <Link 
                to="/why-us"
                className={`px-3 py-1.5 rounded-xl font-bold text-sm transition-colors ${
                  location.pathname === '/why-us' ? 'text-orange-600 bg-orange-50 font-black' : 'text-slate-800 hover:text-orange-600 hover:bg-slate-50'
                }`}
              >
                Why Us
              </Link>

              <Link 
                to="/contact"
                className={`px-3 py-1.5 rounded-xl font-bold text-sm transition-colors ${
                  location.pathname === '/contact' ? 'text-orange-600 bg-orange-50 font-black' : 'text-slate-800 hover:text-orange-600 hover:bg-slate-50'
                }`}
              >
                Contact
              </Link>
            </div>

            {/* Right Call Action */}
            <div className="flex items-center gap-2 sm:gap-3">
              <a 
                href="tel:+917056330400" 
                className="bg-orange-500 hover:bg-orange-600 text-white px-3.5 py-2 sm:px-5 sm:py-2.5 rounded-2xl font-black text-xs sm:text-sm tracking-tight transition-all shadow-md shadow-orange-500/25 flex items-center gap-2 shrink-0 whitespace-nowrap hover:-translate-y-0.5"
              >
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">+91 70563 30400</span>
                <span className="sm:hidden">Call Now</span>
              </a>

              {/* Mobile Menu Button */}
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                className="lg:hidden p-2 text-navy-950 bg-slate-100 hover:bg-slate-200 rounded-xl transition-all active:scale-95"
                aria-label="Toggle Menu"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-slate-100 px-4 py-5 space-y-2 shadow-2xl overflow-hidden rounded-b-3xl max-h-[80vh] overflow-y-auto"
            >
              <Link 
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className={`block w-full text-left px-4 py-2.5 font-bold rounded-xl text-base ${location.pathname === '/' ? 'bg-orange-500 text-white' : 'text-slate-800 hover:bg-orange-50'}`}
              >
                Home
              </Link>
              <Link 
                to="/services"
                onClick={() => setIsMenuOpen(false)}
                className={`block w-full text-left px-4 py-2.5 font-bold rounded-xl text-base ${location.pathname === '/services' ? 'bg-orange-500 text-white' : 'text-slate-800 hover:bg-orange-50'}`}
              >
                AC Services
              </Link>

              {/* Mobile Appliance Sub-menu */}
              <div className="bg-slate-50 p-3 rounded-2xl space-y-1.5 border border-slate-100">
                <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 px-2 py-1">
                  Appliance Repair Services
                </div>
                {applianceLinks.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block w-full text-left px-3 py-2 font-bold rounded-lg text-sm ${location.pathname === item.path ? 'bg-orange-500 text-white' : 'text-slate-800 hover:bg-white'}`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              <Link 
                to="/location/dlf-gurgaon"
                onClick={() => setIsMenuOpen(false)}
                className={`block w-full text-left px-4 py-2.5 font-bold rounded-xl text-base ${location.pathname.startsWith('/location') ? 'bg-orange-500 text-white' : 'text-slate-800 hover:bg-orange-50'}`}
              >
                Localities
              </Link>
              <Link 
                to="/faqs"
                onClick={() => setIsMenuOpen(false)}
                className={`block w-full text-left px-4 py-2.5 font-bold rounded-xl text-base ${location.pathname === '/faqs' ? 'bg-orange-500 text-white' : 'text-slate-800 hover:bg-orange-50'}`}
              >
                FAQs
              </Link>
              <Link 
                to="/why-us"
                onClick={() => setIsMenuOpen(false)}
                className={`block w-full text-left px-4 py-2.5 font-bold rounded-xl text-base ${location.pathname === '/why-us' ? 'bg-orange-500 text-white' : 'text-slate-800 hover:bg-orange-50'}`}
              >
                Why Us
              </Link>
              <Link 
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className={`block w-full text-left px-4 py-2.5 font-bold rounded-xl text-base ${location.pathname === '/contact' ? 'bg-orange-500 text-white' : 'text-slate-800 hover:bg-orange-50'}`}
              >
                Contact
              </Link>
              <Link 
                to="/privacy-policy"
                onClick={() => setIsMenuOpen(false)}
                className={`block w-full text-left px-4 py-2.5 font-bold rounded-xl text-base ${location.pathname.includes('privacy') ? 'bg-orange-500 text-white' : 'text-slate-800 hover:bg-orange-50'}`}
              >
                Privacy Policy
              </Link>
              <a href="tel:+917056330400" className="block w-full bg-orange-500 text-white text-center px-4 py-3 rounded-xl font-black shadow-md shadow-orange-500/20 text-base">
                Call Now: +91 70563 30400
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

function Footer() {
  const whatsappLink = "https://wa.me/917056330400?text=I'm%20interested%20in%20your%20services";
  
  return (
    <footer className="bg-white py-20 border-t border-slate-100 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-full blur-3xl -mr-32 -mt-32"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-orange-500 p-3 rounded-2xl shadow-xl w-12 h-12 flex items-center justify-center">
                <Wind className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-black tracking-tighter text-navy-900">
                ASAP GURGAON <span className="text-orange-500">SERVICE</span>
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed font-medium mb-4">
              Gurgaon's leading AC and home appliance repair provider. Expert doorstep repair for ACs, Refrigerators, Washing Machines, Microwaves, and Geysers with 90-day warranty.
            </p>
            <div className="text-xs text-slate-400 font-bold">
              Shop 6, Sector 52 Market, Gurgaon • 8 AM - 9 PM
            </div>
          </div>

          <div>
            <h4 className="text-navy-900 font-black uppercase tracking-[0.3em] text-[10px] mb-6">Appliance Repairs</h4>
            <ul className="space-y-3">
              {[
                { name: 'Fridge Repair Gurgaon', path: '/fridge-repair-gurgaon' },
                { name: 'Washing Machine Gurgaon', path: '/washing-machine-repair-gurgaon' },
                { name: 'Microwave Repair Gurgaon', path: '/microwave-repair-gurgaon' },
                { name: 'Geyser Repair Gurgaon', path: '/geyser-repair-gurgaon' },
                { name: 'AC Service & Jet Cleaning', path: '/services' }
              ].map(link => (
                <li key={link.path}>
                  <Link to={link.path} className="text-slate-600 hover:text-orange-500 font-black text-sm transition-all hover:translate-x-1 block">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-navy-900 font-black uppercase tracking-[0.3em] text-[10px] mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'Gurgaon Localities', path: '/location/dlf-gurgaon' },
                { name: 'Troubleshooting FAQs', path: '/faqs' },
                { name: 'Why Choose Us', path: '/why-us' },
                { name: 'AC Repair SEO Guide', path: '/blog/ac-repair-gurgaon' },
                { name: 'Privacy Policy', path: '/privacy-policy' }
              ].map(link => (
                <li key={link.path}>
                  <Link to={link.path} className="text-slate-600 hover:text-orange-500 font-black text-sm transition-all hover:translate-x-1 block">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-navy-900 font-black uppercase tracking-[0.3em] text-[10px] mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-slate-700 font-black text-sm">
                <div className="bg-orange-100 p-2 rounded-lg"><Phone className="w-4 h-4 text-orange-500" /></div>
                +91 70563 30400
              </li>
              <li className="flex items-center gap-3 text-slate-700 font-black text-sm">
                <div className="bg-orange-100 p-2 rounded-lg"><MapPin className="w-4 h-4 text-orange-500" /></div>
                Shop 6, Sector 52 Market, Gurgaon
              </li>
              <li className="flex items-center gap-3 text-slate-700 font-black text-sm">
                <div className="bg-orange-100 p-2 rounded-lg"><Mail className="w-4 h-4 text-orange-500" /></div>
                gurgaonacservice@gmail.com
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 font-black uppercase tracking-widest text-[10px]">Doorstep service across DLF, Sohna Rd, Golf Course Rd, Sector 56 & all Gurgaon.</p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-slate-500 font-bold text-xs">
            <Link to="/privacy-policy" className="hover:text-orange-500 underline underline-offset-4 transition-colors">Privacy Policy</Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-orange-500 underline underline-offset-4 transition-colors">Contact Support</Link>
            <span>•</span>
            <p>© 2026 ASAP GURGAON AC & APPLIANCE SERVICE. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
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
        <Header />
        
        <main>
          <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center">
              <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
          }>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
              
              {/* Gurgaon Appliance Repair Routes */}
              <Route path="/fridge-repair-gurgaon" element={<FridgeRepairPage />} />
              <Route path="/fridge-repair" element={<FridgeRepairPage />} />
              <Route path="/services/fridge-repair" element={<FridgeRepairPage />} />
              
              <Route path="/washing-machine-repair-gurgaon" element={<WashingMachineRepairPage />} />
              <Route path="/washing-machine-gurgaon" element={<WashingMachineRepairPage />} />
              <Route path="/washing-machine-repair" element={<WashingMachineRepairPage />} />
              <Route path="/services/washing-machine-repair" element={<WashingMachineRepairPage />} />
              
              <Route path="/microwave-repair-gurgaon" element={<MicrowaveRepairPage />} />
              <Route path="/microwave-reapir-gurgaon" element={<MicrowaveRepairPage />} />
              <Route path="/microwave-repair" element={<MicrowaveRepairPage />} />
              <Route path="/services/microwave-repair" element={<MicrowaveRepairPage />} />
              
              <Route path="/geyser-repair-gurgaon" element={<GeyserRepairPage />} />
              <Route path="/geyser-repair" element={<GeyserRepairPage />} />
              <Route path="/services/geyser-repair" element={<GeyserRepairPage />} />
              
              <Route path="/about" element={<AboutPage />} />
              <Route path="/why-us" element={<WhyUsPage />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="/privacy" element={<PrivacyPolicyPage />} />
              <Route path="/legal/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="/blog/ac-repair-gurgaon" element={<SeoBlogPage />} />
              <Route path="/location/dlf-gurgaon" element={<LocationPage />} />
              <Route path="/faqs" element={<FaqHubPage />} />
            </Routes>
          </Suspense>
        </main>

        <ApplianceQuickLinks />
        <Footer />
        <MobileCTA />
      </div>
    </BrowserRouter>
  );
}
