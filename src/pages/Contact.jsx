import { motion } from "framer-motion";
import { useState } from "react";
import { FaPhone, FaMapMarkerAlt, FaClock, FaWhatsapp, FaTruck, FaSeedling, FaCalendarAlt, FaChevronRight } from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const ContactsPage = () => {
  // State for form and calendar
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [showCalendar, setShowCalendar] = useState(false);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  // Testimonials data
  const testimonials = [
    {
      quote: "Vittorios streamlined our maize exports to Uganda—reliable and transparent pricing.",
      name: "AgriCo Ltd.",
      role: "Nakuru-based Agro Exporter"
    },
    {
      quote: "Their clearing services at the Uganda border saved us 3 days of delays.",
      name: "TransEast Logistics",
      role: "Regional Transport Partner"
    }
  ];

  // FAQ data
  const faqItems = [
    {
      question: "What's your typical response time for inquiries?",
      answer: "We respond to all business inquiries within 2 hours during working days (8AM-5PM EAT)."
    },
    {
      question: "Do you handle customs clearance?",
      answer: "Yes, we provide full customs brokerage services at all East African borders."
    },
    {
      question: "What regions do you operate in?",
      answer: "We primarily serve Kenya, Uganda, Tanzania, and Rwanda with our logistics network."
    },
    {
      question: "How do you ensure product quality?",
      answer: "All commodities are inspected at source and destination by our quality assurance teams."
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
    // Consider adding a success message
  };

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="bg-charcoalBlack text-neutralSand">
      {/* Calendar Modal */}
      {showCalendar && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-charcoalBlack rounded-xl p-6 max-w-md w-full border border-goldenWheat/30"
          >
            <h3 className="text-2xl font-bold mb-4 text-goldenWheat">Schedule Meeting</h3>
            <div className="h-96 bg-charcoalBlack/50 rounded-lg mb-4 flex items-center justify-center">
              <p className="text-neutralSand/70">Calendar integration would appear here</p>
            </div>
            <button 
              onClick={() => setShowCalendar(false)}
              className="w-full py-3 border border-goldenWheat/50 text-goldenWheat rounded-lg hover:bg-goldenWheat/10 transition-colors"
            >
              Close
            </button>
          </motion.div>
        </div>
      )}

      {/* ===== 1. HERO SECTION ===== */}
      <section className="relative h-[70vh] flex items-center justify-center bg-gradient-to-br from-deepGreen/30 to-charcoalBlack overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80')] bg-cover bg-center opacity-20"/>
        <div className="absolute inset-0 bg-gradient-to-t from-charcoalBlack via-transparent to-transparent z-0"/>
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-6 text-center relative z-10"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-goldenWheat to-warmBrown">
              Let's Connect & Grow Together
            </span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
            Reach out for logistics solutions, trade inquiries, or strategic partnerships across East Africa
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-goldenWheat to-warmBrown text-charcoalBlack font-bold rounded-full"
          >
            Get in Touch <FaChevronRight className="inline ml-2"/>
          </motion.button>
        </motion.div>
      </section>

      {/* ===== 2. CONTACT CHANNELS ===== */}
      <section className="py-20 bg-gradient-to-b from-charcoalBlack/80 to-deepGreen/10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* General Inquiries */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-charcoalBlack/60 backdrop-blur-sm p-8 rounded-xl border border-warmBrown/20 hover:border-goldenWheat/40 transition-all"
            >
              <div className="text-goldenWheat text-4xl mb-4">
                <FaPhone />
              </div>
              <h3 className="text-2xl font-bold mb-4">General Inquiries</h3>
              <p className="mb-6 text-neutralSand/80">For all business communications</p>
              <div className="space-y-2">
                <p><a href="mailto:vittoriotrades@gmail.com" className="hover:text-goldenWheat transition-colors">vittoriotrades@gmail.com</a></p>
                <p><a href="tel:+254799031449" className="hover:text-goldenWheat transition-colors">+254 799 031449</a></p>
                 <p><a href="tel:+256 7664216176" className="hover:text-goldenWheat transition-colors">+256 7664216176</a></p>
              </div>
            </motion.div>

            {/* Office Address */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-charcoalBlack/60 backdrop-blur-sm p-8 rounded-xl border border-warmBrown/20 hover:border-goldenWheat/40 transition-all"
            >
              <div className="text-goldenWheat text-4xl mb-4">
                <FaMapMarkerAlt />
              </div>
              <h3 className="text-2xl font-bold mb-4">Headquarters</h3>
              <p className="mb-6 text-neutralSand/80">Visit our main operational hub</p>
              <div className="space-y-2">
                <p>P.O. BOX 41, BUNGOMA</p>
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-goldenWheat hover:underline w-fit"
                >
                  <SiGooglemaps /> View on Map
                </a>
              </div>
            </motion.div>

            {/* Business Hours */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-charcoalBlack/60 backdrop-blur-sm p-8 rounded-xl border border-warmBrown/20 hover:border-goldenWheat/40 transition-all"
            >
              <div className="text-goldenWheat text-4xl mb-4">
                <FaClock />
              </div>
              <h3 className="text-2xl font-bold mb-4">Business Hours</h3>
              <p className="mb-6 text-neutralSand/80">East Africa Time (GMT+3)</p>
              <div className="space-y-2">
                <p>Monday - Friday: 8AM–5PM</p>
                <p>Saturday: 9AM–1PM</p>
                <p className="text-goldenWheat/80 mt-4">Sunday: Closed</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== 3. EMERGENCY HOTLINE ===== */}
      <section className="py-16 bg-gradient-to-r from-rose-900/30 to-charcoalBlack border-y border-rose-800/40">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="inline-block mb-6"
            >
              <FaTruck className="text-5xl text-rose-500 mx-auto" />
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-400 to-goldenWheat">
                24/7 Emergency Logistics Hotline
              </span>
            </h2>
            <p className="text-xl mb-6 max-w-2xl mx-auto">
              For urgent shipment delays, border clearance issues, or time-sensitive commodity movements
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a 
                href="tel:+254799031449" 
                className="px-8 py-4 bg-rose-700 hover:bg-rose-600 text-white font-bold rounded-full text-xl flex items-center gap-3 transition-colors"
              >
                <FaPhone /> +254 799 031449 (Press 2)
              </a>
              <a 
                href="https://wa.me/254799031449" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-green-600 hover:bg-green-500 text-white font-bold rounded-full text-xl flex items-center gap-3 transition-colors"
              >
                <FaWhatsapp /> WhatsApp Alert
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== 4. CONTACT FORM ===== */}
      <section className="py-20 bg-gradient-to-b from-charcoalBlack to-deepGreen/10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-charcoalBlack/60 backdrop-blur-sm p-8 md:p-10 rounded-xl border border-warmBrown/20"
            >
              <h2 className="text-3xl font-bold mb-2 text-goldenWheat">Send Us a Message</h2>
              <p className="text-neutralSand/80 mb-8">We typically respond within 2 business hours</p>
              
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-neutralSand/80 mb-2">Full Name *</label>
                    <input 
                      type="text" 
                      id="name" 
                      required 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-charcoalBlack border border-warmBrown/30 focus:border-goldenWheat/50 rounded-lg px-4 py-3 text-neutralSand outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-neutralSand/80 mb-2">Email *</label>
                    <input 
                      type="email" 
                      id="email" 
                      required 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-charcoalBlack border border-warmBrown/30 focus:border-goldenWheat/50 rounded-lg px-4 py-3 text-neutralSand outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-neutralSand/80 mb-2">Phone (Optional)</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-charcoalBlack border border-warmBrown/30 focus:border-goldenWheat/50 rounded-lg px-4 py-3 text-neutralSand outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-neutralSand/80 mb-2">Subject *</label>
                  <select 
                    id="subject" 
                    required 
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    className="w-full bg-charcoalBlack border border-warmBrown/30 focus:border-goldenWheat/50 rounded-lg px-4 py-3 text-neutralSand outline-none transition-colors"
                  >
                    <option value="">Select an option</option>
                    <option value="trading">Commodity Trading Inquiry</option>
                    <option value="logistics">Logistics Support</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-neutralSand/80 mb-2">Message *</label>
                  <textarea 
                    id="message" 
                    rows="5" 
                    required 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-charcoalBlack border border-warmBrown/30 focus:border-goldenWheat/50 rounded-lg px-4 py-3 text-neutralSand outline-none transition-colors"
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-goldenWheat to-warmBrown text-charcoalBlack font-bold py-4 rounded-lg flex items-center justify-center gap-2"
                >
                  Send Message <FaChevronRight />
                </motion.button>
              </form>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative h-full min-h-[400px] rounded-xl overflow-hidden border border-goldenWheat/30 shadow-xl"
            >
              {!mapLoaded && (
                <div className="absolute inset-0 bg-charcoalBlack/80 flex items-center justify-center">
                  <div className="animate-pulse text-goldenWheat/50">Loading map...</div>
                </div>
              )}
              <iframe 
                onLoad={() => setMapLoaded(true)}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7536223157963!2d34.55864761475395!3d0.569599999799466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMMKwMzQnMTAuNiJOIDM0wrAzMyczMS4xIkU!5e0!3m2!1sen!2ske!4v1620000000000!5m2!1sen!2ske"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== 5. TESTIMONIALS ===== */}
      <section className="py-20 bg-gradient-to-b from-deepGreen/10 to-charcoalBlack">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-goldenWheat to-warmBrown">
              Trusted by East Africa's Traders
            </span>
          </h2>

          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 5000 }}
            pagination={{ clickable: true }}
            loop={true}
            autoHeight={true}
            className="max-w-4xl mx-auto pb-16"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-charcoalBlack/60 backdrop-blur-sm p-8 md:p-12 rounded-xl border border-warmBrown/20 text-center">
                  <blockquote className="text-xl md:text-2xl italic mb-8">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="font-bold text-goldenWheat">{testimonial.name}</div>
                  <div className="text-neutralSand/80">{testimonial.role}</div>
                  <div className="mt-8">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-3 bg-gradient-to-r from-goldenWheat/80 to-warmBrown/80 text-charcoalBlack font-bold rounded-full"
                    >
                      Start Your Partnership <FaChevronRight className="inline ml-2"/>
                    </motion.button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* ===== 6. FAQ SECTION ===== */}
      <section className="py-20 bg-gradient-to-b from-deepGreen/10 to-charcoalBlack">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-goldenWheat">
            Common Questions
          </h2>
          
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <motion.div 
                key={index}
                whileHover={{ x: 5 }}
                className="border-b border-goldenWheat/10 pb-4"
              >
                <button 
                  onClick={() => toggleFaq(index)}
                  className="flex justify-between items-center w-full text-left"
                >
                  <h3 className="text-lg font-medium text-goldenWheat">{item.question}</h3>
                  <motion.div
                    animate={{ rotate: openFaqIndex === index ? 90 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaChevronRight className="transition-transform duration-300" />
                  </motion.div>
                </button>
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ 
                    opacity: openFaqIndex === index ? 1 : 0,
                    height: openFaqIndex === index ? 'auto' : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="mt-2 text-neutralSand/80">{item.answer}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 7. ENHANCED COMMUNICATION SECTION ===== */}
      <section className="py-16 bg-gradient-to-b from-deepGreen to-charcoalBlack border-t border-goldenWheat/20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Live Chat */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-charcoalBlack/60 p-6 rounded-xl border border-goldenWheat/20 hover:border-goldenWheat/40 transition-all"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-green-600/20 p-3 rounded-full">
                  <FaWhatsapp className="text-2xl text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-goldenWheat">Instant WhatsApp Support</h3>
              </div>
              <p className="mb-4 text-neutralSand/80">Get immediate responses during business hours</p>
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="https://wa.me/254799031449"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-full font-medium flex items-center gap-2 transition-colors"
              >
                Start Chat <FaChevronRight className="text-sm" />
              </motion.a>
            </motion.div>

            {/* Appointment Booking */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-charcoalBlack/60 p-6 rounded-xl border border-goldenWheat/20 hover:border-goldenWheat/40 transition-all"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-blue-600/20 p-3 rounded-full">
                  <FaCalendarAlt className="text-2xl text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-goldenWheat">Schedule Consultation</h3>
              </div>
              <p className="mb-4 text-neutralSand/80">Book a dedicated meeting with our experts</p>
              <button 
                onClick={() => setShowCalendar(true)}
                className="w-full bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-full font-medium flex items-center justify-center gap-2 transition-colors"
              >
                View Calendar <FaChevronRight className="text-sm" />
              </button>
            </motion.div>

            {/* Social Media */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-charcoalBlack/60 p-6 rounded-xl border border-goldenWheat/20 hover:border-goldenWheat/40 transition-all"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-amber-600/20 p-3 rounded-full">
                  <FaSeedling className="text-2xl text-amber-400" />
                </div>
                <h3 className="text-xl font-bold text-goldenWheat">Follow Our Journey</h3>
              </div>
              <p className="mb-4 text-neutralSand/80">Connect on our social platforms</p>
              <div className="flex gap-3">
                {['Facebook', 'LinkedIn', 'Instagram'].map((platform) => (
                  <motion.a
                    key={platform}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href="#"
                    className="bg-charcoalBlack/80 hover:bg-goldenWheat/10 border border-goldenWheat/20 p-3 rounded-lg transition-colors"
                  >
                    <span className="sr-only">{platform}</span>
                    {/* Replace with actual icons */}
                    <div className="w-5 h-5 bg-current opacity-70 rounded-sm" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactsPage;