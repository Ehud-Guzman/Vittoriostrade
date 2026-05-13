import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaTruck,
  FaWarehouse,
  FaGlobeAfrica,
  FaSearch,
  FaWhatsapp,
} from "react-icons/fa";
import ProductCatalogue from "../components/ProductCatalogue";

// ─── Shared animation helpers ────────────────────────────────────────────────
const fadeUp = (delay = 0) => ({
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: "easeOut" } },
});

const stagger = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

// ─── Data ─────────────────────────────────────────────────────────────────────
const services = [
  {
    title: "Commodity Trading",
    description:
      "Sourcing and supplying premium cereals including maize, wheat, rice, and sorghum across East Africa.",
    icon: <FaWarehouse className="text-3xl text-brand-500" />,
  },
  {
    title: "Regional Logistics",
    description:
      "Efficient transportation and distribution solutions tailored for East African markets.",
    icon: <FaTruck className="text-3xl text-brand-500" />,
  },
  {
    title: "Import / Export",
    description:
      "End-to-end supply chain management for seamless cross-border trade operations.",
    icon: <FaGlobeAfrica className="text-3xl text-brand-500" />,
  },
];

const stats = [
  { value: "100+", label: "Satisfied Clients" },
  { value: "5+",   label: "Years Experience" },
  { value: "10K+", label: "Tons Moved Annually" },
  { value: "4",    label: "Countries Served" },
];

const commodities = [
  { name: "Maize",   image: "/images/maize plantation.jpg", countries: ["Kenya", "Uganda", "Tanzania"] },
  { name: "Wheat",   image: "/images/wheat.jpg",            countries: ["Ethiopia", "Kenya"] },
  { name: "Sorghum", image: "/images/products/sorghum-(2).webp", countries: ["Kenya", "Uganda"] },
];


