import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Clock3,
  Factory,
  Globe2,
  MessageCircle,
  PackageCheck,
  Ruler,
  Shirt,
} from "lucide-react";
import { GsapProvider } from "@/components/GsapProvider";

const keywords = [
  "underwear manufacturer",
  "OEM underwear manufacturer",
  "ODM lingerie factory",
  "private label underwear",
  "China underwear supplier",
];

const intro = [
  "Choosing the right underwear manufacturer is one of the most important decisions for any brand, wholesaler, or importer. Whether you are launching a new lingerie brand or expanding an existing product line, your manufacturing partner directly affects product quality, delivery reliability, customer satisfaction, and business growth.",
  "China remains one of the world's leading manufacturing hubs for underwear because of its mature supply chain, competitive production costs, experienced workforce, and flexible OEM/ODM capabilities. However, with thousands of factories available, finding the right partner requires careful evaluation.",
  "This guide explains the most important factors to consider before selecting an underwear manufacturer.",
];

const sections = [
  {
    title: "1. Define Your Product Requirements",
    body: [
      "Before contacting manufacturers, clearly define what you need.",
      "Providing clear product requirements allows manufacturers to offer accurate quotations and production suggestions.",
    ],
    checklistTitle: "Ask yourself",
    bullets: [
      "What type of underwear will you produce?",
      "Who is your target customer?",
      "Which materials will you use?",
      "What is your expected order quantity?",
      "Do you need OEM or ODM service?",
    ],
    callouts: [
      "Bras",
      "Sports Bras",
      "Panties",
      "Seamless Underwear",
      "Shapewear",
      "Thermal Wear",
      "Loungewear",
    ],
    image: "/assets/629-update/womens-bras-1.png",
    imageAlt: "Women's bra product development reference",
  },
  {
    title: "2. Evaluate Manufacturing Experience",
    body: [
      "Experience matters.",
      "An experienced manufacturer understands international quality standards, production processes, and export requirements.",
      "Experienced factories can often identify potential production problems before mass production begins, saving both time and cost.",
    ],
    bullets: [
      "Years of manufacturing experience",
      "Stable production capacity",
      "Export experience",
      "Professional technical team",
      "Long-term cooperation with overseas customers",
    ],
    image: "/assets/sewing-workshop.png",
    imageAlt: "Underwear sewing workshop production scene",
  },
  {
    title: "3. Check OEM & ODM Capabilities",
    body: [
      "Not every factory offers the same level of customization.",
      "For new brands, ODM services can reduce development time by adapting existing product designs while maintaining your own branding.",
    ],
    bullets: [
      "Custom logo printing",
      "Private label production",
      "Custom packaging",
      "Fabric sourcing",
      "Color customization",
      "Size customization",
      "Hangtag and care label design",
      "Sample development",
    ],
    image: "/assets/629-update/process-design-development.png",
    imageAlt: "OEM and ODM underwear design development process",
  },
  {
    title: "4. Review Fabric Options",
    body: [
      "Fabric quality directly influences comfort, durability, and customer satisfaction.",
      "Ask your supplier about fabric composition, weight, stretch, colorfastness, shrinkage control, and available certifications.",
      "Choosing the right fabric for your target market helps improve product competitiveness.",
    ],
    callouts: ["Cotton", "Modal", "Nylon", "Spandex", "Lace", "Bamboo Fiber"],
    image: "/assets/629-update/process-fabric-accessories.png",
    imageAlt: "Underwear fabric and accessories close-up",
  },
  {
    title: "5. Understand Quality Control Procedures",
    body: [
      "Quality control should be integrated throughout production rather than performed only at the end.",
      "A factory with a complete quality management process helps minimize defects and improve consistency.",
    ],
    bullets: [
      "Raw materials",
      "Cutting process",
      "Sewing quality",
      "Measurements",
      "Appearance",
      "Needle detection if applicable",
      "Packaging",
      "Final shipment inspection",
    ],
    image: "/assets/629-update/process-quality-control.png",
    imageAlt: "Underwear quality control inspection process",
  },
  {
    title: "6. Compare MOQ and Production Capacity",
    body: [
      "Minimum Order Quantity (MOQ) varies by manufacturer.",
      "If you are launching a new brand, look for suppliers willing to support smaller trial orders before scaling production.",
      "Understanding these details helps you plan inventory and reduce supply chain risks.",
    ],
    bullets: [
      "Monthly production capacity",
      "Sample lead time",
      "Mass production lead time",
      "Peak season production schedule",
    ],
    image: "/assets/629-update/process-production.png",
    imageAlt: "Underwear mass production line",
  },
  {
    title: "7. Communication Matters",
    body: [
      "Effective communication is essential for successful cooperation.",
      "Good communication reduces misunderstandings and improves project efficiency.",
    ],
    bullets: [
      "Respond promptly",
      "Provide clear quotations",
      "Offer production updates",
      "Explain technical details",
      "Support problem-solving",
    ],
  },
  {
    title: "8. Ask for Samples Before Ordering",
    body: [
      "Never skip the sampling stage.",
      "Sample approval allows you to make adjustments before mass production.",
    ],
    bullets: [
      "Fabric quality",
      "Stitching",
      "Size accuracy",
      "Elastic performance",
      "Packaging",
      "Overall workmanship",
    ],
    image: "/assets/blog-private-label/sample-approval.png",
    imageAlt: "Underwear sample approval and quality review",
  },
  {
    title: "9. Consider Export Experience",
    body: [
      "Manufacturers with export experience understand:",
      "This reduces delays and ensures smoother international shipments.",
    ],
    bullets: [
      "International packaging requirements",
      "Shipping documentation",
      "Customs procedures",
      "Product compliance",
      "Delivery coordination",
    ],
    image: "/assets/629-update/process-packaging-delivery.png",
    imageAlt: "Underwear packaging and delivery warehouse",
  },
  {
    title: "10. Build a Long-Term Partnership",
    body: [
      "The best manufacturing relationships are based on trust, transparency, and continuous improvement.",
      "Long-term cooperation often results in better pricing, priority production schedules, and more efficient product development.",
    ],
    bullets: [
      "Improving products over time",
      "Recommending better materials",
      "Optimizing production costs",
      "Maintaining stable quality",
      "Supporting brand growth",
    ],
  },
];

