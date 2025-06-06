"use client";

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms of Service", path: "/terms" }
  ];

  const socialLinks = [
    { icon: <FaFacebook className="text-xl" />, url: "#" },
    { icon: <FaTwitter className="text-xl" />, url: "#" },
    { icon: <FaInstagram className="text-xl" />, url: "#" },
    { icon: <FaLinkedin className="text-xl" />, url: "#" }
  ];

  const contactInfo = [
    { icon: <FaMapMarkerAlt />, text: "P.O. Box 41, Bungoma" },
    { icon: <FaPhone />, text: "+254 799031449" },
      { icon: <FaPhone />, text: "+250 795585322" },
        { icon: <FaPhone />, text: "+256 764216176" },
    { icon: <FaEnvelope />, text: "vittoriostrades@gmail.com" }
  ];

  return (
    <motion.footer
      className="relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-charcoalBlack opacity-95 z-0"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-deepGreen via-goldenWheat to-warmBrown z-10"></div>

      {/* Main footer content */}
      <div className="relative z-10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          {/* Footer grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

            {/* Brand info */}
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex flex-col items-center md:items-start"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-deepGreen to-warmBrown flex items-center justify-center mr-3">
                  <span className="text-goldenWheat font-bold text-2xl">V</span>
                </div>
                <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-goldenWheat to-warmBrown">
                  Vittorios Trades
                </h2>
              </div>
              <p className="text-neutralSand text-sm text-center md:text-left">
                Premium trade services with unmatched quality and professionalism. Building trust through excellence since 2025.
              </p>
            </motion.div>

            {/* Quick links */}
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex flex-col items-center md:items-start"
            >
              <h3 className="text-lg font-semibold text-goldenWheat mb-4 border-b border-warmBrown pb-2 w-full text-center md:text-left">
                Quick Links
              </h3>
              <ul className="space-y-2">
                {footerLinks.map((link, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Link
                      href={link.path}
                      className="text-neutralSand hover:text-goldenWheat text-sm transition-colors duration-300 flex items-center"
                    >
                      <span className="w-2 h-2 bg-goldenWheat rounded-full mr-2"></span>
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact info */}
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex flex-col items-center md:items-start"
            >
              <h3 className="text-lg font-semibold text-goldenWheat mb-4 border-b border-warmBrown pb-2 w-full text-center md:text-left">
                Contact Us
              </h3>
              <ul className="space-y-3">
                {contactInfo.map((item, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex items-start"
                  >
                    <span className="text-goldenWheat mr-3 mt-1">{item.icon}</span>
                    <span className="text-neutralSand text-sm">{item.text}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Newsletter */}
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex flex-col items-center md:items-start"
            >
              <h3 className="text-lg font-semibold text-goldenWheat mb-4 border-b border-warmBrown pb-2 w-full text-center md:text-left">
                Newsletter
              </h3>
              <p className="text-neutralSand text-sm mb-4 text-center md:text-left">
                Subscribe to our newsletter for the latest updates and offers.
              </p>
              <div className="w-full">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-3 rounded-lg bg-charcoalBlack border border-warmBrown text-neutralSand placeholder-neutralSand placeholder-opacity-50 focus:outline-none focus:ring-2 focus:ring-goldenWheat"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-1 bg-gradient-to-r from-goldenWheat to-warmBrown text-charcoalBlack rounded-md font-medium text-sm"
                  >
                    Subscribe
                  </motion.button>
                </div>
                <div className="flex justify-center md:justify-start space-x-4 mt-6">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -5, scale: 1.1, color: "#D4AF37" }}
                      whileTap={{ scale: 0.9 }}
                      className="text-neutralSand hover:text-goldenWheat transition-colors duration-300"
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Copyright section */}
          <div className="pt-8 mt-8 border-t border-warmBrown border-opacity-30">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-neutralSand text-sm mb-4 md:mb-0">
                © {currentYear} Vittorios Trades. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <Link href="#" className="text-neutralSand hover:text-goldenWheat text-sm transition-colors duration-300">
                  Privacy Policy
                </Link>
                <Link href="#" className="text-neutralSand hover:text-goldenWheat text-sm transition-colors duration-300">
                  Terms of Service
                </Link>
                <Link href="#" className="text-neutralSand hover:text-goldenWheat text-sm transition-colors duration-300">
                  Sitemap
                </Link>
              </div>
            </div>
          </div>

         {/* Creator credit */}
<div className="pt-6 border-t border-warmBrown border-opacity-30">
  <p className="text-neutralSand text-xs text-center mb-4 md:mb-0">
    Website Created by{' '}
    <a 
      href="https://glimmerink.netlify.app" 
      target="_blank" 
      rel="noopener noreferrer"
      className="font-semibold hover:text-goldenWheat"
    >
      GlimmerInk Creations
    </a>{' '}
    |{' '}
    <a 
      href="tel:+254746527253" 
      className="hover:text-goldenWheat"
    >
      +254 746 527 253
    </a>{' '}
    |{' '}
    <a 
      href="https://wa.me/254746527253" 
      target="_blank" 
      rel="noopener noreferrer"
      className="hover:text-goldenWheat"
    >
      WhatsApp
    </a>
  </p>
</div>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;
