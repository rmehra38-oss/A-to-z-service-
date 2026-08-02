import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { 
  HelpCircle, Search, ChevronDown, ChevronUp, Clock, 
  Tag, Phone, MessageCircle, FileText, CheckCircle2 
} from 'lucide-react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: "repair" | "installation" | "charges" | "gas" | "amc" | "split" | "window";
}

const faqData: FAQItem[] = [
  // Category: repair (10 FAQs)
  {
    id: 1,
    category: "repair",
    question: "Why is my AC running but not cooling the room properly?",
    answer: "This is routinely caused by a choked air filter, dusty cooling coils, or depleted refrigerant gas levels. When air filter mesh is clogged, air cannot pass over the evaporations coils, meaning the room stays humid and warm. Alternatively, dust layers on the outdoor condenser prevent heat dumping, triggering heatover trips inside the compressor. Regular maintenance ensures unobstructed thermodynamics."
  },
  {
    id: 2,
    category: "repair",
    question: "How do I know if my AC compressor is faulty or failing?",
    answer: "A failing compressor produces distinct warning indicators: rattling noises upon starting, frequent trip downs, warm air blowing inside, and tripped power circuit breakers. If the compressor hums but refuses to start, it usually points to a weak start-capacitor, which is inexpensive to swap out. If the main motor windings are permanently shorted, our certified technician will run diagnostic ohms tests to determine if a full compressor swap is necessary."
  },
  {
    id: 3,
    category: "repair",
    question: "What causes a burning plastic smell when I switch on my air conditioner?",
    answer: "A distinct burning odor indicates electrical overheating. It can be caused by loose terminals, compromised wire insulation, melting connection strips, or failing blower motor bearings. Power surges in Gurgaon residential networks can trigger heavy amp draws, melting standard wires. If you detect this, instantly turn off your main double-pole isolator switch and request a professional diagnostic inspection to prevent building fire hazards."
  },
  {
    id: 4,
    category: "repair",
    question: "Is it worth repairing an old AC or should I buy a new 5-star inverter AC?",
    answer: "If your AC is more than 8 to 10 years old and experiences frequent compressor failures or gas leaks, upgrading to a modern 5-star inverter unit is highly recommended. Older non-inverter systems pull continuous high loads. Newer variable-speed inverter air conditioners adjust motor speed dynamically, dropping monthly electricity consumption by 35% to 50% in testing Gurgaon environments, paying off the initial investments within two seasons."
  },
  {
    id: 5,
    category: "repair",
    question: "Why does my split AC unit make clicking noises while turned on?",
    answer: "Clicking noises from split units occur due to structural contraction or electrical faults. Natural cooling expands and contracts plastic body louvers, creating harmless ticking sounds. However, rapid, steady clicking commonly points to a failing relay switch on the main PCB board, or a loose blower fan blade rubbing against inside wire channels. Our technicians will inspect fan balance and secure plastic frame fittings to restore silent cooling."
  },
  {
    id: 6,
    category: "repair",
    question: "Why does my remote controller screen display weird error codes like E1, E6, or F0?",
    answer: "Modern inverter air conditioners utilize integrated microcontrollers to constantly audit pressure, voltage, sensor readings, and fan RPMs. Specific codes (like E1/E6 indicating serial communication faults between indoor and outdoor boards, or F0 showing low gas thresholds) guide technicians immediately to the root problem. We reference manufacturer registers to diagnose these logic board errors on the spot."
  },
  {
    id: 7,
    category: "repair",
    question: "How does hard water scale format indoor drain line blocks?",
    answer: "Gurgaon groundwater typically possesses high minerals. Mold, airborne dust, and moisture blend with calcium scale floating inside indoor gravity trays, forming a thick gelatinous paste. This paste seals internal drain pipelines, forcing water to flow back inside your living room or study. Our service includes gravity-drain physical deep pipe flushes with specialized pressure-flow tools to prevent dripping problems."
  },
  {
    id: 8,
    category: "repair",
    question: "What should I do if my indoor AC blower fan is spinning very slowly?",
    answer: "Slow indoor fan speeds are typically triggered by a weak blower motor capacitor (often rated 1.5μF to 2.5μF), accumulation of heavy soot over internal drum fan blades, or damaged magnetic windings in the motor itself. When heavy dust weighs down blades, the fan struggles to pull proper cubic-feet-per-minute (CFM) airflows, forming ice sheets on cooling coils. Swapping a starter capacitor resolves this instantly."
  },
  {
    id: 9,
    category: "repair",
    question: "Why is water freezing and building thick white ice on the outdoor copper u-bends?",
    answer: "Ice formation on copper suction lines is a major indicator of two common problems: low refrigerant level, or highly restricted indoor air flow. When the dry gas drops below normal operating pressure, the physical evaporating temperature of the remaining gas falls below freezing, turning condensation into ice. Standard jet flushes or a targeted gas top-up can solve this coil freeze-up."
  },
  {
    id: 10,
    category: "repair",
    question: "Can voltage fluctuations damage my double-inverter split AC?",
    answer: "Yes. Dual-inverter air conditioners possess sophisticated printed circuit boards (PCBs) containing sensitive diodes, transistors, and microchips. Massive power drops or spikes can instantaneously fry these circuits, which can cost ₹4,000 to ₹10,000 to replace. We highly suggest installing a high-quality electronic voltage stabilizer with smart delay cuts to safeguard your cooling systems."
  },

  // Category: installation (4 FAQs)
  {
    id: 11,
    category: "installation",
    question: "What is included inside a professional AC installation service standard package?",
    answer: "Our certified installation service comprises: secure structural wall bracket mounting, precision core drilling through concrete walls with protective sleeves, matching indoor-outdoor line alignments, routing water drain tubes, checking secure power relays, and a 30-minute system test. We utilize professional vacuum pumps to extract all moisture before introducing gas to ensure maximum life span."
  },
  {
    id: 12,
    category: "installation",
    question: "How long should the copper plumbing conduit line be between split indoor and outdoor units?",
    answer: "For maximum efficiency, the copper piping conduit should ideally measure between 3 meters (10 feet) and 5 meters. If the pipeline is too short (under 2 meters), vibrations and motor sounds can travel directly into your quiet living spaces. Conversely, if the distance exceeds 10 meters, thermodynamics degrade, forcing the compressor to exert massive loads which raises energy consumption and limits cooling power."
  },
  {
    id: 13,
    category: "installation",
    question: "Why is vacuuming the AC lines so critical during new split installations?",
    answer: "Bypassing the vacuum process is the leading cause of early compressor failures in new systems. Atmospheric air holds invisible moisture. If this moisture mixes with synthetic polyester lubricants inside refrigeration circuits, it forms highly corrosive acids that eat away motor windings over several months. We run heavy dual-stage vacuum pumps to pull pressure down to 500 microns before releasing any gas."
  },
  {
    id: 14,
    category: "installation",
    question: "Can I install my outdoor split unit inside a closed balcony or passage?",
    answer: "Installing an outdoor unit inside an unventilated, enclosed space is highly discouraged. Outdoor condensers must release the hot air extracted from your room. In a closed space, hot air recirculates back through the condenser coils, causing temperatures to exceed peak thermal design limits (52°C). This forces the compressor to trip constantly, leading to early component failure."
  },

  // Category: charges (4 FAQs)
  {
    id: 15,
    category: "charges",
    question: "Why do local freelancers quote very low AC service rates but charge massive fees for spares?",
    answer: "This is a common bait-and-switch scheme. Freelance contractors often list low service rates (₹200 to ₹300) to secure bookings, but arbitrary invent fake faults on-site like claiming 'gas levels are depleted' or 'capacitor is fried' and charging inflated fees (₹1,500 for a ₹200 capacitor). Our company utilizes a certified, upfront flat-rate price matrix with clear pricing on spares and services for transparent, trustworthy work."
  },
  {
    id: 16,
    category: "charges",
    question: "What lists as standard pricing for complete AC gas refilling in Gurgaon?",
    answer: "Standard AC gas refilling ranges from ₹3,000 to ₹4,500 depending on tonnage and chemical class (R22, R32, or R410A). Beware of vendors offering cheap 'gas top-ups' without performing proper high-pressure Nitrogen tests to find the leak. Fixing leaks first is essential to ensure you don't face identical dripping or warming issues weeks later."
  },
  {
    id: 17,
    category: "charges",
    question: "Are there call-out visit charges if I decide not to proceed with the repair estimate?",
    answer: "Yes, we charge a nominal inspection and diagnostic visit fee of ₹299 to cover travel time, fuel, and diagnostic labor of our certified field tech. However, if you choose to proceed with any recommended repair or part swap, this inspection charge is entirely waived from your final invoice, saving you extra money."
  },
  {
    id: 18,
    category: "charges",
    question: "Why are high-pressure foam jet cleaning charges slightly higher than normal service?",
    answer: "Normal AC servicing involves a simple manual water wash. High-pressure jet cleaning uses specialized spray guns and eco-friendly chemical solvents to dissolve stubborn, compacted dust deep inside the coil fin structures. This deep flushes the unit, instantly boosting your airflow speed, lowering motor operating loads, and dropping electricity consumption by up to 25%."
  },

  // Category: gas (4 FAQs)
  {
    id: 19,
    category: "gas",
    question: "How do I identify if my split unit is experiencing a refrigerant gas leak?",
    answer: "Key signs of a gas leak include: warm air blowing from the blower, the AC running continuously without cooling, thin sheets of ice forming on indoor coils/outdoor valves, and slight clicking noises from copper joints. A simple pressure gauge reading on our visits will instantly confirm if the refrigerant levels have dropped below standard factory metrics."
  },
  {
    id: 20,
    category: "gas",
    question: "What is the difference between R22, R32, and R410A refrigeration gases?",
    answer: "R22 is an older hydrochlorofluorocarbon gas with high ozone-depleting properties, discontinued in new air conditioning systems. R410A is an eco-friendly blend commonly found in pre-2020 split units. R32 is a newer, highly efficient single-component refrigerant with 68% lower global warming potential. R32 requires careful handling due to mild flammability, which is why certified technicians are essential."
  },
  {
    id: 21,
    category: "gas",
    question: "Do technicians need to fix leaks before putting new gas inside copper tubes?",
    answer: "Absolutely. Refrigeration loops operate under extremely high pressure as a sealed system. Refilling gas without repairing the source leak is a temporary fix that wastes money, as the new gas will eventually escape. Our team performs dry Nitrogen pressure tests (up to 350 PSI) to find and braze the leak before vacuuming and refilling the system."
  },
  {
    id: 22,
    category: "gas",
    question: "Can AC refrigerant deteriorate or expire over several years of use?",
    answer: "No. Refrigerant gas is not fuel and does not expire, break down, or consume itself during normal operation. It continuously cycles between liquid and gas states. If your gas is low, it always indicates a leak in the copper u-bends or connecting flare nuts, which must be brazed or tightened to restore proper cooling."
  },

  // Category: amc (4 FAQs)
  {
    id: 23,
    category: "amc",
    question: "What does an AC Annual Maintenance Contract (AMC) plan generally cover?",
    answer: "Our premier AMC plan includes: two comprehensive high-pressure jet cleaning services, unlimited on-call troubleshooting dispatches throughout the contract year, free condenser coil flushing, and heavy discounts on capacitors, sensors, and labor rates. This offers a cost-effective solution for households, providing hassle-free cooling all summer long."
  },
  {
    id: 24,
    category: "amc",
    question: "Is booking an AMC plan cheaper than on-demand individual AC repairs?",
    answer: "Yes, definitely. On-demand servicing can quickly add up with separate diagnostic charges (₹299/visit), service fees (₹499), and repair labor. An AMC plan offers transparent, long-term savings by bundling yearly cleanings and emergency call-outs into a flat rate, paying for itself in a single season."
  },
  {
    id: 25,
    category: "amc",
    question: "Do AMC corporate plans cover expensive parts like PCBs and compressors?",
    answer: "Standard AMC plans cover deep high-pressure wash services, checkups, and labor for common part changes. We also offer Comprehensive AMC plans that cover critical elements like compressors, fan motors, and custom variable inverter PCBs. Contact our commercial team for a tailored quote based on your systems."
  },
  {
    id: 26,
    category: "amc",
    question: "How does the Priority dispatch mechanism work for AMC members during peak season?",
    answer: "During heat waves from May to June, local dispatch centers can face wait times of up to 48 hours. Our AMC members receive top priority with a dedicated fleet of backup technicians, ensuring an on-site arriving team within 2 to 4 hours of booking, even on peak weekends."
  },

  // Category: split (2 FAQs)
  {
    id: 27,
    category: "split",
    question: "Why is water dripping from my split indoor unit onto the wall?",
    answer: "Water dripping is typically caused by a clogged drain pipeline. Dirt, hair, and fungal growth form a thick paste inside the gravity-drain tray, blocking the exit channel. This causes water to overflow from the internal reservoir and leak down your wall. A quick, high-pressure jet wash flushes the drain line clean instantly."
  },
  {
    id: 28,
    category: "split",
    question: "What causes the split AC indoor unit fan to blow dusty air and trigger sneezing?",
    answer: "This is caused by mold and mildew growing on the damp indoor blower wheel and cooling coils. As cold air is generated, condensation forms on the internal components. This moisture attracts dust and hair, creating an ideal breeding ground for mold and allergens. A deep chemical jet service will sanitize these components, restoring clean, healthy air."
  },

  // Category: window (2 FAQs)
  {
    id: 29,
    category: "window",
    question: "Why does my window AC make loud rattling and vibration noises?",
    answer: "Window units house all components within a single cabinet. Rattling noises are typically caused by loose chassis mounting screws, a bent fan blade rubbing against inside wire channels, degraded rubber isolation pads on the compressor, or the outer metal sleeve making direct contact with your window frame. Tightening parts or adding rubber dampeners solves this vibration issue."
  },
  {
    id: 30,
    category: "window",
    question: "Why is water spilling from the back of my window AC onto the outside wall?",
    answer: "Unlike split units with dedicated drain lines, window ACs use a slinger ring on the outdoor fan to splash water onto the hot condenser coils, helping to dissipate heat. In humid weather, excess condensation can overflow from the bottom pan and drip out the rear. This is normal, but a small drain tube can be added to route the water safely if needed."
  }
];

