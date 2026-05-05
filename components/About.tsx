import { about } from "@/lib/content";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="border-t border-[var(--subtle)] py-20 sm:py-24">
      <SectionHeading eyebrow="About" title="A bit more about me." />
      <div className="space-y-5 text-base leading-relaxed text-[var(--foreground)]/80 sm:text-lg sm:leading-8">
        {about.map((p) => (
          <p key={p.slice(0, 32)}>{p}</p>
        ))}
      </div>
    </section>
  );
}
