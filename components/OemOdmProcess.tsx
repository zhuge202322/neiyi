import {
  BadgeCheck,
  Boxes,
  Lightbulb,
  Mail,
  PackageCheck,
  Palette,
  Ruler,
  Scissors,
  Shirt,
} from "lucide-react";
import { odmProcessSteps, oemProcessSteps } from "@/lib/site-data";

const oemIcons = [Mail, Ruler, Shirt, BadgeCheck, Scissors, PackageCheck, Boxes];
const odmIcons = [Mail, Lightbulb, Palette, Shirt, BadgeCheck, Scissors, Boxes];

type ProcessColumnProps = {
  type: "OEM" | "ODM";
  intro: string;
};

export function OemOdmProcess({ type, intro }: ProcessColumnProps) {
  const steps = type === "OEM" ? oemProcessSteps : odmProcessSteps;
  const icons = type === "OEM" ? oemIcons : odmIcons;

  return (
    <section className={`process-column process-column--${type.toLowerCase()}`}>
      <div className="process-column__heading">
        <span>{type} Process</span>
        <h2>How We Work</h2>
        <p>{intro}</p>
      </div>

      <div className="process-column__steps">
        {steps.map((step, index) => {
          const Icon = icons[index] || BadgeCheck;

          return (
            <article className="process-step-card" key={`${type}-${step.title}`} data-animate="fade-up">
              <div className="process-step-card__number">{String(index + 1).padStart(2, "0")}</div>
              <div className="process-step-card__icon">
                <Icon size={24} />
              </div>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
