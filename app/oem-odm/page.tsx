import Image from "next/image";
import { ArrowRight, ClipboardCheck, FileText, PenTool, Shirt } from "lucide-react";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { GsapProvider } from "@/components/GsapProvider";
import { OemOdmProcess } from "@/components/OemOdmProcess";
import { SectionHeading } from "@/components/SectionHeading";
import { capabilities } from "@/lib/site-data";

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

const productionWorkflow = [
  {
    title: "Design & Development",
    image: "/assets/629-update/process-design-development.png",
    text: "Review product ideas, samples, drawings, and buyer requirements before sampling.",
  },
  {
    title: "Fabric & Accessories",
    image: "/assets/629-update/process-fabric-accessories.png",
    text: "Coordinate fabrics, trims, colors, labels, and packaging details around the target product.",
  },
  {
    title: "Production",
    image: "/assets/629-update/process-production.png",
    text: "Arrange cutting, sewing, line follow-up, and production progress for confirmed orders.",
  },
  {
    title: "Quality Control",
    image: "/assets/629-update/process-quality-control.png",
    text: "Inspect workmanship, measurements, appearance, and packing details before shipment.",
  },
  {
    title: "Packaging & Delivery",
    image: "/assets/629-update/process-packaging-delivery.png",
    text: "Prepare private label packing, cartons, warehouse coordination, and worldwide delivery.",
  },
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

      <section className="section section--muted oem-odm-process-section">
        <div className="dual-process-grid">
          <OemOdmProcess
            type="OEM"
            intro="Buyers can start with a tech pack, reference sample, artwork, or an existing product."
          />
          <OemOdmProcess
            type="ODM"
            intro="Buyers can start with an idea, target market, or product concept—we handle the rest."
          />
        </div>
      </section>

      <section className="section visual-process-section">
        <SectionHeading
          eyebrow="Development To Delivery"
          title="A clear workflow from product concept to export-ready packaging."
          text="These five production stages match the latest process direction and help buyers understand how OEM and ODM projects move through our factory support system."
          align="center"
        />
        <div className="visual-process-grid">
          {productionWorkflow.map((item, index) => (
            <article className="visual-process-card" key={item.title} data-animate="fade-up">
              <div className="visual-process-card__image">
                <Image src={item.image} alt={item.title} fill sizes="(min-width: 900px) 20vw, 100vw" />
              </div>
              <div className="visual-process-card__body">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
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

      <CtaBand />
    </GsapProvider>
  );
}
