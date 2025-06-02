import { motion } from 'framer-motion';
import { useState, useMemo, useEffect } from 'react';
import { FaArrowRight, FaTruck, FaWarehouse, FaGlobeAfrica, FaChartLine, FaHandshake, FaSearch, FaPhone, FaMapMarkerAlt, FaClock, FaWhatsapp } from 'react-icons/fa';
import { SiGooglemaps } from 'react-icons/si';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

function Home() {
  // Original Data
  const services = [
    {
      title: "Commodity Trading",
      description: "Sourcing and supplying premium cereals including maize, wheat, rice, and sorghum across East Africa.",
      icon: <FaWarehouse className="text-4xl text-goldenWheat" />,
      bg: "from-deepGreen/10 to-deepGreen/5"
    },
    {
      title: "Regional Logistics",
      description: "Efficient transportation and distribution solutions tailored for East African markets.",
      icon: <FaTruck className="text-4xl text-goldenWheat" />,
      bg: "from-warmBrown/10 to-warmBrown/5"
    },
    {
      title: "Import/Export Solutions",
      description: "End-to-end supply chain management for seamless cross-border trade operations.",
      icon: <FaGlobeAfrica className="text-4xl text-goldenWheat" />,
      bg: "from-charcoalBlack/10 to-charcoalBlack/5"
    }
  ];

  const stats = [
    { value: "100+", label: "Satisfied Clients" },
    { value: "5+", label: "Years Experience" },
    { value: "10K+", label: "Tons Moved Annually" },
    { value: "3", label: "Countries Served" }
  ];

  // Commodities Data
  const commodities = [
    {
      name: "Maize",
      image: "/images/maize plantation.jpg",
      countries: ["Kenya", "Uganda", "Tanzania"]
    },
    {
      name: "Wheat",
      image: "/images/wheat.jpg",
      countries: ["Ethiopia", "Kenya"]
    },
    {
      name: "Sorghum",
      image: "/images/products/sorghum-(2).webp",
      countries: ["Kenya", "Uganda"]
    }
  ];

  // Product Catalogue Data
  const productCategories = [
    "All Products",
    "Cereals & Grains",
    "Pulses & Legumes",
    "Flour & Milled Products",
    "Animal Feed & Byproducts",
    "Oil Seeds & Nuts",
    "Fresh Dry Food Add-ons",
    "Packaged Branded Products"
  ];

  const packagingOptions = ["All", "45kg", "50kg", "90kg", "100kg", "Bulk"];

  // Updated Products Data with Varieties
  const products = [
    // Cereals & Grains
    {
      category: "Cereals & Grains",
      name: "Maize",
      varieties: [
        {
          name: "White Maize",
          image: "/images/products/white-maize.webp",
          description: "Premium quality white maize with high starch content, ideal for flour production.",
          packaging: ["45kg", "50kg", "90kg", "Bulk"]
        },
        {
          name: "Yellow Maize",
          image: "/images/products/yellow-maize.webp",
          description: "High-quality yellow maize with excellent nutritional value for animal feed.",
          packaging: ["45kg", "50kg", "90kg", "Bulk"]
        }
      ]
    },
    {
      category: "Cereals & Grains",
      name: "Sorghum",
      varieties: [
        {
          name: "Gadam Sorghum",
          image: "/images/products/sorghum.webp",
          description: "High-quality Gadam sorghum variety with excellent drought resistance and nutritional value.",
          packaging: ["45kg", "50kg", "90kg"]
        },
        {
          name: "Serena Sorghum",
          image: "/images/products/white-sorghum.webp",
          description: "Early-maturing Serena variety ideal for arid regions.",
          packaging: ["45kg", "50kg", "90kg", "Bulk"]
        }
      ]
    },
    {
      category: "Cereals & Grains",
      name: "Millet",
      varieties: [
        {
          name: "Finger Millet",
          image: "/images/products/finger-millet.webp",
          description: "Nutrient-dense finger millet (Uwele) for flour production.",
          packaging: ["45kg", "50kg", "90kg", "Bulk"]
        },
        {
          name: "Pearl Millet",
          image: "/images/products/Pearl-millet.webp",
          description: "High-yield pearl millet for both human and animal consumption.",
          packaging: ["45kg", "50kg", "90kg", "Bulk"]
        }
      ]
    },
    {
      category: "Cereals & Grains",
      name: "Wheat",
      image: "/images/wheat.jpg",
      description: "Premium wheat grains for flour milling and animal feed.",
      packaging: ["45kg", "50kg", "90kg", "Bulk"]
    },
    {
      category: "Cereals & Grains",
      name: "Barley",
      image: "/images/products/barley.webp",
      description: "Quality barley for brewing and animal feed production.",
      packaging: ["45kg", "50kg", "90kg", "Bulk"]
    },
    {
      category: "Cereals & Grains",
      name: "Rice",
      varieties: [
        {
          name: "Pishori Rice",
          image: "/images/products/pishori-rice.webp",
          description: "Aromatic Pishori rice with premium cooking qualities.",
          packaging: ["45kg", "50kg", "90kg", "Bulk"]
        },
        {
          name: "IR Rice Varieties",
          image: "/images/products/ir-rice.webp",
          description: "High-yield IR rice varieties for bulk consumption.",
          packaging: ["45kg", "50kg", "90kg", "Bulk"]
        }
      ]
    },

    // Pulses & Legumes
    {
      category: "Pulses & Legumes",
      name: "Dry Beans",
      varieties: [
        {
          name: "Red Kidney Beans",
          image: "/images/products/red-kidney-beans.webp",
          description: "Nutrient-rich red kidney beans with excellent cooking qualities and high protein content.",
          packaging: ["45kg", "50kg", "90kg", "Bulk"]
        },
        {
          name: "Yellow Beans",
          image: "/images/products/yellow-beans.webp",
          description: "Nutritious yellow beans with high protein content.",
          packaging: ["45kg", "50kg", "90kg", "Bulk"]
        },
        {
          name: "Black Beans",
          image: "/images/products/black-beans.webp",
          description: "Flavorful black beans ideal for traditional dishes.",
          packaging: ["45kg", "50kg", "90kg", "Bulk"]
        },
        {
          name: "Rosecoco Beans",
          image: "/images/products/rose-coco.webp",
          description: "Popular Rosecoco variety with distinctive speckled pattern.",
          packaging: ["45kg", "50kg", "90kg", "Bulk"]
        }
      ]
    },
    // Green Grams
    {
      category: "Pulses & Legumes",
      name: "Green Grams",
      varieties: [
        {
          name: "Green green grams",
          image: "",
          description: "Nutrient-rich red kidney beans with excellent cooking qualities and high protein content.",
          packaging: ["45kg", "50kg", "90kg", "Bulk"]
        },
        {
          name: "Nillyon Green grams",
          image: "/images/products/greengrams.webp",
          description: "Nutritious nillyon with high protein content.",
          packaging: ["45kg", "50kg", "90kg", "Bulk"]
        },
        {
          name: "Green grams Special",
          image: "/images/products/dengu-special.webp",
          description: "Flavorful special green grams ideal for traditional dishes.",
          packaging: ["45kg", "50kg", "90kg", "Bulk"]
        }
      ]
    },
    {
      category: "Pulses & Legumes",
      name: "Cowpeas",
      image: "/images/products/cow-peas.webp",
      description: "Drought-resistant cowpeas with excellent nutritional value.",
      packaging: ["45kg", "50kg", "90kg", "Bulk"]
    },
    {
      category: "Pulses & Legumes",
      name: "Lentils",
      image: "/images/products/lentils.webp",
      description: "High-quality lentils for soups and stews.",
      packaging: ["45kg", "50kg", "90kg", "Bulk"]
    },
    {
      category: "Pulses & Legumes",
      name: "Pigeon Peas",
      image: "/images/products/Green-Pigeon-Peas.webp",
      description: "Protein-rich pigeon peas for traditional dishes.",
      packaging: ["45kg", "50kg", "90kg", "Bulk"]
    },

    // Flour & Milled Products
    {
      category: "Flour & Milled Products",
      name: "Maize Flour",
      varieties: [
        {
          name: "Sifted Maize Flour",
          image: "/images/products/maize-flour.webp",
          description: "Finely sifted maize flour with consistent texture, perfect for ugali and other traditional dishes.",
          packaging: ["45kg", "50kg", "90kg", "Bulk"]
        },
        {
          name: "Unga (Un-sifted)",
          image: "/images/products/unsifted-flour.webp",
          description: "Traditional un-sifted maize flour.",
          packaging: ["45kg", "50kg", "90kg", "Bulk"]
        }
      ]
    },
    {
      category: "Flour & Milled Products",
      name: "Sorghum Flour",
      image: "/images/products/sorghum-flour.webp",
      description: "Nutritious sorghum flour for gluten-free baking.",
      packaging: ["45kg", "50kg", "90kg", "Bulk"]
    },
    {
      category: "Flour & Milled Products",
      name: "Millet Flour",
      image: "/images/products/millet-flour.webp",
      description: "High-protein millet flour for nutritious baking.",
      packaging: ["45kg", "50kg", "90kg", "Bulk"]
    },
    {
      category: "Flour & Milled Products",
      name: "Composite Flour",
      image: "/images/composite-flour.jpg",
      description: "Nutritious blend of maize and sorghum flour for enhanced taste and nutrition.",
      packaging: ["45kg", "50kg", "90kg", "Bulk"]
    },

    // Animal Feed & Byproducts
    {
      category: "Animal Feed & Byproducts",
      name: "Maize Bran",
      image: "/images/products/maize-bran.webp",
      description: "High-fiber maize bran for livestock feed.",
      packaging: ["45kg", "50kg", "90kg", "Bulk"]
    },
    {
      category: "Animal Feed & Byproducts",
      name: "Wheat Bran",
      image: "/images/products/wheat-bran-(2).webp",
      description: "High-fiber wheat bran excellent for livestock feed with good protein content.",
      packaging: ["45kg", "50kg", "90kg", "Bulk"]
    },
    {
      category: "Animal Feed & Byproducts",
      name: "Cottonseed Cake",
      image: "/images/products/cotton-cake.webp",
      description: "Protein-rich cottonseed cake ideal for dairy cattle and poultry feed.",
      packaging: ["45kg", "50kg", "90kg", "Bulk"]
    },
    {
      category: "Animal Feed & Byproducts",
      name: "Sunflower Cake",
      image: "/images/products/sunflower_meal_with_hulls_04.webp",
      description: "High-protein sunflower residue for feed.",
      packaging: ["45kg", "50kg", "90kg", "Bulk"]
    },
    {
      category: "Animal Feed & Byproducts",
      name: "Soya Meal",
      image: "/images/products/soybean_meal.webp",
      description: "Premium soya meal for livestock nutrition.",
      packaging: ["45kg", "50kg", "90kg", "Bulk"]
    },
    {
      category: "Animal Feed & Byproducts",
      name: "Dried Cassava Chips",
      image: "/images/products/dried-cassava.webp",
      description: "Sun-dried cassava chips with long shelf life, ideal for animal feed and industrial processing.",
      packaging: ["45kg", "50kg", "90kg", "Bulk"]
    },
    {
      category: "Animal Feed & Byproducts",
      name: "Brewer's Spent Grain",
      image: "/images/products/brewers-grain.jpg",
      description: "Nutritious byproduct from brewing industry for animal feed.",
      packaging: ["45kg", "50kg", "90kg", "Bulk"]
    },

    // Oil Seeds & Nuts
    {
      category: "Oil Seeds & Nuts",
      name: "Groundnuts",
      varieties: [
        {
          name: "Raw Groundnuts",
          image: "/images/products/RedGroundnuts_1.webp",
          description: "High-quality groundnuts with excellent oil content and flavor.",
          packaging: ["45kg", "50kg", "90kg", "Bulk"]
        },
        {
          name: "Roasted Groundnuts",
          image: "/images/products/Crushed-Peanuts.webp",
          description: "Premium roasted groundnuts for direct consumption.",
          packaging: ["45kg", "50kg", "90kg", "Bulk"]
        }
      ]
    },
    {
      category: "Oil Seeds & Nuts",
      name: "Soybeans",
      image: "/images/products/Soybeans.webp",
      description: "Premium soybeans with high oil and protein content, suitable for oil extraction and animal feed.",
      packaging: ["45kg", "50kg", "90kg", "Bulk"]
    },
    {
      category: "Oil Seeds & Nuts",
      name: "Sunflower Seeds",
      image: "/images/products/sunflower-seeds.webp",
      description: "High-oil content sunflower seeds.",
      packaging: ["45kg", "50kg", "90kg", "Bulk"]
    },
    {
      category: "Oil Seeds & Nuts",
      name: "Simsim (Sesame)",
      image: "/images/products/sesame-seeds.webp",
      description: "Quality sesame seeds for oil and culinary use.",
      packaging: ["45kg", "50kg", "90kg", "Bulk"]
    },
    {
      category: "Oil Seeds & Nuts",
      name: "Cottonseed",
      image: "/images/products/cotton-seeds.webp",
      description: "High-quality cottonseed for oil extraction.",
      packaging: ["45kg", "50kg", "90kg", "Bulk"]
    },

    // Fresh Dry Food Add-ons
    {
      category: "Fresh Dry Food Add-ons",
      name: "Dried Cassava",
      image: "/images/products/dried-cassava.webp",
      description: "Sun-dried cassava chips with long shelf life, ideal for animal feed and industrial processing.",
      packaging: ["45kg", "50kg", "90kg", "Bulk"]
    },
    {
      category: "Fresh Dry Food Add-ons",
      name: "Dried Arrowroots",
      image: "/images/products/dried-arrowroots.webp",
      description: "Premium dried arrowroots for processing.",
      packaging: ["45kg", "50kg", "90kg", "Bulk"]
    },
    {
      category: "Fresh Dry Food Add-ons",
      name: "Dried Bananas (Matoke)",
      image: "/images/products/dried bananas.jpeg",
      description: "Sun-dried matoke for flour production.",
      packaging: ["45kg", "50kg", "90kg", "Bulk"]
    },

    // Packaged Branded Products
    {
      category: "Packaged Branded Products",
      name: "Vittorios Animal Feed",
      image: "/images/animal-feed.jpg",
      description: "Our premium branded animal feed formulated for optimal livestock nutrition and growth.",
      packaging: ["45kg", "50kg", "90kg", "Bulk"]
    }
  ];

  // State for filters
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [selectedVariety, setSelectedVariety] = useState("All");
  const [selectedPackaging, setSelectedPackaging] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  // Ensure variety resets when category changes
  useEffect(() => {
    setSelectedVariety("All");
  }, [selectedCategory]);

  // Get all unique varieties for the selected category
  const getVarietiesForCategory = () => {
    if (selectedCategory === "All Products") return [];
    
    const categoryProducts = products.filter(p => p.category === selectedCategory);
    const varieties = [];
    
    categoryProducts.forEach(product => {
      if (product.varieties) {
        varieties.push(...product.varieties.map(v => v.name));
      }
    });
    
    return [...new Set(varieties)];
  };

  // Filter function with useMemo and debugging
  const filteredProducts = useMemo(() => {
    const filtered = products.filter(product => {
      // Category filter
      const matchesCategory = selectedCategory === "All Products" || product.category === selectedCategory;
      
      // Variety filter - MODIFIED
      let matchesVariety = selectedVariety === "All";
      if (!matchesVariety) {
        if (product.varieties) {
          matchesVariety = product.varieties.some(v => v.name === selectedVariety);
        } else {
          matchesVariety = false; // Non-variety products are excluded if a specific variety is selected
        }
      }
      console.log(`Product: ${product.name}, Matches Variety: ${matchesVariety}, Selected Variety: ${selectedVariety}`);
      
      // Packaging filter
      let matchesPackaging = selectedPackaging === "All";
      if (!matchesPackaging) {
        if (product.varieties) {
          matchesPackaging = product.varieties.some(v => v.packaging.includes(selectedPackaging));
        } else {
          matchesPackaging = product.packaging.includes(selectedPackaging);
        }
      }
      
      // Search filter
      const matchesSearch = searchTerm === "" || 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (product.description && product.description.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (product.varieties && product.varieties.some(v => 
          v.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          (v.description && v.description.toLowerCase().includes(searchTerm.toLowerCase()))
        ));
      
      return matchesCategory && matchesVariety && matchesPackaging && matchesSearch;
    });

    // Debug filtered products
    console.log("Filtered Products:", filtered);
    return filtered;
  }, [selectedCategory, selectedVariety, selectedPackaging, searchTerm]);

  // Animation variants
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const fadeIn = (direction, type, delay, duration) => ({
    hidden: {
      x: direction === 'left' ? 50 : direction === 'right' ? -50 : 0,
      y: direction === 'up' ? 50 : direction === 'down' ? -50 : 0,
      opacity: 0
    },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type,
        delay,
        duration,
        ease: 'easeOut'
      }
    }
  });

  return (
    <div className="bg-charcoalBlack text-neutralSand">
      {/* Hero Section with Logo */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-deepGreen/30 via-charcoalBlack/90 to-charcoalBlack z-0"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80')] bg-cover bg-center opacity-30 z-0"></div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Company Logo - Added above the title */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex justify-center mb-6"
            >
              <img 
                src="/images/vittorios logo.jpg" 
                alt="Vittorios Trades Logo" 
                 className="h-24 md:h-36 w-auto object-contain brightness-150" 
              />
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-goldenWheat to-warmBrown">
              Vittorios Trades
            </h1> 
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Premier logistics and commodity trading solutions across East Africa
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
         
            </div>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-goldenWheat"
        >
          <FaArrowRight className="rotate-90 text-3xl" />
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-20 relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-deepGreen via-goldenWheat to-warmBrown"></div>
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-goldenWheat">
                Your Trusted Trade Partner in East Africa
              </h2>
              <p className="mb-6">
                Vittorios Trades is a dynamic logistics and trading company specializing in the sourcing,
                transportation, and distribution of cereals and their byproducts across East Africa.
              </p>
              <p className="mb-8">
                With our regional expertise and strong network, we provide efficient, cost-effective, and
                seamless solutions for commodity trading and supply chain management.
              </p>
           
            </motion.div>
            <motion.div
              className="lg:w-1/2 relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <img
                    src="/images/legume sacks.jpg"
                    alt="Commodity Trading"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoalBlack/80 via-transparent to-transparent"></div>
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden mt-8">
                  <img
                    src="/images/logistics.jpg"
                    alt="Logistics"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoalBlack/80 via-transparent to-transparent"></div>
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <img
                    src="/images/warehouse.jpg"
                    alt="Legumes"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoalBlack/80 via-transparent to-transparent"></div>
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden mt-8">
                  <img
                    src="/images/EA flags.jpg"
                    alt="East Africa Trade"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoalBlack/80 via-transparent to-transparent"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Commodity Showcase */}
      <section className="py-20 bg-gradient-to-b from-charcoalBlack to-deepGreen/10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-goldenWheat">Our Core Commodities</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-goldenWheat to-warmBrown mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto">
              Premium agricultural products sourced across East Africa
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true }}
          >
            {commodities.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeIn('up', 'spring', i * 0.2, 1)}
                className="relative h-80 rounded-xl overflow-hidden group"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoalBlack/90 via-transparent to-transparent p-6 flex flex-col justify-end">
                  <h3 className="text-2xl font-bold text-goldenWheat">{item.name}</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {item.countries.map((c, j) => (
                      <span key={j} className="bg-goldenWheat/10 text-goldenWheat px-3 py-1 rounded-full text-sm">
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

      {/* Updated Product Catalogue Section */}
      <section className="py-20 bg-gradient-to-b from-deepGreen/10 to-charcoalBlack">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-goldenWheat">Our Product Catalogue</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-goldenWheat to-warmBrown mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto">
              Premium agricultural commodities available in various varieties and packaging options
            </p>
          </motion.div>

          {/* Filters */}
          <motion.div
            className="mb-12 bg-charcoalBlack/60 border border-goldenWheat/20 rounded-xl p-6"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Search Input */}
              <div>
                <label className="block mb-2 text-neutralSand/80">Search Products</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="w-full bg-charcoalBlack border border-warmBrown/30 rounded px-4 py-3 text-neutralSand outline-none pl-10"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutralSand/50" />
                </div>
              </div>

              {/* Category Filter */}
              <div>
                <label className="block mb-2 text-neutralSand/80">Category</label>
                <select
                  className="w-full bg-charcoalBlack border border-warmBrown/30 rounded px-4 py-3 text-neutralSand outline-none"
                  value={selectedCategory}
                  onChange={(e) => {
                    setSelectedCategory(e.target.value);
                  }}
                >
                  {productCategories.map((category, index) => (
                    <option key={index} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              {/* Variety Filter */}
              <div>
                <label className="block mb-2 text-neutralSand/80">Variety</label>
                <select
                  className="w-full bg-charcoalBlack border border-warmBrown/30 rounded px-4 py-3 text-neutralSand outline-none"
                  value={selectedVariety}
                  onChange={(e) => setSelectedVariety(e.target.value)}
                  disabled={selectedCategory === "All Products"}
                >
                  <option value="All">All Varieties</option>
                  {getVarietiesForCategory().map((variety, index) => (
                    <option key={index} value={variety}>{variety}</option>
                  ))}
                </select>
              </div>

              {/* Packaging Filter */}
              <div>
                <label className="block mb-2 text-neutralSand/80">Packaging</label>
                <select
                  className="w-full bg-charcoalBlack border border-warmBrown/30 rounded px-4 py-3 text-neutralSand outline-none"
                  value={selectedPackaging}
                  onChange={(e) => setSelectedPackaging(e.target.value)}
                >
                  {packagingOptions.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Active Filters Display - Mobile Only */}
            <div className="mt-4 md:hidden">
              <div className="flex flex-wrap gap-2">
                {selectedCategory !== "All Products" && (
                  <span className="bg-goldenWheat/10 text-goldenWheat px-3 py-1 rounded-full text-sm flex items-center">
                    {selectedCategory}
                    <button 
                      onClick={() => {
                        setSelectedCategory("All Products");
                      }}
                      className="ml-1 text-neutralSand/70 hover:text-neutralSand"
                    >
                      ×
                    </button>
                  </span>
                )}
                {selectedVariety !== "All" && (
                  <span className="bg-goldenWheat/10 text-goldenWheat px-3 py-1 rounded-full text-sm flex items-center">
                    {selectedVariety}
                    <button 
                      onClick={() => setSelectedVariety("All")}
                      className="ml-1 text-neutralSand/70 hover:text-neutralSand"
                    >
                      ×
                    </button>
                  </span>
                )}
                {selectedPackaging !== "All" && (
                  <span className="bg-goldenWheat/10 text-goldenWheat px-3 py-1 rounded-full text-sm flex items-center">
                    {selectedPackaging}
                    <button 
                      onClick={() => setSelectedPackaging("All")}
                      className="ml-1 text-neutralSand/70 hover:text-neutralSand"
                    >
                      ×
                    </button>
                  </span>
                )}
                {searchTerm && (
                  <span className="bg-goldenWheat/10 text-goldenWheat px-3 py-1 rounded-full text-sm flex items-center">
                    "{searchTerm}"
                    <button 
                      onClick={() => setSearchTerm("")}
                      className="ml-1 text-neutralSand/70 hover:text-neutralSand"
                    >
                      ×
                    </button>
                  </span>
                )}
              </div>
            </div>
          </motion.div>

          {/* Results Count */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-6 text-neutralSand/80"
          >
            Showing {filteredProducts.length} of {products.length} products
          </motion.div>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <motion.div
              className="grid grid-cols-1 gap-8 min-h-[200px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={`${product.category}-${product.name}-${index}`}
                  variants={fadeIn('up', 'spring', index * 0.1, 0.8)}
                  className="bg-charcoalBlack/60 border border-goldenWheat/20 rounded-xl overflow-hidden"
                >
                  {/* Category Header */}
                  <div className="p-4 bg-gradient-to-r from-deepGreen/20 to-charcoalBlack/50 border-b border-goldenWheat/20">
                    <h3 className="text-xl font-bold text-goldenWheat">{product.category || 'Unknown Category'}</h3>
                    <p className="text-sm text-neutralSand/80 mt-1">{product.name || 'Unknown Product'}</p>
                  </div>
                  
                  {/* Varieties Grid - MODIFIED */}
                  <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {product.varieties ? (
                      product.varieties
                        .filter(variety => selectedVariety === "All" || variety.name === selectedVariety)
                        .map((variety, vIndex) => (
                          <div 
                            key={`${variety.name}-${vIndex}`}
                            className="bg-charcoalBlack/40 border border-goldenWheat/10 rounded-lg p-4 hover:shadow-lg hover:shadow-goldenWheat/10 transition-all duration-300"
                          >
                            <div className="relative h-40 overflow-hidden rounded-t-lg mb-3">
                              <img
                                src={variety.image || '/images/placeholder.jpg'}
                                alt={variety.name || 'Unknown Variety'}
                                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                loading="lazy"
                              />
                              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoalBlack to-transparent p-2">
                                <span className="bg-goldenWheat/80 text-xs text-charcoalBlack px-2 py-1 rounded">
                                  {variety.name || 'Unknown Variety'}
                                </span>
                              </div>
                            </div>
                            <p className="text-neutralSand/80 mb-3 text-sm">{variety.description || 'No description available'}</p>
                            <div className="mb-3">
                              <h4 className="text-xs font-semibold mb-1 text-neutralSand">Packaging:</h4>
                              <div className="flex flex-wrap gap-1">
                                {(variety.packaging || []).map((pkg, i) => (
                                  <span
                                    key={i}
                                    className={`px-2 py-0.5 rounded text-xs ${
                                      selectedPackaging === pkg 
                                        ? 'bg-goldenWheat text-charcoalBlack' 
                                        : 'bg-goldenWheat/10 text-goldenWheat'
                                    }`}
                                  >
                                    {pkg}
                                  </span>
                                ))}
                              </div>
                            </div>
                         
                          </div>
                        ))
                    ) : (
                      // For products without varieties
                      <div className="col-span-full bg-charcoalBlack/40 border border-goldenWheat/10 rounded-lg p-4 hover:shadow-lg hover:shadow-goldenWheat/10 transition-all duration-300">
                        <div className="flex flex-col md:flex-row gap-4">
                          <div className="relative h-40 w-full md:w-1/3 overflow-hidden rounded-lg">
                            <img
                              src={product.image || '/images/placeholder.jpg'}
                              alt={product.name || 'Unknown Product'}
                              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                              loading="lazy"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoalBlack to-transparent p-2">
                              <span className="bg-goldenWheat/80 text-xs text-charcoalBlack px-2 py-1 rounded">
                                {product.name || 'Unknown Product'}
                              </span>
                            </div>
                          </div>
                          <div className="flex-1">
                            <p className="text-neutralSand/80 mb-3 text-sm">{product.description || 'No description available'}</p>
                            <div className="mb-3">
                              <h4 className="text-xs font-semibold mb-1 text-neutralSand">Packaging:</h4>
                              <div className="flex flex-wrap gap-1">
                                {(product.packaging || []).map((pkg, i) => (
                                  <span
                                    key={i}
                                    className={`px-2 py-0.5 rounded text-xs ${
                                      selectedPackaging === pkg 
                                        ? 'bg-goldenWheat text-charcoalBlack' 
                                        : 'bg-goldenWheat/10 text-goldenWheat'
                                    }`}
                                  >
                                    {pkg}
                                  </span>
                                ))}
                              </div>
                            </div>
                            
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-5xl mb-4 text-goldenWheat/30">
                <FaSearch />
              </div>
              <h3 className="text-xl font-medium text-neutralSand mb-2">No products found</h3>
              <p className="text-neutralSand/60 mb-4">Try adjusting your search or filter criteria</p>
              <button
                onClick={() => {
                  setSelectedCategory("All Products");
                  setSelectedVariety("All");
                  setSelectedPackaging("All");
                  setSearchTerm("");
                }}
                className="px-4 py-2 bg-goldenWheat/10 text-goldenWheat rounded-lg hover:bg-goldenWheat/20 transition-colors"
              >
                Reset All Filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-charcoalBlack to-deepGreen/10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-goldenWheat">Our Core Services</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-goldenWheat to-warmBrown mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto">
              We provide comprehensive solutions tailored to your commodity trading and logistics needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-gradient-to-br ${service.bg} p-8 rounded-xl border border-warmBrown/20 hover:border-goldenWheat/30 transition-all duration-300`}
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-goldenWheat">{service.title}</h3>
                <p className="mb-4">{service.description}</p>
                <motion.button
                  whileHover={{ x: 5 }}
                  className="text-goldenWheat flex items-center gap-2 text-sm font-medium"
                >
                  Learn more <FaArrowRight />
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Process */}
      <section className="py-20 bg-gradient-to-b from-deepGreen/10 to-charcoalBlack">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-goldenWheat">Our Process</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-goldenWheat to-warmBrown mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto">
              Streamlined operations from farm to market
            </p>
          </motion.div>

          <div className="relative">
            {/* Horizontal line */}
            <div className="absolute left-4 right-4 top-1/2 h-1 bg-gradient-to-r from-goldenWheat to-warmBrown z-0 hidden md:block"></div>

            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 z-10">
              {[
                { icon: <FaSearch className="text-2xl" />, title: "Sourcing", desc: "Partner with local farmers" },
                { icon: <FaWarehouse className="text-2xl" />, title: "Storage", desc: "Climate-controlled facilities" },
                { icon: <FaTruck className="text-2xl" />, title: "Logistics", desc: "Regional distribution" }
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.2 }}
                  className="bg-charcoalBlack p-6 rounded-xl border border-goldenWheat/20 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-goldenWheat to-warmBrown rounded-full flex items-center justify-center text-2xl text-charcoalBlack mx-auto mb-4">
                    {step.icon}
                  </div>
                  <h4 className="font-bold mb-2">{step.title}</h4>
                  <p className="text-sm text-neutralSand/80">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-deepGreen/10 to-charcoalBlack relative">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80')] bg-cover bg-center"></div>
        <div className="container mx-auto px-6 relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2 text-goldenWheat">{stat.value}</div>
                <div className="text-neutralSand">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-deepGreen/70 to-warmBrown/70 z-0"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Streamline Your East African Trade Operations?</h2>
            <p className="text-xl mb-8">
              Partner with Vittorios Trades for reliable, efficient, and cost-effective logistics and commodity trading solutions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
         
          
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;