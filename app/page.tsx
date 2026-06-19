import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Factory, Sparkles } from "lucide-react";
import { CtaBand } from "@/components/CtaBand";
import { GsapProvider } from "@/components/GsapProvider";
import { GlobalSalesNetwork } from "@/components/GlobalSalesNetwork";
import { SectionHeading } from "@/components/SectionHeading";
import {
  company,
  factoryStrength,
  products,
  processSteps,
  quickFacts,
  whyChooseWinsun,
} from "@/lib/site-data";

export default function Home() {
  return (
    <GsapProvider>
      <section className="hero">
        <div className="hero-media" aria-hidden="true">
          <Image
            src="/assets/requested-factory/showroom-wide.jpg"
            alt=""
            fill
            sizes="100vw"
            priority
            className="hero-image"
          />
          <div className="hero-overlay" />
        </div>
        <div className="hero-content">
          <div className="hero-copy">
            <span className="eyebrow">Underwear Manufacturer in China</span>
            <h1 className="hero-title" aria-label={company.name}>
              <span>Hong Kong Winsun</span>
              <span>Co., Limited</span>
            </h1>
            <p>
              OEM and ODM bra, panty, shapewear, thermal wear, and private label underwear factory
              support for global B2B buyers.
            </p>
            <div className="hero-actions">
              <Link href="/contact" className="button button--primary">
                Send Inquiry
                <ArrowRight size={18} />
              </Link>
              <Link href="/manufacturing" className="button button--ghost">
                <Factory size={18} />
                View Factory
              </Link>
            </div>
          </div>
          <div className="hero-card" data-animate="fade-up">
            <span>Export Markets</span>
            <strong>Russia / Europe / Global Buyers</strong>
            <p>One-stop sourcing support from development to export-ready packaging.</p>
          </div>
        </div>
      </section>

      <section className="home-about split-section">
        <div className="split-media" data-animate="reveal">
          <Image
            src="/assets/requested-factory/showroom-detail.jpg"
            alt="Winsun showroom and sourcing meeting area"
            fill
            sizes="(min-width: 900px) 50vw, 100vw"
          />
        </div>
        <div className="split-copy" data-animate="fade-up">
          <span className="eyebrow">About Winsun</span>
          <h2>Underwear OEM & ODM partner for global private label buyers.</h2>
          <p>
            Established in 2015, Hong Kong Winsun Co., Limited connects overseas buyers with
            practical underwear development, production coordination, quality follow-up, packaging,
            and export service.
          </p>
          <p>
            Our team supports bras, panties, shapewear, thermal wear, loungewear, and knitted
            underwear programs for Russia, Europe, and more overseas markets.
          </p>
        </div>
      </section>

      <section className="quick-facts-band" aria-label="Quick facts">
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

      <section className="section">
        <SectionHeading
          eyebrow="Core Categories"
          title="B2B underwear programs for private labels, importers, and retail buyers."
          text="Winsun focuses on practical product development, mature production coordination, and market-ready assortments for overseas clients."
          align="center"
        />
        <div className="product-grid">
          {products.map((item) => {
            const Icon = item.icon;
            return (
              <Link href="/products" className="product-card" key={item.title} data-animate="fade-up">
                <div className="product-card__image">
                  <Image src={item.image} alt={item.title} fill sizes="(min-width: 900px) 33vw, 100vw" />
                </div>
                <div className="product-card__body">
                  <Icon size={22} />
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="section section--muted">
        <SectionHeading
          eyebrow="Factory Strength"
          title="Manufacturing resources for repeat underwear supply programs."
          text="Winsun combines practical factory coordination, experienced workers, flexible lines, and export service for B2B buyers."
          align="center"
        />
        <div className="strength-grid">
          {factoryStrength.map((item) => {
            const Icon = item.icon;
            return (
              <article className="strength-card" key={item.label} data-animate="fade-up">
                <Icon size={22} />
                <strong>{item.value}</strong>
                <span>{item.label}</span>
                <p>{item.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section why-section">
        <SectionHeading
          eyebrow="Why Choose Winsun"
          title="Clear reasons for buyers who need a reliable underwear factory partner."
          align="center"
        />
        <div className="why-grid">
          {whyChooseWinsun.map((item) => (
            <div key={item} data-animate="fade-up">
              <CheckCircle2 size={19} />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <GlobalSalesNetwork />

      <section className="section">
        <SectionHeading
          eyebrow="How We Work"
          title="A clear workflow from inquiry to shipment."
          text="Buyers can start with a tech pack, reference sample, artwork, or a target product range."
        />
        <div className="timeline">
          {processSteps.map((step, index) => (
            <div className="timeline-step" key={step} data-animate="fade-up">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section image-marquee" aria-label="Factory scenes">
        <div className="marquee-track">
          {["office.jpg", "sewing-workshop.png", "showroom.png", "warehouse.png", "knitting-room.png"].map(
            (image) => (
              <div className="marquee-image" key={image}>
                <Image src={`/assets/${image}`} alt="" fill sizes="360px" />
              </div>
            ),
          )}
        </div>
        <div className="marquee-caption" data-animate="fade-up">
          <Sparkles size={20} />
          <span>Office / Workshop / Showroom / Warehouse / Knitting Room</span>
        </div>
      </section>

      <CtaBand />
    </GsapProvider>
  );
}
