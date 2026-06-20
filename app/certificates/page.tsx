import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { GsapProvider } from "@/components/GsapProvider";
import { SectionHeading } from "@/components/SectionHeading";
import { certifications, whyChooseWinsun } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Certificates | Winsun Underwear OEM & ODM Factory",
  description:
    "Review Winsun certificate, quality inspection, fabric test, packaging, and buyer compliance support for underwear OEM and ODM orders.",
};

export default function CertificatesPage() {
  return (
    <GsapProvider>
      <section className="page-hero page-hero--certificates">
        <div>
          <span className="eyebrow">Certificates</span>
          <h1>Quality documents and inspection support for underwear export orders.</h1>
          <p>
            Winsun can coordinate fabric reports, inspection records, packaging details, and buyer
            compliance documents according to order and market requirements.
          </p>
        </div>
      </section>

      <section className="section certification-section">
        <SectionHeading
          eyebrow="Document Support"
          title="Certificate and quality files prepared around each order."
          text="Available files depend on product type, fabric choice, customization request, destination market, and buyer standards."
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

      <section className="section section--muted why-section">
        <SectionHeading
          eyebrow="Why Choose Winsun"
          title="Practical support for buyers who need stable private label production."
          align="center"
        />
        <div className="why-grid">
          {whyChooseWinsun.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} data-animate="fade-up">
                <Icon size={22} />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <CtaBand />
    </GsapProvider>
  );
}
