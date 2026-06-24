import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock3, Factory, Layers3, MessageCircle } from "lucide-react";
import { GsapProvider } from "@/components/GsapProvider";
import { privateLabelGuide } from "@/lib/site-data";

export const metadata: Metadata = {
  title: privateLabelGuide.seoTitle,
  description: privateLabelGuide.metaDescription,
  keywords: privateLabelGuide.keywords,
};

export default function PrivateLabelGuidePage() {
  return (
    <GsapProvider>
      <article className="guide-page">
        <header className="guide-hero">
          <div className="guide-hero__copy">
            <Link href="/blog" className="guide-back-link">
              Back to Blog
            </Link>
            <span className="eyebrow">Private Label Underwear Guide</span>
            <h1>{privateLabelGuide.title}</h1>
            <p>{privateLabelGuide.metaDescription}</p>

            <div className="guide-meta-row" aria-label="Guide details">
              <span>
                <Layers3 size={17} />
                Brand Planning
              </span>
              <span>
                <Factory size={17} />
                OEM / ODM Factory
              </span>
              <span>
                <Clock3 size={17} />
                2026 Guide
              </span>
            </div>

            <div className="guide-keywords">
              {privateLabelGuide.keywords.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </header>

        <div className="guide-feature-block">
          <section className="guide-overview" aria-label="Private label guide overview">
            <div>
              <strong>8-Step Launch Route</strong>
              <span>From market definition to production order</span>
            </div>
            <div>
              <strong>OEM / ODM Support</strong>
              <span>Samples, fabrics, labels, packaging, and QC</span>
            </div>
            <div>
              <strong>Buyer Focus</strong>
              <span>Made for new brands, retailers, and importers</span>
            </div>
          </section>

          <figure className="guide-feature-media">
            <Image
              src={privateLabelGuide.heroImage}
              alt="Private label underwear brand product display"
              width={1266}
              height={1544}
              sizes="(min-width: 900px) 1180px, 100vw"
              priority
            />
            <figcaption>Product positioning, sampling, branding, bulk production, and export support.</figcaption>
          </figure>
        </div>

        <div className="guide-shell">
          <aside className="guide-toc" data-animate="fade-up">
            <span className="eyebrow">Contents</span>
            {privateLabelGuide.sections.slice(0, 8).map((section) => (
              <a key={section.title} href={`#${slugify(section.title)}`}>
                {section.title.replace(/^Step \d+: /, "")}
              </a>
            ))}
          </aside>

          <div className="guide-content">
            <section className="guide-intro" data-animate="fade-up">
              <span className="eyebrow">Introduction</span>
              {privateLabelGuide.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>

            {privateLabelGuide.sections.map((section) => (
              <section className="guide-section" id={slugify(section.title)} key={section.title} data-animate="fade-up">
                <div className="guide-section__heading">
                  {getStepNumber(section.title) ? <span>{getStepNumber(section.title)}</span> : null}
                  <h2>{section.title}</h2>
                </div>

                <div className="guide-section__body">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>

                {section.bullets ? (
                  <ul className="guide-check-list">
                    {section.bullets.map((item) => (
                      <li key={item}>
                        <CheckCircle2 size={18} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}

                {section.callouts ? (
                  <div className="guide-callout-grid">
                    {section.callouts.map(([title, text]) => (
                      <div key={title}>
                        <strong>{title}</strong>
                        <p>{text}</p>
                      </div>
                    ))}
                  </div>
                ) : null}

                {section.image ? (
                  <figure className="guide-figure">
                    <Image src={section.image} alt={section.imageAlt} width={1266} height={900} />
                    <figcaption>{section.imageAlt}</figcaption>
                  </figure>
                ) : null}

                {section.images ? (
                  <div className="guide-figure-grid">
                    {section.images.map((image) => (
                      <figure className="guide-figure" key={image.src}>
                        <Image src={image.src} alt={image.alt} width={1266} height={1013} />
                        <figcaption>{image.alt}</figcaption>
                      </figure>
                    ))}
                  </div>
                ) : null}
              </section>
            ))}
          </div>
        </div>

        <section className="guide-cta">
          <div>
            <span className="eyebrow">Looking for a Reliable Underwear Manufacturer?</span>
            <h2>Winsun specializes in OEM and ODM underwear manufacturing.</h2>
            <p>
              We support bras, panties, shapewear, thermal wear, and private label solutions for
              buyers preparing their first or next underwear program.
            </p>
          </div>
          <Link href="/contact" className="button button--light">
            <MessageCircle size={18} />
            Contact Winsun
            <ArrowRight size={18} />
          </Link>
        </section>
      </article>
    </GsapProvider>
  );
}

function getStepNumber(value: string) {
  return value.match(/^Step (\d+):/)?.[1];
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
