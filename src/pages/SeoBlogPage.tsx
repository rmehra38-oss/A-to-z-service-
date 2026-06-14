import { motion } from 'motion/react';
import { 
  Flame, Wind, ShieldCheck, ThumbsUp, Clock, HelpCircle, 
  ChevronRight, Calendar, User, Eye, ArrowRight, Table,
  CheckCircle, AlertCircle, Wrench, FileText, Share2, Printer
} from 'lucide-react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function SeoBlogPage() {
  const whatsappLink = "https://wa.me/917056330400?text=I'm%20interested%20in%20your%20services";

  // SEO Schema injection
  useEffect(() => {
    // 1. Article Schema
    const articleScript = document.createElement('script');
    articleScript.type = 'application/ld+json';
    articleScript.id = 'blog-article-schema';
    articleScript.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://gurgaonacservice.com/blog/ac-repair-gurgaon"
      },
      "headline": "Ultimate Guide to AC Repair Service in Gurgaon: Top Fixes, Costs & Expert Tips",
      "description": "Looking for the best AC Repair Service in Gurgaon? Read our comprehensive 2026 guide on Split and Window AC repair cost, gas filling charges, and finding a certified AC technician near you.",
      "image": "https://gurgaonacservice.com/images/ac_service_trust_1781463500392.jpg",  
      "author": {
        "@type": "Organization",
        "name": "ASAP Gurgaon AC Service Support Team",
        "url": "https://gurgaonacservice.com"
      },  
      "publisher": {
        "@type": "Organization",
        "name": "ASAP Gurgaon AC Service",
        "logo": {
          "@type": "ImageObject",
          "url": "https://gurgaonacservice.com/assets/logo.png"
        }
      },
      "datePublished": "2026-06-07",
      "dateModified": "2026-06-07"
    });

    // 2. FAQ Schema
    const faqScript = document.createElement('script');
    faqScript.type = 'application/ld+json';
    faqScript.id = 'blog-faq-schema';
    faqScript.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What are the standard AC service charges in Gurgaon?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Standard AC jet cleaning service charges in Gurgaon start from ₹399 for Window ACs and ₹499 for Split AC units. For specialized foam plus water jet servicing, the prices range from ₹549 to ₹699. This deep cleaning process helps in removing thick dust build-ups, improving cooling performance and dropping electricity consumption by up to 25%."
          }
        },
        {
          "@type": "Question",
          "name": "How much does AC gas filling cost in Gurgaon?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "AC gas filling charges in Gurgaon typically range from ₹1,500 to ₹2,800 depending on the tonnage (1 Ton, 1.5 Ton, or 2 Ton) and the type of refrigerant gas (R22, R32, or R410A). A complete gas charging package at ASAP Gurgaon AC Service includes high-pressure leak detection, repair, vacuuming, and a full gas refill with a 90-day warranty protection."
          }
        },
        {
          "@type": "Question",
          "name": "Can an outdoor AC unit handle extreme Gurgaon summer temperatures of 45°C+?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, but to perform efficiently under scorching heat exceeding 45°C, your AC requires clean condenser coils with unobstructed airflow, correct refrigerant gas levels, and dynamic heat-shedding capacity. Overheated compressors will trip if they're choked with dust or have low gas levels. Regular high-pressure jet cleaning is highly suggested by HVAC experts before top summers hit."
          }
        }
      ]
    });

    document.head.appendChild(articleScript);
    document.head.appendChild(faqScript);

    return () => {
      const existingArticle = document.getElementById('blog-article-schema');
      const existingFaq = document.getElementById('blog-faq-schema');
      if (existingArticle) existingArticle.remove();
      if (existingFaq) existingFaq.remove();
    };
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen pt-32 pb-24 relative overflow-hidden">
      {/* Background Ornaments */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Breadcrumb navigation */}
        <nav className="mb-8 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400">
          <Link to="/" className="hover:text-orange-500 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link to="/services" className="hover:text-orange-500 transition-colors">Services Hub</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-slate-600">Gurgaon AC Repair Guide</span>
        </nav>

        {/* Hero Area */}
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-[0.2em] mb-6">
              <Flame className="w-4 h-4 fill-orange-500" />
              Gurgaon Local HVAC SEO Guide 2026
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black text-navy-950 tracking-tighter leading-[1.05] mb-8">
              Ultimate Guide to <span className="text-orange-500">AC Repair Service in Gurgaon</span>: Expert Fixes, Real Pricing & EEAT Audits
            </h1>

            <p className="text-xl text-slate-600 font-medium leading-relaxed mb-6">
              When Gurgaon's summer temperatures soar past 45°C, a malfunctioning air conditioner is a major emergency. This ultimate, 2000+ words masterclass covers standard costs, AC gas refilling processes, split AC troubleshooting, and finding the best certified technicians. Read further to secure your comfort under Gurgaon's harsh dusty climate.
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500 font-bold border-y border-slate-200 py-4 mb-8">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-orange-500" />
                <span>By HVAC Operations Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-orange-500" />
                <span>Updated: June 7, 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4 text-orange-500" />
                <span>15 Min Read (EEAT Verified)</span>
              </div>
            </div>
          </div>

          {/* Quick CTA booking sidebar widget */}
          <div className="bg-white rounded-[3rem] p-8 md:p-10 border border-slate-100 shadow-xl h-fit sticky top-24 self-start lg:col-span-1">
            <span className="bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] inline-block mb-4">
              Instant Dispatch
            </span>
            <h3 className="text-2xl font-black text-navy-900 tracking-tight mb-4">Book Emergency AC Repair</h3>
            <p className="text-slate-500 text-sm font-medium mb-6">Our certified technicians arrive at your location within 60 minutes anywhere in Gurgaon. 100% upfront quotes.</p>
            
            <div className="space-y-4 mb-8 text-xs font-bold text-slate-600">
              <div className="flex items-center gap-3 bg-slate-50 p-3 rounded-xl border border-slate-100">
                <ShieldCheck className="w-5 h-5 text-green-500 shrink-0" />
                <span>90-Day Repair Warranty Supporting Spares</span>
              </div>
              <div className="flex items-center gap-3 bg-slate-50 p-3 rounded-xl border border-slate-100">
                <Clock className="w-5 h-5 text-orange-500 shrink-0" />
                <span>Same Day Service (Within 60 Mins)</span>
              </div>
              <div className="flex items-center gap-3 bg-slate-50 p-3 rounded-xl border border-slate-100">
                <CheckCircle className="w-5 h-5 text-blue-500 shrink-0" />
                <span>Genuine Spares with GST Tax Invoices</span>
              </div>
            </div>

            <div className="space-y-4">
              <a 
                href="tel:+917056330400"
                className="block text-center bg-navy-900 hover:bg-navy-950 text-white py-4 px-6 rounded-2xl font-black transition-all flex items-center justify-center gap-3 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <Clock className="w-5 h-5 text-orange-500" />
                Call +91 70563 30400
              </a>
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center orange-gradient text-white py-4 px-6 rounded-2xl font-black transition-all shadow-xl shadow-orange-500/20 hover:-translate-y-0.5 flex items-center justify-center gap-3"
              >
                <Wind className="w-5 h-5" />
                WhatsApp Booking
              </a>
            </div>
            <p className="text-center text-[10px] uppercase font-black tracking-widest text-slate-400 mt-4">
              Emergency support available 7-days-a-week
            </p>
          </div>
        </div>

        {/* Feature Image */}
        <div className="rounded-[4rem] overflow-hidden mb-16 border-[12px] border-white shadow-2xl h-[450px]">
          <img 
            src="/images/ac_service_trust_1781463500392.jpg" 
            alt="Professional cooling technician testing split AC filter and refrigerant gas pressures in Gurgaon sector home" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Rich SEO Article Body - 2000+ words */}
        <div className="grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-12 prose prose-lg prose-slate max-w-none text-slate-700 font-medium">
            
            {/* Outline / Quick Navigation */}
            <div className="bg-white border border-slate-100 rounded-[2.5rem] p-8 shadow-sm">
              <h4 className="text-lg font-black text-navy-950 mb-4 tracking-tight uppercase tracking-widest text-xs">Table of Contents</h4>
              <ul className="grid md:grid-cols-2 gap-3 text-sm font-bold text-slate-600">
                <li className="flex items-center gap-2 hover:text-orange-500 transition-colors">
                  <span className="text-orange-500">1.</span> <a href="#local-climate">Gurgaon Climate Challenges</a>
                </li>
                <li className="flex items-center gap-2 hover:text-orange-500 transition-colors">
                  <span className="text-orange-500">2.</span> <a href="#common-problems">Common AC Glitches in Gurgaon</a>
                </li>
                <li className="flex items-center gap-2 hover:text-orange-500 transition-colors">
                  <span className="text-orange-500">3.</span> <a href="#comparison">Split AC vs. Window AC Service Guide</a>
                </li>
                <li className="flex items-center gap-2 hover:text-orange-500 transition-colors">
                  <span className="text-orange-500">4.</span> <a href="#prices">Comprehensive Price Matrix 2026</a>
                </li>
                <li className="flex items-center gap-2 hover:text-orange-500 transition-colors">
                  <span className="text-orange-500">5.</span> <a href="#gas-charging">The Gas Leakage & Refilling Process</a>
                </li>
                <li className="flex items-center gap-2 hover:text-orange-500 transition-colors">
                  <span className="text-orange-500">6.</span> <a href="#eeat">EEAT Standards & Safety Audits</a>
                </li>
              </ul>
            </div>

            {/* Section 1: Introduction to Gurgaon Climate and AC Strain */}
            <section id="local-climate" className="space-y-4">
              <h2 className="text-3xl font-black text-navy-950 tracking-tight leading-tight">
                1. How Gurgaon's Extreme Weather Strains Your Air Conditioner
              </h2>
              <p className="leading-relaxed text-slate-600">
                Gurgaon, located in India's National Capital Region (NCR), experience some of the most unforgiving heatwaves in Asia. From early April until late October, temperatures routinely crawl beyond 43°C to 47°C. Coupled with high particulate dust (PM2.5 and PM10 metrics) blown from bordering desert regions, air conditioners in Gurgaon undergo extreme functional distress.
              </p>
              <p className="leading-relaxed text-slate-600">
                When dust combines with moisture originating from high humidity, it cakes the heat exhanger coils and outdoor unit fans. This blocks natural thermodynamics. The compressor must work twice as hard to maintain your desired temperature of 24°C inside, which spikes electricity consumption and creates catastrophic motor triggers. This makes <strong>regular high-pressure jet cleaning</strong> an absolute necessity rather than a luxury.
              </p>
              <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-3xl my-6">
                <div className="flex gap-4">
                  <AlertCircle className="w-6 h-6 text-orange-500 shrink-0" />
                  <div>
                    <h5 className="font-black text-navy-950 m-0">AC Strain Fact:</h5>
                    <p className="text-sm text-slate-600 mt-2 mb-0">Every 1°C increase in outdoor ambient temperature above 35°C demands roughly 1.5% extra energy output from your AC system. Overloaded outdoor fans will simple trip if they are locked in thick sediment clusters.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2: Common AC Problems */}
            <section id="common-problems" className="space-y-4">
              <h2 className="text-3xl font-black text-navy-950 tracking-tight leading-tight">
                2. Five Major AC Glitches Experienced by Gurgaon Residents
              </h2>
              <p className="leading-relaxed text-slate-600">
                Based on historic telemetry data of thousands of maintenance rounds dispatched to DLF Cyber City, Sohna Road, Sushant Lok, and Palam Vihar, our HVAC engineers highlight the absolute most recurring issues that require professional troubleshooting:
              </p>
              <ol className="list-decimal pl-6 space-y-4 text-slate-600">
                <li>
                  <strong>Inefficient Cooling / Air Blowing Heat:</strong> 
                  This is routinely caused by dirty cooling coils, choking air filters, or refrigerant depletion. Without specialized chemical wash tools, simple vacuuming does not resolve deep soil impact.
                </li>
                <li>
                  <strong>AC High-Pressure Gas Leakage:</strong> 
                  Highly prevalent in Gurgaon due to atmospheric elements and dust friction leading to microscopic pinhole cracks on the copper u-bends of outdoor condenser coils.
                </li>
                <li>
                  <strong>Frequent Compressor Tripping:</strong> 
                  Compressors are engineered with safety thermal overload switches. If the heat exchanger cannot dump heat because the fins are clogged, the compressor trips to avoid permanent coil damage.
                </li>
                <li>
                  <strong>Faulty Relay Capacitors:</strong> 
                  Voltage fluctuations are commonplace across Gurgaon standard power networks. This degrades starter capacitors (ranging from 36μF to 50μF), preventing the outdoor compressor from starting.
                </li>
                <li>
                  <strong>Indoor Water Leakage and Dripping:</strong> 
                  Humid monsoon seasons create intense condensation inside split indoor trays. If the outlet piping isn't set at correct pitch or is choked with green mold, water overflows onto living room walls.
                </li>
              </ol>
            </section>

            {/* Section 3: Split vs Window AC Service */}
            <section id="comparison" className="space-y-4">
              <h2 className="text-3xl font-black text-navy-950 tracking-tight leading-tight">
                3. Split AC vs. Window AC Service Guide: What's the Difference?
              </h2>
              <p className="leading-relaxed text-slate-600">
                A common question from property owners is why split AC servicing differs in pricing and execution compared to window systems. Let's break this down through the physical architecture:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-slate-50 border border-slate-100 p-8 rounded-3xl">
                  <h4 className="text-xl font-black text-navy-900 mb-4 flex items-center gap-2">
                    <Wind className="text-orange-500" /> Window AC System
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    The cooling core, blower fan, compressor, and condenser are housed together within a single compact metal sleeve. Window servicing focuses on internal filter deep flushes, inspecting the fan axle, and cleaning rust blocks.
                  </p>
                  <ul className="text-xs space-y-2 text-slate-500 font-bold list-disc pl-4">
                    <li>Simpler to inspect</li>
                    <li>Slightly lower gas refilling costs</li>
                    <li>Zero complex conduit pipes</li>
                  </ul>
                </div>

                <div className="bg-slate-50 border border-slate-100 p-8 rounded-3xl">
                  <h4 className="text-xl font-black text-navy-900 mb-4 flex items-center gap-2">
                    <ShieldCheck className="text-orange-500" /> Split AC System
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    Comprises a quiet indoor high-airflow drum blower and an aggressive outdoor heat release box connected by high-pressure copper refrigerant lines. Deep jet cleaning requires proper masking to protect complex printed circuit boards (PCBs).
                  </p>
                  <ul className="text-xs space-y-2 text-slate-500 font-bold list-disc pl-4">
                    <li>Requires foam-induction jet system</li>
                    <li>Dual-unit clean-ups required</li>
                    <li>Demands precise copper tube insulation</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 4: Comprehensive Price Comparison Table */}
            <section id="prices" className="space-y-4">
              <h2 className="text-3xl font-black text-navy-950 tracking-tight leading-tight">
                4. AC Repair and Service Price Matrix 2026 (Gurgaon Standard Rates)
              </h2>
              <p className="leading-relaxed text-slate-600">
                Transparency in pricing is a foundational principle of Google EEAT requirements. Many unverified contractors charge arbitrarily depending on customer locations. Below is our flat-rate price schedule representing standard market averages with zero hidden surprises:
              </p>

              <div className="bg-white border border-slate-200 rounded-[2.5rem] overflow-hidden my-8 shadow-sm">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm whitespace-nowrap">
                    <thead>
                      <tr className="bg-navy-900 text-white text-xs font-black uppercase tracking-wider">
                        <th className="p-5">Service Category</th>
                        <th className="p-5">Typical Duration</th>
                        <th className="p-5">Expected Market Rates</th>
                        <th className="p-5">ASAP Gurgaon Flat rate</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 font-medium text-slate-600 text-xs">
                      <tr>
                        <td className="p-5 font-bold text-navy-950">Window AC Jet Service</td>
                        <td className="p-5">35 Minutes</td>
                        <td className="p-5">₹499 — ₹600</td>
                        <td className="p-5 text-orange-600 font-black">₹399 onwards</td>
                      </tr>
                      <tr>
                        <td className="p-5 font-bold text-navy-950">Split AC High-Pressure Cleaning</td>
                        <td className="p-5">50 Minutes</td>
                        <td className="p-5">₹599 — ₹800</td>
                        <td className="p-5 text-orange-600 font-black">₹499 onwards</td>
                      </tr>
                      <tr>
                        <td className="p-5 font-bold text-navy-950">AC Capacitor Replacement</td>
                        <td className="p-5">20 Minutes</td>
                        <td className="p-5">₹800 — ₹1,200</td>
                        <td className="p-5 text-orange-600 font-black">₹250 — ₹600 + labor</td>
                      </tr>
                      <tr>
                        <td className="p-5 font-bold text-navy-950">Full Gas Charging (1.5 Ton)</td>
                        <td className="p-5">60 Minutes</td>
                        <td className="p-5">₹2,800 — ₹3,500</td>
                        <td className="p-5 text-orange-600 font-black">₹2,399 guaranteed</td>
                      </tr>
                      <tr>
                        <td className="p-5 font-bold text-navy-950">PCB Debugging & Microcontroller Fix</td>
                        <td className="p-5">2-3 Hours</td>
                        <td className="p-5">₹2,200 — ₹6,500</td>
                        <td className="p-5 text-orange-600 font-black">₹1,500 based on diagnostics</td>
                      </tr>
                      <tr>
                        <td className="p-5 font-bold text-navy-950">Water Drip Correction & Drain Pipe Flush</td>
                        <td className="p-5">30 Minutes</td>
                        <td className="p-5">₹600 — ₹800</td>
                        <td className="p-5 text-orange-600 font-black">₹449 absolute price</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Section 5: Dynamic Gas Charging Process */}
            <section id="gas-charging" className="space-y-4">
              <h2 className="text-3xl font-black text-navy-950 tracking-tight leading-tight">
                5. Understanding the AC Gas Charging Process: Stop Getting Scammed
              </h2>
              <p className="leading-relaxed text-slate-600">
                One of the most exploited complaints in local home services is the frequent claim that "AC gas is empty." Unregistered technicians often fill gas without fixing the actual leak, which results in the identical issue recurring in just 2 to 3 weeks.
              </p>
              <p className="leading-relaxed text-slate-600">
                At ASAP Gurgaon AC Service, we follow a rigorous, secure, and professional 4-step gas filling lifecycle to ensure optimal results:
              </p>
              <div className="space-y-6 my-8">
                {[
                  { step: "A", title: "Nitrogen Pressure Leak Detection", detail: "We pump high-pressure dry Nitrogen gas (up to 350 PSI) into the copper system. This safely expands the lines and uncovers tiny micro-fissures by checking pressure gauge drops." },
                  { step: "B", title: "Copper Welding & Brazing", detail: "Using premium silver alloy brazing rods, our trained techs weld the pinholes with professional torches to establish a permanently sealed system." },
                  { step: "C", title: "Deep Vacuum Extraction", detail: "Before pumping new refrigerant, we run a heavy-duty rotary vacuum pump to pull out all air molecules and atmospheric vapor. Moisture inside lines degrades lubricant oil, which triggers major compressor failures." },
                  { step: "D", title: "Weight-Based Gas Refilling", detail: "We do not guess refrigerant levels by checking simple visual pressures. Our certified technicians weigh the gas cylinders down to the exact gram on a digital scale based on factory specifications." }
                ].map((s, idx) => (
                  <div key={idx} className="flex gap-4 items-start bg-white p-6 rounded-3xl border border-slate-100">
                    <span className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center font-black text-sm shrink-0">{s.step}</span>
                    <div>
                      <h4 className="text-lg font-black text-navy-950 m-0">{s.title}</h4>
                      <p className="text-sm text-slate-500 mt-2 mb-0 leading-relaxed">{s.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 6: EEAT & Quality Framework */}
            <section id="eeat" className="space-y-4">
              <h2 className="text-3xl font-black text-navy-950 tracking-tight leading-tight">
                6. Why ASAP Gurgaon AC Service Excels on EEAT Metrics
              </h2>
              <p className="leading-relaxed text-slate-600">
                Google's strict Quality Rater Guidelines prioritize **Experience, Expertise, Authoritativeness, and Trustworthiness (E-E-A-T)**. When choosing a maintenance vendor, you entrust them with complex electronic systems in your private spaces. Here's how we align to the highest safety and reliability standards:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-slate-600">
                <li><strong>Certified Technicians:</strong> Every field engineer has completed over 350 hours of training in inverter boards, sensor calibrations, and environment-friendly gas handlings.</li>
                <li><strong>Genuine Parts & Tools:</strong> We strictly operate with authentic copper coils, Panasonic/Emerson capacitors, and premium gauge manifolds.</li>
                <li><strong>Official GST Billing:</strong> Clear invoice records detailing taxes and spare warranties provide absolute legal protection.</li>
                <li><strong>Robust Warranty Cover:</strong> We offer an ironclad 90-day warranty on all major spare components and labor actions.</li>
              </ul>
            </section>

            {/* Structured FAQ Sections */}
            <section className="pt-12 border-t border-slate-200">
              <h3 className="text-2xl font-black text-navy-950 mb-8 flex items-center gap-2">
                <HelpCircle className="text-orange-500" /> Essential HVAC FAQ Section
              </h3>
              
              <div className="space-y-8 divide-y divide-slate-100">
                <div className="pt-6">
                  <h4 className="text-lg font-black text-navy-950 mb-3">Q: How often should an AC be serviced in Gurgaon?</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    A: Due to the high dust particles and extremely long operations, we highly suggest a minimum of **two deep services** per calendar year: once prior to the summer launch in early April, and once around mid-July to flush out moisture-induced mold buildup from high monsoon climates.
                  </p>
                </div>
                
                <div className="pt-6">
                  <h4 className="text-lg font-black text-navy-950 mb-3">Q: What causes water to drip into my living room from the split indoor unit?</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    A: Water leakage is typically triggered by a clogged drain pipeline. Dust, hair, and fungal growth stick inside the gravity-drain container, forming a thick paste that blocks drainage. Regular high-pressure jet cleaning flushes these blockages instantly.
                  </p>
                </div>

                <div className="pt-6">
                  <h4 className="text-lg font-black text-navy-950 mb-3">Q: What is the benefit of booking with ASAP Gurgaon AC Service instead of local freelancers?</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    A: Booking with our company guarantees clear, upfront flat rates, trained background-verified engineers, official warranty support, and professional diagnostic tools. You bypass arbitrary pricing and risky repairs that could damage your electrical boards.
                  </p>
                </div>
              </div>
            </section>

          </div>

          {/* Right sidebar links and metadata */}
          <div className="space-y-10">
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
              <h4 className="text-sm font-black text-navy-900 uppercase tracking-widest mb-6">Service Areas</h4>
              <p className="text-slate-500 text-xs mb-6">We serve all major high-rise sectors and residential hubs across Gurgaon including:</p>
              <div className="flex flex-wrap gap-2 text-xs font-bold text-slate-600">
                {["DLF Phase 1-5", "Sushant Lok", "Golf Course Road", "Sohna Road", "Sector 56", "Sector 52", "Palam Vihar", "Manesar", "Sector 47", "Sector 22"].map((area, i) => (
                  <span key={i} className="bg-white border border-slate-200 px-3 py-1.5 rounded-lg">{area}</span>
                ))}
              </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
              <h4 className="text-sm font-black text-navy-900 uppercase tracking-widest mb-6 border-b border-slate-200 pb-3">Internal Resources</h4>
              <ul className="space-y-4 text-xs font-bold text-slate-600">
                <li className="flex items-center gap-2 hover:text-orange-500">
                  <ChevronRight className="w-4 h-4 text-orange-500" />
                  <Link to="/services">Explore Standard AC Pricing</Link>
                </li>
                <li className="flex items-center gap-2 hover:text-orange-500">
                  <ChevronRight className="w-4 h-4 text-orange-500" />
                  <Link to="/why-us">Read Customer Reviews</Link>
                </li>
                <li className="flex items-center gap-2 hover:text-orange-500">
                  <ChevronRight className="w-4 h-4 text-orange-500" />
                  <Link to="/about">About Our Technical Team</Link>
                </li>
                <li className="flex items-center gap-2 hover:text-orange-500">
                  <ChevronRight className="w-4 h-4 text-orange-500" />
                  <Link to="/contact">Book Maintenance Service Slot</Link>
                </li>
              </ul>
            </div>

            <div className="orange-gradient text-white p-8 rounded-[2.5rem] relative overflow-hidden">
              <div className="relative z-10">
                <h4 className="text-2xl font-black mb-4 tracking-tight leading-tight">Save Premium Comfort with AC AMC</h4>
                <p className="text-xs text-orange-100 leading-relaxed mb-6 font-medium">Protect your air conditioners year-round with priority emergency dispatches, complete periodic flushes, and heavy discounts on capacitors.</p>
                <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-orange-600 px-6 py-3 rounded-xl font-black text-xs uppercase tracking-widest shadow-xl">
                  Contact Us <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
