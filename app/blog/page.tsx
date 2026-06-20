import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { GsapProvider } from "@/components/GsapProvider";
import { SectionHeading } from "@/components/SectionHeading";
import { blogPosts } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Blog | Underwear OEM & ODM Buying Guides",
  description:
    "Winsun blog resources for underwear OEM, ODM, private label production, sampling, packaging, and quality control.",
};

export default function BlogPage() {
  return (
    <GsapProvider>
      <section className="page-hero page-hero--blog">
        <div>
          <span className="eyebrow">Blog</span>
          <h1>Underwear OEM buying guides for private label and export buyers.</h1>
          <p>
            Practical notes on quotation preparation, fabric selection, packaging, sampling, quality
            control, and repeat production planning.
          </p>
        </div>
      </section>

      <section className="section blog-section">
        <SectionHeading
          eyebrow="Buyer Resources"
          title="Useful reading before starting an underwear OEM project."
          text="These topics help buyers prepare clearer inquiries and move from sample development to bulk production with fewer delays."
          align="center"
        />
        <div className="blog-grid">
          {blogPosts.map((post) => (
            <article className="blog-card" key={post.title} data-animate="fade-up">
              <span>{post.category}</span>
              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="blog-contact-band">
        <div>
          <span className="eyebrow">Need A Quote</span>
          <h2>Send product references and order details for OEM support.</h2>
        </div>
        <Link href="/contact" className="button button--primary">
          Contact Winsun
          <ArrowRight size={18} />
        </Link>
      </section>

      <CtaBand />
    </GsapProvider>
  );
}
