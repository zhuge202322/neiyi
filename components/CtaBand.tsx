import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

export function CtaBand() {
  return (
    <section className="cta-band">
      <div data-animate="fade-up">
        <span className="eyebrow">Start A Program</span>
        <h2>Send your design, sample, or target range. We will help turn it into a production plan.</h2>
      </div>
      <Link href="/contact" className="button button--light">
        <MessageCircle size={18} />
        Request Quote
        <ArrowRight size={18} />
      </Link>
    </section>
  );
}
