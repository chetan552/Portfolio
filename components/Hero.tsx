import { profile } from "@/lib/content";

export default function Hero() {
  return (
    <section id="top" className="pt-20 pb-24 sm:pt-28 sm:pb-32">
      <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-[var(--muted)]">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
        </span>
        Available for select consulting
      </div>

      <h1 className="mt-6 text-4xl font-semibold tracking-tight text-[var(--foreground)] sm:text-6xl">
        {profile.name}
      </h1>

      <p className="mt-3 text-lg text-[var(--muted)] sm:text-xl">
        {profile.title} · <span className="text-[var(--foreground)]">{profile.subtitle}</span>
      </p>

      <p className="mt-8 max-w-2xl text-base leading-relaxed text-[var(--foreground)]/80 sm:text-lg sm:leading-8">
        {profile.blurb}
      </p>

      <div className="mt-10 flex flex-wrap items-center gap-3">
        <a
          href="#projects"
          className="inline-flex h-11 items-center rounded-full bg-[var(--foreground)] px-5 text-sm font-medium text-[var(--background)] transition-opacity hover:opacity-90"
        >
          View projects
        </a>
        <a
          href={`mailto:${profile.email}`}
          className="inline-flex h-11 items-center rounded-full border border-[var(--subtle)] px-5 text-sm font-medium text-[var(--foreground)] transition-colors hover:border-[var(--foreground)]/40"
        >
          Get in touch
        </a>
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-11 items-center px-2 text-sm text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
        >
          GitHub →
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-11 items-center px-2 text-sm text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
        >
          LinkedIn →
        </a>
      </div>

      <p className="mt-10 text-sm text-[var(--muted)]">📍 {profile.location}</p>
    </section>
  );
}
