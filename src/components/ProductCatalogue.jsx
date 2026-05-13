import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaSearch, FaTimes } from "react-icons/fa";
import { flatProducts, productCategories, categoryShortNames, packagingOptions } from "../products-data";
import ProductCard from "./ProductCard";

const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// Count cards per category (computed once)
const categoryCounts = productCategories.reduce((acc, cat) => {
  acc[cat] = cat === "All Products"
    ? flatProducts.length
    : flatProducts.filter((p) => p.category === cat).length;
  return acc;
}, {});

function ProductCatalogue() {
  const [selectedCategory,  setSelectedCategory]  = useState("All Products");
  const [selectedPackaging, setSelectedPackaging] = useState("All");
  const [searchTerm,        setSearchTerm]        = useState("");

  const filtered = useMemo(() => {
    const q = searchTerm.toLowerCase();
    return flatProducts.filter((p) => {
      if (selectedCategory !== "All Products" && p.category !== selectedCategory) return false;
      if (selectedPackaging !== "All" && !p.packaging.includes(selectedPackaging)) return false;
      if (q && !p.name.toLowerCase().includes(q) && !p.productGroup.toLowerCase().includes(q) && !p.category.toLowerCase().includes(q) && !p.description.toLowerCase().includes(q)) return false;
      return true;
    });
  }, [selectedCategory, selectedPackaging, searchTerm]);

  const hasFilters = selectedCategory !== "All Products" || selectedPackaging !== "All" || searchTerm !== "";

  const resetAll = () => {
    setSelectedCategory("All Products");
    setSelectedPackaging("All");
    setSearchTerm("");
  };

  // Key to re-mount grid on filter change (smooth fade between states)
  const gridKey = `${selectedCategory}|${selectedPackaging}|${searchTerm}`;

  return (
    <section id="products" className="py-24 bg-white">
      <div className="container mx-auto px-6">

        {/* Section header */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-14"
        >
          <span className="text-sm font-semibold text-brand-500 uppercase tracking-widest mb-3 block">Full Range</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-earth-900 mb-4">Product Catalogue</h2>
          <div className="w-16 h-1 bg-brand-500 mx-auto mb-5 rounded-full" />
          <p className="text-earth-500 max-w-xl mx-auto">
            Premium agricultural commodities in various varieties and packaging options
          </p>
        </motion.div>

        {/* Search bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }} viewport={{ once: true }}
          className="relative max-w-lg mx-auto mb-8"
        >
          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-earth-400 text-sm pointer-events-none" />
          <input
            type="text"
            placeholder="Search products, varieties, categories…"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-earth-50 border border-earth-200 rounded-full pl-10 pr-10 py-3 text-earth-800 text-sm outline-none focus:ring-2 focus:ring-brand-200 focus:border-brand-400 transition"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-earth-400 hover:text-earth-700 transition-colors"
            >
              <FaTimes className="text-xs" />
            </button>
          )}
        </motion.div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }} viewport={{ once: true }}
          className="flex gap-2 overflow-x-auto pb-2 mb-5 scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {productCategories.map((cat) => {
            const active = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
                  active
                    ? "bg-brand-500 text-white shadow-brand"
                    : "bg-earth-100 text-earth-600 hover:bg-earth-200"
                }`}
              >
                {categoryShortNames[cat]}
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold leading-none ${
                  active ? "bg-white/25 text-white" : "bg-earth-200 text-earth-500"
                }`}>
                  {categoryCounts[cat]}
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* Packaging filter pills */}
        <motion.div
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true }}
          className="flex flex-wrap items-center gap-2 mb-7"
        >
          <span className="text-[11px] font-semibold text-earth-400 uppercase tracking-wide">Packaging:</span>
          {packagingOptions.map((pkg) => (
            <button
              key={pkg}
              onClick={() => setSelectedPackaging(pkg)}
              className={`px-3 py-1 rounded-full text-xs font-semibold border transition-all duration-200 ${
                selectedPackaging === pkg
                  ? "bg-brand-500 text-white border-brand-500 shadow-sm"
                  : "bg-white text-earth-600 border-earth-200 hover:border-brand-300 hover:text-brand-600"
              }`}
            >
              {pkg}
            </button>
          ))}
          {hasFilters && (
            <button
              onClick={resetAll}
              className="ml-auto text-xs text-earth-400 hover:text-earth-700 underline transition-colors"
            >
              Clear all
            </button>
          )}
        </motion.div>

        {/* Result count */}
        <p className="text-sm text-earth-400 mb-6">
          Showing{" "}
          <span className="font-semibold text-earth-700">{filtered.length}</span>
          {" "}of {flatProducts.length} products
        </p>

        {/* Product grid */}
        <AnimatePresence mode="wait">
          {filtered.length > 0 ? (
            <motion.div
              key={gridKey}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
            >
              {filtered.map((p, i) => (
                <ProductCard key={p.id} {...p} selectedPackaging={selectedPackaging} index={i} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-20"
            >
              <div className="w-16 h-16 bg-earth-100 rounded-full flex items-center justify-center mx-auto mb-5">
                <FaSearch className="text-earth-400 text-xl" />
              </div>
              <h3 className="text-lg font-semibold text-earth-800 mb-2">No products found</h3>
              <p className="text-earth-400 text-sm mb-6">Try adjusting your search or filter criteria</p>
              <button
                onClick={resetAll}
                className="px-5 py-2.5 bg-brand-500 hover:bg-brand-600 text-white text-sm font-semibold rounded-full transition-colors"
              >
                Reset Filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default ProductCatalogue;
