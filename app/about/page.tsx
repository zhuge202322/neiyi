import Image from "next/image";
import { MapPin } from "lucide-react";
import { CtaBand } from "@/components/CtaBand";
import { GsapProvider } from "@/components/GsapProvider";
import { SectionHeading } from "@/components/SectionHeading";
import { company, stats, values } from "@/lib/site-data";

export default function AboutPage() {
  return (
    <GsapProvider>
      <section className="page-hero page-hero--about">
        <div>
          <span className="eyebrow">About Winsun</span>
          <h1>A Hong Kong foreign trade partner for knitted underwear manufacturing.</h1>
          <p>
            Established in 2015, {company.name} specializes in development, manufacturing, and
            export of knitted apparel and underwear products.
          </p>
        </div>
      </section>

      <section className="split-section">
        <div className="split-media" data-animate="reveal">
          <Image src="/assets/showroom.png" alt="Winsun showroom" fill sizes="(min-width: 900px) 50vw, 100vw" />
        </div>
        <div className="split-copy" data-animate="fade-up">
          <span className="eyebrow">Company Profile</span>
          <h2>One-stop sourcing support for global clients.</h2>
          <p>
            With the continuous expansion of international business, Winsun has established its
            foreign trade department in Hong Kong to provide more professional and efficient
            sourcing services for clients worldwide.
          </p>
          <p>
            Our products are exported to Russia, Europe, and many overseas markets, earning trust
            and long-term cooperation through quality, comfort, modern design, and stable execution.
          </p>
        </div>
      </section>

      <section className="section section--muted">
        <div className="stats-strip stats-strip--inline">
          {stats.map((item) => (
            <div key={item.label} data-animate="fade-up">
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <SectionHeading
          eyebrow="What We Believe"
          title="Cost-effective and competitive product solutions tailored to market needs."
          align="center"
        />
        <div className="value-grid">
          {values.map((item) => {
            const Icon = item.icon;
            return (
              <article className="value-card" key={item.title} data-animate="fade-up">
                <Icon size={24} />
                <h2>{item.title}</h2>
                <p>{item.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="address-band">
        <MapPin size={22} />
        <div>
          <span>Hong Kong Office</span>
          <p>{company.address}</p>
        </div>
      </section>

      <CtaBand />
    </GsapProvider>
  );
}
