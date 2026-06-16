import { Mail, MapPin, MessageCircle } from "lucide-react";
import { GsapProvider } from "@/components/GsapProvider";
import { InquiryForm } from "@/components/InquiryForm";
import { company } from "@/lib/site-data";

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
            <p>Email account pending</p>
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
    </GsapProvider>
  );
}
