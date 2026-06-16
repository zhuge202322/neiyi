import Image from "next/image";
import { ArrowRight, Boxes, Building2, Factory, PlayCircle, Shirt, Warehouse } from "lucide-react";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { GsapProvider } from "@/components/GsapProvider";
import { SectionHeading } from "@/components/SectionHeading";

const scenes = [
  {
    title: "Office Coordination",
    text: "Dedicated business communication and project follow-up for overseas clients.",
    image: "/assets/office.jpg",
    icon: Building2,
  },
  {
    title: "Sewing Workshop",
    text: "Production resources for underwear and knitted apparel programs.",
    image: "/assets/sewing-workshop.png",
    icon: Factory,
  },
  {
    title: "Showroom",
    text: "Category presentation and style reference support for product discussions.",
    image: "/assets/showroom.png",
    icon: Shirt,
  },
  {
    title: "Warehouse",
    text: "Organized materials and finished goods support for production planning.",
    image: "/assets/warehouse.png",
    icon: Warehouse,
  },
  {
    title: "Knitting Room",
    text: "Knitted production resources for thermal wear and related apparel.",
    image: "/assets/knitting-room.png",
    icon: Boxes,
  },
];

export default function ManufacturingPage() {
  return (
    <GsapProvider>
      <section className="page-hero page-hero--factory">
        <div>
          <span className="eyebrow">Manufacturing</span>
          <h1>Visible production resources for dependable underwear supply.</h1>
          <p>
            Winsun connects overseas buyers with practical factory coordination, sampling support,
            production follow-up, packaging, and export service.
          </p>
        </div>
      </section>

      <section className="factory-video-section">
        <div className="video-copy" data-animate="fade-up">
          <PlayCircle size={30} />
          <h2>Factory video preview</h2>
          <p>Review the production environment and workflow feel before starting your inquiry.</p>
        </div>
        <div className="factory-video-frame">
          <video src="/assets/factory-video.mp4" poster="/assets/sewing-workshop.png" controls muted playsInline />
        </div>
      </section>

      <section className="section">
        <SectionHeading
          eyebrow="Factory Scenes"
          title="A complete support environment from office to production floor."
          align="center"
        />
        <div className="scene-grid">
          {scenes.map((scene) => {
            const Icon = scene.icon;
            return (
              <article className="scene-card" key={scene.title} data-animate="fade-up">
                <div className="scene-card__image">
                  <Image src={scene.image} alt={scene.title} fill sizes="(min-width: 900px) 33vw, 100vw" />
                </div>
                <div className="scene-card__body">
                  <Icon size={22} />
                  <h2>{scene.title}</h2>
                  <p>{scene.text}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="split-section split-section--dark">
        <div className="split-copy" data-animate="fade-up">
          <span className="eyebrow">Reliable Execution</span>
          <h2>Built for buyers who need clear communication and stable delivery.</h2>
          <p>
            The manufacturing side of each project is supported by mature production coordination
            and supply chain resources, helping buyers manage quality, packaging, and timing.
          </p>
          <Link href="/oem-odm" className="button button--light">
            View OEM Service <ArrowRight size={18} />
          </Link>
        </div>
        <div className="factory-points" data-animate="fade-up">
          <div>Sample follow-up</div>
          <div>Production coordination</div>
          <div>Packaging preparation</div>
          <div>Export service</div>
        </div>
      </section>

      <CtaBand />
    </GsapProvider>
  );
}
