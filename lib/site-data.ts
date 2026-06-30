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
  name: "Hong Kong Winsun Co., Ltd.",
  chineseName: "香港垣盛有限公司",
  shortName: "Winsun",
  established: "2015",
  address:
    "Flat/Rm 17, Blk A, 9/F, On Dak Industrial Building, 2-6 Wah Sing Street, Kwai Chung, Hong Kong",
  email: "info@winsunhk.com",
  instagram: "+86 19878866771",
  telegram: "+86 19878866771",
  whatsApp: ["+86 19878866771", "+86 13926790536"],
  whatsAppPrimary: "+86 19878866771",
  whatsAppLink: "https://wa.me/8619878866771",
  markets: ["Russia", "Kazakhstan", "Belarus", "Europe", "USA", "Southeast Asia"],
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Factory", href: "/manufacturing" },
  { label: "Products", href: "/products" },
  { label: "OEM Service", href: "/oem-odm" },
  { label: "Certificates", href: "/certificates" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const languageOptions = [
  { label: "English", code: "EN" },
  { label: "Russian", code: "RU" },
];

export const updatedMarketSupport =
  "Our team provides project support for bras, panties, shapewear, thermal wear, loungewear, and knitted underwear products across Europe, Russia, Kazakhstan, Belarus, Southeast Asia, and other international markets. We have extensive experience in export and foreign trade services.";

export const products = [
  {
    title: "Knitted Underwear",
    description:
      "Comfort-led everyday collections made for repeat programs, private labels, and retail-ready assortments.",
    icon: Shirt,
    image: "/assets/requested-products/panty-color-set.jpg",
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
    image: "/assets/requested-products/seamless-panties.jpg",
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
  {
    title: "Factory Direct Pricing",
    text: "Competitive pricing without middlemen.",
    icon: Factory,
  },
  {
    title: "OEM & ODM Service",
    text: "Custom logo, packaging and design support.",
    icon: PenTool,
  },
  {
    title: "Low MOQ",
    text: "Suitable for startups and growing brands.",
    icon: Layers3,
  },
  {
    title: "Strict Quality Control",
    text: "100% inspection before shipment.",
    icon: ShieldCheck,
  },
  {
    title: "Fast Sampling",
    text: "Sample delivery within 7-10 days.",
    icon: Clock3,
  },
  {
    title: "On-time Delivery",
    text: "Reliable production schedule.",
    icon: Truck,
  },
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
  {
    title: "Packaging & Label Records",
    text: "Private label, barcode, polybag, carton mark, and export packing details can be coordinated before shipment.",
    icon: PackageCheck,
  },
  {
    title: "Buyer Compliance Support",
    text: "Documentation can be prepared according to buyer, order, fabric, and destination market requirements.",
    icon: BadgeCheck,
  },
];

export const productFamilies = [
  {
    title: "Women's Bras",
    description:
      "OEM and ODM bra programs for everyday comfort, seamless looks, lace styling, and private label collections.",
    products: [
      {
        name: "Seamless Everyday Bra",
        slug: "seamless-bra",
        image: "/assets/629-update/womens-bras-1.png",
        images: [
          "/assets/629-update/womens-bras-1.png",
          "/assets/629-update/womens-bras-2.png",
          "/assets/629-update/womens-bras-3.png",
          "/assets/629-update/womens-bras-4.png",
        ],
        summary:
          "Smooth everyday bra development for private labels seeking clean lines, soft support, and repeatable color programs.",
        highlights: ["Seamless comfort direction", "Soft stretch hand feel", "Private label colorways"],
      },
      {
        name: "Wireless Comfort Bra",
        slug: "sports-bra",
        image: "/assets/629-update/womens-bras-2.png",
        images: [
          "/assets/629-update/womens-bras-2.png",
          "/assets/629-update/womens-bras-1.png",
          "/assets/629-update/womens-bras-3.png",
          "/assets/629-update/womens-bras-4.png",
        ],
        summary: "Wire-free comfort bra styles for everyday retail, online assortments, and size-range planning.",
        highlights: ["Wire-free comfort", "Smooth cup direction", "Daily wear positioning"],
      },
      {
        name: "Lace Bra Set",
        slug: "wireless-bra",
        image: "/assets/629-update/womens-bras-3.png",
        images: [
          "/assets/629-update/womens-bras-3.png",
          "/assets/629-update/womens-bras-1.png",
          "/assets/629-update/womens-bras-2.png",
          "/assets/629-update/womens-bras-4.png",
        ],
        summary: "Feminine lace bra and set development for seasonal assortments and private label packaging.",
        highlights: ["Lace styling", "Matching set direction", "Retail packaging support"],
      },
      {
        name: "Soft Cup Bra",
        slug: "lace-bra",
        image: "/assets/629-update/womens-bras-4.png",
        images: [
          "/assets/629-update/womens-bras-4.png",
          "/assets/629-update/womens-bras-1.png",
          "/assets/629-update/womens-bras-2.png",
          "/assets/629-update/womens-bras-3.png",
        ],
        summary: "Soft cup bra programs with flexible fabric, color, label, and MOQ planning for export buyers.",
        highlights: ["Soft cup structure", "Multiple color options", "ODM adaptation support"],
      },
    ],
  },
  {
    title: "Women's Panties",
    description: "Core panty programs for private labels, retail buyers, value packs, and seasonal assortments.",
    products: [
      {
        name: "Seamless Panties",
        slug: "cotton-panties",
        image: "/assets/629-update/womens-panties-1.png",
        images: [
          "/assets/629-update/womens-panties-1.png",
          "/assets/629-update/womens-panties-2.png",
          "/assets/629-update/womens-panties-3.png",
          "/assets/629-update/womens-panties-4.png",
        ],
        summary:
          "Smooth panty styles for everyday comfort, invisible-feel retail ranges, and color assortments.",
        highlights: ["Smooth edge direction", "Daily comfort", "Size set planning"],
      },
      {
        name: "Lace Panties",
        slug: "seamless-panties",
        image: "/assets/629-update/womens-panties-2.png",
        images: [
          "/assets/629-update/womens-panties-2.png",
          "/assets/629-update/womens-panties-1.png",
          "/assets/629-update/womens-panties-3.png",
          "/assets/629-update/womens-panties-4.png",
        ],
        summary: "Lace panty development for feminine collections, brand sets, and retail-ready private label packs.",
        highlights: ["Lace pattern options", "Private label packs", "Color assortment support"],
      },
      {
        name: "Printed Panty Pack",
        slug: "panty-color-set",
        image: "/assets/629-update/womens-panties-3.png",
        images: [
          "/assets/629-update/womens-panties-3.png",
          "/assets/629-update/womens-panties-1.png",
          "/assets/629-update/womens-panties-2.png",
          "/assets/629-update/womens-panties-4.png",
        ],
        summary: "Printed and assorted panty packs for retail bundles, e-commerce sets, and promotional programs.",
        highlights: ["Print assortment", "Pack development", "Label and polybag support"],
      },
      {
        name: "Thong Panties",
        slug: "high-waist-panties",
        image: "/assets/629-update/womens-panties-4.png",
        images: [
          "/assets/629-update/womens-panties-4.png",
          "/assets/629-update/womens-panties-1.png",
          "/assets/629-update/womens-panties-2.png",
          "/assets/629-update/womens-panties-3.png",
        ],
        summary: "Thong panty styles with soft waistband, color planning, and private label presentation.",
        highlights: ["Thong silhouette", "Soft waistband options", "Comfort-focused finishing"],
      },
    ],
  },
  {
    title: "Shaping Shorts",
    description:
      "Supportive shaping shorts and bodywear styles built around comfort, smoothing, structure, and fit.",
    products: [
      {
        name: "High Waist Shaping Shorts",
        slug: "bodysuit",
        image: "/assets/requested-products/bodysuit.jpg",
        images: [
          "/assets/requested-products/bodysuit.jpg",
          "/assets/requested-products/waist-trainer.jpg",
          "/assets/requested-products/shapewear-set.jpg",
          "/assets/requested-products/shaping-shorts.jpg",
          "/assets/629-update/shaping-shorts-1.png",
          "/assets/629-update/shaping-shorts-2.png",
          "/assets/629-update/shaping-shorts-3.png",
        ],
        summary: "High waist shaping shorts for smoothing, waist support, and comfort-led private label bodywear.",
        highlights: ["High waist support", "Smooth body line", "Private label trim options"],
      },
      {
        name: "Waist Control Shorts",
        slug: "waist-trainer",
        image: "/assets/requested-products/waist-trainer.jpg",
        images: [
          "/assets/requested-products/waist-trainer.jpg",
          "/assets/requested-products/bodysuit.jpg",
          "/assets/requested-products/shapewear-set.jpg",
          "/assets/requested-products/shaping-shorts.jpg",
          "/assets/629-update/shaping-shorts-1.png",
          "/assets/629-update/shaping-shorts-2.png",
          "/assets/629-update/shaping-shorts-3.png",
        ],
        summary:
          "Waist control shorts for structured shapewear ranges, elastic strength planning, and export orders.",
        highlights: ["Waist support", "Elastic strength planning", "Bulk order support"],
      },
      {
        name: "Seamless Shaping Shorts",
        slug: "shapewear-set",
        image: "/assets/requested-products/shapewear-set.jpg",
        images: [
          "/assets/requested-products/shapewear-set.jpg",
          "/assets/requested-products/bodysuit.jpg",
          "/assets/requested-products/waist-trainer.jpg",
          "/assets/requested-products/shaping-shorts.jpg",
          "/assets/629-update/shaping-shorts-1.png",
          "/assets/629-update/shaping-shorts-2.png",
          "/assets/629-update/shaping-shorts-3.png",
        ],
        summary:
          "Seamless-inspired shaping shorts with support zones, soft stretch, and retail-ready presentation.",
        highlights: ["Support zones", "Smooth stretch feel", "Retail-ready presentation"],
      },
      {
        name: "Shaping Shorts",
        slug: "shaping-shorts",
        image: "/assets/requested-products/shaping-shorts.jpg",
        images: [
          "/assets/requested-products/shaping-shorts.jpg",
          "/assets/requested-products/bodysuit.jpg",
          "/assets/requested-products/waist-trainer.jpg",
          "/assets/requested-products/shapewear-set.jpg",
          "/assets/629-update/shaping-shorts-1.png",
          "/assets/629-update/shaping-shorts-2.png",
          "/assets/629-update/shaping-shorts-3.png",
        ],
        summary: "Shaping shorts for thigh coverage, smoothing support, and comfortable waistband development.",
        highlights: ["Thigh coverage", "Smooth support", "Comfort waistband direction"],
      },
      {
        name: "Light Control Shaping Shorts",
        slug: "light-control-shaping-shorts",
        image: "/assets/629-update/shaping-shorts-1.png",
        images: [
          "/assets/629-update/shaping-shorts-1.png",
          "/assets/requested-products/bodysuit.jpg",
          "/assets/requested-products/waist-trainer.jpg",
          "/assets/requested-products/shapewear-set.jpg",
          "/assets/requested-products/shaping-shorts.jpg",
          "/assets/629-update/shaping-shorts-2.png",
          "/assets/629-update/shaping-shorts-3.png",
        ],
        summary:
          "Light control shaping shorts for daily wear programs needing soft compression and smooth finishing.",
        highlights: ["Light control", "Daily wear comfort", "Soft compression"],
      },
      {
        name: "High Rise Shaper Brief",
        slug: "high-rise-shaper-brief",
        image: "/assets/629-update/shaping-shorts-2.png",
        images: [
          "/assets/629-update/shaping-shorts-2.png",
          "/assets/requested-products/bodysuit.jpg",
          "/assets/requested-products/waist-trainer.jpg",
          "/assets/requested-products/shapewear-set.jpg",
          "/assets/requested-products/shaping-shorts.jpg",
          "/assets/629-update/shaping-shorts-1.png",
          "/assets/629-update/shaping-shorts-3.png",
        ],
        summary: "High rise shaper brief with smooth waistband direction and private label color options.",
        highlights: ["High rise fit", "Smooth waistband", "Color planning"],
      },
      {
        name: "Firm Support Shaping Shorts",
        slug: "firm-support-shaping-shorts",
        image: "/assets/629-update/shaping-shorts-3.png",
        images: [
          "/assets/629-update/shaping-shorts-3.png",
          "/assets/requested-products/bodysuit.jpg",
          "/assets/requested-products/waist-trainer.jpg",
          "/assets/requested-products/shapewear-set.jpg",
          "/assets/requested-products/shaping-shorts.jpg",
          "/assets/629-update/shaping-shorts-1.png",
          "/assets/629-update/shaping-shorts-2.png",
        ],
        summary:
          "Firm support shaping shorts for body smoothing collections, support zones, and OEM customization.",
        highlights: ["Firm support", "Body smoothing", "OEM customization"],
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
  "Send Inquiry",
  "Confirm Specifications",
  "Sample Development",
  "Sample Approval",
  "Mass Production",
  "Quality Inspection",
  "Packing & Shipment",
];

export const oemProcessSteps = [
  {
    title: "Send Inquiry",
    text: "Share your tech pack, reference sample, artwork, or product requirements.",
  },
  {
    title: "Confirm Specifications",
    text: "Confirm fabric, accessories, sizing, logo, packaging, MOQ, price, and delivery schedule.",
  },
  {
    title: "Sample Development",
    text: "Our team develops samples according to your specifications.",
  },
  {
    title: "Sample Approval",
    text: "Review and approve the sample before production.",
  },
  {
    title: "Mass Production",
    text: "Bulk production begins after sample approval.",
  },
  {
    title: "Quality Inspection",
    text: "Conduct in-line and final inspections to ensure consistent quality.",
  },
  {
    title: "Packing & Shipment",
    text: "Products are packed according to your branding requirements and shipped worldwide.",
  },
];

export const odmProcessSteps = [
  {
    title: "Send Inquiry",
    text: "Tell us your product idea, target market, and business requirements.",
  },
  {
    title: "Product Recommendation",
    text: "We recommend suitable styles, fabrics, collections, and manufacturing solutions.",
  },
  {
    title: "Design Customization",
    text: "Customize logos, colors, labels, packaging, and product details.",
  },
  {
    title: "Sample Development",
    text: "We produce customized samples for your review.",
  },
  {
    title: "Sample Approval",
    text: "Approve the final sample before mass production.",
  },
  {
    title: "Mass Production",
    text: "Bulk production begins after sample confirmation.",
  },
  {
    title: "Quality Inspection & Shipment",
    text: "Products pass strict quality inspection before packing and worldwide delivery.",
  },
];

export const faqItems = [
  {
    question: "What is your MOQ?",
    answer: "MOQ depends on product type and customization requirements.",
  },
  {
    question: "Can you do custom logo?",
    answer: "Yes, OEM and private label services are available.",
  },
  {
    question: "How long is sample time?",
    answer: "Usually 7-10 days.",
  },
  {
    question: "How long is production time?",
    answer: "Approximately 25-40 days.",
  },
  {
    question: "Which countries do you export to?",
    answer: "Europe, Russia, North America, Southeast Asia and more.",
  },
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

export const blogPosts = [
  {
    title: "How to Choose a Reliable Underwear Manufacturer in China (2026 Guide)",
    category: "OEM & ODM Guide",
    excerpt:
      "A 2026 guide to evaluating production capacity, quality control, OEM/ODM services, MOQ, certifications, and delivery performance.",
    href: "/blog/how-to-choose-a-reliable-underwear-manufacturer-in-china",
  },
  {
    title: "How to Start a Private Label Underwear Brand",
    category: "Private Label Guide",
    excerpt:
      "A complete beginner guide covering product development, branding, manufacturing, sampling, production, and sales channels.",
    href: "/blog/how-to-start-a-private-label-underwear-brand",
  },
  {
    title: "How to Prepare an OEM Underwear Inquiry",
    category: "OEM Guide",
    excerpt:
      "The fastest quotations usually include style references, fabric direction, size range, logo needs, packaging requests, and target quantity.",
    href: "/blog",
  },
  {
    title: "Choosing Fabrics for Bras, Panties, and Shapewear",
    category: "Product Development",
    excerpt:
      "Comfort, elasticity, opacity, hand feel, and recovery performance should be reviewed early before sampling and bulk production.",
    href: "/blog",
  },
  {
    title: "Private Label Packaging for Export Orders",
    category: "Packaging",
    excerpt:
      "Labels, hang tags, polybags, cartons, barcode stickers, and size assortments should be confirmed before production planning.",
    href: "/blog",
  },
  {
    title: "What Buyers Should Check Before Bulk Production",
    category: "Quality Control",
    excerpt:
      "Approved samples, color standards, measurements, trims, packing method, and inspection points help reduce production risk.",
    href: "/blog",
  },
];

export const privateLabelGuide = {
  title: "How to Start a Private Label Underwear Brand: A Complete Guide for Beginners",
  seoTitle: "How to Start a Private Label Underwear Brand | Complete Guide 2026",
  metaDescription:
    "Learn how to start a private label underwear brand from product development to manufacturing, branding, and sales. A complete guide for beginners.",
  heroImage: "/assets/blog-private-label/hero.jpg",
  intro: [
    "The global underwear market continues to grow as consumers increasingly seek comfortable, stylish, and high-quality products. With the rise of e-commerce platforms such as Shopify, Amazon, TikTok Shop, and Instagram, launching a private label underwear brand has become more accessible than ever.",
    "Whether you are an entrepreneur, online retailer, or fashion startup, building your own underwear brand can be a profitable business opportunity. This guide will walk you through the essential steps to create a successful private label underwear brand.",
  ],
  keywords: [
    "Private Label Underwear",
    "Underwear Manufacturer",
    "OEM Underwear",
    "ODM Underwear",
    "Underwear Brand",
    "Custom Underwear Manufacturing",
  ],
  sections: [
    {
      title: "What Is a Private Label Underwear Brand?",
      body: [
        "A private label underwear brand is a product line manufactured by a factory but sold under your own brand name, logo, and packaging.",
        "Instead of investing in your own production facility, you work with an experienced underwear manufacturer who produces products according to your specifications.",
        "This model allows businesses to focus on branding, marketing, and sales while the manufacturer handles production.",
      ],
      bullets: [
        "Women's bras",
        "Panties",
        "Shapewear",
        "Thermal wear",
        "Loungewear",
        "Men's underwear",
        "Seamless underwear",
      ],
      image: "/assets/blog-private-label/product-display.jpg",
      imageAlt: "Private label bra and panty product display",
    },
    {
      title: "Step 1: Identify Your Target Market",
      body: [
        "Before developing products, you should clearly define your target customers.",
        "A clear market position helps you create products that stand out from competitors.",
      ],
      bullets: [
        "Are you targeting women, men, or both?",
        "Will you focus on comfort, fashion, sports, or shapewear?",
        "What age group are you targeting?",
        "Which countries or regions will you sell to?",
      ],
      callouts: [
        ["Seamless Underwear", "Comfort-focused products suitable for everyday wear."],
        ["Sports Bras", "Designed for active lifestyles and fitness enthusiasts."],
        ["Shapewear", "Products that provide body shaping and support."],
        ["Sustainable Underwear", "Made from eco-friendly fabrics and materials."],
      ],
      image: "/assets/blog-private-label/brand-planning.jpg",
      imageAlt: "Private label underwear brand planning",
    },
    {
      title: "Step 2: Develop Your Brand Identity",
      body: [
        "Your brand is more than just a logo.",
        "Strong branding helps customers remember and trust your products.",
      ],
      bullets: ["Brand name", "Logo design", "Brand story", "Packaging design", "Product positioning"],
      callouts: [
        ["Affordable Everyday Comfort", "A value-led position for repeat basics."],
        ["Premium Lingerie", "A refined direction for elevated materials and presentation."],
        ["Eco-friendly Underwear", "A sustainability-led story with responsible materials."],
        ["Plus-size Collections", "A fit-focused offer for underserved customers."],
      ],
    },
    {
      title: "Step 3: Choose the Right Underwear Manufacturer",
      body: [
        "Selecting the right manufacturing partner is one of the most important decisions.",
        "A professional manufacturing partner can significantly reduce risks and improve product quality.",
      ],
      callouts: [
        ["OEM & ODM Services", "OEM allows you to customize products with your own branding. ODM allows you to modify existing designs and bring products to market faster."],
        ["Stable Production Capacity", "Ensure the factory can support your future growth."],
        ["Quality Control", "Ask about inspection procedures and quality standards."],
        ["Sampling Service", "Reliable manufacturers should provide samples before mass production."],
        ["Export Experience", "Factories with international experience understand global quality requirements and shipping processes."],
      ],
      image: "/assets/blog-private-label/factory-workshop.png",
      imageAlt: "Underwear factory production workshop",
    },
    {
      title: "Step 4: Select Fabrics and Product Styles",
      body: [
        "Fabric selection directly affects comfort, durability, and customer satisfaction.",
        "Work closely with your manufacturer to select fabrics that match your brand positioning.",
      ],
      callouts: [
        ["Cotton", "Soft, breathable, and suitable for everyday wear."],
        ["Modal", "Smooth, lightweight, and moisture-absorbing."],
        ["Nylon-Spandex", "Commonly used in seamless underwear and shapewear."],
        ["Bamboo Fiber", "Eco-friendly and naturally antibacterial."],
        ["Lace", "Often used in premium lingerie collections."],
      ],
      image: "/assets/blog-private-label/fabric-display.png",
      imageAlt: "Underwear fabric swatches",
    },
    {
      title: "Step 5: Create Custom Branding",
      body: [
        "Private label products should include customized branding elements.",
        "Consistent branding creates a professional appearance and improves customer recognition.",
      ],
      bullets: ["Woven labels", "Printed labels", "Heat transfer logos", "Hang tags", "Packaging bags", "Gift boxes"],
      image: "/assets/blog-private-label/care-label.png",
      imageAlt: "Underwear care label example",
    },
    {
      title: "Step 6: Approve Samples",
      body: [
        "Before mass production begins, always review product samples carefully.",
        "Sample approval helps prevent costly production mistakes. Most manufacturers can provide samples within 7-10 days.",
      ],
      bullets: ["Fabric quality", "Sizing accuracy", "Logo placement", "Stitching quality", "Packaging details"],
      image: "/assets/blog-private-label/sample-approval.png",
      imageAlt: "Underwear sample quality approval",
    },
    {
      title: "Step 7: Place Your First Production Order",
      body: [
        "After approving samples, you can proceed with mass production.",
        "For new brands, starting with a smaller order can help reduce inventory risks while testing market demand.",
      ],
      bullets: ["MOQ (Minimum Order Quantity)", "Production lead time", "Payment terms", "Shipping methods"],
      images: [
        {
          src: "/assets/blog-private-label/finished-packing.png",
          alt: "Finished underwear packing inspection",
        },
        {
          src: "/assets/blog-private-label/packing-warehouse.png",
          alt: "Underwear warehouse and export cartons",
        },
      ],
    },
    {
      title: "Step 8: Build Your Sales Channels",
      body: [
        "Once production is completed, focus on sales and marketing.",
        "Using multiple sales channels can accelerate brand growth.",
      ],
      callouts: [
        ["Shopify Store", "Build your own branded online store."],
        ["Amazon", "Reach a large customer base quickly."],
        ["Instagram", "Showcase products through photos, videos, and influencer collaborations."],
        ["TikTok Shop", "Leverage short-form video marketing."],
        ["Wholesale Distribution", "Supply boutiques and retail stores."],
      ],
    },
    {
      title: "Common Mistakes to Avoid",
      body: [
        "Many new underwear brands encounter avoidable problems.",
        "Avoiding these mistakes can save significant time and money.",
      ],
      bullets: [
        "Choosing suppliers based only on price",
        "Skipping sample approval",
        "Ordering excessive inventory initially",
        "Ignoring product quality",
        "Weak branding and packaging",
      ],
    },
    {
      title: "Conclusion",
      body: [
        "Starting a private label underwear brand does not require owning a factory. By partnering with an experienced underwear manufacturer, you can focus on building your brand while ensuring consistent product quality.",
        "Success comes from understanding your target market, selecting the right products, creating strong branding, and working with a reliable manufacturing partner.",
        "With proper planning and execution, a private label underwear business can become a scalable and profitable venture.",
      ],
      image: "/assets/blog-private-label/factory-panorama.jpg",
      imageAlt: "Winsun factory building panorama",
    },
  ],
};
