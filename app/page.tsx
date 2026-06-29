import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  Building2,
  Factory,
  Globe2,
  Instagram,
  Mail,
  MessageCircle,
  PackageCheck,
  PlayCircle,
  Send,
  Sparkles,
  UsersRound,
} from "lucide-react";
import { CtaBand } from "@/components/CtaBand";
import { GsapProvider } from "@/components/GsapProvider";
import { GlobalSalesNetwork } from "@/components/GlobalSalesNetwork";
import { SectionHeading } from "@/components/SectionHeading";
import { company, faqItems } from "@/lib/site-data";

const heroStats = [
  { value: "2015", label: "Established", icon: Award },
  { value: "150+", label: "Skilled Workers", icon: UsersRound },
  { value: "5,000 sqm", label: "Factory Area", icon: Building2 },
  { value: "20", label: "Production Lines", icon: Factory },
  { value: "500K+", label: "Pieces / Month", icon: PackageCheck },
  { value: "80+", label: "Export Markets", icon: Globe2 },
];

const homeProcessSteps = [
  {
    number: "01.",
    title: "Design & Development",
    image: "/assets/629-update/process-design-development.png",
  },
  {
    number: "02.",
    title: "Fabric & Accessories",
    image: "/assets/629-update/process-fabric-accessories.png",
  },
  {
    number: "03.",
    title: "Production",
    image: "/assets/629-update/process-production.png",
  },
  {
    number: "04.",
    title: "Quality Control",
    image: "/assets/629-update/process-quality-control.png",
  },
  {
    number: "05.",
    title: "Packaging & Delivery",
    image: "/assets/629-update/process-packaging-delivery.png",
  },
];

export default function Home() {
  const phoneHref = `tel:${company.whatsAppPrimary.replace(/[^\d+]/g, "")}`;
  const heroContacts = [
    { label: "INS", value: company.instagram, href: phoneHref, icon: Instagram },
    { label: "WhatsApp", value: company.whatsAppPrimary, href: company.whatsAppLink, icon: MessageCircle, external: true },
    { label: "Telegram", value: company.telegram, href: phoneHref, icon: Send },
    { label: "Email", value: company.email, href: `mailto:${company.email}`, icon: Mail },
  ];

  return (
    <GsapProvider>
      <section className="hero home-hero">
        <div className="home-hero__media" aria-hidden="true">
          <Image
            src="/assets/hero-winsun-showroom.jpg"
            alt=""
            fill
            sizes="100vw"
            priority
            className="home-hero__background"
          />
          <div className="home-hero__overlay" />
        </div>

        <div className="home-hero__content">
          <div className="home-hero__shell">
            <div className="home-hero__copy" data-animate="fade-up">
              <span className="eyebrow">Professional</span>
              <h1 className="hero-title" aria-label="Lingerie and underwear OEM/ODM manufacturer">
                <span>Lingerie & Underwear</span>
                <span>OEM/ODM Manufacturer</span>
              </h1>
              <p>
                A practical underwear factory partner for bras, panties, shapewear, thermal wear,
                loungewear, and private label programs.
              </p>
              <div className="hero-actions">
                <Link href="/contact" className="button button--primary">
                  Get A Quote
                  <ArrowRight size={18} />
                </Link>
                <Link href="/manufacturing#factory-video" className="button button--ghost">
                  <PlayCircle size={18} />
                  Watch Video
                </Link>
              </div>
            </div>
          </div>

          <div className="home-hero__contact-row" aria-label="Winsun contact methods" data-animate="fade-up">
            {heroContacts.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noreferrer" : undefined}
                  className="home-hero__contact-item"
                >
                  <span className="home-hero__contact-icon">
                    <Icon size={20} />
                  </span>
                  <span>
                    <strong>{item.label}</strong>
                    <small>{item.value}</small>
                  </span>
                </a>
              );
            })}
          </div>

          <div className="home-hero__stats" aria-label="Winsun factory quick facts" data-animate="fade-up">
            {heroStats.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="home-hero__stat">
                  <Icon size={22} />
                  <span>
                    <strong>{item.value}</strong>
                    <small>{item.label}</small>
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="home-process-showcase" aria-labelledby="home-process-title">
        <div className="home-process-showcase__inner">
          <div className="home-process-intro" data-animate="fade-up">
            <span className="eyebrow">OEM / ODM Service</span>
            <h2 id="home-process-title">One-Stop Solution for Your Brand</h2>
            <p>
              We provide professional OEM/ODM services from design, sampling, production to
              delivery. Help your brand grow faster and easier.
            </p>
            <Link href="/oem-odm" className="button button--primary">
              Learn More
              <ArrowRight size={18} />
            </Link>
          </div>
          <div className="home-process-grid" data-animate="fade-up">
            {homeProcessSteps.map((step) => (
              <article className="home-process-card" key={step.title}>
                <div className="home-process-card__image">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    sizes="(min-width: 1100px) 18vw, (min-width: 760px) 33vw, 100vw"
                  />
                </div>
                <h3>
                  <span>{step.number}</span>
                  {step.title}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <GlobalSalesNetwork />

      <section className="section section--muted faq-section">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          text="Quick answers for buyers preparing OEM, ODM, and private label underwear projects."
          align="center"
        />
        <div className="faq-grid">
          {faqItems.map((item) => (
            <details key={item.question} data-animate="fade-up">
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="section showroom-feature" aria-label="Product showroom">
        <div className="showroom-feature__image" data-animate="reveal">
          <Image src="/assets/showroom.png" alt="Winsun product showroom" fill sizes="(min-width: 900px) 48vw, 100vw" />
        </div>
        <div className="showroom-feature__copy" data-animate="fade-up">
          <Sparkles size={22} />
          <span className="eyebrow">Factory Scene</span>
          <h2>Product Showroom</h2>
          <p>
            Our showroom showcases a wide range of bras, panties, shapewear, loungewear, and
            seamless underwear, allowing customers to review product quality, materials, designs,
            and customization options in one place.
          </p>
        </div>
      </section>

      <CtaBand />
    </GsapProvider>
  );
}