const faqItems = [
  {
    question: "What is the difference between OEM and ODM?",
    answer:
      "OEM manufacturing produces products according to your own design and brand requirements. ODM manufacturing uses the factory's existing designs, which can then be customized with your branding.",
  },
  {
    question: "What is a typical MOQ?",
    answer:
      "MOQ depends on product type, fabric, and customization requirements. Many manufacturers offer flexible options for new brands.",
  },
  {
    question: "How long does production usually take?",
    answer:
      "Sample production generally takes 7-15 days. Mass production usually requires 25-45 days depending on order size and product complexity.",
  },
  {
    question: "Which countries import underwear from China?",
    answer:
      "China supplies underwear to buyers worldwide, including Europe, Russia, Kazakhstan, Belarus, Southeast Asia, North America, and many other international markets.",
  },
];

const internalLinks = [
  { label: "OEM & ODM Service", href: "/oem-odm" },
  { label: "Factory Tour", href: "/manufacturing" },
  { label: "Quality Control", href: "/manufacturing" },
  { label: "Product Categories", href: "/products" },
  { label: "Contact Us", href: "/contact" },
  { label: "About Us", href: "/" },
];

export const metadata: Metadata = {
  title: "How to Choose a Reliable Underwear Manufacturer in China | OEM & ODM Guide 2026",
  description:
    "Learn how to choose a reliable underwear manufacturer in China. Discover key factors including production capacity, quality control, OEM/ODM services, MOQ, certifications, and delivery performance to help grow your lingerie brand.",
  keywords,
};

