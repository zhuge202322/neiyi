import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";
import { CtaBand } from "@/components/CtaBand";
import { GsapProvider } from "@/components/GsapProvider";
import { SectionHeading } from "@/components/SectionHeading";
import { productDetails, quickFacts } from "@/lib/site-data";

type ProductDetailPageProps = {
  params: {
    slug: string;
  };
};

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

  return (
    <GsapProvider>
      <section className="product-detail-hero">
        <div className="product-detail-hero__media" data-animate="reveal">
          <Image src={product.image} alt={product.name} fill sizes="(min-width: 900px) 48vw, 100vw" priority />
        </div>
        <div className="product-detail-hero__copy" data-animate="fade-up">
          <Link href="/products" className="detail-back-link">
            <ArrowLeft size={16} />
            Products
          </Link>
          <span className="eyebrow">{product.family}</span>
          <h1>{product.name}</h1>
          <p>{product.summary}</p>
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
        </div>
      </section>

      <section className="section">
        <div className="product-detail-grid">
          <div className="product-detail-panel" data-animate="fade-up">
            <span className="eyebrow">Product Highlights</span>
            <h2>Designed for buyer-led private label programs.</h2>
            <div className="detail-check-list">
              {product.highlights.map((item) => (
                <div key={item}>
                  <CheckCircle2 size={18} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="product-detail-panel product-detail-panel--muted" data-animate="fade-up">
            <span className="eyebrow">Quick Facts</span>
            <div className="detail-facts-list">
              {quickFacts.map((item) => (
                <div key={item.item}>
                  <span>{item.item}</span>
                  <strong>{item.details}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="split-section split-section--warm">
        <div className="split-copy" data-animate="fade-up">
          <span className="eyebrow">Customization</span>
          <h2>Flexible development around your market, price target, and brand plan.</h2>
          <p>
            Winsun can support fabric direction, color range, size set planning, label placement,
            sample adjustment, packaging preparation, and export-ready carton arrangement for this
            product.
          </p>
          <Link href="/contact" className="button button--primary">
            Request Quote <ArrowRight size={18} />
          </Link>
        </div>
        <div className="feature-list" data-animate="fade-up">
          {[
            "Fabric and trim coordination",
            "Private label and packaging support",
            "Sample review and adjustment",
            "Bulk production follow-up",
          ].map((item) => (
            <div key={item}>
              <CheckCircle2 size={18} />
              <span>{item}</span>
            </div>
          ))}
        </div>
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
                <h3>{item.name}</h3>
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      <CtaBand />
    </GsapProvider>
  );
}
