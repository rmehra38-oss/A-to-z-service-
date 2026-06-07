import { motion } from 'motion/react';
import { Shield, Lock, Eye, CheckCircle2, RefreshCw } from 'lucide-react';

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-32 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[3rem] p-8 md:p-16 lg:p-20 shadow-xl border border-slate-100 relative overflow-hidden">
          {/* Decorative background accent */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full blur-2xl"></div>
          
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-orange-100 p-3 rounded-2xl">
              <Shield className="w-8 h-8 text-orange-500" />
            </div>
            <span className="text-xs font-black uppercase tracking-[0.3em] text-slate-400">Legal & Compliance</span>
          </div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-navy-900 mb-6 tracking-tight"
          >
            Privacy <span className="text-orange-500">Policy</span>
          </motion.h1>
          
          <p className="text-slate-500 font-bold mb-12 uppercase tracking-widest text-xs">
            Last Updated: June 6, 2026
          </p>

          <div className="prose prose-lg max-w-none text-slate-600 font-medium space-y-10">
            
            <section className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
              <p className="leading-relaxed">
                At <strong>ASAP GURGAON AC SERVICE</strong>, accessible from <a href="https://gurgaonacservice.com" className="text-orange-500 hover:underline">gurgaonacservice.com</a> (and its related paths), one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by us and how we use it, specifically designed to comply with Google Advertising policies.
              </p>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <Eye className="w-6 h-6 text-orange-500" />
                <h2 className="text-2xl font-black text-navy-950 m-0">1. Information We Collect</h2>
              </div>
              <p className="mb-4">
                We collect personal information that you voluntarily provide to us when scheduling services, submitting inquiries, or booking repairs. This personal information may include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Contact Data:</strong> Your name, phone number, and email address.</li>
                <li><strong>Service Details:</strong> Physical address where the appliance service is to be delivered, and specific technical issues.</li>
                <li><strong>Communication Logs:</strong> Any text messages, details, or feedback shared via forms, email, or telephone.</li>
              </ul>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle2 className="w-6 h-6 text-orange-500" />
                <h2 className="text-2xl font-black text-navy-950 m-0">2. How We Use Your Information</h2>
              </div>
              <p className="mb-4">We use the information we collect to operate and improve our business activities, including to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide, operate, schedule, and maintain appliance repair and AC services.</li>
                <li>Improve and personalize your interaction on our website.</li>
                <li>Understand and analyze how you use our website to optimize loading speeds and content delivery.</li>
                <li>Communicate with you regarding service updates, scheduling, promotions, and customer satisfaction surveys.</li>
                <li>Prevent fraudulent activities, spam, and ensure security.</li>
              </ul>
            </section>

            <section className="border-t border-slate-100 pt-8">
              <div className="flex items-center gap-3 mb-4">
                <RefreshCw className="w-6 h-6 text-orange-500" />
                <h2 className="text-2xl font-black text-navy-950 m-0">3. Google Ads, DoubleClick, and Tracking Cookies</h2>
              </div>
              <p className="mb-4">
                To satisfy the strict requirements of Google Ads and other advertising networks, we declare the use of log files, cookies, and other tracking mechanisms:
              </p>
              <div className="space-y-4 pl-4 border-l-4 border-orange-500/20">
                <p>
                  <strong>Third-Party Vendors and Cookies:</strong> Google, as a third-party vendor, uses cookies to serve ads on our site. Google's use of advertising cookies enables it and its partners to serve ads to our users based on their visit to our website or other sites on the Internet.
                </p>
                <p>
                  <strong>Google Analytics & Conversion Tracking:</strong> We use Google Analytics and Google Ads conversion tracking cookies. These help us understand which traffic channels drive conversions and allow us to monitor the performance of our promotional campaigns to provide better user experiences.
                </p>
                <p>
                  <strong>How to Opt-Out:</strong> Users may opt-out of personalized advertising by visiting Google's Ads Settings page at <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:underline font-bold">Google Ads Settings</a>. Alternatively, users can opt-out of some third-party vendors' uses of cookies for personalized advertising by visiting external tools like <a href="http://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:underline font-bold">AboutAds Info Page</a>.
                </p>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <Lock className="w-6 h-6 text-orange-500" />
                <h2 className="text-2xl font-black text-navy-950 m-0">4. Data Protection and Security</h2>
              </div>
              <p>
                We execute rigorous industry-standard database security protocols, visual validations, and server filters to maintain protection over your contact details. Your data is restricted exclusively to certified service technicians dispatching to your location and remains confidential under all conditions. We do not participate in mailing-list trades, commercial monetization, or unapproved data broker exports.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-navy-950 mb-4">5. Third-Party Links</h2>
              <p>
                Our service may link to external, helpful maps or manufacturer documentation. These external platforms are operated independently. We suggest reviewing the local terms and cookies policy of those respective services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-navy-950 mb-4">6. Consent</h2>
              <p>
                By using our website, you hereby consent to our Privacy Policy and agree to its terms and layout.
              </p>
            </section>

            <section className="pt-8 border-t border-slate-100 bg-slate-50 p-8 rounded-3xl">
              <h3 className="text-lg font-black text-navy-950 mb-4 uppercase tracking-[0.15em]">Contact Information</h3>
              <p className="text-sm mb-2">For any queries, security audits, or requests regarding data removal, please contact the administrator team at:</p>
              <ul className="text-sm space-y-1 font-bold text-navy-900">
                <li>🏢 <strong>Business Name:</strong> ASAP GURGAON AC SERVICE</li>
                <li>📧 <strong>Email Address:</strong> gurgaonacservice@gmail.com</li>
                <li>📞 <strong>Phone Support:</strong> +91 70563 30400</li>
                <li>📍 <strong>Office Address:</strong> Shop 6, Sector 52 Market, Gurgaon, India</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