export default function ManufacturerGuidePage() {
  return (
    <GsapProvider>
      <article className="article-page article-page--manufacturer-guide">
        <header className="article-hero article-hero--centered">
          <div className="article-hero__copy">
            <Link href="/blog" className="article-back-link">
              Back to Blog
            </Link>
            <span className="eyebrow">OEM & ODM Guide 2026</span>
            <h1>How to Choose a Reliable Underwear Manufacturer in China (2026 Guide)</h1>
            <p className="manufacturer-guide-subtitle">
              Learn how to evaluate production capacity, quality control, OEM/ODM services, MOQ,
              certifications, and delivery performance before selecting a factory partner.
            </p>

            <div className="article-keywords">
              {keywords.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>

            <div className="manufacturer-guide-metrics" aria-label="Article focus">
              <span>
                <Factory size={18} />
                Factory Review
              </span>
              <span>
                <BadgeCheck size={18} />
                Quality Control
              </span>
              <span>
                <Globe2 size={18} />
                Export Buyers
              </span>
            </div>
          </div>
        </header>

        <section className="manufacturer-visual-band" aria-label="Recommended manufacturer evaluation images">
          <figure>
            <Image
              src="/assets/629-update/factory-building.jpg"
              alt="Winsun factory exterior"
              fill
              sizes="(min-width: 900px) 33vw, 100vw"
              priority
            />
          </figure>
          <figure>
            <Image
              src="/assets/sewing-workshop.png"
              alt="Sewing workshop for underwear manufacturing"
              fill
              sizes="(min-width: 900px) 33vw, 100vw"
            />
          </figure>
          <figure>
            <Image
              src="/assets/629-update/womens-panties-1.png"
              alt="Finished underwear products for private label buyers"
              fill
              sizes="(min-width: 900px) 33vw, 100vw"
            />
          </figure>
        </section>

        <div className="article-shell article-shell--wide">
          <aside className="article-toc" data-animate="fade-up">
            <strong>Contents</strong>
            {sections.map((section) => (
              <a key={section.title} href={`#${slugify(section.title)}`}>
                {section.title}
              </a>
            ))}
            <a href="#manufacturer-faq">Frequently Asked Questions</a>
          </aside>

          <div className="article-content">
            <section className="article-intro article-intro--framed" data-animate="fade-up">
              <span className="eyebrow">Introduction</span>
              {intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>

            <section className="manufacturer-evaluation-grid" aria-label="Key evaluation factors">
              <article>
                <Shirt size={24} />
                <h2>Product Fit</h2>
                <p>Confirm category, style, materials, size range, and customization depth first.</p>
              </article>
              <article>
                <Ruler size={24} />
                <h2>Factory Control</h2>
                <p>Review sampling, QC, capacity, packaging, and production follow-up systems.</p>
              </article>
              <article>
                <Clock3 size={24} />
                <h2>Delivery Reliability</h2>
                <p>Compare MOQ, lead time, export experience, and long-term cooperation support.</p>
              </article>
            </section>

            {sections.map((section) => (
              <section
                className="article-section article-section--card"
                id={slugify(section.title)}
                key={section.title}
                data-animate="fade-up"
              >
                <h2>{section.title}</h2>
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}

                {section.bullets ? (
                  <>
                    {section.checklistTitle ? <h3>{section.checklistTitle}</h3> : null}
                    <ul className="article-check-list">
                      {section.bullets.map((item) => (
                        <li key={item}>
                          <CheckCircle2 size={18} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : null}

                {section.callouts ? (
                  <div className="article-tag-grid">
                    {section.callouts.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                ) : null}

                {section.image ? (
                  <figure className="article-figure article-figure--contained">
                    <Image src={section.image} alt={section.imageAlt} width={1268} height={900} />
                    <figcaption>{section.imageAlt}</figcaption>
                  </figure>
                ) : null}
              </section>
            ))}

            <section className="article-section article-section--card">
              <h2>Conclusion</h2>
              <p>
                Choosing the right underwear manufacturer is not only about price. Quality,
                communication, production capability, customization, and long-term reliability all
                contribute to your brand&apos;s success.
              </p>
              <p>
                By carefully evaluating your manufacturing partner, you can reduce risks, improve
                customer satisfaction, and build a stronger, more competitive underwear business.
              </p>
              <p>
                If you are looking for an experienced OEM & ODM underwear manufacturer, selecting a
                factory with comprehensive production capabilities and strict quality control can help
                you bring your products to market with confidence.
              </p>
            </section>

            <section className="article-section article-section--card" id="manufacturer-faq">
              <h2>Frequently Asked Questions</h2>
              <div className="article-faq-list">
                {faqItems.map((item) => (
                  <details key={item.question}>
                    <summary>{item.question}</summary>
                    <p>{item.answer}</p>
                  </details>
                ))}
              </div>
            </section>

            <section className="article-section article-section--card">
              <h2>Internal Links for Buyer Review</h2>
              <div className="article-link-grid">
                {internalLinks.map((item) => (
                  <Link href={item.href} key={item.href}>
                    {item.label}
                    <ArrowRight size={16} />
                  </Link>
                ))}
              </div>
            </section>
          </div>
        </div>

        <section className="article-cta article-cta--factory">
          <div>
            <span className="eyebrow">Call to Action</span>
            <h2>Looking for a trusted OEM & ODM underwear manufacturing partner?</h2>
            <p>
              Our experienced team supports global brands with custom bras, panties, shapewear,
              thermal wear, and seamless underwear. From product development to mass production, we
              are committed to delivering reliable quality and professional service.
            </p>
            <p>Contact us today to discuss your next underwear collection.</p>
          </div>
          <Link href="/contact" className="button button--light">
            <MessageCircle size={18} />
            Contact Us
            <ArrowRight size={18} />
          </Link>
        </section>
      </article>
    </GsapProvider>
  );
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
