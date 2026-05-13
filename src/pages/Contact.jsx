import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  FaPhone, FaMapMarkerAlt, FaClock, FaWhatsapp, FaArrowRight,
  FaTruck, FaSeedling, FaCalendarAlt, FaChevronRight, FaShieldAlt,
} from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si";
import emailjs from "@emailjs/browser";

const fadeUp = (delay = 0) => ({
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: "easeOut" } },
});
const stagger = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const SectionLabel = ({ children }) => (
  <span className="text-sm font-semibold text-brand-500 uppercase tracking-widest mb-3 block">{children}</span>
);

const testimonials = [
  { quote: "Vittorios streamlined our maize exports to Uganda — reliable and transparent pricing.", name: "AgriCo Ltd.",         role: "Nakuru-based Agro Exporter" },
  { quote: "Their clearing services at the Uganda border saved us 3 days of delays.",              name: "TransEast Logistics", role: "Regional Transport Partner" },
];

const faqItems = [
  { question: "What's your typical response time for inquiries?",  answer: "We respond to all business inquiries within 2 hours during working days (8AM–5PM EAT)." },
  { question: "Do you handle customs clearance?",                  answer: "Yes, we provide full customs brokerage services at all East African borders." },
  { question: "What regions do you operate in?",                   answer: "We primarily serve Kenya, Uganda, Tanzania, and Rwanda with our logistics network." },
  { question: "How do you ensure product quality?",                answer: "All commodities are inspected at source and destination by our quality assurance teams." },
];

