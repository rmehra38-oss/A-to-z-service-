import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { 
  Shield, Lock, Eye, CheckCircle2, RefreshCw, 
  Phone, Mail, MapPin, Printer, ArrowLeft, 
  FileText, AlertCircle, ExternalLink, ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const policySections = [
  { id: "business-identity", title: "1. Business Identity & Scope" },
  { id: "info-collected", title: "2. Information We Collect" },
  { id: "purpose-of-use", title: "3. How We Use Your Information" },
  { id: "google-ads", title: "4. Google Ads & Cookie Disclosure" },
  { id: "data-sharing", title: "5. Zero Data Reselling & Sharing" },
  { id: "security-retention", title: "6. Security & Data Retention" },
  { id: "user-rights", title: "7. Your Rights & Data Deletion" },
  { id: "children-privacy", title: "8. Children's Privacy" },
  { id: "grievance-contact", title: "9. Grievance Redressal & Contact" },
];

export default function PrivacyPolicyPage() {
  const [activeSection, setActiveSection] = useState("business-identity");

  useEffect(() => {
    document.title = "Privacy Policy | ASAP Gurgaon AC Service";
    window.scrollTo(0, 0);
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="pt-36 md:pt-44 pb-24 bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center space-x-2 text-xs font-black uppercase tracking-wider text-slate-400">
            <li>
              <Link to="/" className="hover:text-orange-500 transition-colors flex items-center gap-1">
                <ArrowLeft className="w-3.5 h-3.5" /> Home
              </Link>
            </li>
            <li><span>/</span></li>
            <li className="text-slate-600">Legal</li>
            <li><span>/</span></li>
            <li className="text-orange-600">Privacy Policy</li>
          </ol>
        </nav>

        {/* Header Hero */}
        <div className="bg-white rounded-3xl md:rounded-[2.5rem] p-8 md:p-14 shadow-xl border border-slate-100 relative overflow-hidden mb-12">
          <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200/60 px-4 py-2 rounded-2xl">
              <Shield className="w-4 h-4 text-orange-600" />
              <span className="text-xs font-black uppercase tracking-widest text-orange-600">
                Google Ads & DPDP Act Compliant
              </span>
            </div>
            
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 transition-colors"
              title="Print or Save PDF"
            >
              <Printer className="w-4 h-4 text-slate-700" />
              <span>Print / Save as PDF</span>
            </button>
          </div>

          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-navy-950 mb-4 tracking-tight"
          >
            Privacy <span className="text-orange-500">Policy</span>
          </motion.h1>

          <p className="text-slate-500 text-sm md:text-base font-semibold max-w-3xl mb-6 leading-relaxed">
            This Privacy Policy describes how <strong>ASAP GURGAON AC & APPLIANCE SERVICE</strong> collects, uses, protects, and handles personal data when you browse our website, book repair services, or interact with our advertisements across Gurgaon, Haryana.
          </p>

          <div className="flex flex-wrap items-center gap-6 text-xs text-slate-400 font-bold border-t border-slate-100 pt-6">
            <div><strong>Effective Date:</strong> January 1, 2024</div>
            <div>•</div>
            <div><strong>Last Reviewed & Updated:</strong> June 6, 2026</div>
            <div>•</div>
            <div><strong>Applicability:</strong> All Gurgaon Doorstep Service Bookings</div>
          </div>
        </div>

        {/* Quick Highlights / Executive Summary Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm">
            <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center mb-4">
              <Lock className="w-5 h-5 text-emerald-600" />
            </div>
            <h2 className="font-black text-navy-950 text-base mb-1">Zero Data Sale</h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              We never sell, rent, monetize, or trade your phone number, address, or email to third-party brokers.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm">
            <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
              <MapPin className="w-5 h-5 text-blue-600" />
            </div>
            <h2 className="font-black text-navy-950 text-base mb-1">Doorstep Dispatch</h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              Your location is shared solely with the certified technician assigned to inspect or service your appliance.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm">
            <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center mb-4">
              <RefreshCw className="w-5 h-5 text-orange-600" />
            </div>
            <h2 className="font-black text-navy-950 text-base mb-1">Transparent Ads</h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              We use Google Ads and Analytics cookies responsibly. You can opt out of personalized tracking anytime.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm">
            <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center mb-4">
              <Shield className="w-5 h-5 text-purple-600" />
            </div>
            <h2 className="font-black text-navy-950 text-base mb-1">Right to Erasure</h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              You retain complete ownership over your data. Request permanent deletion of records with one call or email.
            </p>
          </div>
        </div>

        {/* Content Layout with Sidebar Navigation */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Table of Contents Sticky Sidebar */}
          <aside className="hidden lg:block lg:col-span-4 sticky top-28 bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100">
              <FileText className="w-4 h-4 text-orange-600" />
              <span className="text-xs font-black uppercase tracking-wider text-navy-950">Table of Contents</span>
            </div>
            <nav className="space-y-1">
              {policySections.map((sec) => (
                <a
                  key={sec.id}
                  href={`#${sec.id}`}
                  onClick={() => setActiveSection(sec.id)}
                  className={`block px-3 py-2 rounded-xl text-xs font-bold transition-colors ${
                    activeSection === sec.id 
                      ? 'bg-orange-50 text-orange-600 font-black' 
                      : 'text-slate-600 hover:text-orange-600 hover:bg-slate-50'
                  }`}
                >
                  {sec.title}
                </a>
              ))}
            </nav>

            <div className="mt-6 pt-6 border-t border-slate-100 bg-slate-50 p-4 rounded-2xl">
              <p className="text-[11px] font-bold text-slate-500 mb-2">Have questions about your data?</p>
              <a 
                href="tel:+917056330400"
                className="text-xs font-black text-orange-600 flex items-center gap-1.5 hover:underline"
              >
                <Phone className="w-3.5 h-3.5" /> +91 70563 30400
              </a>
            </div>
          </aside>

          {/* Main Legal Clauses */}
          <main className="lg:col-span-8 bg-white p-8 md:p-12 rounded-3xl border border-slate-200/80 shadow-sm space-y-12 text-slate-700 text-sm md:text-base leading-relaxed">
            
            {/* Section 1 */}
            <section id="business-identity" className="scroll-mt-32">
              <div className="flex items-center gap-2.5 mb-4 text-orange-600 font-black text-xs uppercase tracking-widest">
                <Shield className="w-4 h-4" /> Section 1
              </div>
              <h2 className="text-2xl font-black text-navy-950 mb-4 tracking-tight">
                1. Business Identity & Scope
              </h2>
              <p className="mb-4">
                This Privacy Policy is issued by <strong>ASAP GURGAON AC & APPLIANCE SERVICE</strong> (referred to herein as "we", "us", "our", or "the Service"), having our principal workshop at <em>Shop 6, Sector 52 Market, Gurgaon, Haryana 122003, India</em>.
              </p>
              <p className="mb-4">
                We operate the website reachable at domain endpoints representing ASAP Gurgaon AC Service, offering on-demand doorstep repair, jet cleaning, gas charging, spare replacement, and annual maintenance contracts (AMC) for air conditioners, refrigerators, washing machines, microwaves, and geysers across the Gurgaon National Capital Region (NCR).
              </p>
              <p className="bg-slate-50 p-4 rounded-2xl border border-slate-100 text-xs md:text-sm text-slate-600 font-medium">
                <strong>Legal Framework:</strong> This policy is formulated in compliance with the Information Technology Act, 2000 (and associated Reasonable Security Practices Rules), the Digital Personal Data Protection Act (DPDP), and Google's Advertising and Third-Party Compliance policies.
              </p>
            </section>

            {/* Section 2 */}
            <section id="info-collected" className="scroll-mt-32 border-t border-slate-100 pt-8">
              <div className="flex items-center gap-2.5 mb-4 text-orange-600 font-black text-xs uppercase tracking-widest">
                <Eye className="w-4 h-4" /> Section 2
              </div>
              <h2 className="text-2xl font-black text-navy-950 mb-4 tracking-tight">
                2. Information We Collect
              </h2>
              <p className="mb-4">
                We only collect information that is strictly necessary to schedule, confirm, execute, and guarantee appliance repair services at your residential or commercial property in Gurgaon.
              </p>
              
              <div className="space-y-4">
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <h3 className="font-black text-navy-950 text-sm mb-1">A. Personal Identification & Contact Details</h3>
                  <p className="text-xs md:text-sm text-slate-600">
                    When you call our helpline (+91 70563 30400), submit an inquiry form, or message via WhatsApp, we collect your name, phone number, and optionally your email address for invoicing.
                  </p>
                </div>

                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <h3 className="font-black text-navy-950 text-sm mb-1">B. Service Location & Appliance Details</h3>
                  <p className="text-xs md:text-sm text-slate-600">
                    Your residential or office address in Gurgaon (e.g. DLF Phase 1-5, Sohna Road, Golf Course Road, Sector 56, etc.), appliance category, brand/model (e.g., Daikin 1.5 Ton Split AC, Samsung Double Door Refrigerator), and the nature of the mechanical problem.
                  </p>
                </div>

                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <h3 className="font-black text-navy-950 text-sm mb-1">C. Technical & Diagnostic Logs</h3>
                  <p className="text-xs md:text-sm text-slate-600">
                    Job completion sheets, job cards, parts swapped under 90-day warranty, refrigerant pressure test recordings, and invoice payment confirmation receipts.
                  </p>
                </div>

                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <h3 className="font-black text-navy-950 text-sm mb-1">D. Automated Browser & Device Data</h3>
                  <p className="text-xs md:text-sm text-slate-600">
                    Standard web log metrics including IP address, browser type, operating system, referring URL, pages visited, time spent, and click-through events captured via Google Analytics.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section id="purpose-of-use" className="scroll-mt-32 border-t border-slate-100 pt-8">
              <div className="flex items-center gap-2.5 mb-4 text-orange-600 font-black text-xs uppercase tracking-widest">
                <CheckCircle2 className="w-4 h-4" /> Section 3
              </div>
              <h2 className="text-2xl font-black text-navy-950 mb-4 tracking-tight">
                3. How We Use Your Information
              </h2>
              <p className="mb-4">
                We process your personal information strictly for legitimate service delivery and operational purposes:
              </p>
              <ul className="space-y-2.5 pl-2">
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-orange-500 mt-2 shrink-0"></span>
                  <span><strong>Doorstep Technician Dispatch:</strong> Directing the nearest verified technician to your exact address within the guaranteed 60-minute window.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-orange-500 mt-2 shrink-0"></span>
                  <span><strong>Warranty Record Keeping:</strong> Maintaining your 90-day warranty records on replaced spare parts and gas recharging.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-orange-500 mt-2 shrink-0"></span>
                  <span><strong>Customer Support & Follow-up:</strong> Communicating service status, estimate quotations, and post-service cooling performance feedback.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-orange-500 mt-2 shrink-0"></span>
                  <span><strong>Invoicing & Compliance:</strong> Issuing transparent electronic bills and receipts as required under Indian commercial and tax norms.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-orange-500 mt-2 shrink-0"></span>
                  <span><strong>Security & Spam Mitigation:</strong> Protecting our booking platform against malicious automated submissions, fraudulent calls, and denial of service.</span>
                </li>
              </ul>
            </section>

            {/* Section 4 */}
            <section id="google-ads" className="scroll-mt-32 border-t border-slate-100 pt-8">
              <div className="flex items-center gap-2.5 mb-4 text-orange-600 font-black text-xs uppercase tracking-widest">
                <RefreshCw className="w-4 h-4" /> Section 4
              </div>
              <h2 className="text-2xl font-black text-navy-950 mb-4 tracking-tight">
                4. Google Advertising, Cookies & Conversion Tracking
              </h2>
              <p className="mb-4">
                In full alignment with Google Advertising policies, Google Ads Third-Party policy, and DoubleClick guidelines:
              </p>

              <div className="space-y-4">
                <div className="border-l-4 border-orange-500 pl-4 py-1">
                  <h3 className="font-black text-navy-950 text-sm mb-1">Google Ads & Conversion Tracking</h3>
                  <p className="text-xs md:text-sm text-slate-600">
                    We utilize Google Ads conversion tags to measure campaign effectiveness when users search for terms such as <em>"AC repair Gurgaon"</em> or <em>"fridge repair near me"</em>. These cookies assist in verifying whether an ad click resulted in a phone call or form inquiry.
                  </p>
                </div>

                <div className="border-l-4 border-orange-500 pl-4 py-1">
                  <h3 className="font-black text-navy-950 text-sm mb-1">DoubleClick DART & Remarketing Cookies</h3>
                  <p className="text-xs md:text-sm text-slate-600">
                    Google, as a third-party vendor, may use cookies to serve relevant ads based on prior visits to our site. These cookies do not store sensitive personal information like your private home address or financial details.
                  </p>
                </div>

                <div className="border-l-4 border-orange-500 pl-4 py-1">
                  <h3 className="font-black text-navy-950 text-sm mb-1">How You Can Opt Out of Personalized Ads</h3>
                  <p className="text-xs md:text-sm text-slate-600 mb-2">
                    You can customize or disable personalized Google Ads tracking at any time by visiting:
                  </p>
                  <div className="flex flex-wrap gap-3 pt-1">
                    <a 
                      href="https://myadcenter.google.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-600 hover:underline bg-orange-50 px-3 py-1.5 rounded-lg"
                    >
                      Google My Ad Center <ExternalLink className="w-3 h-3" />
                    </a>
                    <a 
                      href="https://optout.aboutads.info/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-600 hover:underline bg-orange-50 px-3 py-1.5 rounded-lg"
                    >
                      AboutAds Consumer Opt-Out <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 5 */}
            <section id="data-sharing" className="scroll-mt-32 border-t border-slate-100 pt-8">
              <div className="flex items-center gap-2.5 mb-4 text-orange-600 font-black text-xs uppercase tracking-widest">
                <Lock className="w-4 h-4" /> Section 5
              </div>
              <h2 className="text-2xl font-black text-navy-950 mb-4 tracking-tight">
                5. Zero Data Reselling & Strict Sharing Limits
              </h2>
              <div className="bg-orange-50/70 border border-orange-200/80 p-5 rounded-2xl mb-4">
                <p className="font-black text-navy-950 text-sm mb-1">
                  Our Uncompromising Guarantee:
                </p>
                <p className="text-xs md:text-sm text-slate-700">
                  We <strong>DO NOT</strong> sell, rent, license, or disclose your telephone numbers, email addresses, or residential street addresses to external telemarketers, credit card issuers, lead generators, or data brokers.
                </p>
              </div>
              <p className="mb-3">Personal data is disclosed strictly to:</p>
              <ul className="space-y-2 pl-2 text-xs md:text-sm">
                <li><strong>Assigned Field Technicians:</strong> Background-verified AC and appliance specialists dispatched to your specific residence.</li>
                <li><strong>Payment Processors:</strong> Official UPI (Google Pay, PhonePe, Paytm) and banking gateways for authorized fee settlements.</li>
                <li><strong>Law Enforcement Authorities:</strong> Only when legally compelled by valid court summons, statutory mandates, or police investigations in Haryana.</li>
              </ul>
            </section>

            {/* Section 6 */}
            <section id="security-retention" className="scroll-mt-32 border-t border-slate-100 pt-8">
              <div className="flex items-center gap-2.5 mb-4 text-orange-600 font-black text-xs uppercase tracking-widest">
                <Shield className="w-4 h-4" /> Section 6
              </div>
              <h2 className="text-2xl font-black text-navy-950 mb-4 tracking-tight">
                6. Security & Data Retention
              </h2>
              <p className="mb-4">
                We implement industry-standard administrative, technical, and physical safeguards to protect your personal details against unauthorized access, loss, alteration, or misuse:
              </p>
              <ul className="space-y-2 pl-2 text-xs md:text-sm mb-4">
                <li>• <strong>Encryption:</strong> All web traffic is routed via 256-bit Secure Sockets Layer (SSL / TLS) encryption.</li>
                <li>• <strong>Access Controls:</strong> Customer addresses and telephone records are restricted to dispatch supervisors and active field technicians.</li>
                <li>• <strong>Retention Period:</strong> Service records are retained for a period of up to 12 months following completion to honor 90-day warranties, resolve recurring machine issues, and satisfy accounting audits. Non-essential logs are purged periodically.</li>
              </ul>
            </section>

            {/* Section 7 */}
            <section id="user-rights" className="scroll-mt-32 border-t border-slate-100 pt-8">
              <div className="flex items-center gap-2.5 mb-4 text-orange-600 font-black text-xs uppercase tracking-widest">
                <CheckCircle2 className="w-4 h-4" /> Section 7
              </div>
              <h2 className="text-2xl font-black text-navy-950 mb-4 tracking-tight">
                7. Your Rights & Data Erasure (Right to be Forgotten)
              </h2>
              <p className="mb-4">
                Under applicable Indian privacy standards and customer rights, you possess the right to:
              </p>
              <div className="grid sm:grid-cols-2 gap-3 mb-6">
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100">
                  <h4 className="font-bold text-navy-950 text-xs mb-1">1. Access & Review</h4>
                  <p className="text-[11px] text-slate-500">Request a summary of what contact and service information we hold about your residence.</p>
                </div>
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100">
                  <h4 className="font-bold text-navy-950 text-xs mb-1">2. Rectification</h4>
                  <p className="text-[11px] text-slate-500">Update or correct inaccurate addresses, phone numbers, or appliance records.</p>
                </div>
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100">
                  <h4 className="font-bold text-navy-950 text-xs mb-1">3. Erasure / Deletion</h4>
                  <p className="text-[11px] text-slate-500">Request permanent deletion of your phone number and address from our customer roster.</p>
                </div>
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100">
                  <h4 className="font-bold text-navy-950 text-xs mb-1">4. Opt-Out of Marketing</h4>
                  <p className="text-[11px] text-slate-500">Withdraw consent from seasonal maintenance reminders with a simple message.</p>
                </div>
              </div>

              {/* Data Deletion Request Box */}
              <div className="bg-slate-900 text-white p-6 rounded-2xl border border-slate-800">
                <div className="flex items-center gap-2 mb-2 text-orange-400 font-bold text-xs">
                  <AlertCircle className="w-4 h-4" />
                  <span>How to Submit a Data Erasure Request</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  To remove your contact details or service records from our active database, simply send an email or WhatsApp message with your phone number and address. We process all validated requests within <strong>24 to 48 business hours</strong>.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="mailto:gurgaonacservice@gmail.com?subject=Data%20Deletion%20Request%20-%20ASAP%20Gurgaon"
                    className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-xl text-xs font-black transition-colors flex items-center gap-1.5"
                  >
                    <Mail className="w-3.5 h-3.5" /> Email Deletion Request
                  </a>
                  <a
                    href="https://wa.me/917056330400?text=Hello%2C%20I%20would%20like%20to%20request%20deletion%20of%20my%20contact%20records%20under%20the%20Privacy%20Policy."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-xl text-xs font-black transition-colors flex items-center gap-1.5"
                  >
                    WhatsApp Deletion Request
                  </a>
                </div>
              </div>
            </section>

            {/* Section 8 */}
            <section id="children-privacy" className="scroll-mt-32 border-t border-slate-100 pt-8">
              <div className="flex items-center gap-2.5 mb-4 text-orange-600 font-black text-xs uppercase tracking-widest">
                <Shield className="w-4 h-4" /> Section 8
              </div>
              <h2 className="text-2xl font-black text-navy-950 mb-4 tracking-tight">
                8. Children's Privacy
              </h2>
              <p>
                Our services are strictly intended for homeowners, property managers, tenants, and commercial facility coordinators capable of entering into binding contracts under Indian law. We do not knowingly solicit or collect personal identification from children under the age of 18. If you believe a minor has submitted personal details through our forms, please contact us immediately to purge the record.
              </p>
            </section>

            {/* Section 9 */}
            <section id="grievance-contact" className="scroll-mt-32 border-t border-slate-100 pt-8">
              <div className="flex items-center gap-2.5 mb-4 text-orange-600 font-black text-xs uppercase tracking-widest">
                <Mail className="w-4 h-4" /> Section 9
              </div>
              <h2 className="text-2xl font-black text-navy-950 mb-4 tracking-tight">
                9. Grievance Officer & Contact Details
              </h2>
              <p className="mb-4">
                In compliance with the Information Technology Act 2000 and consumer grievance regulations, our designated Privacy & Grievance contact point is provided below:
              </p>

              <div className="bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-200/80">
                <h3 className="text-lg font-black text-navy-950 mb-4">
                  ASAP GURGAON AC & APPLIANCE SERVICE
                </h3>
                <div className="grid sm:grid-cols-2 gap-4 text-xs md:text-sm">
                  <div className="space-y-1">
                    <p className="text-slate-400 font-bold uppercase tracking-wider text-[10px]">Workshop & Office</p>
                    <p className="font-bold text-slate-800 flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                      <span>Shop 6, Sector 52 Market, Near Ardee City, Gurgaon, Haryana 122003</span>
                    </p>
                  </div>

                  <div className="space-y-1">
                    <p className="text-slate-400 font-bold uppercase tracking-wider text-[10px]">Operating Hours</p>
                    <p className="font-bold text-slate-800">
                      Monday to Sunday: 8:00 AM – 9:00 PM (IST)
                    </p>
                  </div>

                  <div className="space-y-1">
                    <p className="text-slate-400 font-bold uppercase tracking-wider text-[10px]">Customer Helpline</p>
                    <a href="tel:+917056330400" className="font-black text-orange-600 hover:underline flex items-center gap-1.5">
                      <Phone className="w-4 h-4 text-orange-500" /> +91 70563 30400
                    </a>
                  </div>

                  <div className="space-y-1">
                    <p className="text-slate-400 font-bold uppercase tracking-wider text-[10px]">Privacy & Support Email</p>
                    <a href="mailto:gurgaonacservice@gmail.com" className="font-black text-orange-600 hover:underline flex items-center gap-1.5">
                      <Mail className="w-4 h-4 text-orange-500" /> gurgaonacservice@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* Back to Home Action */}
            <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <Link 
                to="/" 
                className="inline-flex items-center gap-2 font-black text-navy-950 hover:text-orange-500 transition-colors text-sm uppercase tracking-wider"
              >
                <ArrowLeft className="w-4 h-4" /> Return to Home
              </Link>

              <Link 
                to="/contact" 
                className="bg-navy-950 hover:bg-navy-900 text-white px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-wider transition-all flex items-center gap-2 shadow-md"
              >
                <span>Contact Customer Support</span>
                <ChevronRight className="w-4 h-4 text-orange-400" />
              </Link>
            </div>

          </main>
        </div>
      </div>
    </div>
  );
}

