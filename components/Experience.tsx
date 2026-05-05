import { experience } from "@/lib/content";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="border-t border-[var(--subtle)] py-20 sm:py-24">
      <SectionHeading
        eyebrow="Experience"
        title="Where I've shipped."
        description="Enterprise platforms at Xtivia, R&D at Oracle and Sun Microsystems, and consulting work at Sapient."
      />
      <ol className="space-y-12">
        {experience.map((job, i) => (
          <li key={`${job.company}-${i}`} className="grid gap-3 sm:grid-cols-[180px_1fr] sm:gap-8">
            <div className="text-sm">
              <div className="font-mono text-[var(--muted)]">{job.period}</div>
              {job.location ? (
                <div className="mt-1 font-mono text-xs text-[var(--muted)]/80">{job.location}</div>
              ) : null}
            </div>
            <div>
              <h3 className="text-base font-semibold tracking-tight text-[var(--foreground)]">
                {job.role}
              </h3>
              <div className="mt-0.5 text-sm text-[var(--muted)]">{job.company}</div>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-[var(--foreground)]/75 sm:text-[15px]">
                {job.bullets.map((b) => (
                  <li key={b.slice(0, 32)} className="flex gap-3">
                    <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--muted)]" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