const ContactsPage = () => {
  const [formData,         setFormData]         = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [mapLoaded,        setMapLoaded]        = useState(false);
  const [openFaqIndex,     setOpenFaqIndex]     = useState(null);
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionStatus("sending");
    try {
      await emailjs.send(
        "service_glh0yoh",
        "template_8919t07",
        { from_name: formData.name, from_email: formData.email, phone: formData.phone, subject: formData.subject, message: formData.message },
        "mu8JNmKu-gMTErqQ2"
      );
      setSubmissionStatus("success");
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch {
      setSubmissionStatus("error");
    }
  };

  const inputClass =
    "w-full bg-white border border-earth-200 focus:border-brand-400 focus:ring-2 focus:ring-brand-100 rounded-xl px-4 py-3 text-earth-800 text-sm outline-none transition";

  return (
    <div className="bg-white text-earth-800 font-body">

      {/* ── 1. Hero ────────────────────────────────────────────────────────── */}
      <section className="relative h-[75vh] flex items-center justify-center overflow-hidden">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0">
          <source src="/videos/hero03.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-earth-900/60 via-earth-900/50 to-earth-900/80 z-10" />

        <motion.div
          initial="hidden" animate="visible" variants={stagger}
          className="container mx-auto px-6 text-center relative z-20"
        >
          <motion.span variants={fadeUp(0.1)} className="text-sm font-semibold text-brand-300 uppercase tracking-widest mb-4 block">
            Talk to Us
          </motion.span>
          <motion.h1 variants={fadeUp(0.2)} className="text-4xl md:text-6xl font-display font-bold text-white mb-5 leading-tight">
            Let's Connect &<br />
            <span className="text-brand-300">Grow Together</span>
          </motion.h1>
          <motion.p variants={fadeUp(0.3)} className="text-lg md:text-xl text-white/75 max-w-2xl mx-auto mb-9">
            Reach out for logistics solutions, trade inquiries, or strategic partnerships across East Africa
          </motion.p>
          <motion.div variants={fadeUp(0.4)} className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/254799031449"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-brand-500 hover:bg-brand-600 text-white font-semibold rounded-full transition-colors text-sm shadow-brand"
            >
              <FaWhatsapp className="text-lg" /> WhatsApp Us
            </a>
            <a
              href="#contact-form"
              className="px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full border border-white/30 backdrop-blur-sm transition-colors text-sm"
            >
              Send a Message
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* ── 2. Contact Channels ────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              {
                icon: <FaPhone className="text-2xl text-brand-500" />,
                title: "General Inquiries",
                sub:   "For all business communications",
                items: [
                  <a key="e" href="mailto:vittoriostrades@gmail.com" className="hover:text-brand-500 transition-colors">vittoriostrades@gmail.com</a>,
                  <a key="p1" href="tel:+254799031449" className="hover:text-brand-500 transition-colors">+254 799 031 449 (Kenya)</a>,
                  <a key="p2" href="tel:+2567664216176" className="hover:text-brand-500 transition-colors">+256 764 216 176 (Uganda)</a>,
                ],
              },
              {
                icon: <FaMapMarkerAlt className="text-2xl text-brand-500" />,
                title: "Headquarters",
                sub:   "Visit our main operational hub",
                items: [
                  <span key="addr">P.O. Box 41, Bungoma, Kenya</span>,
                  <a key="map" href="https://maps.google.com/?q=0.5696,34.5587" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-brand-500 hover:text-brand-700 font-medium transition-colors">
                    <SiGooglemaps /> View on Maps
                  </a>,
                ],
              },
              {
                icon: <FaClock className="text-2xl text-brand-500" />,
                title: "Business Hours",
                sub:   "East Africa Time (GMT+3)",
                items: [
                  <span key="wkd">Monday – Friday: 8AM – 5PM</span>,
                  <span key="sat">Saturday: 9AM – 1PM</span>,
                  <span key="sun" className="text-earth-400">Sunday: Closed</span>,
                ],
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                variants={fadeUp(i * 0.1)}
                className="bg-white border border-earth-200 rounded-2xl p-8 shadow-warm hover:shadow-warm-lg hover:border-brand-200 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center mb-5 border border-brand-100">
                  {card.icon}
                </div>
                <h3 className="text-lg font-display font-bold text-earth-900 mb-1">{card.title}</h3>
                <p className="text-earth-400 text-sm mb-4">{card.sub}</p>
                <div className="space-y-1.5 text-sm text-earth-600">
                  {card.items.map((item, ii) => <div key={ii}>{item}</div>)}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 3. Urgent Logistics Hotline ────────────────────────────────────── */}
      <section className="py-16 bg-brand-500 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/logistics.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 right-0 w-72 h-72 bg-white/5 rounded-full translate-x-1/2 -translate-y-1/2" />

        <div className="container mx-auto px-6 text-center relative">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 120 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <motion.div animate={{ scale: [1, 1.05, 1] }} transition={{ repeat: Infinity, duration: 2.5 }} className="inline-block mb-4">
              <FaTruck className="text-4xl text-white mx-auto" />
            </motion.div>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-3">
              24/7 Emergency Logistics Hotline
            </h2>
            <p className="text-brand-100 mb-7 max-w-xl mx-auto text-sm">
              For urgent shipment delays, border clearance issues, or time-sensitive commodity movements
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="tel:+254799031449"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white hover:bg-earth-50 text-brand-600 font-semibold rounded-full text-sm transition-colors shadow-sm"
              >
                <FaPhone /> +254 799 031 449
              </a>
              <a
                href="https://wa.me/254799031449?text=URGENT%3A%20I%20need%20immediate%20logistics%20assistance."
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/15 hover:bg-white/25 text-white font-semibold rounded-full text-sm border border-white/30 backdrop-blur-sm transition-colors"
              >
                <FaWhatsapp className="text-base" /> WhatsApp Alert
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 4. Contact Form + Map ─────────────────────────────────────────── */}
      <section id="contact-form" className="py-24 bg-earth-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp()}
            className="text-center mb-14"
          >
            <SectionLabel>Send a Message</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-earth-900 mb-4">We'd Love to Hear from You</h2>
            <div className="w-16 h-1 bg-brand-500 mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white border border-earth-200 rounded-2xl p-8 shadow-warm"
            >
              <h3 className="text-xl font-display font-bold text-earth-900 mb-1">Get in Touch</h3>
              <p className="text-earth-400 text-sm mb-7">We typically respond within 2 business hours</p>

              {submissionStatus === "sending" && (
                <p className="text-sm text-amber-600 bg-amber-50 border border-amber-200 rounded-lg px-4 py-2.5 mb-5">Sending your message…</p>
              )}
              {submissionStatus === "success" && (
                <p className="text-sm text-green-700 bg-green-50 border border-green-200 rounded-lg px-4 py-2.5 mb-5">Message sent! We'll get back to you within 2 hours.</p>
              )}
              {submissionStatus === "error" && (
                <p className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg px-4 py-2.5 mb-5">
                  Failed to send. Email us directly at{" "}
                  <a href="mailto:vittoriostrades@gmail.com" className="underline">vittoriostrades@gmail.com</a>.
                </p>
              )}

              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-earth-500 uppercase tracking-wide mb-1.5">Full Name *</label>
                    <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-earth-500 uppercase tracking-wide mb-1.5">Email *</label>
                    <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className={inputClass} />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-earth-500 uppercase tracking-wide mb-1.5">Phone (Optional)</label>
                  <input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className={inputClass} />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-earth-500 uppercase tracking-wide mb-1.5">Subject *</label>
                  <select required value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} className={inputClass}>
                    <option value="">Select an option</option>
                    <option value="Trading">Commodity Trading Inquiry</option>
                    <option value="Logistics">Logistics Support</option>
                    <option value="Partnership">Partnership Opportunity</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-earth-500 uppercase tracking-wide mb-1.5">Message *</label>
                  <textarea rows="5" required value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className={inputClass} />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={submissionStatus === "sending"}
                  className="w-full bg-brand-500 hover:bg-brand-600 text-white font-semibold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-colors text-sm shadow-brand disabled:opacity-60"
                >
                  {submissionStatus === "sending" ? "Sending…" : "Send Message"} <FaArrowRight className="text-xs" />
                </motion.button>
              </form>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden border border-earth-200 shadow-warm min-h-[480px]"
            >
              {!mapLoaded && (
                <div className="absolute inset-0 bg-earth-50 flex items-center justify-center">
                  <div className="animate-pulse text-earth-400 text-sm">Loading map…</div>
                </div>
              )}
              <iframe
                onLoad={() => setMapLoaded(true)}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7536223157963!2d34.55864761475395!3d0.569599999799466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMMKwMzQnMTAuNiJOIDM0wrAzMyczMS4xIkU!5e0!3m2!1sen!2ske!4v1620000000000!5m2!1sen!2ske"
                width="100%" height="100%"
                style={{ border: 0, minHeight: "480px" }}
                allowFullScreen loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 5. Testimonials ────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp()}
            className="text-center mb-14"
          >
            <SectionLabel>What They Say</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-earth-900 mb-4">Trusted by East Africa's Traders</h2>
            <div className="w-16 h-1 bg-brand-500 mx-auto rounded-full" />
          </motion.div>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonialIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-brand-50 border border-brand-100 rounded-2xl p-10 text-center shadow-warm"
              >
                <p className="text-brand-400 text-5xl font-display leading-none mb-4">"</p>
                <p className="text-earth-700 text-lg italic leading-relaxed mb-8">{testimonials[testimonialIndex].quote}</p>
                <p className="font-semibold text-earth-900">{testimonials[testimonialIndex].name}</p>
                <p className="text-earth-400 text-sm">{testimonials[testimonialIndex].role}</p>
              </motion.div>
            </AnimatePresence>
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setTestimonialIndex(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${i === testimonialIndex ? "bg-brand-500 w-5" : "bg-earth-300 w-2"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. FAQ ─────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-earth-50">
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp()}
            className="text-center mb-14"
          >
            <SectionLabel>FAQs</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-earth-900 mb-4">Common Questions</h2>
            <div className="w-16 h-1 bg-brand-500 mx-auto rounded-full" />
          </motion.div>

          <div className="space-y-3">
            {faqItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
                className="bg-white border border-earth-200 rounded-xl overflow-hidden hover:border-brand-200 transition-colors"
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)}
                  className="flex justify-between items-center w-full text-left px-6 py-5"
                >
                  <span className="font-semibold text-earth-900 text-sm pr-4">{item.question}</span>
                  <motion.div animate={{ rotate: openFaqIndex === i ? 90 : 0 }} transition={{ duration: 0.2 }}>
                    <FaChevronRight className="text-brand-400 shrink-0 text-sm" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openFaqIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-earth-500 text-sm leading-relaxed">{item.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. More Ways to Connect ────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp()}
            className="text-center mb-14"
          >
            <SectionLabel>More Ways to Connect</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-earth-900 mb-4">We're Here for You</h2>
            <div className="w-16 h-1 bg-brand-500 mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* WhatsApp */}
            <motion.div
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} viewport={{ once: true }}
              className="bg-white border border-earth-200 rounded-2xl p-7 shadow-warm hover:shadow-warm-lg hover:border-green-200 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mb-5 border border-green-100">
                <FaWhatsapp className="text-2xl text-green-500" />
              </div>
              <h3 className="text-lg font-display font-bold text-earth-900 mb-2">Instant WhatsApp Support</h3>
              <p className="text-earth-400 text-sm mb-5">Get immediate responses during business hours</p>
              <a
                href="https://wa.me/254799031449"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-full text-sm transition-colors"
              >
                Start Chat <FaArrowRight className="text-xs" />
              </a>
            </motion.div>

            {/* Book a Consultation */}
            <motion.div
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} viewport={{ once: true }}
              className="bg-white border border-earth-200 rounded-2xl p-7 shadow-warm hover:shadow-warm-lg hover:border-brand-200 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center mb-5 border border-brand-100">
                <FaCalendarAlt className="text-2xl text-brand-500" />
              </div>
              <h3 className="text-lg font-display font-bold text-earth-900 mb-2">Book a Consultation</h3>
              <p className="text-earth-400 text-sm mb-5">Schedule a dedicated session with our trade specialists</p>
              <a
                href={`https://wa.me/254799031449?text=${encodeURIComponent("Hi! I'd like to schedule a consultation with your team.")}`}
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-500 hover:bg-brand-600 text-white font-semibold rounded-full text-sm transition-colors shadow-sm"
              >
                <FaWhatsapp /> Book via WhatsApp <FaArrowRight className="text-xs" />
              </a>
            </motion.div>

            {/* Social */}
            <motion.div
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} viewport={{ once: true }}
              className="bg-white border border-earth-200 rounded-2xl p-7 shadow-warm hover:shadow-warm-lg hover:border-brand-200 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center mb-5 border border-brand-100">
                <FaSeedling className="text-2xl text-brand-500" />
              </div>
              <h3 className="text-lg font-display font-bold text-earth-900 mb-2">Follow Our Journey</h3>
              <p className="text-earth-400 text-sm mb-5">Connect with us on our social platforms</p>
              <div className="flex gap-2 flex-wrap">
                {["Facebook", "LinkedIn", "Instagram"].map((p) => (
                  <a
                    key={p} href="#"
                    className="px-3 py-2 bg-earth-50 hover:bg-brand-50 border border-earth-200 hover:border-brand-200 rounded-lg text-xs text-earth-600 hover:text-brand-600 font-medium transition-all"
                  >
                    {p}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 8. Closing CTA ─────────────────────────────────────────────────── */}
      <section className="py-24 bg-brand-500 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/wheat.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full -translate-x-1/3 translate-y-1/3" />

        <div className="container mx-auto px-6 relative">
          <motion.div
            className="max-w-2xl mx-auto text-center"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
          >
            <motion.span variants={fadeUp()} className="text-sm font-semibold text-brand-100 uppercase tracking-widest mb-4 block">
              Ready to Work Together?
            </motion.span>
            <motion.h2 variants={fadeUp(0.1)} className="text-3xl md:text-5xl font-display font-bold text-white mb-6 leading-snug">
              Start Your Partnership<br />with Vittorios Today
            </motion.h2>
            <motion.p variants={fadeUp(0.2)} className="text-brand-100 text-lg max-w-xl mx-auto mb-10">
              Whether you need a quote, a logistics partner, or a conversation — we're one message away.
            </motion.p>
            <motion.div variants={fadeUp(0.3)} className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <a
                href="#contact-form"
                className="px-8 py-4 bg-white hover:bg-earth-50 text-brand-600 font-semibold rounded-full transition-colors text-sm shadow-sm"
              >
                Send a Message
              </a>
              <a
                href="https://wa.me/254799031449"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/15 hover:bg-white/25 text-white font-semibold rounded-full border border-white/30 backdrop-blur-sm transition-colors text-sm"
              >
                <FaWhatsapp className="text-lg" /> WhatsApp Us
              </a>
            </motion.div>
            <motion.div variants={fadeUp(0.4)} className="flex flex-wrap justify-center gap-5">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-white/80 text-xs border border-white/15">
                <FaShieldAlt /> 100% Compliance Guarantee
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-white/80 text-xs border border-white/15">
                <FaClock /> 2h Response During Business Hours
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default ContactsPage;
