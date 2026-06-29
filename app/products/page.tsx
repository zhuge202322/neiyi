import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { CtaBand } from "@/components/CtaBand";
import { GsapProvider } from "@/components/GsapProvider";
import { SectionHeading } from "@/components/SectionHeading";
import { certifications, quickFacts } from "@/lib/site-data";
import { getSiteProductFamilies } from "@/lib/site-cms";

const productSupport = [
  "Private label development",
  "Fabric and trimming coordination",
  "Size set and color range planning",
  "Retail packaging support",
  "Sample-based production",
  "Export-ready carton arrangement",
];

export default async function ProductsPage() {
  const productFamilies = await getSiteProductFamilies();

  return (
    <GsapProvider>
      <section className="page-hero page-hero--products">
        <div>
          <span className="eyebrow">Product Range</span>
          <h1>OEM & ODM bras, panties, and shaping shorts manufacturing.</h1>
          <p>
            From everyday bras and panties to supportive shaping shorts, Winsun supports private
            label buyers with practical sampling and production execution.
          </p>
        </div>
      </section>

      <section className="section">
        <SectionHeading
          eyebrow="Product Contents"
          title="Detailed product categories for underwear sourcing programs."
          text="The following styles match the requested catalog direction and can be adapted by fabric, color, label, packing, and target market."
          align="center"
        />
        <div className="product-family-stack">
          {productFamilies.map((family) => (
            <section className="product-family" key={family.title} data-animate="fade-up">
              <div className="product-family__intro">
                <h2>{family.title}</h2>
                <p>{family.description}</p>
              </div>
              <div className="product-family__grid">
                {family.products.map((item) => (
                  <Link className="product-style-card" href={`/products/${item.slug}`} key={item.slug}>
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
          ))}
        </div>
      </section>

      <section className="quick-facts-band quick-facts-band--light" aria-label="Product quick facts">
        <div className="quick-facts-card" data-animate="fade-up">
          <span className="eyebrow">Quick Facts</span>
          <div className="quick-facts-grid">
            {quickFacts.map((item) => (
              <div key={item.item}>
                <span>{item.item}</span>
                <strong>{item.details}</strong>
              </div>
            ))}
          </div>
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

      <section className="section certification-section">
        <SectionHeading
          eyebrow="Certifications"
          title="Inspection documents and test reports can support buyer review."
          text="Final documentation depends on order requirements, fabric choice, destination market, and buyer compliance needs."
          align="center"
        />
        <div className="certification-grid">
          {certifications.map((item) => {
            const Icon = item.icon;
            return (
              <article className="certification-card" key={item.title} data-animate="fade-up">
                <Icon size={26} />
                <h2>{item.title}</h2>
                <p>{item.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <CtaBand />
    </GsapProvider>
  );
}
