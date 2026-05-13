import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const fadeUp = (delay = 0) => ({
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: "easeOut" } },
});

const Section = ({ title, children }) => (
  <div className="mb-10">
    <h2 className="text-xl font-display font-bold text-earth-900 mb-3">{title}</h2>
    <div className="text-earth-600 text-sm leading-relaxed space-y-3">{children}</div>
  </div>
);

export default function PrivacyPage() {
  return (
    <div className="bg-white text-earth-800 font-body">
      {/* Hero */}
      <section className="pt-32 pb-16 bg-earth-50 border-b border-earth-200">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <motion.span
            initial="hidden" animate="visible" variants={fadeUp(0.1)}
            className="text-sm font-semibold text-brand-500 uppercase tracking-widest mb-3 block"
          >
            Legal
          </motion.span>
          <motion.h1
            initial="hidden" animate="visible" variants={fadeUp(0.2)}
            className="text-4xl font-display font-bold text-earth-900 mb-4"
          >
            Privacy Policy
          </motion.h1>
          <motion.p
            initial="hidden" animate="visible" variants={fadeUp(0.3)}
            className="text-earth-500 text-sm"
          >
            Last updated: May 2025
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp()}
          className="container mx-auto px-6 max-w-3xl"
        >
          <Section title="1. Overview">
            <p>
              Vittorios Trades ("we", "our", or "us") operates <strong>vittoriostrades.com</strong>. This policy explains what
              information we collect when you visit our website or contact us, how we use it, and your rights regarding that data.
            </p>
            <p>
              We are committed to protecting your privacy and handling your data transparently and responsibly.
            </p>
          </Section>

          <Section title="2. Information We Collect">
            <p>We collect information in two ways:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Information you provide:</strong> name, email address, phone number, and message content when you submit our contact form or subscribe to our newsletter.</li>
              <li><strong>Automatically collected data:</strong> browser type, IP address, pages visited, and time on site via standard web analytics. We do not use cookies beyond what is strictly necessary.</li>
            </ul>
          </Section>

          <Section title="3. How We Use Your Information">
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Respond to your business inquiries and quotation requests.</li>
              <li>Send you trade insights and market updates if you have subscribed to our newsletter.</li>
              <li>Improve our website and services based on usage data.</li>
              <li>Comply with legal obligations applicable in Kenya and East Africa.</li>
            </ul>
            <p>We will never sell, rent, or trade your personal information to third parties for marketing purposes.</p>
          </Section>

          <Section title="4. Third-Party Services">
            <p>
              We use <strong>EmailJS</strong> to process contact form submissions. Messages you send through our website are
              transmitted via EmailJS servers. Please review{" "}
              <a href="https://www.emailjs.com/legal/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-brand-500 hover:underline">
                EmailJS's Privacy Policy
              </a>{" "}
              for details on their data handling.
            </p>
            <p>
              Our website may use Google Fonts and Google Maps for display purposes. These services may collect usage data
              subject to{" "}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-brand-500 hover:underline">
                Google's Privacy Policy
              </a>.
            </p>
          </Section>

          <Section title="5. Data Retention">
            <p>
              We retain contact form submissions for up to 12 months to facilitate business follow-up. Newsletter subscriber
              emails are retained until you unsubscribe. You may request deletion of your data at any time.
            </p>
          </Section>

          <Section title="6. Your Rights">
            <p>You have the right to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Request access to the personal data we hold about you.</li>
              <li>Request correction of inaccurate data.</li>
              <li>Request deletion of your data.</li>
              <li>Opt out of newsletter communications at any time.</li>
            </ul>
            <p>
              To exercise any of these rights, contact us at{" "}
              <a href="mailto:vittoriostrades@gmail.com" className="text-brand-500 hover:underline">
                vittoriostrades@gmail.com
              </a>.
            </p>
          </Section>

          <Section title="7. Security">
            <p>
              We take reasonable technical and organisational measures to protect your information from unauthorised access,
              disclosure, or loss. However, no transmission over the internet is 100% secure.
            </p>
          </Section>

          <Section title="8. Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated date.
              Continued use of our website after changes constitutes acceptance of the updated policy.
            </p>
          </Section>

          <Section title="9. Contact">
            <p>
              For any privacy-related questions, contact us at:
            </p>
            <ul className="list-none space-y-1">
              <li>Email: <a href="mailto:vittoriostrades@gmail.com" className="text-brand-500 hover:underline">vittoriostrades@gmail.com</a></li>
              <li>Phone: <a href="tel:+254799031449" className="text-brand-500 hover:underline">+254 799 031 449</a></li>
              <li>Address: P.O. Box 41, Bungoma, Kenya</li>
            </ul>
          </Section>

          <div className="pt-8 border-t border-earth-200">
            <Link to="/" className="text-sm text-brand-500 hover:text-brand-700 font-medium transition-colors">
              ← Back to Home
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
