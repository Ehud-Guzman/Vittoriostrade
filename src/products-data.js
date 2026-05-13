export const productCategories = [
  "All Products",
  "Cereals & Grains",
  "Pulses & Legumes",
  "Flour & Milled Products",
  "Animal Feed & Byproducts",
  "Oil Seeds & Nuts",
  "Fresh Dry Food Add-ons",
  "Packaged Branded Products",
];

export const categoryShortNames = {
  "All Products":             "All",
  "Cereals & Grains":         "Cereals",
  "Pulses & Legumes":         "Pulses",
  "Flour & Milled Products":  "Flours",
  "Animal Feed & Byproducts": "Animal Feed",
  "Oil Seeds & Nuts":         "Oil Seeds",
  "Fresh Dry Food Add-ons":   "Add-ons",
  "Packaged Branded Products":"Branded",
};

export const packagingOptions = ["All", "45kg", "50kg", "90kg", "100kg", "Bulk"];

const rawProducts = [
  // ── Cereals & Grains ──────────────────────────────────────────────────────
  {
    category: "Cereals & Grains", name: "Maize",
    varieties: [
      { name: "White Maize",  image: "/images/products/white-maize.webp",  description: "Premium quality white maize with high starch content, ideal for flour production.", packaging: ["45kg","50kg","90kg","Bulk"] },
      { name: "Yellow Maize", image: "/images/products/yellow-maize.webp", description: "High-quality yellow maize with excellent nutritional value for animal feed.",          packaging: ["45kg","50kg","90kg","Bulk"] },
    ],
  },
  {
    category: "Cereals & Grains", name: "Sorghum",
    varieties: [
      { name: "Gadam Sorghum",  image: "/images/products/sorghum.webp",       description: "High-quality Gadam sorghum variety with excellent drought resistance.", packaging: ["45kg","50kg","90kg"] },
      { name: "Serena Sorghum", image: "/images/products/white-sorghum.webp", description: "Early-maturing Serena variety ideal for arid regions.",                   packaging: ["45kg","50kg","90kg","Bulk"] },
    ],
  },
  {
    category: "Cereals & Grains", name: "Millet",
    varieties: [
      { name: "Finger Millet", image: "/images/products/finger-millet.webp", description: "Nutrient-dense finger millet (Uwele) for flour production.",       packaging: ["45kg","50kg","90kg","Bulk"] },
      { name: "Pearl Millet",  image: "/images/products/Pearl-millet.webp",  description: "High-yield pearl millet for human and animal consumption.",        packaging: ["45kg","50kg","90kg","Bulk"] },
    ],
  },
  { category: "Cereals & Grains", name: "Wheat",  image: "/images/wheat.jpg",                description: "Premium wheat grains for flour milling and animal feed.",   packaging: ["45kg","50kg","90kg","Bulk"] },
  { category: "Cereals & Grains", name: "Barley", image: "/images/products/barley.webp",     description: "Quality barley for brewing and animal feed production.",     packaging: ["45kg","50kg","90kg","Bulk"] },
  {
    category: "Cereals & Grains", name: "Rice",
    varieties: [
      { name: "Pishori Rice",      image: "/images/products/pishori-rice.webp", description: "Aromatic Pishori rice with premium cooking qualities.",  packaging: ["45kg","50kg","90kg","Bulk"] },
      { name: "IR Rice Varieties", image: "/images/products/ir-rice.webp",      description: "High-yield IR rice varieties for bulk consumption.",     packaging: ["45kg","50kg","90kg","Bulk"] },
    ],
  },

  // ── Pulses & Legumes ──────────────────────────────────────────────────────
  {
    category: "Pulses & Legumes", name: "Dry Beans",
    varieties: [
      { name: "Red Kidney Beans", image: "/images/products/red-kidney-beans.webp", description: "Nutrient-rich red kidney beans with excellent cooking qualities.", packaging: ["45kg","50kg","90kg","Bulk"] },
      { name: "Yellow Beans",     image: "/images/products/yellow-beans.webp",     description: "Nutritious yellow beans with high protein content.",              packaging: ["45kg","50kg","90kg","Bulk"] },
      { name: "Black Beans",      image: "/images/products/black-beans.webp",      description: "Flavorful black beans ideal for traditional dishes.",             packaging: ["45kg","50kg","90kg","Bulk"] },
      { name: "Rosecoco Beans",   image: "/images/products/rose-coco.webp",        description: "Popular Rosecoco variety with distinctive speckled pattern.",     packaging: ["45kg","50kg","90kg","Bulk"] },
    ],
  },
  {
    category: "Pulses & Legumes", name: "Green Grams",
    varieties: [
      { name: "Green Green Grams",   image: "/images/products/greengrams.webp",    description: "Fresh premium green grams with high protein content.",           packaging: ["45kg","50kg","90kg","Bulk"] },
      { name: "Nillyon Green Grams", image: "/images/products/greengrams.webp",    description: "Nutritious Nillyon variety with high protein content.",          packaging: ["45kg","50kg","90kg","Bulk"] },
      { name: "Green Grams Special", image: "/images/products/dengu-special.webp", description: "Special green grams ideal for traditional dishes.",              packaging: ["45kg","50kg","90kg","Bulk"] },
    ],
  },
  { category: "Pulses & Legumes", name: "Cowpeas",     image: "/images/products/cow-peas.webp",          description: "Drought-resistant cowpeas with excellent nutritional value.", packaging: ["45kg","50kg","90kg","Bulk"] },
  { category: "Pulses & Legumes", name: "Lentils",     image: "/images/products/lentils.webp",           description: "High-quality lentils for soups and stews.",                  packaging: ["45kg","50kg","90kg","Bulk"] },
  { category: "Pulses & Legumes", name: "Pigeon Peas", image: "/images/products/Green-Pigeon-Peas.webp", description: "Protein-rich pigeon peas for traditional dishes.",            packaging: ["45kg","50kg","90kg","Bulk"] },

  // ── Flour & Milled Products ───────────────────────────────────────────────
  {
    category: "Flour & Milled Products", name: "Maize Flour",
    varieties: [
      { name: "Sifted Maize Flour", image: "/images/products/maize-flour.webp",    description: "Finely sifted maize flour perfect for ugali and traditional dishes.", packaging: ["45kg","50kg","90kg","Bulk"] },
      { name: "Unga (Un-sifted)",   image: "/images/products/unsifted-flour.webp", description: "Traditional un-sifted maize flour with full grain nutrition.",         packaging: ["45kg","50kg","90kg","Bulk"] },
    ],
  },
  { category: "Flour & Milled Products", name: "Sorghum Flour",   image: "/images/products/sorghum-flour.webp", description: "Nutritious sorghum flour for gluten-free baking.",  packaging: ["45kg","50kg","90kg","Bulk"] },
  { category: "Flour & Milled Products", name: "Millet Flour",    image: "/images/products/millet-flour.webp",  description: "High-protein millet flour for nutritious baking.",  packaging: ["45kg","50kg","90kg","Bulk"] },
  { category: "Flour & Milled Products", name: "Composite Flour", image: "/images/composite-flour.jpg",         description: "Nutritious blend of maize and sorghum flour.",       packaging: ["45kg","50kg","90kg","Bulk"] },

  // ── Animal Feed & Byproducts ──────────────────────────────────────────────
  { category: "Animal Feed & Byproducts", name: "Maize Bran",           image: "/images/products/maize-bran.webp",                   description: "High-fiber maize bran for livestock feed.",                                packaging: ["45kg","50kg","90kg","Bulk"] },
  { category: "Animal Feed & Byproducts", name: "Wheat Bran",           image: "/images/products/wheat-bran-(2).webp",               description: "High-fiber wheat bran with good protein content for livestock.",            packaging: ["45kg","50kg","90kg","Bulk"] },
  { category: "Animal Feed & Byproducts", name: "Cottonseed Cake",      image: "/images/products/cotton-cake.webp",                  description: "Protein-rich cottonseed cake ideal for dairy cattle and poultry.",          packaging: ["45kg","50kg","90kg","Bulk"] },
  { category: "Animal Feed & Byproducts", name: "Sunflower Cake",       image: "/images/products/sunflower_meal_with_hulls_04.webp", description: "High-protein sunflower residue for animal feed.",                          packaging: ["45kg","50kg","90kg","Bulk"] },
  { category: "Animal Feed & Byproducts", name: "Soya Meal",            image: "/images/products/soybean_meal.webp",                 description: "Premium soya meal for livestock nutrition.",                               packaging: ["45kg","50kg","90kg","Bulk"] },
  { category: "Animal Feed & Byproducts", name: "Dried Cassava Chips",  image: "/images/products/dried-cassava.webp",                description: "Sun-dried cassava chips with long shelf life for animal feed.",             packaging: ["45kg","50kg","90kg","Bulk"] },
  { category: "Animal Feed & Byproducts", name: "Brewer's Spent Grain", image: "/images/products/brewers-grain.jpg",                 description: "Nutritious byproduct from the brewing industry for animal feed.",           packaging: ["45kg","50kg","90kg","Bulk"] },

  // ── Oil Seeds & Nuts ──────────────────────────────────────────────────────
  {
    category: "Oil Seeds & Nuts", name: "Groundnuts",
    varieties: [
      { name: "Raw Groundnuts",     image: "/images/products/RedGroundnuts_1.webp", description: "High-quality groundnuts with excellent oil content and flavor.", packaging: ["45kg","50kg","90kg","Bulk"] },
      { name: "Roasted Groundnuts", image: "/images/products/Crushed-Peanuts.webp", description: "Premium roasted groundnuts for direct consumption.",             packaging: ["45kg","50kg","90kg","Bulk"] },
    ],
  },
  { category: "Oil Seeds & Nuts", name: "Soybeans",        image: "/images/products/Soybeans.webp",        description: "Premium soybeans with high oil and protein content.",  packaging: ["45kg","50kg","90kg","Bulk"] },
  { category: "Oil Seeds & Nuts", name: "Sunflower Seeds", image: "/images/products/sunflower-seeds.webp", description: "High-oil content sunflower seeds.",                     packaging: ["45kg","50kg","90kg","Bulk"] },
  { category: "Oil Seeds & Nuts", name: "Simsim (Sesame)", image: "/images/products/sesame-seeds.webp",    description: "Quality sesame seeds for oil and culinary use.",        packaging: ["45kg","50kg","90kg","Bulk"] },
  { category: "Oil Seeds & Nuts", name: "Cottonseed",      image: "/images/products/cotton-seeds.webp",    description: "High-quality cottonseed for oil extraction.",           packaging: ["45kg","50kg","90kg","Bulk"] },

  // ── Fresh Dry Food Add-ons ────────────────────────────────────────────────
  { category: "Fresh Dry Food Add-ons", name: "Dried Cassava",          image: "/images/products/dried-cassava.webp",    description: "Sun-dried cassava chips with long shelf life.", packaging: ["45kg","50kg","90kg","Bulk"] },
  { category: "Fresh Dry Food Add-ons", name: "Dried Arrowroots",       image: "/images/products/dried-arrowroots.webp", description: "Premium dried arrowroots for processing.",      packaging: ["45kg","50kg","90kg","Bulk"] },
  { category: "Fresh Dry Food Add-ons", name: "Dried Bananas (Matoke)", image: "/images/products/dried bananas.jpeg",    description: "Sun-dried matoke for flour production.",        packaging: ["45kg","50kg","90kg","Bulk"] },

  // ── Packaged Branded Products ─────────────────────────────────────────────
  { category: "Packaged Branded Products", name: "Vittorios Animal Feed", image: "/images/animal-feed.jpg", description: "Our premium branded animal feed formulated for optimal livestock nutrition.", packaging: ["45kg","50kg","90kg","Bulk"] },
];

// Flatten: each variety becomes its own card entry
export const flatProducts = rawProducts.flatMap((p) => {
  if (p.varieties) {
    return p.varieties.map((v, vi) => ({
      id: `${p.category}-${p.name}-${vi}`,
      category: p.category,
      productGroup: p.name,
      name: v.name,
      image: v.image || "",
      description: v.description || "",
      packaging: v.packaging || [],
    }));
  }
  return [{
    id: `${p.category}-${p.name}`,
    category: p.category,
    productGroup: p.name,
    name: p.name,
    image: p.image || "",
    description: p.description || "",
    packaging: p.packaging || [],
  }];
});