export default function FaqHubPage() {
  const [activeCategory, setActiveCategory] = useState<"all" | "repair" | "installation" | "charges" | "gas" | "amc" | "split" | "window">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const filteredFaqs = faqData.filter(faq => {
    const matchesCategory = activeCategory === "all" || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const whatsappLink = "https://wa.me/917056330400?text=I%20have%20an%20AC%20repair%20question";

  // FAQ Page Dynamic Schema injection
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'faq-hub-schema';
    
    // Pick first 5 FAQs for the JSON Schema markup (to comply with schema guidelines)
    const schemaQuestions = faqData.slice(0, 5).map(f => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.answer
      }
    }));

    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": schemaQuestions
    });

    document.head.appendChild(script);

    return () => {
      const existing = document.getElementById('faq-hub-schema');
      if (existing) existing.remove();
    };
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen pt-32 pb-24 relative overflow-hidden">
      {/* Decorative accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Page Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-[0.2em] mb-4">
            <HelpCircle className="w-4 h-4 text-orange-500" />
            Interactive Knowledge Base
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-navy-950 tracking-tighter leading-none mb-6">
            AC Troubleshooting & <span className="text-orange-500">FAQ Hub</span>
          </h1>
          <p className="text-base md:text-lg text-slate-600 font-medium">
            Find answers to 30 of the most frequently asked questions about split air conditioners, gas leakage charging, installation layouts, and honest service pricing in Gurgaon.
          </p>
        </div>

        {/* Categories and Search Filters */}
        <div className="space-y-6 mb-12">
          {/* Search box */}
          <div className="relative">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search through 30 detailed expert answers... (e.g. Capacitor, Gas, Leak, Pricing)"
              className="w-full bg-white border border-slate-100 text-slate-700 font-medium pl-14 pr-6 py-5 rounded-3xl shadow-md placeholder-slate-400 focus:outline-none focus:border-orange-500/50"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 justify-center">
            {[
              { id: "all", label: "All Questions" },
              { id: "repair", label: "AC Repair" },
              { id: "installation", label: "Installation" },
              { id: "charges", label: "Service Charges" },
              { id: "gas", label: "Gas Fitting" },
              { id: "amc", label: "yearly AMC Plans" },
              { id: "split", label: "Split ACs" },
              { id: "window", label: "Window ACs" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id as any)}
                className={`px-4 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all border ${
                  activeCategory === tab.id
                    ? 'bg-orange-500 border-orange-500 text-white shadow-lg shadow-orange-500/20'
                    : 'bg-white border-slate-100 text-slate-600 hover:bg-slate-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4 mb-20">
          <AnimatePresence mode="popLayout">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, index) => {
                const isExpanded = expandedId === faq.id;
                return (
                  <motion.div 
                    key={faq.id}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className={`bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow ${
                      isExpanded ? 'ring-2 ring-orange-500/10' : ''
                    }`}
                  >
                    <button
                      onClick={() => toggleExpand(faq.id)}
                      className="w-full text-left p-6 md:p-8 flex justify-between items-center gap-6 font-black text-navy-950 text-sm md:text-base cursor-pointer"
                    >
                      <span className="flex items-start gap-4">
                        <span className="text-orange-500 font-extrabold text-xs bg-orange-50 px-3 py-1 rounded-lg uppercase tracking-wider h-fit shrink-0">
                          {faq.category}
                        </span>
                        <span className="leading-tight">{faq.question}</span>
                      </span>
                      {isExpanded ? (
                        <ChevronUp className="w-5 h-5 text-orange-500 shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                      )}
                    </button>
                    
                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                        >
                          <div className="px-6 pb-8 md:px-8 md:pb-10 border-t border-slate-50/50 pt-5 text-slate-600 leading-relaxed font-medium text-sm md:text-base space-y-4">
                            <p>{faq.answer}</p>
                            <div className="flex items-center gap-2 text-xs font-black text-slate-400 uppercase tracking-widest pt-2">
                              <CheckCircle2 className="w-4 h-4 text-green-500" />
                              <span>Verified FAQ Guide (E-E-A-T Compliant)</span>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })
            ) : (
              <div className="text-center py-12 bg-white rounded-3xl border border-slate-100 shadow-sm">
                <p className="text-slate-500 font-bold mb-2">No matching questions found.</p>
                <p className="text-slate-400 text-xs">Try adjusting your search query or flipping back to 'All Questions'.</p>
              </div>
            )}
          </AnimatePresence>
        </div>

        {/* Bottom CTA Card */}
        <div className="bg-navy-900 text-white rounded-[3rem] p-8 md:p-14 border border-navy-950 relative overflow-hidden shadow-2xl">
          <div className="absolute right-0 bottom-0 w-64 h-64 bg-orange-500/10 rounded-full blur-[80px] pointer-events-none"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-10">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.25em] text-orange-400 mb-2 block">Still have queries unresolved?</span>
              <h3 className="text-2xl md:text-4xl font-black mb-4 tracking-tight">Direct Consult With Our HVAC Engineer</h3>
              <p className="text-sm text-slate-400 max-w-xl font-semibold leading-relaxed">Our support desk is directly monitored by senior certified appliance inspectors. Speak on call or message us on WhatsApp to solve sizing guides and get immediate expert answers.</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full md:w-auto">
              <a 
                href="tel:+917056330400"
                className="bg-white text-navy-950 p-4 rounded-xl font-bold text-center flex items-center justify-center gap-2 border border-slate-100 hover:bg-slate-50 relative overflow-hidden"
              >
                <Phone className="w-4 h-4 text-orange-500" />
                Call Expert Support
              </a>
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="orange-gradient text-white p-4 rounded-xl font-bold text-center flex items-center justify-center gap-2 transform active:scale-95 transition-transform"
              >
                <MessageCircle className="w-4 h-4" />
                Message WhatsApp
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
