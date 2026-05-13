import { motion } from "framer-motion";
import { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight, FaArrowDown, FaShieldAlt, FaClock,
  FaWarehouse, FaTruck, FaGlobeAfrica,
  FaWhatsapp, FaSeedling, FaRoute, FaHandshake, FaCheckCircle,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const fadeUp = (delay = 0) => ({
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: "easeOut" } },
});
const stagger = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

// ─── 1. Hero ──────────────────────────────────────────────────────────────────
const HeroSection = () => (
  <section className="relative h-screen overflow-hidden">
    <video
      className="absolute inset-0 w-full h-full object-cover z-0"
      autoPlay muted loop playsInline preload="auto"
    >
      <source src="/videos/hero02.mp4" type="video/mp4" />
    </video>
    <div className="absolute inset-0 bg-gradient-to-b from-earth-900/65 via-earth-900/50 to-earth-900/75 z-10" />

    <div className="absolute inset-0 flex flex-col items-center justify-center px-6 z-20">
      <motion.div
        initial="hidden" animate="visible" variants={stagger}
        className="text-center max-w-3xl"
      >
        <motion.span variants={fadeUp(0.1)} className="text-sm font-semibold text-brand-300 uppercase tracking-widest mb-4 block">
          What We Offer
        </motion.span>
        <motion.h1 variants={fadeUp(0.2)} className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight">
          Trade & Logistics,<br />
          <span className="text-brand-300">Perfected</span>
        </motion.h1>
        <motion.p variants={fadeUp(0.3)} className="text-xl md:text-2xl text-white/75 mb-10">
          End-to-end solutions for agricultural commodity trading across East Africa
        </motion.p>
        <motion.div variants={fadeUp(0.4)} className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact" className="px-8 py-3.5 bg-brand-500 hover:bg-brand-600 text-white font-semibold rounded-full transition-colors text-sm shadow-brand">
            Get a Quote
          </Link>
          <a href="#services" className="px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full border border-white/30 backdrop-blur-sm transition-colors text-sm">
            Explore Services
          </a>
        </motion.div>
      </motion.div>
    </div>

    <motion.div
      animate={{ y: [0, 10, 0] }}
      transition={{ repeat: Infinity, duration: 2 }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/40 z-20"
    >
      <FaArrowDown className="text-xl" />
    </motion.div>
  </section>
);

// ─── 2. Stats Bar ─────────────────────────────────────────────────────────────
const StatsBar = () => {
  const stats = [
    { value: "10K+", label: "Tons Moved / Month",    icon: <FaWarehouse /> },
    { value: "47",   label: "Trucks in Fleet",        icon: <FaTruck /> },
    { value: "3",    label: "Border Route Hubs",      icon: <FaGlobeAfrica /> },
    { value: "72h",  label: "Avg. Border Clearance",  icon: <FaClock /> },
  ];
  return (
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
              <div className="flex justify-center text-brand-200 text-xl mb-1.5">{s.icon}</div>
              <div className="text-3xl md:text-4xl font-display font-bold text-white mb-1">{s.value}</div>
              <div className="text-brand-100 text-sm">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── 3. Services Grid ─────────────────────────────────────────────────────────
const ServicesGrid = () => {
  const services = [
    {
      title: "Commodity Trading",
      icon: <FaWarehouse className="text-3xl text-brand-500" />,
      shortDesc: "Direct sourcing of maize, wheat, rice, sorghum, and pulses at competitive prices.",
      features: ["Quality control lab testing", "Bulk aggregation discounts", "Market price hedging"],
      stat: "10,000+ tons traded monthly",
      enquiry: "Hi! I'd like to enquire about Commodity Trading services.",
    },
    {
      title: "Regional Logistics",
      icon: <FaTruck className="text-3xl text-brand-500" />,
      shortDesc: "Efficient transportation across Kenya, Uganda, Tanzania, and Rwanda.",
      features: ["Real-time GPS tracking", "Cross-border expertise", "Temperature-controlled options", "98% on-time delivery"],
      stat: "47 trucks in fleet",
      enquiry: "Hi! I'd like to enquire about Regional Logistics services.",
    },
    {
      title: "Import / Export Solutions",
      icon: <FaGlobeAfrica className="text-3xl text-brand-500" />,
      shortDesc: "Seamless customs clearance and documentation at all East African borders.",
      features: ["Kenya-Uganda-Rwanda routes", "Tariff optimisation", "Documentation handling", "24/7 clearance support"],
      stat: "72h average clearance time",
      enquiry: "Hi! I'd like to enquire about Import/Export services.",
    },
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={fadeUp()}
          className="text-center mb-14"
        >
          <span className="text-sm font-semibold text-brand-500 uppercase tracking-widest mb-3 block">Our Offer</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-earth-900 mb-4">Core Services</h2>
          <div className="w-16 h-1 bg-brand-500 mx-auto mb-5 rounded-full" />
          <p className="text-earth-500 max-w-xl mx-auto">Comprehensive solutions tailored for East African commodity trade</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {services.map((svc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              viewport={{ once: true }}
              className="bg-white border border-earth-200 rounded-2xl p-8 shadow-warm hover:shadow-warm-lg hover:border-brand-200 transition-all duration-300 flex flex-col"
            >
              <div className="w-14 h-14 bg-brand-50 rounded-xl flex items-center justify-center mb-5 border border-brand-100">
                {svc.icon}
              </div>
              <h3 className="text-xl font-display font-bold text-earth-900 mb-2">{svc.title}</h3>
              <p className="text-earth-500 text-sm mb-5 leading-relaxed">{svc.shortDesc}</p>

              <ul className="space-y-2 mb-6 flex-1">
                {svc.features.map((f, fi) => (
                  <li key={fi} className="flex items-start gap-2 text-sm text-earth-600">
                    <FaCheckCircle className="text-brand-400 text-base shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="pt-5 border-t border-earth-100 flex items-center justify-between gap-3">
                <p className="text-xs font-semibold text-brand-500 uppercase tracking-wide leading-snug">
                  {svc.stat}
                </p>
                <a
                  href={`https://wa.me/254799031449?text=${encodeURIComponent(svc.enquiry)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2 bg-brand-500 hover:bg-brand-600 text-white text-xs font-semibold rounded-full transition-colors shadow-sm"
                >
                  Enquire <FaArrowRight className="text-[10px]" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── 4. Process ───────────────────────────────────────────────────────────────
const ProcessFlow = () => {
  const steps = [
    { icon: <FaSeedling />,  title: "Sourcing & Quality Control", desc: "Direct partnerships with verified farmers and cooperatives" },
    { icon: <FaWarehouse />, title: "Aggregation & Storage",       desc: "Climate-controlled warehouses across East Africa" },
    { icon: <FaRoute />,     title: "Logistics Planning",          desc: "Route optimisation and load balancing" },
    { icon: <FaTruck />,     title: "Cross-Border Transport",       desc: "Documentation handling and customs clearance" },
    { icon: <FaHandshake />, title: "Delivery & Payment",           desc: "On-time delivery with automated payment systems" },
  ];

  return (
    <section className="py-24 bg-brand-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={fadeUp()}
          className="text-center mb-14"
        >
          <span className="text-sm font-semibold text-brand-500 uppercase tracking-widest mb-3 block">How It Works</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-earth-900 mb-4">Our Proven Process</h2>
          <div className="w-16 h-1 bg-brand-500 mx-auto mb-5 rounded-full" />
          <p className="text-earth-500">End-to-end handling that ensures quality and reliability</p>
        </motion.div>

        {/* Desktop */}
        <div className="hidden md:flex justify-between items-start gap-2">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.12 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center w-1/5 relative"
            >
              <div className="w-14 h-14 bg-brand-500 rounded-2xl shadow-brand flex items-center justify-center text-white text-xl mb-3 z-10 relative">
                {s.icon}
              </div>
              {i < steps.length - 1 && (
                <div className="absolute top-7 left-[calc(50%+28px)] right-[calc(-50%+28px)] h-0.5 bg-brand-200 z-0" />
              )}
              <div className="w-6 h-6 bg-brand-100 text-brand-600 rounded-full flex items-center justify-center text-xs font-bold mb-3 border border-brand-200">
                {i + 1}
              </div>
              <h3 className="text-sm font-display font-bold text-earth-900 mb-1">{s.title}</h3>
              <p className="text-xs text-earth-500">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Mobile */}
        <div className="md:hidden space-y-6">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              className="flex gap-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-brand-500 rounded-xl shadow-brand flex items-center justify-center text-white text-lg">
                  {s.icon}
                </div>
                {i < steps.length - 1 && <div className="h-8 w-0.5 bg-brand-200 mt-2" />}
              </div>
              <div className="pt-2">
                <span className="text-[10px] font-bold text-brand-500 uppercase tracking-wide">Step {i + 1}</span>
                <h3 className="font-display font-bold text-earth-900 text-sm mb-1">{s.title}</h3>
                <p className="text-xs text-earth-500">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── 5. Performance Bars ──────────────────────────────────────────────────────
const CompetitiveEdge = () => {
  const advantages = [
    { label: "Delivery Speed",      yourScore: 95,  competitorAvg: 70 },
    { label: "Cost Efficiency",      yourScore: 90,  competitorAvg: 65 },
    { label: "Farmer Partnerships",  yourScore: 85,  competitorAvg: 50 },
    { label: "Customs Success Rate", yourScore: 100, competitorAvg: 80 },
  ];

  return (
    <section className="py-24 bg-earth-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={fadeUp()}
          className="text-center mb-14"
        >
          <span className="text-sm font-semibold text-brand-500 uppercase tracking-widest mb-3 block">Performance</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-earth-900 mb-4">Why We Outperform</h2>
          <div className="w-16 h-1 bg-brand-500 mx-auto mb-5 rounded-full" />
          <p className="text-earth-500 max-w-xl mx-auto">Metrics that demonstrate our industry leadership</p>
        </motion.div>

        <div className="max-w-2xl mx-auto space-y-7">
          {advantages.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-between mb-2">
                <span className="text-sm font-semibold text-earth-700">{item.label}</span>
                <span className="text-sm font-bold text-brand-500">{item.yourScore}%</span>
              </div>
              <div className="h-2.5 bg-earth-200 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.yourScore}%` }}
                  transition={{ duration: 1, delay: 0.3 + i * 0.1 }}
                  viewport={{ once: true }}
                  className="h-full bg-gradient-to-r from-brand-400 to-brand-600 rounded-full relative"
                >
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(item.competitorAvg / item.yourScore) * 100}%` }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="absolute h-full bg-earth-300/60 top-0 left-0 rounded-full"
                  />
                </motion.div>
              </div>
              <div className="flex justify-between text-xs mt-1.5 text-earth-400">
                <span>Industry avg: {item.competitorAvg}%</span>
                <span className="text-brand-500 font-medium">+{item.yourScore - item.competitorAvg}% ahead</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── 6. Comparison Matrix ─────────────────────────────────────────────────────
const CompetitiveMatrix = () => {
  const competitors = [
    { name: "Vittorios Trades",   initial: "V", isUs: true },
    { name: "Standard Providers", initial: "S" },
    { name: "Regional Brokers",   initial: "R" },
  ];

  const categories = [
    {
      title: "Supply Chain Control",
      features: [
        { name: "Direct farmer contracts",  values: [100, 30, 10],         unit: "%" },
        { name: "Owned warehouse capacity", values: [85000, 20000, 0],     unit: " MT" },
        { name: "Dedicated fleet size",     values: [47, 12, 0],           unit: " trucks" },
      ],
    },
    {
      title: "Performance Metrics",
      features: [
        { name: "On-time delivery rate",   values: [98, 82, 65],           unit: "%" },
        { name: "Border clearance time",   values: [8, 24, 48],            unit: "h" },
        { name: "Damage claim resolution", values: [24, 72, "N/A"],        unit: "h" },
      ],
    },
    {
      title: "Value Added Services",
      features: [
        { name: "Quality testing labs",    values: ["3 labs", "1 lab", "None"] },
        { name: "Price hedging",           values: ["Full", "Limited", "None"] },
        { name: "Shipment tracking",       values: ["Real-time", "Delayed", "None"] },
      ],
    },
  ];

  const [expanded, setExpanded] = useState(0);
  const [viewMode, setViewMode] = useState("visual");

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={fadeUp()}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold text-brand-500 uppercase tracking-widest mb-3 block">Comparison</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-earth-900 mb-4">The Clear Choice</h2>
          <div className="w-16 h-1 bg-brand-500 mx-auto mb-5 rounded-full" />
          <p className="text-earth-500 max-w-xl mx-auto mb-8">How we outperform traditional providers at every stage</p>

          <div className="flex justify-center">
            <div className="bg-earth-100 p-1 rounded-full flex gap-1">
              {["visual", "detailed"].map((m) => (
                <button
                  key={m}
                  onClick={() => setViewMode(m)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all capitalize ${
                    viewMode === m ? "bg-brand-500 text-white shadow-brand" : "text-earth-600 hover:text-earth-900"
                  }`}
                >
                  {m === "visual" ? "Visual" : "Detailed"}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Competitor header */}
        <div className="grid grid-cols-4 gap-4 mb-6 sticky top-16 z-20 bg-white/95 backdrop-blur-sm py-4 border-b border-earth-200">
          <div className="col-span-1" />
          {competitors.map((comp, i) => (
            <div key={i} className="text-center">
              <div className={`w-12 h-12 mx-auto rounded-full flex items-center justify-center font-bold text-lg mb-2 ${
                comp.isUs
                  ? "ring-2 ring-brand-500 ring-offset-1"
                  : "bg-earth-200 text-earth-500 ring-1 ring-earth-300"
              }`}>
                {comp.isUs
                  ? <img src="/images/vittorios logo.jpg" alt="Vittorios" className="w-full h-full object-contain rounded-full" />
                  : comp.initial
                }
              </div>
              <p className={`text-xs font-semibold ${comp.isUs ? "text-brand-600" : "text-earth-500"}`}>{comp.name}</p>
            </div>
          ))}
        </div>

        {viewMode === "visual" && (
          <div className="space-y-4">
            {categories.map((cat, ci) => (
              <motion.div
                key={ci}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: ci * 0.1 }}
                viewport={{ once: true }}
                className="bg-earth-50 rounded-2xl overflow-hidden border border-earth-200"
              >
                <button
                  onClick={() => setExpanded(expanded === ci ? null : ci)}
                  className="w-full px-6 py-4 flex justify-between items-center text-left hover:bg-earth-100 transition-colors"
                >
                  <span className="font-display font-bold text-earth-900">{cat.title}</span>
                  <motion.div animate={{ rotate: expanded === ci ? 180 : 0 }} transition={{ duration: 0.25 }}>
                    <FaArrowDown className="text-earth-400 text-sm" />
                  </motion.div>
                </button>

                <motion.div
                  initial={false}
                  animate={{ height: expanded === ci ? "auto" : 0, opacity: expanded === ci ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 space-y-4">
                    {cat.features.map((f, fi) => (
                      <div key={fi} className="grid grid-cols-4 gap-4 items-center">
                        <span className="text-sm text-earth-500 col-span-1">{f.name}</span>
                        {competitors.map((comp, ci2) => (
                          <div
                            key={ci2}
                            className={`text-center py-2 px-3 rounded-lg text-sm font-semibold ${
                              ci2 === 0
                                ? "bg-brand-50 text-brand-600 border border-brand-200"
                                : "bg-earth-100 text-earth-500"
                            }`}
                          >
                            {f.values[ci2]}{f.unit || ""}
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        )}

        {viewMode === "detailed" && (
          <div className="overflow-x-auto rounded-2xl border border-earth-200">
            <table className="w-full text-sm">
              <thead className="bg-earth-50 border-b border-earth-200">
                <tr>
                  <th className="text-left py-4 px-5 text-earth-600 font-semibold">Feature</th>
                  {competitors.map((c, i) => (
                    <th key={i} className={`py-4 px-4 text-center font-semibold ${i === 0 ? "text-brand-600" : "text-earth-500"}`}>
                      {c.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {categories.map((cat, ci) => (
                  <Fragment key={ci}>
                    <tr className="bg-brand-50">
                      <td colSpan={4} className="py-3 px-5 text-xs font-bold text-brand-600 uppercase tracking-widest">
                        {cat.title}
                      </td>
                    </tr>
                    {cat.features.map((f, fi) => (
                      <tr key={fi} className="border-b border-earth-100 hover:bg-earth-50">
                        <td className="py-3 px-5 text-earth-600">{f.name}</td>
                        {f.values.map((v, vi) => (
                          <td key={vi} className={`py-3 px-4 text-center font-semibold ${vi === 0 ? "text-brand-600" : "text-earth-500"}`}>
                            {v}{f.unit || ""}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Conversion footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 bg-brand-50 border border-brand-100 rounded-2xl p-8"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-display font-bold text-earth-900 mb-3">Ready to upgrade your supply chain?</h3>
              <p className="text-earth-500 text-sm mb-5">See exactly how much you could save with a customised cost-benefit analysis.</p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-500 hover:bg-brand-600 text-white font-semibold rounded-full transition-colors text-sm shadow-brand"
              >
                Request Analysis <FaArrowRight className="text-xs" />
              </Link>
            </div>
            <div className="bg-white border border-earth-200 rounded-xl p-6">
              <h4 className="font-semibold text-earth-900 mb-3 text-sm">Key Takeaways</h4>
              <ul className="space-y-2 text-sm text-earth-600">
                {[
                  "Average 37% cost reduction vs. regional brokers",
                  "2.8× faster border clearance than standard providers",
                  "100% compliance guarantee unmatched in the industry",
                ].map((t, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <FaCheckCircle className="text-brand-400 text-base shrink-0 mt-0.5" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// ─── 7. Testimonials ──────────────────────────────────────────────────────────
const Testimonials = () => {
  const testimonials = [
    {
      quote: "Vittorios reduced our grain delivery delays by 40% and improved farmer payments by 25%. Their logistics network is unmatched in East Africa.",
      name: "James Yusuf",
      title: "Client, Uganda",
      avatar: "/images/manager 1.jpg",
    },
    {
      quote: "As a smallholder farmer, the aggregation project doubled my sorghum income. They provide seeds, training, and guaranteed market access.",
      name: "Mary Atieno",
      title: "Sorghum Farmer",
      avatar: "/images/fenale farmer.jpg",
    },
  ];

  return (
    <section className="py-24 bg-earth-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={fadeUp()}
          className="text-center mb-14"
        >
          <span className="text-sm font-semibold text-brand-500 uppercase tracking-widest mb-3 block">Client Stories</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-earth-900 mb-4">What Our Partners Say</h2>
          <div className="w-16 h-1 bg-brand-500 mx-auto rounded-full" />
        </motion.div>

        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          loop
          className="max-w-3xl mx-auto pb-14"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white rounded-2xl p-10 shadow-warm border border-earth-100 text-center">
                <p className="text-brand-400 text-5xl font-display leading-none mb-4">"</p>
                <p className="text-earth-700 text-lg italic leading-relaxed mb-8">{t.quote}</p>
                <div className="flex items-center justify-center gap-3">
                  <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover border-2 border-brand-200" loading="lazy" />
                  <div className="text-left">
                    <p className="font-semibold text-earth-900 text-sm">{t.name}</p>
                    <p className="text-earth-400 text-xs">{t.title}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

// ─── 8. CTA ───────────────────────────────────────────────────────────────────
const MegaCTA = () => (
  <section className="py-24 bg-earth-900 relative overflow-hidden">
    <div className="absolute inset-0 opacity-5 bg-[url('/images/legume sacks.jpg')] bg-cover bg-center" />
    <div className="absolute top-0 left-0 w-80 h-80 bg-brand-500/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
    <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-600/10 rounded-full translate-x-1/3 translate-y-1/3" />

    <div className="container mx-auto px-6 relative">
      <motion.div
        className="max-w-2xl mx-auto text-center"
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
      >
        <motion.span variants={fadeUp()} className="text-sm font-semibold text-brand-400 uppercase tracking-widest mb-4 block">
          Ready to Begin?
        </motion.span>
        <motion.h2 variants={fadeUp(0.1)} className="text-3xl md:text-5xl font-display font-bold text-white mb-6 leading-snug">
          Book Your Transport Slot Now
        </motion.h2>
        <motion.p variants={fadeUp(0.2)} className="text-earth-400 text-lg mb-10">
          Bulk grain delivery slots available this month. Limited capacity — reach out today.
        </motion.p>
        <motion.div variants={fadeUp(0.3)} className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <Link
            to="/contact"
            className="px-8 py-4 bg-brand-500 hover:bg-brand-400 text-white font-semibold rounded-full transition-colors text-sm shadow-brand"
          >
            Get in Touch
          </Link>
          <a
            href="https://wa.me/254799031449"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/15 text-white font-semibold rounded-full border border-white/20 backdrop-blur-sm transition-colors text-sm"
          >
            <FaWhatsapp className="text-green-400 text-lg" /> WhatsApp Us
          </a>
        </motion.div>
        <motion.div variants={fadeUp(0.4)} className="flex flex-wrap justify-center gap-5">
          <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full text-white/70 text-xs border border-white/10">
            <FaShieldAlt className="text-brand-400" /> 100% Compliance Guarantee
          </div>
          <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full text-white/70 text-xs border border-white/10">
            <FaClock className="text-brand-400" /> 24h Response Time
          </div>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default function ServicesPage() {
  return (
    <div className="bg-white text-earth-800 font-body">
      <HeroSection />
      <StatsBar />
      <ServicesGrid />
      <ProcessFlow />
      <CompetitiveEdge />
      <CompetitiveMatrix />
      <Testimonials />
      <MegaCTA />
    </div>
  );
}
