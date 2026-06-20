import Image from "next/image";
import { ArrowRight, ClipboardCheck, FileText, Package, PenTool, Shirt, Truck } from "lucide-react";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { GsapProvider } from "@/components/GsapProvider";
import { SectionHeading } from "@/components/SectionHeading";
import { capabilities, processSteps } from "@/lib/site-data";

const serviceModes = [
  {
    title: "OEM",
    text: "You provide designs, samples, target specs, or brand requirements. We coordinate sampling and bulk production around your confirmed direction.",
    icon: FileText,
  },
  {
    title: "ODM",
    text: "You share a product idea, target buyer, market positioning, or reference range. We help shape it into a practical style plan.",
    icon: PenTool,
  },
  {
    title: "Sample-Based",
    text: "You send a reference sample or photo direction. We review construction, material options, cost feasibility, and production needs.",
    icon: Shirt,
  },
];

const quoteNeeds = [
  "Product category and style references",
  "Fabric composition or hand-feel target",
  "Size range and estimated order quantity",
  "Branding, label, and packaging requirements",
  "Target market and quality expectation",
  "Requested sample and delivery timeline",
];

export default function OemOdmPage() {
  return (
    <GsapProvider>
      <section className="page-hero page-hero--oem">
        <div>
          <span className="eyebrow">OEM / ODM Service</span>
          <h1>Flexible development support for private label underwear buyers.</h1>
          <p>
            Whether you already have a detailed tech pack or only a market brief, Winsun can support
            sample development, customization, packaging, and production coordination.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="mode-grid">
          {serviceModes.map((item) => {
            const Icon = item.icon;
            return (
              <article className="mode-card" key={item.title} data-animate="fade-up">
                <Icon size={26} />
                <h2>{item.title}</h2>
                <p>{item.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="split-section split-section--warm">
        <div className="split-media" data-animate="reveal">
          <Image src="/assets/office.jpg" alt="Winsun office team" fill sizes="(min-width: 900px) 50vw, 100vw" />
        </div>
        <div className="split-copy" data-animate="fade-up">
          <span className="eyebrow">Development Workflow</span>
          <h2>From first idea to confirmed production file.</h2>
          <p>
            We keep the process direct and buyer-friendly, helping each project move from
            requirements to sample review, quotation, production, packaging, and delivery.
          </p>
          <Link href="/contact" className="button button--primary">
            Start Project <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <section className="section">
        <SectionHeading
          eyebrow="Capabilities"
          title="Services designed for repeat export programs."
          align="center"
        />
        <div className="capability-grid">
          {capabilities.map((item) => {
            const Icon = item.icon;
            return (
              <div className="capability-card" key={item.title} data-animate="fade-up">
                <Icon size={22} />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="section section--muted">
        <SectionHeading
          eyebrow="Quotation Checklist"
          title="Useful details to include in your first inquiry."
        />
        <div className="checklist-grid">
          {quoteNeeds.map((item) => (
            <div key={item} data-animate="fade-up">
              <ClipboardCheck size={18} />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="shipment-flow">
          {processSteps.map((item, index) => {
            const Icon = index < 2 ? ClipboardCheck : index < 4 ? Package : Truck;
            return (
              <div key={item} data-animate="fade-up">
                <Icon size={20} />
                <span>{index + 1}</span>
                <p>{item}</p>
              </div>
            );
          })}
        </div>
      </section>

      <CtaBand />
    </GsapProvider>
  );
}
