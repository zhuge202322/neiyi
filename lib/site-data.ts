import {
  BadgeCheck,
  Boxes,
  Clock3,
  Factory,
  FileCheck2,
  Gem,
  Globe2,
  Handshake,
  Layers3,
  PackageCheck,
  PenTool,
  Ruler,
  Scissors,
  ShieldCheck,
  Shirt,
  Sparkles,
  ThermometerSun,
  Truck,
  UsersRound,
} from "lucide-react";

export const company = {
  name: "Hong Kong Winsun Co., Limited",
  shortName: "Winsun",
  established: "2015",
  address:
    "Flat/Rm 17, Blk A, 9/F, On Dak Industrial Building, 2-6 Wah Sing Street, Kwai Chung, Hong Kong",
  whatsApp: ["+86 198 7886 6771", "+86 139 2679 0536"],
  whatsAppPrimary: "+86 198 7886 6771",
  whatsAppLink: "https://wa.me/8619878866771",
  markets: ["Russia", "Europe", "Global export markets"],
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "OEM / ODM", href: "/oem-odm" },
  { label: "Manufacturing", href: "/manufacturing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const products = [
  {
    title: "Knitted Underwear",
    description:
      "Comfort-led everyday collections made for repeat programs, private labels, and retail-ready assortments.",
    icon: Shirt,
    image: "/assets/showroom.png",
  },
  {
    title: "Bras",
    description:
      "Modern silhouettes with flexible material sourcing, sample refinement, and market-oriented fit direction.",
    icon: Sparkles,
    image: "/assets/requested-products/seamless-bra.jpg",
  },
  {
    title: "Panties",
    description:
      "Core and seasonal ranges across cotton, modal, lace, seamless-inspired, and knitted fabric options.",
    icon: Gem,
    image: "/assets/requested-products/cotton-panties.jpg",
  },
  {
    title: "Shapewear",
    description:
      "Supportive bodywear developed around structure, elasticity, comfort, and packaging requirements.",
    icon: Ruler,
    image: "/assets/requested-products/waist-trainer.jpg",
  },
  {
    title: "Thermal Wear",
    description:
      "Warm, practical base-layer programs for cooler markets with stable production and delivery planning.",
    icon: ThermometerSun,
    image: "/assets/requested-products/mens-thermal-set.jpg",
  },
  {
    title: "Loungewear",
    description:
      "Relaxed knitted apparel and related products designed for lifestyle, value, and replenishment demand.",
    icon: Scissors,
    image: "/assets/office.jpg",
  },
];

export const capabilities = [
  {
    title: "OEM Manufacturing",
    text: "Production based on buyer tech packs, reference samples, target prices, and delivery requirements.",
    icon: Factory,
  },
  {
    title: "ODM Customization",
    text: "Style development support for seasonal programs, private label ranges, and market-specific assortments.",
    icon: PenTool,
  },
  {
    title: "Sample-Based Production",
    text: "Fast interpretation of existing samples with material, trimming, fit, and construction guidance.",
    icon: PackageCheck,
  },
  {
    title: "Customized Packaging",
    text: "Packaging coordination for export-ready programs, including size sets, labels, polybags, and cartons.",
    icon: Boxes,
  },
  {
    title: "Fast Sampling",
    text: "Efficient sampling workflows to help buyers confirm quality, appearance, and commercial feasibility.",
    icon: Clock3,
  },
  {
    title: "Stable Delivery",
    text: "Mature production coordination and supply chain resources for consistent long-term cooperation.",
    icon: Truck,
  },
];

export const stats = [
  { value: "2015", label: "Established" },
  { value: "6+", label: "Core Categories" },
  { value: "OEM", label: "Private Label Ready" },
  { value: "Global", label: "Export Service" },
];

