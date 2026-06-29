import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { company } from "@/lib/site-data";

export function CtaBand() {
  return (
    <section className="cta-band">
      <div data-animate="fade-up">
        <span className="eyebrow">Contact CTA</span>
        <h2>Looking for a Reliable Underwear Manufacturer?</h2>
        <p>Contact us today for OEM & ODM solutions. We respond within 24 hours.</p>
      </div>
      <div className="cta-band__actions">
        <Link href="/contact" className="button button--light">
          Get Free Quote
          <ArrowRight size={18} />
        </Link>
        <Link href={company.whatsAppLink} className="button button--outline-light" target="_blank">
          <MessageCircle size={18} />
          WhatsApp
        </Link>
      </div>
    </section>
  );
}
