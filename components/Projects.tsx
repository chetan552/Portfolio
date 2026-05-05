import { projects } from "@/lib/content";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="border-t border-[var(--subtle)] py-20 sm:py-24">
      <SectionHeading
        eyebrow="Projects"
        title="Things I've built recently."
        description="Side projects shipped on Vercel — full-stack TypeScript with a touch of AI."
      />
      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((p) => (
          <article
            key={p.name}
            className="group flex flex-col rounded-2xl border border-[var(--subtle)] bg-[var(--card)] p-6 transition-colors hover:border-[var(--foreground)]/25"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-base font-semibold tracking-tight text-[var(--foreground)]">
                  {p.name}
                </h3>
                <p className="mt-1 text-sm text-[var(--muted)]">{p.tagline}</p>
              </div>
              <div className="flex shrink-0 gap-1.5 text-[var(--muted)]">
                {p.live ? (
                  <a
                    aria-label={`${p.name} live site`}
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[var(--subtle)] transition-colors hover:border-[var(--foreground)]/40 hover:text-[var(--foreground)]"
                  >
                    <ExternalIcon />
                  </a>
                ) : null}
                <a
                  aria-label={`${p.name} repository`}
                  href={p.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[var(--subtle)] transition-colors hover:border-[var(--foreground)]/40 hover:text-[var(--foreground)]"
                >
                  <GithubIcon />
                </a>
              </div>
            </div>
            <p className="mt-4 flex-1 text-sm leading-relaxed text-[var(--foreground)]/75">
              {p.description}
            </p>
            <ul className="mt-5 flex flex-wrap gap-1.5">
              {p.stack.map((s) => (
                <li
                  key={s}
                  className="rounded-full border border-[var(--subtle)] px-2.5 py-0.5 font-mono text-[11px] text-[var(--muted)]"
                >
                  {s}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function ExternalIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.6.5.5 5.6.5 12a11.5 11.5 0 0 0 7.86 10.93c.58.1.79-.25.79-.56v-2.04c-3.2.7-3.88-1.36-3.88-1.36-.52-1.32-1.27-1.68-1.27-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.74 2.68 1.24 3.34.95.1-.74.4-1.24.72-1.53-2.55-.29-5.24-1.27-5.24-5.66 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.17a10.94 10.94 0 0 1 5.74 0c2.19-1.48 3.15-1.17 3.15-1.17.62 1.58.23 2.75.11 3.04.74.8 1.18 1.82 1.18 3.07 0 4.4-2.69 5.36-5.25 5.65.41.36.78 1.05.78 2.13v3.16c0 .31.21.67.8.55A11.5 11.5 0 0 0 23.5 12C23.5 5.6 18.4.5 12 .5Z" />
    </svg>
  );
}
