import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  PackageCheck,
  Ruler,
  Shirt,
  Sparkles,
} from "lucide-react";
import { CtaBand } from "@/components/CtaBand";
import { GsapProvider } from "@/components/GsapProvider";
import { SectionHeading } from "@/components/SectionHeading";
import { productDetails, quickFacts } from "@/lib/site-data";

type ProductDetailPageProps = {
  params: {
    slug: string;
  };
};

const supportItems = [
  {
    title: "OEM / ODM",
    text: "Develop from reference samples, photos, tech packs, or target market briefs.",
    icon: Shirt,
  },
  {
    title: "Fit & Size Range",
    text: "Coordinate size sets, grading direction, and comfort adjustments before bulk.",
    icon: Ruler,
  },
  {
    title: "Label & Packaging",
    text: "Support private labels, hangtags, polybags, inserts, cartons, and retail packs.",
    icon: PackageCheck,
  },
  {
    title: "Style Development",
    text: "Adjust fabrics, colors, trims, elasticity, and construction for your price target.",
    icon: Sparkles,
  },
];

const sourcingOptions = [
  {
    label: "Fabric Direction",
    value: "Cotton, modal, nylon, spandex, lace, thermal knit, and buyer-specified materials.",
  },
  {
    label: "Color Planning",
    value: "Seasonal palettes, core replenishment colors, Pantone references, and mixed sets.",
  },
  {
    label: "Branding",
    value: "Private labels, printed logos, size marks, hangtags, stickers, and barcode labels.",
  },
  {
    label: "Packing",
    value: "Single polybags, retail boxes, multi-packs, inserts, cartons, and export packing.",
  },
];

const developmentSteps = [
  {
    step: "01",
    title: "Brief Review",
    text: "Share reference photos, samples, tech packs, target price, or market direction.",
  },
  {
    step: "02",
    title: "Sample Direction",
    text: "Confirm fabric, color, construction, logo placement, size set, and packaging details.",
  },
  {
    step: "03",
    title: "Bulk Follow-Up",
    text: "Coordinate production, inspection, packing, delivery schedule, and export documents.",
  },
];

export function generateStaticParams() {
  return productDetails.map((product) => ({
    slug: product.slug,
  }));
}

export function generateMetadata({ params }: ProductDetailPageProps) {
  const product = productDetails.find((item) => item.slug === params.slug);

  if (!product) {
    return {};
  }

  return {
    title: `${product.name} OEM Manufacturer | Hong Kong Winsun`,
    description: `${product.summary} OEM and ODM production support for global underwear buyers.`,
  };
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const product = productDetails.find((item) => item.slug === params.slug);

  if (!product) {
    notFound();
  }

  const related = productDetails
    .filter((item) => item.family === product.family && item.slug !== product.slug)
    .slice(0, 3);
  const galleryItems = [product, ...related].slice(0, 4);

  return (
    <GsapProvider>
      <section className="product-detail-shell">
        <div className="product-detail-gallery">
          <Link href="/products" className="detail-back-link detail-back-link--gallery">
            <ArrowLeft size={16} />
            Back to Products
          </Link>
          <div className="product-detail-main-image">
            <Image src={product.image} alt={product.name} fill sizes="(min-width: 1100px) 54vw, 100vw" priority />
            <div className="product-image-badge">
              <span>OEM / ODM</span>
              <strong>Factory direct</strong>
            </div>
          </div>
          <div className="product-detail-caption">
            <span>{product.family}</span>
            <strong>Private label ready</strong>
          </div>
          <div className="product-gallery-thumbs" aria-label={`More ${product.family} styles`}>
            {galleryItems.map((item) =>
              item.slug === product.slug ? (
                <div className="product-thumb product-thumb--active" key={item.slug}>
                  <Image src={item.image} alt="" width={76} height={90} />
                  <span>{item.name}</span>
                </div>
              ) : (
                <Link href={`/products/${item.slug}`} className="product-thumb" key={item.slug}>
                  <Image src={item.image} alt="" width={76} height={90} />
                  <span>{item.name}</span>
                </Link>
              ),
            )}
          </div>
        </div>

        <aside className="product-detail-summary">
          <Link href="/products" className="detail-back-link detail-back-link--summary">
            <ArrowLeft size={16} />
            Back to Products
          </Link>
          <span className="eyebrow">{product.family} OEM Product</span>
          <h1>{product.name}</h1>
          <p>{product.summary}</p>

          <div className="product-highlight-list">
            {product.highlights.map((item) => (
              <div key={item}>
                <CheckCircle2 size={18} />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="product-summary-meta" aria-label="Order quick facts">
            {quickFacts.slice(0, 4).map((item) => (
              <div key={item.item}>
                <span>{item.item}</span>
                <strong>{item.details}</strong>
              </div>
            ))}
          </div>

          <div className="product-detail-actions">
            <Link href="/contact" className="button button--primary">
              <MessageCircle size={18} />
              Send Inquiry
            </Link>
            <Link href="/oem-odm" className="button button--light">
              OEM / ODM Support
              <ArrowRight size={18} />
            </Link>
          </div>
        </aside>
      </section>

      <section className="product-facts-section" aria-label="Product quick facts">
        <div className="product-facts-strip">
          {quickFacts.map((item) => (
            <div key={item.item}>
              <span>{item.item}</span>
              <strong>{item.details}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="section product-detail-content">
        <div className="product-story" data-animate="fade-up">
          <span className="eyebrow">Product Development</span>
          <h2>Designed around sourcing details, not just a catalog photo.</h2>
          <p>
            This {product.name.toLowerCase()} can be adjusted around your market requirements,
            target price, fabric preference, color range, sizing, logo placement, packaging, and
            delivery plan. Winsun supports the full route from inquiry and sample review to bulk
            production follow-up and export coordination.
          </p>
        </div>
        <div className="product-option-grid" data-animate="fade-up">
          {sourcingOptions.map((item) => (
            <article key={item.label}>
              <span>{item.label}</span>
              <p>{item.value}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--muted product-process-section">
        <SectionHeading
          eyebrow="Factory Support"
          title="From first reference to repeat order planning."
          text="Compare feasibility, customization options, and production support before moving a style into sampling or quotation."
          align="center"
        />
        <div className="product-development-grid">
          {developmentSteps.map((item) => (
            <article className="product-step-card" key={item.step} data-animate="fade-up">
              <span>{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
        <div className="product-service-grid">
          {supportItems.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} data-animate="fade-up">
                <Icon size={22} />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="product-inquiry-band">
        <div>
          <span className="eyebrow">Start This Product</span>
          <h2>Send your quantity, target price, and reference details for quotation.</h2>
        </div>
        <Link href="/contact" className="button button--light">
          Request Quote <ArrowRight size={18} />
        </Link>
      </section>

      {related.length ? (
        <section className="section">
          <SectionHeading
            eyebrow="Related Products"
            title={`More ${product.family} options for your assortment.`}
            align="center"
          />
          <div className="related-product-grid">
            {related.map((item) => (
              <Link href={`/products/${item.slug}`} className="product-style-card" key={item.slug} data-animate="fade-up">
                <div className="product-style-card__image">
                  <Image src={item.image} alt={item.name} fill sizes="(min-width: 900px) 25vw, 50vw" />
                </div>
                <div className="product-style-card__body">
                  <h3>{item.name}</h3>
                  <p>{item.summary}</p>
                  <span>
                    View Details <ArrowRight size={15} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      <CtaBand />
    </GsapProvider>
  );
}