export const factoryStrength = [
  {
    value: "2015",
    label: "Established",
    text: "Export-oriented underwear manufacturing support since 2015.",
    icon: Clock3,
  },
  {
    value: "5,000 sqm",
    label: "Factory",
    text: "Practical production space for sampling, sewing, packing, and storage.",
    icon: Factory,
  },
  {
    value: "150+",
    label: "Workers",
    text: "Experienced production team for repeat underwear and apparel programs.",
    icon: UsersRound,
  },
  {
    value: "20",
    label: "Production Lines",
    text: "Flexible line coordination for bras, panties, shapewear, and thermal wear.",
    icon: Layers3,
  },
  {
    value: "500,000 pcs",
    label: "Monthly Capacity",
    text: "Bulk order support with quality follow-up before shipment.",
    icon: PackageCheck,
  },
  {
    value: "15+",
    label: "Export Countries",
    text: "Serving overseas buyers across Russia, Europe, and global markets.",
    icon: Globe2,
  },
];

export const quickFacts = [
  { item: "MOQ", details: "2,000 pcs / colour" },
  { item: "Sample Time", details: "7-10 days" },
  { item: "Lead Time", details: "25-40 days" },
  { item: "Private Label", details: "Yes" },
  { item: "OEM", details: "Yes" },
  { item: "ODM", details: "Yes" },
];

export const whyChooseWinsun = [
  "Factory Since 2015",
  "OEM & ODM Service",
  "Small MOQ Available",
  "Fast Sampling",
  "Stable Delivery",
  "Quality Inspection Before Shipment",
  "Private Label Support",
];

export const certifications = [
  {
    title: "Fabric Test Reports",
    text: "Material reports can be prepared according to buyer, market, and order requirements.",
    icon: FileCheck2,
  },
  {
    title: "Quality Inspection Reports",
    text: "Pre-shipment inspection records support clearer quality control and buyer review.",
    icon: ShieldCheck,
  },
];

