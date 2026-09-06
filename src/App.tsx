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

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Navbar() {
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
    { name: 'Refrigerator Repair', path: '/fridge-repair', tag: 'From ₹249' },
    { name: 'Washing Machine Repair', path: '/washing-machine-repair', tag: 'From ₹249' },
    { name: 'Microwave Repair', path: '/microwave-repair', tag: 'From ₹249' },
    { name: 'Geyser Repair', path: '/geyser-repair', tag: 'From ₹249' },
  ];

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'AC Services', path: '/services' },
    { name: 'Localities', path: '/location/dlf-gurgaon' },
    { name: 'FAQs', path: '/faqs' },
    { name: 'Why Us', path: '/why-us' },
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
          <div className="hidden md:flex items-center md:space-x-3 lg:space-x-6">
            <Link 
              to="/"
              className={`font-bold transition-colors relative group px-2 py-1 ${location.pathname === '/' ? 'text-orange-500' : 'text-navy-800 hover:text-orange-500'}`}
            >
              Home
              <span className={`absolute bottom-0 left-0 h-0.5 bg-orange-500 transition-all ${location.pathname === '/' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>

            <Link 
              to="/services"
              className={`font-bold transition-colors relative group px-2 py-1 ${location.pathname === '/services' ? 'text-orange-500' : 'text-navy-800 hover:text-orange-500'}`}
            >
              AC Services
              <span className={`absolute bottom-0 left-0 h-0.5 bg-orange-500 transition-all ${location.pathname === '/services' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>

            {/* Appliance Repairs Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsAppliancesOpen(true)}
              onMouseLeave={() => setIsAppliancesOpen(false)}
            >
              <button 
                className={`font-bold transition-colors relative group px-2 py-1 flex items-center gap-1.5 ${
                  ['/fridge-repair', '/washing-machine-repair', '/microwave-repair', '/geyser-repair'].includes(location.pathname)
                    ? 'text-orange-500' 
                    : 'text-navy-800 hover:text-orange-500'
                }`}
              >
                <span>Appliances</span>
                <span className="text-xs bg-orange-100 text-orange-600 px-2 py-0.5 rounded-full font-black uppercase text-[10px]">New</span>
              </button>

              <AnimatePresence>
                {isAppliancesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-2 w-72 bg-white rounded-3xl shadow-2xl border border-slate-100 p-3 z-50"
                  >
                    <div className="text-[10px] uppercase font-black tracking-widest text-slate-400 px-3 py-2 border-b border-slate-100 mb-1">
                      Doorstep Repair in Gurgaon
                    </div>
                    {applianceLinks.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={() => setIsAppliancesOpen(false)}
                        className={`flex items-center justify-between px-3 py-3 rounded-2xl transition-all font-black text-sm ${
                          location.pathname === item.path 
                            ? 'bg-orange-50 text-orange-600' 
                            : 'text-navy-900 hover:bg-slate-50 hover:text-orange-500'
                        }`}
                      >
                        <span>{item.name}</span>
                        <span className="text-[10px] text-slate-400 font-bold bg-slate-100 px-2 py-0.5 rounded-lg">{item.tag}</span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link 
              to="/location/dlf-gurgaon"
              className={`font-bold transition-colors relative group px-2 py-1 ${location.pathname.startsWith('/location') ? 'text-orange-500' : 'text-navy-800 hover:text-orange-500'}`}
            >
              Localities
              <span className={`absolute bottom-0 left-0 h-0.5 bg-orange-500 transition-all ${location.pathname.startsWith('/location') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>

            <Link 
              to="/faqs"
              className={`font-bold transition-colors relative group px-2 py-1 ${location.pathname === '/faqs' ? 'text-orange-500' : 'text-navy-800 hover:text-orange-500'}`}
            >
              FAQs
              <span className={`absolute bottom-0 left-0 h-0.5 bg-orange-500 transition-all ${location.pathname === '/faqs' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>

            <Link 
              to="/why-us"
              className={`font-bold transition-colors relative group px-2 py-1 ${location.pathname === '/why-us' ? 'text-orange-500' : 'text-navy-800 hover:text-orange-500'}`}
            >
              Why Us
              <span className={`absolute bottom-0 left-0 h-0.5 bg-orange-500 transition-all ${location.pathname === '/why-us' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>

            <Link 
              to="/contact"
              className={`font-bold transition-colors relative group px-2 py-1 ${location.pathname === '/contact' ? 'text-orange-500' : 'text-navy-800 hover:text-orange-500'}`}
            >
              Contact
              <span className={`absolute bottom-0 left-0 h-0.5 bg-orange-500 transition-all ${location.pathname === '/contact' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>

            <a href="tel:+917056330400" className="orange-gradient text-white px-6 py-3 rounded-2xl font-bold transition-all shadow-xl shadow-orange-500/30 flex items-center gap-2 transform hover:-translate-y-1 text-sm">
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
            className="lg:hidden glass border-t border-slate-100 px-6 py-8 space-y-3 shadow-2xl overflow-hidden rounded-b-[3rem] max-h-[85vh] overflow-y-auto"
          >
            <Link 
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className={`block w-full text-left px-5 py-3 font-black rounded-2xl transition-all text-base ${location.pathname === '/' ? 'bg-orange-500 text-white' : 'text-navy-800 hover:bg-orange-50'}`}
            >
              Home
            </Link>
            <Link 
              to="/services"
              onClick={() => setIsMenuOpen(false)}
              className={`block w-full text-left px-5 py-3 font-black rounded-2xl transition-all text-base ${location.pathname === '/services' ? 'bg-orange-500 text-white' : 'text-navy-800 hover:bg-orange-50'}`}
            >
              AC Services
            </Link>

            {/* Mobile Appliance Links */}
            <div className="bg-slate-100/70 p-3 rounded-2xl space-y-1.5">
              <div className="text-[10px] font-black uppercase tracking-widest text-slate-500 px-3 py-1">
                Appliance Repair Services
              </div>
              {applianceLinks.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block w-full text-left px-4 py-2.5 font-bold rounded-xl text-sm ${location.pathname === item.path ? 'bg-orange-500 text-white' : 'text-navy-900 hover:bg-white'}`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <Link 
              to="/location/dlf-gurgaon"
              onClick={() => setIsMenuOpen(false)}
              className={`block w-full text-left px-5 py-3 font-black rounded-2xl transition-all text-base ${location.pathname.startsWith('/location') ? 'bg-orange-500 text-white' : 'text-navy-800 hover:bg-orange-50'}`}
            >
              Localities
            </Link>
            <Link 
              to="/faqs"
              onClick={() => setIsMenuOpen(false)}
              className={`block w-full text-left px-5 py-3 font-black rounded-2xl transition-all text-base ${location.pathname === '/faqs' ? 'bg-orange-500 text-white' : 'text-navy-800 hover:bg-orange-50'}`}
            >
              FAQs
            </Link>
            <Link 
              to="/why-us"
              onClick={() => setIsMenuOpen(false)}
              className={`block w-full text-left px-5 py-3 font-black rounded-2xl transition-all text-base ${location.pathname === '/why-us' ? 'bg-orange-500 text-white' : 'text-navy-800 hover:bg-orange-50'}`}
            >
              Why Us
            </Link>
            <Link 
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className={`block w-full text-left px-5 py-3 font-black rounded-2xl transition-all text-base ${location.pathname === '/contact' ? 'bg-orange-500 text-white' : 'text-navy-800 hover:bg-orange-50'}`}
            >
              Contact
            </Link>
            <a href="tel:+917056330400" className="block w-full orange-gradient text-white text-center px-6 py-4 rounded-2xl font-black shadow-xl shadow-orange-500/20 text-base">
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
                { name: 'Refrigerator Repair', path: '/fridge-repair' },
                { name: 'Washing Machine Repair', path: '/washing-machine-repair' },
                { name: 'Microwave Oven Repair', path: '/microwave-repair' },
                { name: 'Geyser & Water Heater', path: '/geyser-repair' },
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
          <p className="text-slate-500 font-black text-xs">© 2026 ASAP GURGAON AC & APPLIANCE SERVICE. All rights reserved.</p>
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
              <Route path="/fridge-repair" element={<FridgeRepairPage />} />
              <Route path="/services/fridge-repair" element={<FridgeRepairPage />} />
              <Route path="/washing-machine-repair" element={<WashingMachineRepairPage />} />
              <Route path="/services/washing-machine-repair" element={<WashingMachineRepairPage />} />
              <Route path="/microwave-repair" element={<MicrowaveRepairPage />} />
              <Route path="/services/microwave-repair" element={<MicrowaveRepairPage />} />
              <Route path="/geyser-repair" element={<GeyserRepairPage />} />
              <Route path="/services/geyser-repair" element={<GeyserRepairPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/why-us" element={<WhyUsPage />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="/blog/ac-repair-gurgaon" element={<SeoBlogPage />} />
              <Route path="/location/dlf-gurgaon" element={<LocationPage />} />
              <Route path="/faqs" element={<FaqHubPage />} />
            </Routes>
          </Suspense>
        </main>

        <Footer />
        <MobileCTA />
      </div>
    </BrowserRouter>
  );
}
