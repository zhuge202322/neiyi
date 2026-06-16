import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { CtaBand } from "@/components/CtaBand";
import { GsapProvider } from "@/components/GsapProvider";
import { SectionHeading } from "@/components/SectionHeading";
import { products } from "@/lib/site-data";

const productSupport = [
  "Private label development",
  "Fabric and trimming coordination",
  "Size set and color range planning",
  "Retail packaging support",
  "Sample-based production",
  "Export-ready carton arrangement",
];

export default function ProductsPage() {
  return (
    <GsapProvider>
      <section className="page-hero page-hero--products">
        <div>
          <span className="eyebrow">Product Range</span>
          <h1>Underwear and knitted apparel made for global B2B programs.</h1>
          <p>
            From essential daily underwear to seasonal thermal and loungewear lines, Winsun supports
            practical product development with production-ready execution.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="catalog-grid">
          {products.map((item) => {
            const Icon = item.icon;
            return (
              <article className="catalog-card" key={item.title} data-animate="fade-up">
                <div className="catalog-card__image">
                  <Image src={item.image} alt={item.title} fill sizes="(min-width: 900px) 33vw, 100vw" />
                </div>
                <div className="catalog-card__content">
                  <Icon size={24} />
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                  <Link href="/contact">
                    Discuss This Category <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="split-section">
        <div className="split-copy" data-animate="fade-up">
          <span className="eyebrow">Buyer Support</span>
          <h2>Built around the details that matter in sourcing.</h2>
          <p>
            We help buyers translate market needs into product programs that are realistic to sample,
            quote, produce, package, and replenish.
          </p>
        </div>
        <div className="feature-list" data-animate="fade-up">
          {productSupport.map((item) => (
            <div key={item}>
              <CheckCircle2 size={18} />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <SectionHeading
          eyebrow="Materials & Direction"
          title="Comfort, fit, and commercial practicality stay at the center."
          text="Final specifications depend on buyer requirements, target price, market, fabric choice, MOQ, packaging, and delivery timing."
          align="center"
        />
      </section>

      <CtaBand />
    </GsapProvider>
  );
}
