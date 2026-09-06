import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { 
  MapPin, Phone, ShieldCheck, Zap, HelpCircle, 
  ArrowRight, CheckSquare, Sparkles, Star, ChevronDown 
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface LocationInfo {
  id: string;
  name: string;
  landmark: string;
  challenges: string;
  whyChooseUs: string;
  description: string;
}

const locationsData: LocationInfo[] = [
  {
    id: "dlf-phase-1",
    name: "DLF Phase 1",
    landmark: "Kataria Market, Arjun Marg, Qutab Plaza",
    challenges: "Properties in DLF Phase 1 are surrounded by lush greenery and tree canopies. While beautiful, this leads to an abundance of dry leaves, twigs, and bird droppings clogging the outdoor AC condensers. Furthermore, tree sap and organic debris can create organic mold inside the split AC internal tray, resulting in foul odors and water drips inside family rooms.",
    whyChooseUs: "ASAP Gurgaon AC Service maintains a dedicated fleet of technicians based right near Qutab Plaza to dispatch within 30 minutes. We utilize heavy-duty protective bags and drop-cloths to prevent dirty jet service water from staining your luxury DLF Phase 1 interior walls and carpets.",
    description: "Nestled in the heart of Gurgaon, DLF Phase 1 is home to some of the prime independent residential bungalows. These premium residences require expert, meticulous HVAC maintenance that understands the specific architectural layout and values clean, quiet operations."
  },
  {
    id: "dlf-phase-2",
    name: "DLF Phase 2",
    landmark: "Jacaranda Marg, Lunkad Block, MGF Megacity",
    challenges: "The close proximity to NH-48 and high-density business hubs makes DLF Phase 2 prone to persistent carbon soot and vehicular exhaust accumulation. This soot forms a sticky black layer over the condenser coils, acting as a heat-trapping barrier. Additionally, voltage drops from localized smart-grid swaps can stress delicate digital capacitors.",
    whyChooseUs: "Our specialized foam-injection cleaning technology completely dissolves sticky vehicle exhaust soot without damaging the delicate aluminum condenser fins. We also check the starter capacitor capacitor values with precise digital multimeters on every single visit.",
    description: "Located near NH-48 and Cyber City, DLF Phase 2 is a vibrant mix of luxury townhouses and developer floors. Our specialized AC maintenance ensures your climate control is as smart and fast-paced as the surrounding corporate landscape."
  },
  {
    id: "golf-course-road",
    name: "Golf Course Road",
    landmark: "One Horizon Center, DoubleTree Hilton, Sector 53-54",
    challenges: "GCR is characterized by ultra-luxury high-rises with outdoor units situated in specialized service balconies or high-elevation ledges. Dust storm cycles on open corridors block heavy-tonnage VRVs and multi-split condensers rapidly. High height accessibility makes manual cleaning extremely risky for untrained contractors.",
    whyChooseUs: "We supply our technicians with heavy-duty safety harnesses, climbing anchors, and specific vertical pressure-washing rods. Our crew is trained in servicing high-end Multi-split, VRV, and VRF systems from Daikin, OGen, and Mitsubishi Electric.",
    description: "Golf Course Road acts as Gurgaon's ultimate high-end luxury corridor. The premium high-rises and penthouses require high-level, master-certified HVAC mechanics who possess specialized permits to operate safely at skyscrapers."
  },
  {
    id: "sohna-road",
    name: "Sohna Road",
    landmark: "Vipul Trade Centre, Subhash Chowk, Sector 47-49",
    challenges: "Sohna Road experiences intense traffic dust, ongoing metro expansion, and high building density which traps radiant heat in the surroundings. This creates extreme micro-climates where outdoor temperatures around apartment balconies exceed 50°C. Heavy voltage drops during peak evening hours lead to frequent compressor stalling.",
    whyChooseUs: "We install heavy-duty industrial-grade start capacitors and power-delay relays to protect expensive inverter compressors against sudden voltage dips in Sohna Road high-density grids.",
    description: "An incredibly fast-developing commercial and residential hub, Sohna Road represents the booming potential of new Gurgaon. Our HVAC systems solutions ensure uninterrupted operations during the most testing summer seasons."
  },
  {
    id: "palam-vihar",
    name: "Palam Vihar",
    landmark: "Ansal Plaza, Spanish Court, Sector 1-2",
    challenges: "Palam Vihar has older residential structures mixed with new-age floors. Hard water scaling is a primary adversary here, forming calcium carbonate calcifications inside the internal drain lines. This causes persistent water backflow and decreases the cooling efficiency of older copper coils.",
    whyChooseUs: "On our cleaning visits, we feed specialized mild chemical scale-removers to break down calcium calcification inside the copper bends, restoring direct thermodynamics instantly for maximum cooling power.",
    description: "Palam Vihar combines classic, spacious independent villas with premium newer apartment communities. We deliver dependable, cost-efficient AC maintenance to keep these homes running with absolute peace of mind."
  }
];

const allSectors = [
  "Sushant Lok 1-3", "DLF Phase 3", "DLF Phase 4", "DLF Phase 5", "South City 1 & 2",
  "Sector 14", "Sector 15", "Sector 17", "Sector 22", "Sector 23", "Sector 31",
  "Sector 40", "Sector 45", "Sector 46", "Sector 47", "Sector 49", "Sector 52",
  "Sector 56", "Sector 57", "Sector 62", "Sector 67", "Manesar", "New Gurgaon"
];

export default function LocationPage() {
  const [selectedLocality, setSelectedLocality] = useState<LocationInfo>(locationsData[0]);
  const whatsappLink = "https://wa.me/917056330400?text=I'm%20interested%20in%20your%20services%20in%20" + encodeURIComponent(selectedLocality.name);

  // Schema Injection for LocalBusiness and Service
  useEffect(() => {
    // 1. Local Business Schema
    const localSchema = document.createElement('script');
    localSchema.type = 'application/ld+json';
    localSchema.id = 'location-localbusiness-schema';
    localSchema.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "HVACBusiness",
      "name": "ASAP Gurgaon AC Service",
      "image": "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1200",
      "@id": "https://gurgaonacservice.com/#hvac-business",
      "url": "https://gurgaonacservice.com",
      "telephone": "+91-70563-30400",
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Shop 6, Sector 52 Market",
        "addressLocality": "Gurgaon",
        "addressRegion": "Haryana",
        "postalCode": "122003",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 28.432007,
        "longitude": 77.078493
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "08:00",
        "closes": "22:00"
      },
      "areaServed": [
        {
          "@type": "AdministrativeArea",
          "name": "Gurgaon"
        },
        {
          "@type": "AdministrativeArea",
          "name": "DLF Phase 1"
        },
        {
          "@type": "AdministrativeArea",
          "name": "DLF Phase 2"
        },
        {
          "@type": "AdministrativeArea",
          "name": "Golf Course Road"
        },
        {
          "@type": "AdministrativeArea",
          "name": "Sohna Road"
        },
        {
          "@type": "AdministrativeArea",
          "name": "Palam Vihar"
        }
      ]
    });

    document.head.appendChild(localSchema);

    return () => {
      const existing = document.getElementById('location-localbusiness-schema');
      if (existing) existing.remove();
    };
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen pt-36 md:pt-44 pb-24 relative overflow-hidden">
      
      {/* Visual accents */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-orange-500/5 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-[0.2em] mb-4">
            <MapPin className="w-4 h-4 text-orange-500" />
            Gurgaon Local Service Coverage
          </div>
          <h1 className="text-4xl md:text-7xl font-black text-navy-950 tracking-tighter leading-none mb-6">
            Localized AC Repair in <span className="text-orange-500">Gurgaon Localities</span>
          </h1>
          <p className="text-lg text-slate-600 font-medium">
            Choose your neighborhood below to reveal hyper-local AC service challenges, tailored HVAC maintenance protocols, nearby landmarks, and customized dispatch turnarounds down to the minute.
          </p>
        </div>

        {/* Neighborhood Selector Grid/Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {locationsData.map((loc) => (
            <button
              key={loc.id}
              onClick={() => setSelectedLocality(loc)}
              className={`px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-wider transition-all duration-300 shadow-sm border ${
                selectedLocality.id === loc.id
                  ? 'bg-navy-900 border-navy-900 text-white shadow-xl scale-105'
                  : 'bg-white border-slate-100 text-slate-600 hover:bg-slate-100 hover:border-slate-200'
              }`}
            >
              🏢 {loc.name}
            </button>
          ))}
        </div>

        {/* Main Content Area: Min 1200+ words dedicated localized knowledge base */}
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          
          {/* Detailed Local Information Pane */}
          <div className="lg:col-span-8 bg-white rounded-[3rem] border border-slate-100 p-8 md:p-14 lg:p-16 shadow-xl space-y-10">
            
            {/* Header block with badges */}
            <div className="flex flex-wrap items-center justify-between gap-6 border-b border-slate-100 pb-8">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.25em] text-orange-500 mb-2 block">Direct Dispatch Center Nearby</span>
                <h2 className="text-3xl md:text-5xl font-black text-navy-950 tracking-tight">
                  AC Service Specialist in {selectedLocality.name}
                </h2>
              </div>
              <div className="flex items-center gap-2 bg-orange-50 text-orange-600 px-5 py-3 rounded-2xl font-black text-xs border border-orange-100">
                <Star className="w-4 h-4 fill-orange-500 text-orange-500 animate-pulse" />
                <span>ETA: Under 30 Minutes</span>
              </div>
            </div>

            {/* Introduction paragraph */}
            <section className="space-y-4">
              <h3 className="text-xl font-bold text-navy-950 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-orange-500" /> Geographic Neighborhood Overview
              </h3>
              <p className="text-slate-600 leading-relaxed text-base font-medium">
                {selectedLocality.description} Our localized technical hub is fully staffed with HVAC mechanics who know every layout, sector code, sub-society, and block number. We arrive promptly with specialized testing sensors and high-pressure jet equipment.
              </p>
              <p className="text-slate-500 text-sm italic">
                📍 <strong>Local landmark hubs served actively:</strong> {selectedLocality.landmark} and adjacent high-rise developer residential blocks.
              </p>
            </section>

            {/* Common regional HVAC hurdles */}
            <section className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 space-y-4">
              <h3 className="text-xl font-black text-navy-950 flex items-center gap-2">
                <Zap className="w-5 h-5 text-orange-500" /> Locality-Specific AC Hurdles
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-medium">
                {selectedLocality.challenges}
              </p>
              <div className="border-t border-slate-200/50 pt-4 mt-2">
                <p className="text-xs text-orange-600 font-extrabold uppercase tracking-wider flex items-center gap-2">
                  <span>⚠️ AC Warning Indicator:</span> Carbon soot and plant pollen clog unit fins inside weeks, raising internal pressures by up to 35%!
                </p>
              </div>
            </section>

            {/* Why choose us for this locality */}
            <section className="space-y-4">
              <h3 className="text-xl font-black text-navy-950 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-green-500" /> Why ASAP AC Servicing Dominates in {selectedLocality.name}
              </h3>
              <p className="text-slate-600 leading-relaxed text-base font-medium">
                {selectedLocality.whyChooseUs} 
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                {[
                  "Certified, background-verified engineers",
                  "100% genuine copper tube u-bends & components",
                  "Spill-free vertical vacuum jet service bags",
                  "Double-stage Nitrogen gas leakage tests",
                  "Digital weighting scales for precise gas fills",
                  "Compliant tax invoice detailing 90-day warrantee keys"
                ].map((benefit, i) => (
                  <div key={i} className="flex gap-2.5 items-center text-sm font-bold text-slate-600 bg-white border border-slate-100 p-4 rounded-xl">
                    <CheckSquare className="w-4 h-4 text-orange-500 shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Comprehensive standard service list */}
            <section className="space-y-4">
              <h3 className="text-xl font-black text-navy-950">Expert Appliance Services Offered</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Our technicians are fully certified and carry localized service permits for all types of cooling and cooling-adjacent electronic household repair services. Whatever the brand size or complexity, we have standard replacement parts on hand for swift same-day resolution.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { title: "Split & Window Servicing", desc: "Foam plus water high pressure jet cleaning." },
                  { title: "Smart Inverter Board Repair", desc: "Precision PCB debugs & sensor replacements." },
                  { title: "AC Gas Leak Refilling", desc: "90-day warrantee sealed charging packages." },
                  { title: "Compressor Relays & Starts", desc: "Top-grade capacitors and overload protections." },
                  { title: "Double-Door Fridge Repairs", desc: "Expert cooling coils and gas charging solutions." },
                  { title: "PCB & Electric Washing", desc: "Solving motor stalls & circuit board errors." }
                ].map((srv, idx) => (
                  <div key={idx} className="bg-slate-50/50 p-5 rounded-2xl border border-slate-100 hover:border-orange-500/20 transition-colors">
                    <h5 className="font-bold text-navy-950 text-sm mb-1">{srv.title}</h5>
                    <p className="text-xs text-slate-500 leading-relaxed">{srv.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Strategic conversion area */}
            <div className="orange-gradient text-white p-8 md:p-10 rounded-[2.5rem] relative overflow-hidden shadow-2xl">
              <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-6">
                <div>
                  <h4 className="text-2xl md:text-3xl font-black mb-2 tracking-tight">Secure Premium Comfort in {selectedLocality.name}</h4>
                  <p className="text-xs text-orange-50 font-medium max-w-md leading-relaxed">Book deep jet service now to avoid costly compressor repairs! Get dynamic protection against extreme 2026 Gurgaon heat waves today.</p>
                </div>
                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-orange-600 px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl flex items-center gap-2 hover:scale-105 transition-transform"
                >
                  Book Instant Service <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Location sidebar widget explaining extensive area list */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-white rounded-[3rem] border border-slate-100 p-8 shadow-xl">
              <h3 className="text-lg font-black text-navy-950 mb-6 border-b border-slate-100 pb-3">Complete Gurgaon Coverage</h3>
              <p className="text-slate-500 text-xs leading-relaxed mb-6">
                Apart from the premium residential complexes above, our operations network serves every modern sector apartment, builder floor, and commercial park in Gurgaon with consistent pricing and flat-rate trip times.
              </p>
              
              <div className="grid grid-cols-1 gap-2 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                {allSectors.map((sec, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-center gap-2.5 text-xs font-bold text-slate-600 py-2 px-3 hover:bg-slate-50 rounded-lg transition-colors border border-slate-100/30"
                  >
                    <MapPin className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                    <span>{sec}</span>
                  </div>
                ))}
              </div>
              <p className="text-center text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-6">
                Scroll to view entire list of serviced sectors
              </p>
            </div>

            <div className="bg-navy-900 text-white rounded-[3rem] p-8 shadow-xl border border-navy-950 space-y-6">
              <h4 className="text-lg font-black tracking-tight mb-2">Emergency 24x7 Hotlines</h4>
              <p className="text-xs text-slate-400 leading-relaxed font-semibold">
                Our service vehicles are heavily stocked with replacement capacitors, contactors, digital thermostats, expansion valves, and copper bundles to resolve key malfunctions on the spot.
              </p>
              
              <div className="space-y-4">
                <a 
                  href="tel:+917056330400"
                  className="block text-center border-2 border-white/20 hover:border-white text-white py-3 px-5 rounded-2xl font-black text-xs transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-orange-500 fill-orange-500" />
                  Call: +91 70563 30400
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