export const productFamilies = [
  {
    title: "Bras",
    description: "Everyday and market-ready bra styles for OEM and ODM development.",
    products: [
      {
        name: "Seamless Bra",
        slug: "seamless-bra",
        image: "/assets/requested-products/seamless-bra.jpg",
        summary: "Smooth daily bra programs for private labels seeking clean lines and comfort.",
        highlights: ["Seamless look", "Soft stretch hand feel", "Private label colorways"],
      },
      {
        name: "Sports Bra",
        slug: "sports-bra",
        image: "/assets/requested-products/sports-bra.jpg",
        summary: "Supportive active bra development for fitness, lounge, and athleisure buyers.",
        highlights: ["Active support", "Moisture-friendly fabrics", "Elastic and logo options"],
      },
      {
        name: "Wireless Bra",
        slug: "wireless-bra",
        image: "/assets/requested-products/wireless-bra.jpg",
        summary: "Wire-free comfort bra styles for everyday retail and replenishment programs.",
        highlights: ["Wire-free comfort", "Smooth cup direction", "Daily wear positioning"],
      },
      {
        name: "Lace Bra",
        slug: "lace-bra",
        image: "/assets/requested-products/lace-bra.jpg",
        summary: "Feminine lace bra options for seasonal assortments and private label ranges.",
        highlights: ["Lace styling", "Multiple color options", "Retail packaging support"],
      },
    ],
  },
  {
    title: "Panties",
    description: "Core panty programs for private labels, retail buyers, and repeat orders.",
    products: [
      {
        name: "Cotton Panties",
        slug: "cotton-panties",
        image: "/assets/requested-products/cotton-panties.jpg",
        summary: "Core cotton panty programs for everyday underwear collections.",
        highlights: ["Cotton-rich direction", "Daily comfort", "Size set planning"],
      },
      {
        name: "Seamless Panties",
        slug: "seamless-panties",
        image: "/assets/requested-products/seamless-panties.jpg",
        summary: "Smooth panty styles for invisible-feel retail ranges and value packs.",
        highlights: ["Smooth edge direction", "Multi-pack colors", "Soft stretch fabrics"],
      },
      {
        name: "Panty Color Set",
        slug: "panty-color-set",
        image: "/assets/requested-products/panty-color-set.jpg",
        summary: "Assorted color panty sets for retail packs, online bundles, and promotions.",
        highlights: ["Color assortment", "Pack development", "Label and polybag support"],
      },
      {
        name: "High Waist Panties",
        slug: "high-waist-panties",
        image: "/assets/requested-products/high-waist-panties.jpg",
        summary: "High waist silhouettes for comfort, coverage, and shaping-inspired programs.",
        highlights: ["High waist fit", "Coverage-focused", "Comfort waistband options"],
      },
    ],
  },
  {
    title: "Thermal Wear",
    description: "Warm base-layer sets for seasonal and cooler-market programs.",
    products: [
      {
        name: "Men's Thermal Set",
        slug: "mens-thermal-set",
        image: "/assets/requested-products/mens-thermal-set.jpg",
        summary: "Men's warm base-layer sets for winter retail and export programs.",
        highlights: ["Warm base layer", "Set packaging", "Seasonal order planning"],
      },
      {
        name: "Men's Thermal Black Set",
        slug: "mens-thermal-black-set",
        image: "/assets/requested-products/mens-thermal-black.jpg",
        summary: "Black men's thermal set option for practical winter underwear ranges.",
        highlights: ["Dark colorway", "Long sleeve and pant set", "Bulk order support"],
      },
      {
        name: "Women's Thermal Set",
        slug: "womens-thermal-set",
        image: "/assets/requested-products/womens-thermal-set.jpg",
        summary: "Women's fitted thermal sets for cooler-market daily wear programs.",
        highlights: ["Women's fit direction", "Warm hand feel", "Color and size planning"],
      },
    ],
  },
  {
    title: "Shapewear",
    description: "Supportive shapewear ranges built around comfort, structure, and fit.",
    products: [
      {
        name: "Bodysuit",
        slug: "bodysuit",
        image: "/assets/requested-products/bodysuit.jpg",
        summary: "One-piece shapewear bodysuit development for smooth support collections.",
        highlights: ["One-piece support", "Smooth body line", "Private label trim options"],
      },
      {
        name: "Waist Trainer",
        slug: "waist-trainer",
        image: "/assets/requested-products/waist-trainer.jpg",
        summary: "Waist support styles for structured shapewear and body shaping programs.",
        highlights: ["Waist support", "Hook and closure options", "Elastic strength planning"],
      },
      {
        name: "Shapewear Set",
        slug: "shapewear-set",
        image: "/assets/requested-products/shapewear-set.jpg",
        summary: "Coordinated shapewear set options for waist and thigh support programs.",
        highlights: ["Coordinated set", "Support zones", "Retail-ready presentation"],
      },
      {
        name: "Shaping Shorts",
        slug: "shaping-shorts",
        image: "/assets/requested-products/shaping-shorts.jpg",
        summary: "Shaping shorts for smoothing, support, and comfort-led bodywear ranges.",
        highlights: ["Thigh coverage", "Smooth support", "Comfort waistband direction"],
      },
    ],
  },
];

export const productDetails = productFamilies.flatMap((family) =>
  family.products.map((product) => ({
    ...product,
    family: family.title,
    familyDescription: family.description,
  })),
);

export const processSteps = [
  "Inquiry & requirement review",
  "Fabric, style, and quotation confirmation",
  "Sampling and fit refinement",
  "Bulk production planning",
  "Quality follow-up and packaging",
  "Export coordination and after-sales support",
];

export const values = [
  {
    title: "Quality First",
    text: "Every program is managed around comfort, materials, construction, and buyer expectations.",
    icon: BadgeCheck,
  },
  {
    title: "Market Awareness",
    text: "Our team follows product trends and practical selling needs across overseas markets.",
    icon: Globe2,
  },
  {
    title: "Long-Term Cooperation",
    text: "We build steady buyer relationships through clear communication and reliable execution.",
    icon: Handshake,
  },
];
