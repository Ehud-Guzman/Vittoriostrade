import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

function ProductCard({ name, productGroup, category, image, description, packaging, selectedPackaging, index }) {
  const whatsappMsg = encodeURIComponent(
    `Hi! I'm interested in ${name}${productGroup !== name ? ` (${productGroup})` : ""} from your ${category} range. Please send me more details.`
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: Math.min(index * 0.03, 0.4) }}
      className="bg-white rounded-2xl overflow-hidden border border-earth-200 shadow-warm hover:shadow-warm-lg hover:border-brand-300 transition-all duration-300 flex flex-col group"
    >
      {/* Image */}
      <div className="relative h-44 overflow-hidden bg-earth-100">
        <img
          src={image || "/images/placeholder.jpg"}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          onError={(e) => { e.target.src = "/images/placeholder.jpg"; }}
        />
        <span className="absolute top-2.5 left-2.5 bg-brand-500/90 backdrop-blur-sm text-white text-[10px] font-semibold px-2.5 py-1 rounded-full leading-none">
          {category.replace(" & Byproducts", "").replace(" & Milled Products", "").split("&")[0].trim()}
        </span>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        {productGroup !== name && (
          <span className="text-[10px] text-earth-400 font-semibold uppercase tracking-wide mb-0.5 leading-none">
            {productGroup}
          </span>
        )}
        <h4 className="font-display font-bold text-earth-900 text-sm mb-2 leading-snug">
          {name}
        </h4>
        <p className="text-earth-500 text-xs leading-relaxed mb-3 flex-1 line-clamp-2">
          {description}
        </p>

        {/* Packaging chips */}
        <div className="flex flex-wrap gap-1 mb-3">
          {packaging.map((pkg) => (
            <span
              key={pkg}
              className={`px-2 py-0.5 rounded-full text-[10px] font-semibold border transition-colors ${
                selectedPackaging === "All" || selectedPackaging === pkg
                  ? "bg-brand-50 text-brand-600 border-brand-200"
                  : "bg-earth-100 text-earth-400 border-earth-200 opacity-40"
              }`}
            >
              {pkg}
            </span>
          ))}
        </div>

        {/* Enquire CTA */}
        <a
          href={`https://wa.me/254799031449?text=${whatsappMsg}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-1.5 w-full py-2 rounded-lg bg-earth-50 hover:bg-brand-500 text-earth-600 hover:text-white border border-earth-200 hover:border-brand-500 text-xs font-semibold transition-all duration-200"
        >
          <FaWhatsapp className="text-green-500 group-hover:text-white text-sm" />
          Enquire
        </a>
      </div>
    </motion.div>
  );
}

export default ProductCard;
