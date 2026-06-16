import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Factory, Sparkles } from "lucide-react";
import { CtaBand } from "@/components/CtaBand";
import { GsapProvider } from "@/components/GsapProvider";
import { GlobalSalesNetwork } from "@/components/GlobalSalesNetwork";
import { SectionHeading } from "@/components/SectionHeading";
import { company, products, processSteps, stats } from "@/lib/site-data";

export default function Home() {
  return (
    <GsapProvider>
      <section className="hero">
        <div className="hero-media" aria-hidden="true">
          <Image
            src="/assets/showroom.png"
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
            <span className="eyebrow">Underwear OEM & ODM Manufacturer</span>
            <h1 className="hero-title" aria-label={company.name}>
              <span>Hong Kong Winsun</span>
              <span>Co., Limited</span>
            </h1>
            <p>
              A Hong Kong foreign trade partner for knitted underwear, bras, panties, shapewear,
              thermal wear, and loungewear programs built around quality, comfort, and stable
              delivery.
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
            <strong>Russia · Europe · Global Buyers</strong>
            <p>One-stop sourcing support from development to export-ready packaging.</p>
          </div>
        </div>
      </section>

      <section className="stats-strip" aria-label="Company highlights">
        {stats.map((item) => (
          <div key={item.label} data-animate="fade-up">
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
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
          <span>Office · Workshop · Showroom · Warehouse · Knitting Room</span>
        </div>
      </section>

      <CtaBand />
    </GsapProvider>
  );
}
