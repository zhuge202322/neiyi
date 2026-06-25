import { Mail, MapPin, MessageCircle } from "lucide-react";
import { GsapProvider } from "@/components/GsapProvider";
import { InquiryForm } from "@/components/InquiryForm";
import { SectionHeading } from "@/components/SectionHeading";
import { certifications, company, whyChooseWinsun } from "@/lib/site-data";

export default function ContactPage() {
  return (
    <GsapProvider>
      <section className="page-hero page-hero--contact">
        <div>
          <span className="eyebrow">Contact</span>
          <h1>Tell us what you want to source, customize, or manufacture.</h1>
          <p>
            Share your product category, reference styles, quantity, market, and packaging needs.
            We will prepare the next step for quotation and sampling.
          </p>
        </div>
      </section>

      <section className="contact-section">
        <div className="contact-info" data-animate="fade-up">
          <span className="eyebrow">Get In Touch</span>
          <h2>Hong Kong Winsun Co., Limited</h2>
          <div className="contact-line">
            <MapPin size={20} />
            <p>{company.address}</p>
          </div>
          <div className="contact-line">
            <MessageCircle size={20} />
            <p>{company.whatsApp.join(" / ")}</p>
          </div>
          <div className="contact-line">
            <Mail size={20} />
            <p>
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </p>
          </div>
          <div className="contact-panel">
            <strong>Recommended inquiry details</strong>
            <p>
              Product type, fabric preference, sample photo or tech pack, quantity, size range,
              target market, packaging request, and expected delivery date.
            </p>
          </div>
        </div>
        <div data-animate="fade-up">
          <InquiryForm />
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

      <section className="section why-section">
        <SectionHeading
          eyebrow="Why Choose Winsun"
          title="Clear reasons for buyers who need a reliable underwear factory partner."
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
    </GsapProvider>
  );
}
