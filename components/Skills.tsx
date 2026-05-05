import { openSource, skills } from "@/lib/content";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="border-t border-[var(--subtle)] py-20 sm:py-24">
      <SectionHeading
        eyebrow="Skills"
        title="Tools of the trade."
        description="Two stacks live in my head — the enterprise Java/Spring/Liferay world, and a modern TypeScript stack for everything new."
      />
      <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
        {skills.map((g) => (
          <div key={g.group}>
            <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
              {g.group}
            </h3>
            <ul className="mt-3 flex flex-wrap gap-1.5">
              {g.items.map((s) => (
                <li
                  key={s}
                  className="rounded-md border border-[var(--subtle)] bg-[var(--card)] px-2.5 py-1 text-xs text-[var(--foreground)]/85"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-14">
        <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
          Open source
        </h3>
        <ul className="mt-3 space-y-2">
          {openSource.map((o) => (
            <li key={o.name} className="text-sm text-[var(--foreground)]/85">
              <a
                href={o.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium underline decoration-[var(--subtle)] decoration-1 underline-offset-4 transition-colors hover:decoration-[var(--foreground)]/60"
              >
                {o.name}
              </a>
              <span className="text-[var(--muted)]"> — {o.note}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
