import { motion } from 'motion/react';

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-32 pb-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[3rem] p-12 md:p-20 shadow-xl border border-slate-100">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-navy-900 mb-12 tracking-tight"
          >
            Privacy <span className="text-orange-500">Policy</span>
          </motion.h1>
          
          <div className="prose prose-lg max-w-none text-slate-600 font-medium space-y-8">
            <section>
              <h2 className="text-2xl font-black text-navy-900 mb-4">1. Information We Collect</h2>
              <p>We collect information that you provide directly to us when you book a service, contact us, or fill out a form on our website. This may include your name, phone number, email address, and physical address for service delivery.</p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-navy-900 mb-4">2. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide and maintain our services.</li>
                <li>Schedule and confirm service appointments.</li>
                <li>Communicate with you about your service requests.</li>
                <li>Send you promotional offers and updates (with your consent).</li>
                <li>Improve our website and customer service.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-black text-navy-900 mb-4">3. Data Security</h2>
              <p>We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. Your data is only accessible to authorized personnel who need it to perform their duties.</p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-navy-900 mb-4">4. Sharing Your Information</h2>
              <p>We do not sell, trade, or otherwise transfer your personal information to third parties. We may share your information with trusted service providers who assist us in operating our website and conducting our business, as long as they agree to keep this information confidential.</p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-navy-900 mb-4">5. Your Rights</h2>
              <p>You have the right to access, update, or delete your personal information at any time. If you wish to do so, please contact us at gurgaonacservice@gmail.com.</p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-navy-900 mb-4">6. Changes to This Policy</h2>
              <p>We may update our Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.</p>
            </section>

            <section className="pt-8 border-t border-slate-100">
              <p className="text-sm text-slate-400">Last updated: April 6, 2026</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
