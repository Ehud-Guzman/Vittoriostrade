import { motion, useScroll, useTransform } from "framer-motion";
import { FaArrowRight, FaArrowDown, FaPhone, FaFileDownload, FaShieldAlt, FaClock, FaWarehouse, FaTruck, FaGlobeAfrica } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useState } from 'react';


// =================================================================
// 1. HERO SECTION - Command Attention with Parallax & 3D Effects
// =================================================================
const HeroSection = () => {
  const { scrollYProgress } = useScroll();
  const rotateX = useTransform(scrollYProgress, [0, 0.1], [15, 0]);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Parallax Background (Grain Truck at Border) */}
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 200]) }}
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80')] bg-cover bg-center"
      />
      
      {/* Pulsing Gradient Overlay */}
      <motion.div
        animate={{ opacity: [0.8, 0.9, 0.8] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute inset-0 bg-gradient-to-b from-charcoalBlack/90 to-deepGreen/70"
      />
      
      {/* 3D Text Effect */}
      <motion.div 
        style={{ rotateX }}
        className="absolute inset-0 flex flex-col items-center justify-center px-4"
      >
        <h1 className="text-5xl md:text-7xl font-bold text-center mb-6">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-goldenWheat to-warmBrown">
            Trade & Logistics,<br />Perfected
          </span>
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8 text-neutralSand/90">
          End-to-end solutions for agricultural commodity trading across East Africa
        </p>
        
        {/* Animated CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <motion.button
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 0 20px rgba(212, 175, 55, 0.5)",
              background: "linear-gradient(to right, #D4AF37, #8B5E34)"
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-goldenWheat to-warmBrown text-charcoalBlack font-bold rounded-full text-lg"
          >
            Get a Custom Quote
          </motion.button>
          <motion.button
            whileHover={{ 
              scale: 1.05, 
              backgroundColor: "#14532D",
              borderColor: "#F5F0E1"
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border-2 border-goldenWheat text-goldenWheat font-bold rounded-full text-lg"
          >
            Explore Services
          </motion.button>
        </div>
        
        {/* Bouncing Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <FaArrowDown className="text-goldenWheat text-2xl" />
        </motion.div>
      </motion.div>
    </section>
  );
};

// =================================================================
// 2. SERVICES GRID - Interactive 3D Flip Cards
// =================================================================
const ServicesGrid = () => {
  const services = [
    {
      title: "Commodity Trading",
      icon: <FaWarehouse className="text-4xl text-goldenWheat" />,
      shortDesc: "Direct sourcing of maize, wheat, rice, and sorghum.",
      features: [
        "✓ Quality control lab testing",
        "✓ Bulk aggregation discounts",
        "✓ Market price hedging",
        
      ],
      stat: "10,000+ tons traded monthly"
    },
    {
      title: "Regional Logistics",
      icon: <FaTruck className="text-4xl text-goldenWheat" />,
      shortDesc: "Efficient transportation across East Africa.",
      features: [
        "✓ Real-time GPS tracking",
        "✓ Cross-border expertise",
        "✓ Temperature-controlled options",
        "✓ 98% on-time delivery"
      ],
      stat: "47 trucks in fleet"
    },
    {
      title: "Import/Export Solutions",
      icon: <FaGlobeAfrica className="text-4xl text-goldenWheat" />,
      shortDesc: "Seamless customs clearance.",
      features: [
        "✓ Kenya-Uganda-Rwanda routes",
        "✓ Tariff optimization",
        "✓ Documentation handling",
        "✓ 24/7 clearance support"
      ],
      stat: "72h average clearance time"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-charcoalBlack to-deepGreen/5">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-goldenWheat to-warmBrown">
              Our Core Services
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-goldenWheat to-warmBrown mx-auto mb-6"></div>
          <p className="text-xl max-w-2xl mx-auto">
            Comprehensive solutions tailored for East African commodity trade
          </p>
        </motion.div>

        {/* 3D Flip Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative h-96 w-full cursor-pointer group perspective"
            >
              {/* Flip Container */}
              <motion.div
                whileHover={{ rotateY: 180 }}
                transition={{ duration: 0.6 }}
                className="relative w-full h-full preserve-3d"
              >
                {/* Front Side */}
                <div className="absolute inset-0 backface-hidden bg-gradient-to-br from-deepGreen/10 to-charcoalBlack/20 border border-warmBrown/20 rounded-xl p-8 flex flex-col items-center justify-center">
                  <div className="mb-6">{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-3 text-center">{service.title}</h3>
                  <p className="text-center mb-6">{service.shortDesc}</p>
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="text-goldenWheat font-medium flex items-center gap-2"
                  >
                    Learn more <FaArrowRight />
                  </motion.button>
                </div>
                
                {/* Back Side */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 bg-charcoalBlack rounded-xl p-8 overflow-y-auto">
                  <h4 className="text-goldenWheat font-bold mb-4">Key Features:</h4>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-goldenWheat mt-1">•</span> {feat}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto p-3 bg-deepGreen/20 rounded-lg border border-warmBrown/20">
                    <p className="font-mono text-sm text-goldenWheat">{service.stat}</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


// =================================================================
// 3. COMPETITIVE ADVANTAGE - Animated Comparison Meters
// =================================================================
const CompetitiveEdge = () => {
  const advantages = [
    { label: "Delivery Speed", yourScore: 95, competitorAvg: 70 },
    { label: "Cost Efficiency", yourScore: 90, competitorAvg: 65 },
    { label: "Farmer Partnerships", yourScore: 85, competitorAvg: 50 },
    { label: "Customs Success Rate", yourScore: 100, competitorAvg: 80 }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-deepGreen/10 to-charcoalBlack">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-goldenWheat to-warmBrown">
              Why We Outperform
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-goldenWheat to-warmBrown mx-auto mb-6"></div>
          <p className="text-xl max-w-2xl mx-auto">
            Metrics don't lie - see how we dominate the competition
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {advantages.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <div className="flex justify-between mb-2">
                <span className="font-medium">{item.label}</span>
                <span className="text-goldenWheat font-bold">{item.yourScore}%</span>
              </div>
              <div className="h-3 bg-neutralSand/20 rounded-full overflow-hidden">
                {/* Your Score (Animated) */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.yourScore}%` }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="h-full bg-gradient-to-r from-deepGreen to-goldenWheat relative"
                >
                  {/* Competitor Avg (Animated) */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.competitorAvg}%` }}
                    transition={{ duration: 1 }}
                    className="absolute h-full bg-warmBrown/50 top-0 left-0"
                  />
                </motion.div>
              </div>
              <div className="flex justify-between text-xs mt-1">
                <span>Industry Avg: {item.competitorAvg}%</span>
                <span className="text-goldenWheat">You save {(item.yourScore - item.competitorAvg)}%</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
const ProcessFlow = () => {
  const steps = [
    {
      title: "Sourcing & Quality Control",
      description: "Direct partnerships with verified farmers and cooperatives",
      icon: "🌾"
    },
    {
      title: "Aggregation & Storage",
      description: "Climate-controlled warehouses across East Africa",
      icon: "🏭"
    },
    {
      title: "Logistics Planning",
      description: "Route optimization and load balancing",
      icon: "🗺️"
    },
    {
      title: "Cross-Border Transport",
      description: "Documentation handling and customs clearance",
      icon: "🚛"
    },
    {
      title: "Delivery & Payment",
      description: "On-time delivery with automated payment systems",
      icon: "💰"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-deepGreen/5 to-charcoalBlack">
      <div className="container mx-auto px-6">
        <motion.div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-goldenWheat to-warmBrown">
              Our Proven Process
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-goldenWheat to-warmBrown mx-auto mb-6"></div>
          <p className="text-xl max-w-2xl mx-auto">
            End-to-end handling that ensures quality and reliability
          </p>
        </motion.div>

        <div className="relative">
          {/* Desktop Timeline */}
          <div className="hidden md:flex justify-between items-start">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center w-1/5 px-4 relative z-10"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-goldenWheat to-warmBrown flex items-center justify-center text-2xl mb-4">
                  {step.icon}
                </div>
                <h3 className="text-lg font-bold text-center mb-2">{step.title}</h3>
                <p className="text-sm text-center">{step.description}</p>
                {i < steps.length - 1 && (
                  <div className="absolute top-8 left-3/4 w-1/2 h-1 bg-gradient-to-r from-warmBrown/50 to-goldenWheat/50"></div>
                )}
              </motion.div>
            ))}
          </div>
          
          {/* Mobile Timeline */}
          <div className="md:hidden space-y-8">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                className="flex gap-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-goldenWheat to-warmBrown flex items-center justify-center text-xl">
                    {step.icon}
                  </div>
                  {i < steps.length - 1 && (
                    <div className="h-12 w-1 bg-gradient-to-b from-warmBrown/50 to-goldenWheat/50"></div>
                  )}
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">{step.title}</h3>
                  <p className="text-sm">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
const CompetitiveMatrix = () => {
  // Matrix data - customize with your actual advantages
  const competitors = [
    { name: "Vittorios Logistics", logo: "src/images/vittorios logo.jpg" },
    { name: "Standard Providers", logo: "competitor1.png" },
    { name: "Regional Brokers", logo: "competitor2.png" }
  ];

  const categories = [
    {
      title: "Supply Chain Control",
      features: [
        { name: "Direct farmer contracts", values: [100, 30, 10], unit: "%" },
        { name: "Owned warehouse capacity", values: [85000, 20000, 0], unit: "MT" },
        { name: "Dedicated fleet size", values: [47, 12, 0], unit: "trucks" }
      ]
    },
    {
      title: "Performance Metrics",
      features: [
        { name: "On-time delivery rate", values: [98, 82, 65], unit: "%" },
        { name: "Border clearance time", values: [8, 24, 48], unit: "hours" },
        { name: "Damage claim resolution", values: [24, 72, "N/A"], unit: "hours" }
      ]
    },
    {
      title: "Value Added Services",
      features: [
        { name: "Quality testing labs", values: ["3", "1", "0"] },
        { name: "Price hedging", values: ["✓", "Limited", "✗"] },
        { name: "Mobile tracking", values: ["Real-time", "Delayed", "None"] }
      ]
    }
  ];

  const [expandedCategory, setExpandedCategory] = useState(0);
  const [viewMode, setViewMode] = useState("visual"); // 'visual' or 'detailed'

  return (
    <section className="py-20 bg-gradient-to-b from-charcoalBlack to-deepGreen/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-goldenWheat to-warmBrown">
              The Clear Choice for Serious Traders
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-goldenWheat to-warmBrown mx-auto mb-6"></div>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            How we outperform traditional providers at every stage
          </p>
          
          {/* View Mode Toggle */}
          <div className="flex justify-center mb-8">
            <div className="bg-charcoalBlack/50 p-1 rounded-full border border-goldenWheat/20">
              <button
                onClick={() => setViewMode("visual")}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${viewMode === "visual" ? "bg-goldenWheat text-charcoalBlack" : "text-neutralSand"}`}
              >
                Visual Comparison
              </button>
              <button
                onClick={() => setViewMode("detailed")}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${viewMode === "detailed" ? "bg-goldenWheat text-charcoalBlack" : "text-neutralSand"}`}
              >
                Detailed Metrics
              </button>
            </div>
          </div>
        </div>

        {/* Competitor Header */}
        <div className="grid grid-cols-4 gap-4 mb-6 sticky top-0 z-20 bg-charcoalBlack/90 backdrop-blur-sm py-4 border-b border-goldenWheat/20">
          <div className="col-span-1"></div>
          {competitors.map((comp, i) => (
            <div key={i} className={`text-center ${i === 0 ? "order-first" : ""}`}>
              <div className={`w-16 h-16 mx-auto rounded-full ${i === 0 ? "ring-4 ring-goldenWheat" : "ring-2 ring-neutralSand/30"} p-1 mb-2`}>
                <img 
                  src={comp.logo} 
                  alt={comp.name} 
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
              <h3 className={`font-bold ${i === 0 ? "text-goldenWheat" : "text-neutralSand"}`}>{comp.name}</h3>
            </div>
          ))}
        </div>

        {/* Visual Comparison Mode */}
        {viewMode === "visual" && (
          <div className="space-y-12">
            {categories.map((category, catIndex) => (
              <motion.div 
                key={catIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: catIndex * 0.1 }}
                className="bg-charcoalBlack/50 rounded-xl overflow-hidden border border-goldenWheat/20"
              >
                <button
                  onClick={() => setExpandedCategory(expandedCategory === catIndex ? null : catIndex)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-deepGreen/10 transition-colors"
                >
                  <h3 className="text-xl font-bold text-goldenWheat">{category.title}</h3>
                  <motion.div
                    animate={{ rotate: expandedCategory === catIndex ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaArrowDown className="text-goldenWheat/80" />
                  </motion.div>
                </button>

                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ 
                    height: expandedCategory === catIndex ? "auto" : 0,
                    opacity: expandedCategory === catIndex ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 pt-2 space-y-6">
                    {category.features.map((feature, featIndex) => (
                      <div key={featIndex} className="grid grid-cols-4 gap-4 items-center">
                        <div className="col-span-1 text-sm md:text-base text-neutralSand/80">
                          {feature.name}
                        </div>
                        
                        {competitors.map((_, compIndex) => {
                          const value = feature.values[compIndex];
                          const isBest = Math.max(...feature.values) === value;
                          const isWorst = Math.min(...feature.values) === value;
                          
                          return (
                            <div key={compIndex} className="text-center">
                              <div className={`p-3 rounded-lg ${
                                compIndex === 0 ? "bg-deepGreen/30 border border-goldenWheat/30" :
                                isBest ? "bg-deepGreen/10" :
                                isWorst ? "bg-warmBrown/10" : "bg-charcoalBlack/50"
                              }`}>
                                <span className={`font-bold ${
                                  compIndex === 0 ? "text-goldenWheat" :
                                  isBest ? "text-deepGreen" :
                                  isWorst ? "text-warmBrown" : "text-neutralSand"
                                }`}>
                                  {value}{feature.unit}
                                </span>
                                {isBest && compIndex !== 0 && (
                                  <div className="text-xs text-deepGreen mt-1">+{Math.round((value/feature.values[0]-1)*100)}%</div>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Detailed Metrics Mode */}
        {viewMode === "detailed" && (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-goldenWheat/20">
                  <th className="text-left pb-4 pl-2">Feature</th>
                  {competitors.map((comp, i) => (
                    <th key={i} className={`pb-4 px-4 text-center ${i === 0 ? "text-goldenWheat" : "text-neutralSand"}`}>
                      {comp.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {categories.map((category, catIndex) => (
                  <>
                    <tr key={`cat-${catIndex}`} className="border-b border-goldenWheat/10">
                      <td colSpan={4} className="pt-6 pb-2 pl-2 text-lg font-bold text-goldenWheat">
                        {category.title}
                      </td>
                    </tr>
                    {category.features.map((feature, featIndex) => (
                      <tr key={`feat-${featIndex}`} className="border-b border-goldenWheat/5 hover:bg-deepGreen/5">
                        <td className="py-4 pl-2 pr-4 text-sm md:text-base text-neutralSand/80">
                          {feature.name}
                        </td>
                        {feature.values.map((value, valIndex) => {
                          const isBest = Math.max(...feature.values) === value;
                          const isWorst = Math.min(...feature.values) === value;
                          
                          return (
                            <td key={valIndex} className={`py-4 px-4 text-center ${
                              valIndex === 0 ? "font-bold text-goldenWheat" :
                              isBest ? "text-deepGreen" :
                              isWorst ? "text-warmBrown" : "text-neutralSand"
                            }`}>
                              <div className="flex flex-col items-center">
                                <span>
                                  {value}{feature.unit}
                                </span>
                                {isBest && valIndex !== 0 && (
                                  <span className="text-xs bg-deepGreen/20 px-2 py-0.5 rounded-full mt-1">
                                    +{Math.round((value/feature.values[0]-1)*100)}% better
                                  </span>
                                )}
                              </div>
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Conversion Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-16 bg-gradient-to-r from-deepGreen/30 to-warmBrown/30 rounded-xl p-8 border border-goldenWheat/20"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Ready to upgrade your supply chain?</h3>
              <p className="mb-6">See exactly how much you could save with a customized cost-benefit analysis.</p>
              <button className="px-6 py-3 bg-goldenWheat text-charcoalBlack font-bold rounded-full flex items-center gap-2">
                <FaFileDownload /> Download Full Comparison
              </button>
            </div>
            <div className="bg-charcoalBlack/50 p-6 rounded-lg border border-goldenWheat/20">
              <h4 className="font-bold text-goldenWheat mb-3">Key Takeaway:</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-goldenWheat mt-1">✓</span>
                  <span>Average <strong>37% cost reduction</strong> vs. regional brokers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-goldenWheat mt-1">✓</span>
                  <span><strong>2.8x faster</strong> border clearance than standard providers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-goldenWheat mt-1">✓</span>
                  <span><strong>100% compliance</strong> guarantee unmatched in the industry</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// =================================================================
// 4. TESTIMONIALS - Auto-Play Carousel with Video
// =================================================================
const Testimonials = () => {
  const testimonials = [
    {
      quote: "Vittorios reduced our grain delivery delays by 40% and improved farmer payments by 25%. Their logistics network is unmatched in East Africa.",
      name: "James Yusuf",
      title: "Client Uganda",
      avatar: "src/images/manager 1.jpg"
    },
    {
      quote: "As a smallholder farmer, the aggregation project doubled my sorghum income. They provide seeds, training, and guaranteed market access.",
      name: "Mary Atieno",
      title: "Sorghum Farmer",
      avatar: "src/images/fenale farmer.jpg"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-charcoalBlack to-deepGreen/10">
      <div className="container mx-auto px-6">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ 
            clickable: true, 
            el: ".custom-pagination",
            bulletClass: "swiper-bullet",
            bulletActiveClass: "swiper-bullet-active"
          }}
          autoplay={{ delay: 7000, disableOnInteraction: false }}
          loop
          className="pb-16"
        >
          {testimonials.map((testimonial, i) => (
            <SwiperSlide key={i}>
              <div className="max-w-4xl mx-auto text-center">
                <div className="text-goldenWheat text-6xl mb-2 font-serif">“</div>
                <p className="text-xl md:text-2xl italic mb-8 px-4">{testimonial.quote}</p>
                <div className="flex items-center justify-center gap-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full border-2 border-goldenWheat object-cover"
                    loading="lazy"
                  />
                  <div>
                    <p className="font-bold text-lg">{testimonial.name}</p>
                    <p className="text-sm text-neutralSand/70">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
        {/* Custom Styled Pagination */}
        <div className="custom-pagination flex justify-center gap-2 mt-8" />
        
        {/* Video Testimonial (Picture-in-Picture) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 max-w-2xl mx-auto rounded-xl overflow-hidden border-2 border-goldenWheat/30 relative"
        >
          <div className="aspect-w-16 aspect-h-9 bg-charcoalBlack/50">
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&modestbranding=1" 
              title="Client Testimonial"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0"
            ></iframe>
          </div>
          <div className="absolute inset-0 pointer-events-none border-8 border-transparent hover:border-goldenWheat/10 transition-all duration-300"></div>
        </motion.div>
      </div>
    </section>
  );
};

// =================================================================
// 5. MEGA CTA - Conversion-Optimized with Urgency
// =================================================================
const MegaCTA = () => {
  return (
    <section className="relative py-28 overflow-hidden bg-[url('src/images/legumes.jpg')] bg-cover bg-center">
      {/* Grain Particle Animation Background */}
      <div className="absolute inset-0 bg-charcoalBlack/80"></div>
      
      {/* Floating Grain Particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -20, 0],
            x: [0, Math.random() * 40 - 20, 0],
            rotate: [0, Math.random() * 360]
          }}
          transition={{
            duration: 5 + Math.random() * 10,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute text-goldenWheat/50"
          style={{
            fontSize: `${Math.random() * 10 + 10}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`
          }}
        >
          •
        </motion.div>
      ))}
      
      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-deepGreen/90 to-warmBrown/90 rounded-2xl p-8 md:p-12 text-center shadow-2xl backdrop-blur-sm"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-goldenWheat">Limited Capacity</span> - Book Your Slot Now!
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Transport slots available this month for bulk grain deliveries
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 0 30px rgba(212, 175, 55, 0.7)"
              }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-goldenWheat text-charcoalBlack font-bold rounded-full text-lg flex items-center justify-center gap-2 mx-auto sm:mx-0"
            >
              <FaPhone /> Book Discovery Call
            </motion.button>
            
            <motion.button
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(20, 83, 45, 0.9)"
              }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-transparent border-2 border-goldenWheat text-goldenWheat font-bold rounded-full text-lg flex items-center justify-center gap-2 mx-auto sm:mx-0"
            >
              <FaFileDownload /> Download Price List
            </motion.button>
          </div>
          
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2 bg-charcoalBlack/30 px-3 py-1.5 rounded-full">
              <FaShieldAlt className="text-goldenWheat" />
              <span>100% Compliance Guarantee</span>
            </div>
            <div className="flex items-center gap-2 bg-charcoalBlack/30 px-3 py-1.5 rounded-full">
              <FaClock className="text-goldenWheat" />
              <span>24h Response Time</span>
            </div>
          </div>
          
          {/* Urgency Scarcity Element */}
          <div className="mt-6 text-goldenWheat font-mono text-sm">
            <span className="animate-pulse">⏳</span>  Slots left • 47+ clients served this month
          </div>
        </motion.div>
      </div>
    </section>
  );
};


// =================================================================
// MAIN COMPONENT - Full Services Page
// =================================================================
export default function ServicesPage() {
  return (
    <div className="bg-charcoalBlack text-neutralSand">
      <HeroSection />
      <ServicesGrid />
      <CompetitiveEdge />
       <CompetitiveMatrix/>
      <Testimonials />
      <ProcessFlow/>
      <MegaCTA />
     
    </div>
  );
}