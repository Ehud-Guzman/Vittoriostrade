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

export default function TermsPage() {
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
            Terms of Service
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
          <Section title="1. Acceptance of Terms">
            <p>
              By accessing and using <strong>vittoriostrades.com</strong> (the "Website"), you agree to be bound by these
              Terms of Service. If you do not agree, please do not use our Website or services.
            </p>
            <p>
              These terms apply to all visitors, clients, and business partners who access or use the services of
              Vittorios Trades.
            </p>
          </Section>

          <Section title="2. Services">
            <p>
              Vittorios Trades provides agricultural commodity trading, regional logistics, and import/export solutions
              across East Africa. The information provided on this Website is for general informational purposes and does not
              constitute a binding commercial offer unless confirmed in writing by an authorised representative.
            </p>
            <p>
              All trade transactions, pricing, and delivery terms are governed by separate written agreements or purchase
              orders signed by both parties.
            </p>
          </Section>

          <Section title="3. Commodity Pricing & Market Risk">
            <p>
              Agricultural commodity prices are subject to market fluctuations driven by weather, supply and demand,
              government policy, and other factors beyond our control. Any pricing information on this Website is indicative
              only and may change without notice.
            </p>
            <p>
              Vittorios Trades is not liable for losses arising from commodity price movements between the date of enquiry
              and the date of contract execution.
            </p>
          </Section>

          <Section title="4. Use of This Website">
            <p>You agree not to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Use the Website for any unlawful purpose or in violation of any applicable regulations.</li>
              <li>Attempt to gain unauthorised access to any part of the Website or its underlying systems.</li>
              <li>Transmit harmful, misleading, or fraudulent information through our contact forms.</li>
              <li>Reproduce or redistribute our content without prior written permission.</li>
            </ul>
          </Section>

          <Section title="5. Intellectual Property">
            <p>
              All content on this Website — including text, images, logos, and design — is the property of Vittorios Trades
              or its licensors and is protected under applicable copyright and intellectual property laws. Unauthorised use
              is strictly prohibited.
            </p>
            <p>
              The website was designed and developed by{" "}
              <a href="https://glimmerink.co.ke" target="_blank" rel="noopener noreferrer" className="text-brand-500 hover:underline">
                GlimmerInk Creations
              </a>. All design rights are retained by the respective parties.
            </p>
          </Section>

          <Section title="6. Disclaimer of Warranties">
            <p>
              This Website and its contents are provided on an "as is" basis. Vittorios Trades makes no warranties, express
              or implied, regarding the accuracy, completeness, or fitness for purpose of any information on the Website.
            </p>
          </Section>

          <Section title="7. Limitation of Liability">
            <p>
              To the fullest extent permitted by law, Vittorios Trades shall not be liable for any indirect, incidental,
              or consequential damages arising from your use of this Website or our services. Our total liability for any
              claim shall not exceed the value of the specific transaction giving rise to the claim.
            </p>
          </Section>

          <Section title="8. Third-Party Links">
            <p>
              Our Website may contain links to third-party websites (e.g., Google Maps, WhatsApp). We do not endorse and
              are not responsible for the content or privacy practices of those sites.
            </p>
          </Section>

          <Section title="9. Governing Law">
            <p>
              These Terms are governed by and construed in accordance with the laws of the Republic of Kenya. Any disputes
              arising from these Terms shall be subject to the exclusive jurisdiction of the courts of Kenya.
            </p>
          </Section>

          <Section title="10. Changes to These Terms">
            <p>
              We reserve the right to update these Terms at any time. Changes will be posted on this page with an updated
              effective date. Continued use of the Website after changes are posted constitutes your acceptance of the
              revised Terms.
            </p>
          </Section>

          <Section title="11. Contact">
            <p>For any questions regarding these Terms, contact us at:</p>
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
