import { motion } from "framer-motion";
import { FaGlobeAfrica, FaHandshake, FaChartLine, FaLeaf,FaArrowRight, FaBalanceScale, FaTruck, FaWarehouse, FaAward, FaSeedling, FaUsers } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

// =================================================================
// 1. VISION HERO - Fixed Navigation Compatible
// =================================================================
const VisionHero = () => {
  return (
    <section className="relative pt-24 h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-charcoalBlack to-deepGreen">
      {/* Background with parallax effect */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80')] bg-cover bg-center bg-fixed opacity-20" />
      
      {/* Split layout with founder image */}
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 relative z-10">
        {/* Founder image column */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 flex justify-center"
        >
          <div className="relative w-full max-w-md h-96 lg:h-[500px]">
            <img
              src="src/images/ceo.jpg"
              alt="Victor Ndesh - Founder"
              className="absolute inset-0 w-full h-full object-cover rounded-xl contrast-110 brightness-90 border-4 border-goldenWheat/50 shadow-2xl"
            />
            <motion.div
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 8, repeat: Infinity }}
              className="absolute inset-0 bg-gradient-to-br from-transparent via-goldenWheat/10 to-transparent rounded-xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-charcoalBlack/90 p-4 rounded-lg border-l-4 border-goldenWheat shadow-lg">
              <p className="text-goldenWheat font-serif italic">"Building bridges across East Africa through reliable trade"</p>
              <p className="text-neutralSand text-sm mt-2">- Victor Ndesh, Founder</p>
            </div>
          </div>
        </motion.div>

        {/* Vision content column */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-1/2"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-goldenWheat to-warmBrown">
              Our Guiding Light
            </span>
          </h1>
          
          <div className="bg-charcoalBlack/80 backdrop-blur-sm p-8 rounded-xl border border-goldenWheat/30 shadow-xl">
            <FaGlobeAfrica className="text-5xl text-goldenWheat mb-6" />
            <h2 className="text-3xl font-bold text-goldenWheat mb-4">Our Vision</h2>
            <p className="text-lg md:text-xl leading-relaxed">
              To be the <span className="font-bold text-goldenWheat">leading and most reliable</span> trade and logistics partner in East Africa, 
              providing <span className="font-bold text-goldenWheat">efficient, cost-effective, and seamless</span> solutions for commodity trading 
              and supply chain management.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// =================================================================
// 2. MISSION SECTION - Animated Grid
// =================================================================
const MissionSection = () => {
  const missionPoints = [
    {
      icon: <FaTruck className="text-3xl" />,
      title: "Streamline Logistics",
      description: "Provide reliable sourcing and delivery solutions across East Africa"
    },
    {
      icon: <FaChartLine className="text-3xl" />,
      title: "Enhance Market Access",
      description: "Create strategic partnerships for agricultural products"
    },
    {
      icon: <FaHandshake className="text-3xl" />,
      title: "Facilitate Trade",
      description: "Ensure smooth cross-border operations and compliance"
    },
    {
      icon: <FaLeaf className="text-3xl" />,
      title: "Sustainable Growth",
      description: "Promote ethical and environmentally conscious trading"
    }
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
              Our Mission
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-goldenWheat to-warmBrown mx-auto mb-6" />
          <p className="text-xl max-w-2xl mx-auto">
            The driving force behind everything we do
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {missionPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-charcoalBlack/50 backdrop-blur-sm p-8 rounded-xl border border-warmBrown/20 hover:border-goldenWheat/40 transition-all"
            >
              <div className="text-goldenWheat mb-4">{point.icon}</div>
              <h3 className="text-xl font-bold mb-3">{point.title}</h3>
              <p className="text-neutralSand/80">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// =================================================================
// 3. CORE VALUES SECTION - Interactive Cards
// =================================================================
const CoreValuesSection = () => {
  const values = [
    {
      title: "Integrity",
      icon: <FaBalanceScale className="text-4xl" />,
      description: "We conduct business with unwavering honesty and transparency in all our transactions.",
      color: "from-deepGreen to-goldenWheat"
    },
    {
      title: "Excellence",
      icon: <FaAward className="text-4xl" />,
      description: "We strive for the highest quality standards in every aspect of our operations.",
      color: "from-goldenWheat to-warmBrown"
    },
    {
      title: "Innovation",
      icon: <FaChartLine className="text-4xl" />,
      description: "We continuously improve our processes to deliver cutting-edge logistics solutions.",
      color: "from-warmBrown to-deepGreen"
    },
    {
      title: "Partnership",
      icon: <FaHandshake className="text-4xl" />,
      description: "We build long-term relationships based on mutual trust and shared success.",
      color: "from-goldenWheat to-deepGreen"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-charcoalBlack to-deepGreen/20">
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
              Our Core Values
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-goldenWheat to-warmBrown mx-auto mb-6" />
          <p className="text-xl max-w-2xl mx-auto">
            The foundation of our company culture
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="relative group h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-70 rounded-xl transition-all duration-500 group-hover:opacity-100" />
              <div className="relative h-full bg-charcoalBlack/80 backdrop-blur-sm p-8 rounded-xl border border-warmBrown/20 group-hover:border-goldenWheat/50 transition-all flex flex-col">
                <div className={`mb-6 p-3 w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br ${value.color} text-charcoalBlack`}>
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-goldenWheat">{value.title}</h3>
                <p className="text-neutralSand/80 flex-grow">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// =================================================================
// 4. SERVICES GALLERY - Interactive Showcase
// =================================================================
const ServicesGallery = () => {
  const services = [
    {
      title: "Commodity Trading",
      description: "Sourcing and supplying cereals (maize, wheat, rice) across East Africa",
      icon: <FaSeedling className="text-4xl" />,
      image: "src/images/legume sacks.jpg",
      stats: "10,000+ tons moved monthly"
    },
    {
      title: "Regional Distribution",
      description: "Coordinating transportation and logistics across borders",
      icon: <FaTruck className="text-4xl" />,
      image: "src/images/maize-farmer.jpg",
      stats: "Covering 5+ countries"
    },
    {
      title: "Quality Assurance",
      description: "Ensuring compliance with international market standards",
      icon: <FaBalanceScale className="text-4xl" />,
      image: "src/images/quality control.jpg",
      stats: "99.8% satisfaction rate"
    },
    {
      title: "Storage Solutions",
      description: "Climate-controlled warehousing for agricultural commodities",
      icon: <FaWarehouse className="text-4xl" />,
      image: "src/images/warehouse.jpg",
      stats: "50,000+ sq ft capacity"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-deepGreen/10 to-charcoalBlack">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-goldenWheat to-warmBrown">
              What We Do
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-goldenWheat to-warmBrown mx-auto mb-6" />
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-neutralSand/90">
            Our core services that power East Africa's trade
          </p>
        </motion.div>

        {/* Services Grid - Mobile First */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -5 }}
              className="bg-charcoalBlack/60 backdrop-blur-sm rounded-xl border border-warmBrown/20 hover:border-goldenWheat/40 transition-all overflow-hidden shadow-lg"
            >
              <div className="flex flex-col h-full">
                {/* Image Thumbnail */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoalBlack/80 to-transparent" />
                </div>
                
                {/* Content */}
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-gradient-to-br from-goldenWheat to-warmBrown p-3 rounded-full text-charcoalBlack flex-shrink-0">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-goldenWheat">{service.title}</h3>
                      <p className="text-neutralSand/80 mt-1">{service.stats}</p>
                    </div>
                  </div>
                  <p className="text-neutralSand/80 mb-4 flex-grow">{service.description}</p>
                  <button className="text-goldenWheat text-sm font-medium flex items-center gap-2 w-fit hover:underline">
                    Learn more <FaArrowRight className="text-xs" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Full-width Slider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 rounded-xl overflow-hidden"
        >
          <Swiper
            modules={[Autoplay, EffectFade]}
            effect="fade"
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            loop={true}
            speed={1000}
            className="relative rounded-xl border border-goldenWheat/30 shadow-2xl"
          >
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <div className="relative h-[400px] md:h-[500px] lg:h-[600px]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoalBlack/90 via-charcoalBlack/40 to-transparent flex items-end p-8 md:p-12">
                    <div className="max-w-2xl">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="bg-gradient-to-br from-goldenWheat to-warmBrown p-3 rounded-full text-charcoalBlack">
                          {service.icon}
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold text-goldenWheat">{service.title}</h3>
                      </div>
                      <p className="text-lg md:text-xl text-neutralSand mb-4">{service.description}</p>
                      <p className="text-goldenWheat/90 font-medium">{service.stats}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            
            {/* Custom Pagination */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 flex gap-2">
              {services.map((_, index) => (
                <div 
                  key={index}
                  className="w-3 h-3 rounded-full bg-neutralSand/30 transition-all duration-300 swiper-pagination-bullet"
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};
// =================================================================
// 5. TEAM SECTION - Founder Focus
// =================================================================
const TeamSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-charcoalBlack to-deepGreen">
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
              Leadership
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-goldenWheat to-warmBrown mx-auto mb-6" />
          <p className="text-xl max-w-2xl mx-auto">
            The visionaries driving our success
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/3 flex justify-center"
          >
            <div className="relative w-full max-w-sm">
              <img
                src="src/images/ceo_2-removebg-preview.png"
                alt="Victor Ndesh"
                className="w-full h-auto rounded-xl border-4 border-goldenWheat/50 shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-charcoalBlack/90 p-4 rounded-lg border-l-4 border-goldenWheat shadow-lg">
                <p className="text-goldenWheat font-bold">Victor Ndesh</p>
                <p className="text-neutralSand text-sm">Founder & CEO</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full lg:w-2/3"
          >
            <div className="bg-charcoalBlack/50 backdrop-blur-sm p-8 rounded-xl border border-warmBrown/20">
              <h3 className="text-2xl font-bold text-goldenWheat mb-4">Founder's Message</h3>
              <p className="text-lg mb-4">
                "What began as a small trading operation in Western Kenya has grown into a regional force in commodity logistics. Our success comes from treating every shipment with the same care we'd expect for our own goods."
              </p>
              <p className="text-lg mb-6">
                With over 15 years in the industry, I've built Vittorios Trades on three unwavering principles: reliability, quality, and partnership. These values continue to guide our expansion across East Africa.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-gradient-to-br from-goldenWheat/10 to-warmBrown/10 p-4 rounded-lg border border-goldenWheat/20">
                  <p className="text-goldenWheat font-bold text-xl">15+</p>
                  <p className="text-neutralSand text-sm">Years Experience</p>
                </div>
                <div className="bg-gradient-to-br from-goldenWheat/10 to-warmBrown/10 p-4 rounded-lg border border-goldenWheat/20">
                  <p className="text-goldenWheat font-bold text-xl">100+</p>
                  <p className="text-neutralSand text-sm">Satisfied Clients</p>
                </div>
                <div className="bg-gradient-to-br from-goldenWheat/10 to-warmBrown/10 p-4 rounded-lg border border-goldenWheat/20">
                  <p className="text-goldenWheat font-bold text-xl">5</p>
                  <p className="text-neutralSand text-sm">Countries Served</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// =================================================================
// MAIN COMPONENT - About Page
// =================================================================
export default function AboutPage() {
  return (
    <div className="bg-charcoalBlack text-neutralSand">
      <VisionHero />
      <MissionSection />
      <CoreValuesSection />
      <ServicesGallery />
      <TeamSection />
    </div>
  );
}