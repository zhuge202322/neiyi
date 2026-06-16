import {
  BadgeCheck,
  Boxes,
  Clock3,
  Factory,
  Gem,
  Globe2,
  Handshake,
  PackageCheck,
  PenTool,
  Ruler,
  Scissors,
  Shirt,
  Sparkles,
  ThermometerSun,
  Truck,
} from "lucide-react";

export const company = {
  name: "Hong Kong Winsun Co., Limited",
  shortName: "Winsun",
  established: "2015",
  address:
    "Flat/Rm 17, Blk A, 9/F, On Dak Industrial Building, 2-6 Wah Sing Street, Kwai Chung, Hong Kong",
  whatsApp: ["+86 198 7886 6771", "+86 139 2679 0536"],
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
    image: "/assets/showroom.png",
  },
  {
    title: "Panties",
    description:
      "Core and seasonal ranges across cotton, modal, lace, seamless-inspired, and knitted fabric options.",
    icon: Gem,
    image: "/assets/warehouse.png",
  },
  {
    title: "Shapewear",
    description:
      "Supportive bodywear developed around structure, elasticity, comfort, and packaging requirements.",
    icon: Ruler,
    image: "/assets/sewing-workshop.png",
  },
  {
    title: "Thermal Wear",
    description:
      "Warm, practical base-layer programs for cooler markets with stable production and delivery planning.",
    icon: ThermometerSun,
    image: "/assets/knitting-room.png",
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
