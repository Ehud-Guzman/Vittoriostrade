import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaGlobeAfrica, FaHandshake, FaChartLine, FaLeaf,
  FaArrowRight, FaBalanceScale, FaTruck, FaWarehouse,
  FaAward, FaSeedling, FaUsers,
} from "react-icons/fa";

const fadeUp = (delay = 0) => ({
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: "easeOut" } },
});
const stagger = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

// ─── 1. Hero ──────────────────────────────────────────────────────────────────
const VisionHero = () => (
  <section className="relative pt-28 pb-20 bg-white overflow-hidden">
    {/* Decorative blob */}
    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-50 rounded-full -translate-y-1/3 translate-x-1/3 z-0" />

    <div className="container mx-auto px-6 relative z-10">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        {/* Founder photo */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-5/12 flex justify-center"
        >
          <div className="relative w-full max-w-sm">
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-brand-200 rounded-2xl" />
            <img
              src="/images/ceo.jpg"
              alt="Victor Kamau – Founder"
              className="relative w-full h-auto rounded-2xl object-cover shadow-warm-lg"
            />
            <div className="absolute -bottom-5 -right-5 bg-white border border-earth-200 shadow-warm px-5 py-3 rounded-xl">
              <p className="text-brand-600 font-display font-semibold italic text-sm leading-snug max-w-[200px]">
                "Building bridges across East Africa through reliable trade"
              </p>
              <p className="text-earth-400 text-xs mt-1">— Victor Kamau, Founder</p>
            </div>
          </div>
        </motion.div>

        {/* Vision content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="w-full lg:w-7/12"
        >
          <span className="text-sm font-semibold text-brand-500 uppercase tracking-widest mb-3 block">Our Story</span>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-earth-900 mb-6 leading-tight">
            Built on Trust,<br />
            <span className="text-brand-500">Driven by Purpose</span>
          </h1>

          <div className="bg-brand-50 border border-brand-100 rounded-2xl p-8 mb-8">
            <FaGlobeAfrica className="text-4xl text-brand-500 mb-4" />
            <h2 className="text-2xl font-display font-bold text-earth-900 mb-3">Our Vision</h2>
            <p className="text-earth-600 leading-relaxed">
              To be the <strong className="text-brand-600">leading and most reliable</strong> trade and logistics partner in East Africa, providing{" "}
              <strong className="text-brand-600">efficient, cost-effective, and seamless</strong> solutions for commodity trading and supply chain management.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-brand-500 hover:bg-brand-600 text-white font-semibold rounded-full transition-colors duration-200 text-sm shadow-brand"
          >
            Partner with Us <FaArrowRight />
          </Link>
        </motion.div>
      </div>
    </div>
  </section>
);

// ─── 2. Mission ───────────────────────────────────────────────────────────────
const MissionSection = () => {
  const points = [
    { icon: <FaTruck className="text-2xl text-brand-500" />,    title: "Streamline Logistics",   desc: "Provide reliable sourcing and delivery solutions across East Africa" },
    { icon: <FaChartLine className="text-2xl text-brand-500" />, title: "Enhance Market Access",  desc: "Create strategic partnerships for agricultural products" },
    { icon: <FaHandshake className="text-2xl text-brand-500" />, title: "Facilitate Trade",        desc: "Ensure smooth cross-border operations and compliance" },
    { icon: <FaLeaf className="text-2xl text-brand-500" />,      title: "Sustainable Growth",     desc: "Promote ethical and environmentally conscious trading" },
  ];

  return (
    <section className="py-24 bg-earth-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={fadeUp()}
          className="text-center mb-14"
        >
          <span className="text-sm font-semibold text-brand-500 uppercase tracking-widest mb-3 block">What Drives Us</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-earth-900 mb-4">Our Mission</h2>
          <div className="w-16 h-1 bg-brand-500 mx-auto mb-5 rounded-full" />
          <p className="text-earth-500 max-w-xl mx-auto">The driving force behind everything we do</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden" whileInView="visible" variants={stagger} viewport={{ once: true }}
        >
          {points.map((p, i) => (
            <motion.div
              key={i}
              variants={fadeUp(i * 0.1)}
              className="bg-white rounded-2xl p-7 shadow-warm hover:shadow-warm-lg border border-earth-100 hover:border-brand-200 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center mb-4 border border-brand-100">
                {p.icon}
              </div>
              <h3 className="text-lg font-display font-bold text-earth-900 mb-2">{p.title}</h3>
              <p className="text-earth-500 text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// ─── 3. Core Values ───────────────────────────────────────────────────────────
const CoreValuesSection = () => {
  const values = [
    {
      title: "Integrity",
      icon: <FaBalanceScale className="text-3xl" />,
      desc: "We conduct business with unwavering honesty and transparency in all our transactions.",
    },
    {
      title: "Excellence",
      icon: <FaAward className="text-3xl" />,
      desc: "We strive for the highest quality standards in every aspect of our operations.",
    },
    {
      title: "Innovation",
      icon: <FaChartLine className="text-3xl" />,
      desc: "We continuously improve our processes to deliver cutting-edge logistics solutions.",
    },
    {
      title: "Partnership",
      icon: <FaHandshake className="text-3xl" />,
      desc: "We build long-term relationships based on mutual trust and shared success.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={fadeUp()}
          className="text-center mb-14"
        >
          <span className="text-sm font-semibold text-brand-500 uppercase tracking-widest mb-3 block">What We Stand For</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-earth-900 mb-4">Our Core Values</h2>
          <div className="w-16 h-1 bg-brand-500 mx-auto mb-5 rounded-full" />
          <p className="text-earth-500 max-w-xl mx-auto">The foundation of our company culture</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white border border-earth-200 rounded-2xl p-7 shadow-warm hover:shadow-warm-lg hover:border-brand-300 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-brand-50 rounded-xl flex items-center justify-center mb-5 border border-brand-100 group-hover:bg-brand-500 transition-colors duration-300">
                <span className="text-brand-500 group-hover:text-white transition-colors duration-300">{v.icon}</span>
              </div>
              <h3 className="text-xl font-display font-bold text-earth-900 mb-3">{v.title}</h3>
              <p className="text-earth-500 text-sm leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── 4. Services Gallery ──────────────────────────────────────────────────────
const ServicesGallery = () => {
  const services = [
    { title: "Commodity Trading",     desc: "Sourcing and supplying cereals (maize, wheat, rice) across East Africa", icon: <FaSeedling className="text-2xl text-brand-500" />,  image: "/images/legume sacks.jpg",    stat: "10,000+ tons moved monthly" },
    { title: "Regional Distribution", desc: "Coordinating transportation and logistics across borders",                icon: <FaTruck className="text-2xl text-brand-500" />,      image: "/images/maize-farmer.jpg",    stat: "Covering 5+ countries" },
    { title: "Quality Assurance",     desc: "Ensuring compliance with international market standards",                 icon: <FaBalanceScale className="text-2xl text-brand-500" />,image: "/images/quality control.jpg", stat: "99.8% satisfaction rate" },
    { title: "Storage Solutions",     desc: "Climate-controlled warehousing for agricultural commodities",             icon: <FaWarehouse className="text-2xl text-brand-500" />,  image: "/images/warehouse.jpg",       stat: "50,000+ sq ft capacity" },
  ];

  return (
    <section className="py-24 bg-brand-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={fadeUp()}
          className="text-center mb-14"
        >
          <span className="text-sm font-semibold text-brand-500 uppercase tracking-widest mb-3 block">What We Do</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-earth-900 mb-4">Our Services</h2>
          <div className="w-16 h-1 bg-brand-500 mx-auto mb-5 rounded-full" />
          <p className="text-earth-500 max-w-xl mx-auto">Core services that power East Africa's trade</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((svc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl overflow-hidden shadow-warm hover:shadow-warm-lg border border-earth-100 hover:border-brand-200 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={svc.image} alt={svc.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <div className="flex items-start gap-4 mb-3">
                  <div className="w-10 h-10 bg-brand-50 rounded-xl flex items-center justify-center border border-brand-100 shrink-0">
                    {svc.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-bold text-earth-900">{svc.title}</h3>
                    <span className="text-xs text-brand-500 font-medium">{svc.stat}</span>
                  </div>
                </div>
                <p className="text-earth-500 text-sm leading-relaxed mb-4">{svc.desc}</p>
                <Link to="/services" className="inline-flex items-center gap-2 text-brand-500 hover:text-brand-700 text-sm font-semibold transition-colors">
                  Learn more <FaArrowRight className="text-xs" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── 5. Leadership ────────────────────────────────────────────────────────────
const TeamSection = () => (
  <section className="py-24 bg-white">
    <div className="container mx-auto px-6">
      <motion.div
        initial="hidden" whileInView="visible" viewport={{ once: true }}
        variants={fadeUp()}
        className="text-center mb-14"
      >
        <span className="text-sm font-semibold text-brand-500 uppercase tracking-widest mb-3 block">The People</span>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-earth-900 mb-4">Leadership</h2>
        <div className="w-16 h-1 bg-brand-500 mx-auto mb-5 rounded-full" />
        <p className="text-earth-500">The visionaries driving our success</p>
      </motion.div>

      <div className="flex flex-col lg:flex-row items-center gap-14 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full lg:w-5/12"
        >
          <div className="relative">
            <div className="absolute -top-3 -left-3 w-full h-full border-2 border-brand-200 rounded-2xl" />
            <img
              src="/images/Kamau.jpg"
              alt="Victor Kamau"
              className="relative w-full h-auto rounded-2xl object-cover shadow-warm-lg"
            />
            <div className="absolute -bottom-5 -right-5 bg-white border border-earth-200 shadow-warm px-5 py-3 rounded-xl">
              <p className="font-display font-bold text-earth-900">Victor Kamau</p>
              <p className="text-earth-500 text-xs">Founder & CEO</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
          className="w-full lg:w-7/12"
        >
          <h3 className="text-2xl font-display font-bold text-earth-900 mb-5">Founder's Message</h3>
          <p className="text-earth-600 leading-relaxed mb-4">
            "What began as a small trading operation in Western Kenya has grown into a regional force in commodity logistics. Our success comes from treating every shipment with the same care we'd expect for our own goods."
          </p>
          <p className="text-earth-600 leading-relaxed mb-8">
            With over 15 years in the industry, I've built Vittorios Trades on three unwavering principles: reliability, quality, and partnership. These values continue to guide our expansion across East Africa.
          </p>
          <div className="flex flex-wrap gap-4">
            {[
              { value: "15+", label: "Years Experience" },
              { value: "100+", label: "Satisfied Clients" },
              { value: "4",   label: "Countries Served" },
            ].map((stat, i) => (
              <div key={i} className="bg-brand-50 border border-brand-100 rounded-xl px-6 py-4">
                <p className="text-2xl font-display font-bold text-brand-500">{stat.value}</p>
                <p className="text-earth-500 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

// ─── CTA ──────────────────────────────────────────────────────────────────────
const AboutCTA = () => (
  <section className="py-24 bg-brand-50 border-t border-brand-100 relative overflow-hidden">
    <div className="absolute top-0 right-0 w-96 h-96 bg-brand-100 rounded-full translate-x-1/2 -translate-y-1/2 opacity-60" />
    <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-100 rounded-full -translate-x-1/3 translate-y-1/3 opacity-60" />
    <div className="container mx-auto px-6 relative text-center">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
        <motion.span variants={fadeUp()} className="text-sm font-semibold text-brand-500 uppercase tracking-widest mb-4 block">
          Ready to Work Together?
        </motion.span>
        <motion.h2 variants={fadeUp(0.1)} className="text-3xl md:text-4xl font-display font-bold text-earth-900 mb-5">
          Let's Build Something Great
        </motion.h2>
        <motion.p variants={fadeUp(0.2)} className="text-earth-500 max-w-xl mx-auto mb-8">
          Join hundreds of businesses that trust Vittorios Trades for their East African commodity and logistics needs.
        </motion.p>
        <motion.div variants={fadeUp(0.3)} className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact" className="px-8 py-3.5 bg-brand-500 hover:bg-brand-600 text-white font-semibold rounded-full transition-colors text-sm shadow-brand">
            Get in Touch
          </Link>
          <Link to="/services" className="px-8 py-3.5 bg-white hover:bg-earth-50 text-earth-700 font-semibold rounded-full border border-earth-200 transition-colors text-sm shadow-warm">
            Explore Services
          </Link>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default function AboutPage() {
  return (
    <div className="bg-white text-earth-800 font-body">
      <VisionHero />
      <MissionSection />
      <CoreValuesSection />
      <ServicesGallery />
      <TeamSection />
      <AboutCTA />
    </div>
  );
}