// ─── Component ────────────────────────────────────────────────────────────────
function Home() {

  return (
    <div className="bg-white text-earth-800 font-body">

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <video
          autoPlay muted loop playsInline preload="auto"
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-earth-900/60 via-earth-900/50 to-earth-900/75 z-10" />

        <div className="container mx-auto px-6 relative z-20 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp(0.1)} className="flex justify-center mb-7">
              <img
                src="/images/vittorios logo.jpg"
                alt="Vittorios Trades"
                className="h-24 md:h-32 w-auto object-contain drop-shadow-2xl"
              />
            </motion.div>

            <motion.h1
              variants={fadeUp(0.2)}
              className="text-4xl md:text-6xl font-display font-bold text-white mb-5 leading-tight"
            >
              East Africa's Trusted<br />
              <span className="text-brand-300">Commodity Trading Partner</span>
            </motion.h1>

            <motion.p
              variants={fadeUp(0.3)}
              className="text-lg md:text-xl text-white/75 max-w-2xl mx-auto mb-10"
            >
              Premium cereals, pulses, and logistics solutions connecting farmers to markets across the region.
            </motion.p>

            <motion.div variants={fadeUp(0.4)} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-3.5 bg-brand-500 hover:bg-brand-600 text-white font-semibold rounded-full transition-colors duration-200 shadow-brand text-sm"
              >
                Get a Quote
              </Link>
              <a
                href="#products"
                className="px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full border border-white/30 backdrop-blur-sm transition-colors duration-200 text-sm"
              >
                View Products
              </a>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/40 z-20"
        >
          <FaArrowRight className="rotate-90 text-xl" />
        </motion.div>
      </section>

      {/* ── Stats bar ─────────────────────────────────────────────────────── */}
      <section className="bg-brand-500 py-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl md:text-4xl font-display font-bold text-white mb-1">{s.value}</div>
                <div className="text-brand-100 text-sm">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About ─────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <span className="text-sm font-semibold text-brand-500 uppercase tracking-widest mb-3 block">Who We Are</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-earth-900 mb-6 leading-snug">
                Your Trusted Trade Partner in East Africa
              </h2>
              <p className="text-earth-500 mb-5 leading-relaxed">
                Vittorios Trades is a dynamic logistics and trading company specialising in the sourcing, transportation, and distribution of cereals and their byproducts across East Africa.
              </p>
              <p className="text-earth-500 mb-8 leading-relaxed">
                With our regional expertise and strong network, we provide efficient, cost-effective, and seamless solutions for commodity trading and supply chain management.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3 bg-brand-500 hover:bg-brand-600 text-white font-semibold rounded-full transition-colors duration-200 text-sm shadow-brand"
              >
                Learn More <FaArrowRight />
              </Link>
            </motion.div>

            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-2 gap-4">
                {[
                  { src: "/images/legume sacks.jpg", alt: "Commodity Trading" },
                  { src: "/images/logistics.jpg",    alt: "Logistics",         mt: true },
                  { src: "/images/warehouse.jpg",    alt: "Warehouse" },
                  { src: "/images/EA flags.jpg",     alt: "East Africa",       mt: true },
                ].map((img, i) => (
                  <div key={i} className={`relative h-56 rounded-xl overflow-hidden shadow-warm ${img.mt ? "mt-8" : ""}`}>
                    <img src={img.src} alt={img.alt} className="w-full h-full object-cover" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-earth-900/40 to-transparent" />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Core Commodities ──────────────────────────────────────────────── */}
      <section className="py-24 bg-earth-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp()}
            className="text-center mb-14"
          >
            <span className="text-sm font-semibold text-brand-500 uppercase tracking-widest mb-3 block">What We Trade</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-earth-900 mb-4">Our Core Commodities</h2>
            <div className="w-16 h-1 bg-brand-500 mx-auto mb-5 rounded-full" />
            <p className="text-earth-500 max-w-xl mx-auto">Premium agricultural products sourced across East Africa</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            initial="hidden" whileInView="visible" variants={stagger} viewport={{ once: true }}
          >
            {commodities.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp(i * 0.15)}
                className="relative h-72 rounded-2xl overflow-hidden group shadow-warm hover:shadow-warm-lg transition-shadow duration-300"
              >
                <img
                  src={item.image} alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-earth-900/80 via-earth-900/20 to-transparent p-6 flex flex-col justify-end">
                  <h3 className="text-2xl font-display font-bold text-white mb-2">{item.name}</h3>
                  <div className="flex flex-wrap gap-2">
                    {item.countries.map((c, j) => (
                      <span key={j} className="bg-white/20 backdrop-blur-sm text-white px-3 py-0.5 rounded-full text-xs font-medium">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Product Catalogue ─────────────────────────────────────────────── */}
      <ProductCatalogue />

      {/* ── Services ──────────────────────────────────────────────────────── */}
      <section className="py-24 bg-brand-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp()}
            className="text-center mb-14"
          >
            <span className="text-sm font-semibold text-brand-500 uppercase tracking-widest mb-3 block">What We Do</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-earth-900 mb-4">Our Core Services</h2>
            <div className="w-16 h-1 bg-brand-500 mx-auto mb-5 rounded-full" />
            <p className="text-earth-500 max-w-xl mx-auto">Comprehensive solutions tailored to your commodity trading and logistics needs</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {services.map((svc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-warm hover:shadow-warm-lg border border-earth-100 hover:border-brand-200 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-brand-50 rounded-xl flex items-center justify-center mb-5 border border-brand-100">
                  {svc.icon}
                </div>
                <h3 className="text-xl font-display font-bold text-earth-900 mb-3">{svc.title}</h3>
                <p className="text-earth-500 text-sm leading-relaxed mb-5">{svc.description}</p>
                <Link to="/services" className="inline-flex items-center gap-2 text-brand-500 hover:text-brand-700 text-sm font-semibold transition-colors">
                  Learn more <FaArrowRight className="text-xs" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ───────────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp()}
            className="text-center mb-14"
          >
            <span className="text-sm font-semibold text-brand-500 uppercase tracking-widest mb-3 block">How It Works</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-earth-900 mb-4">Our Process</h2>
            <div className="w-16 h-1 bg-brand-500 mx-auto mb-5 rounded-full" />
            <p className="text-earth-500">Streamlined operations from farm to market</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <FaSearch className="text-xl text-white" />,   title: "Sourcing",  desc: "Partner with local farmers across East Africa" },
              { icon: <FaWarehouse className="text-xl text-white" />, title: "Storage",   desc: "Climate-controlled warehousing facilities" },
              { icon: <FaTruck className="text-xl text-white" />,     title: "Logistics", desc: "Regional distribution to your market" },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.18 }}
                viewport={{ once: true }}
                className="relative bg-white border border-earth-200 rounded-2xl p-8 text-center shadow-warm hover:shadow-warm-lg hover:border-brand-200 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-brand-500 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-brand">
                  {step.icon}
                </div>
                <div className="absolute -top-3 -right-3 w-7 h-7 bg-brand-100 text-brand-600 rounded-full text-xs font-bold flex items-center justify-center border border-brand-200">
                  {i + 1}
                </div>
                <h4 className="font-display font-bold text-earth-900 text-lg mb-2">{step.title}</h4>
                <p className="text-earth-500 text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-brand-50 border-t border-brand-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-100 rounded-full translate-x-1/2 -translate-y-1/2 opacity-60" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-100 rounded-full -translate-x-1/3 translate-y-1/3 opacity-60" />

        <div className="container mx-auto px-6 relative">
          <motion.div
            className="text-center max-w-2xl mx-auto"
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={stagger}
          >
            <motion.span variants={fadeUp()} className="text-sm font-semibold text-brand-500 uppercase tracking-widest mb-4 block">
              Ready to Trade?
            </motion.span>
            <motion.h2 variants={fadeUp(0.1)} className="text-3xl md:text-5xl font-display font-bold text-earth-900 mb-6 leading-snug">
              Streamline Your East African<br />Trade Operations
            </motion.h2>
            <motion.p variants={fadeUp(0.2)} className="text-earth-500 text-lg max-w-2xl mx-auto mb-10">
              Partner with Vittorios Trades for reliable, efficient, and cost-effective logistics and commodity trading solutions.
            </motion.p>
            <motion.div variants={fadeUp(0.3)} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-brand-500 hover:bg-brand-600 text-white font-semibold rounded-full transition-colors duration-200 shadow-brand text-sm"
              >
                Get in Touch
              </Link>
              <a
                href="https://wa.me/254799031449"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-earth-50 text-earth-700 font-semibold rounded-full border border-earth-200 transition-colors duration-200 text-sm shadow-warm"
              >
                <FaWhatsapp className="text-green-500 text-lg" /> WhatsApp Us
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}

export default Home;
