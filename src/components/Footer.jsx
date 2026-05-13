"use client";

import { useState } from "react";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import emailjs from "@emailjs/browser";

function Footer() {
  const currentYear = new Date().getFullYear();
  const [subEmail, setSubEmail]   = useState("");
  const [subStatus, setSubStatus] = useState(null); // null | "sending" | "success" | "error"

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!subEmail) return;
    setSubStatus("sending");
    try {
      await emailjs.send(
        "service_glh0yoh",
        "template_8919t07",
        { from_name: "Newsletter Subscriber", from_email: subEmail, phone: "", subject: "Newsletter Subscription", message: `New newsletter subscription from: ${subEmail}` },
        "mu8JNmKu-gMTErqQ2"
      );
      setSubStatus("success");
      setSubEmail("");
    } catch {
      setSubStatus("error");
    }
  };

  const footerLinks = [
    { name: 'Home',     path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About',    path: '/about' },
    { name: 'Contact',  path: '/contact' },
  ];

  const socialLinks = [
    { icon: <FaFacebook className="text-lg" />,  url: '#', label: 'Facebook' },
    { icon: <FaTwitter className="text-lg" />,   url: '#', label: 'Twitter' },
    { icon: <FaInstagram className="text-lg" />, url: '#', label: 'Instagram' },
    { icon: <FaLinkedin className="text-lg" />,  url: '#', label: 'LinkedIn' },
  ];

  const contactInfo = [
    { icon: <FaMapMarkerAlt />, text: 'P.O. Box 41, Bungoma' },
    { icon: <FaPhone />,        text: '+254 799 031 449' },
    { icon: <FaPhone />,        text: '+250 795 585 322' },
    { icon: <FaPhone />,        text: '+256 764 216 176' },
    { icon: <FaEnvelope />,     text: 'vittoriostrades@gmail.com' },
  ];

  return (
    <motion.footer
      className="bg-earth-50 border-t border-earth-200 text-earth-600"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Top accent bar */}
      <div className="h-1 bg-gradient-to-r from-brand-400 via-brand-500 to-brand-700" />

      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/images/vittorios logo.jpg"
                alt="Vittorios Trades"
                className="h-10 w-auto object-contain rounded"
              />
              <span className="text-xl font-display font-bold text-earth-900 tracking-tight">
                Vittorios Trades
              </span>
            </div>
            <p className="text-sm leading-relaxed text-earth-500 mb-5">
              Premier logistics and commodity trading across East Africa. Building lasting partnerships through reliability and excellence.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((s, i) => (
                <a
                  key={i}
                  href={s.url}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-earth-200 flex items-center justify-center text-earth-500 hover:bg-brand-500 hover:text-white transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-earth-400 mb-5">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.path}
                    className="text-sm text-earth-500 hover:text-brand-500 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-earth-400 mb-5">
              Contact Us
            </h3>
            <ul className="space-y-3">
              {contactInfo.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-brand-500 mt-0.5 shrink-0">{item.icon}</span>
                  <span className="text-sm text-earth-500">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-earth-400 mb-5">
              Stay Updated
            </h3>
            <p className="text-sm text-earth-500 mb-4">
              Subscribe for market updates and trade insights.
            </p>

            {subStatus === "success" ? (
              <p className="text-sm text-green-700 bg-green-50 border border-green-200 rounded-lg px-4 py-3">
                Subscribed! We'll be in touch.
              </p>
            ) : (
              <form onSubmit={handleSubscribe} className="relative">
                <input
                  type="email"
                  required
                  placeholder="Your email address"
                  value={subEmail}
                  onChange={(e) => setSubEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-white border border-earth-200 text-earth-800 placeholder-earth-400 text-sm focus:outline-none focus:ring-2 focus:ring-brand-200 focus:border-brand-400 transition"
                />
                <button
                  type="submit"
                  disabled={subStatus === "sending"}
                  className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-1.5 bg-brand-500 hover:bg-brand-600 text-white rounded-md text-xs font-semibold transition-colors disabled:opacity-60"
                >
                  {subStatus === "sending" ? "…" : "Go"}
                </button>
              </form>
            )}
            {subStatus === "error" && (
              <p className="text-xs text-red-600 mt-2">Failed to subscribe. Try again.</p>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-earth-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-earth-400">
            © {currentYear} Vittorios Trades. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-xs text-earth-400 hover:text-brand-500 transition-colors">Privacy Policy</Link>
            <Link to="/terms"   className="text-xs text-earth-400 hover:text-brand-500 transition-colors">Terms of Service</Link>
          </div>
        </div>

        {/* Creator credit */}
        <div className="mt-6 pt-6 border-t border-earth-200 text-center">
          <p className="text-xs text-earth-400">
            Website by{' '}
            <a href="https://glimmerink.co.ke" target="_blank" rel="noopener noreferrer" className="text-earth-500 hover:text-brand-500 transition-colors font-medium">
              GlimmerInk Creations
            </a>
            {' '}·{' '}
            <a href="https://wa.me/254746527253" target="_blank" rel="noopener noreferrer" className="text-earth-500 hover:text-brand-500 transition-colors">WhatsApp</a>
          </p>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;
