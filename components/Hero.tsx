import { profile } from "@/lib/content";

export default function Hero() {
  return (
    <section id="top" className="relative pt-16 pb-20 sm:pt-24 sm:pb-28">
      <div
        aria-hidden
        className="pointer-events-none absolute left-[calc(50%-50vw)] top-0 -z-10 h-[120%] w-screen overflow-hidden"
      >
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
      </div>

      <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-[var(--muted)]">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
        </span>
        Available for select consulting
      </div>

      <h1 className="mt-6 text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl">
        <span className="name-gradient">{profile.name}</span>
      </h1>

      <p className="mt-4 max-w-2xl text-lg text-[var(--muted)] sm:text-xl">
        <span className="text-[var(--foreground)]">{profile.title}</span>
        <span className="mx-2 text-[var(--subtle)]">·</span>
        {profile.subtitle}
      </p>

      <p className="mt-7 max-w-2xl text-base leading-relaxed text-[var(--foreground)]/80 sm:text-lg sm:leading-8">
        {profile.blurb}
      </p>

      <div className="mt-9 flex flex-wrap items-center gap-3">
        <a
          href="#projects"
          className="group relative inline-flex h-11 items-center overflow-hidden rounded-full bg-[var(--foreground)] px-5 text-sm font-medium text-[var(--background)] transition-transform hover:-translate-y-0.5"
        >
          <span className="relative z-10 flex items-center gap-2">
            View projects
            <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
          </span>
        </a>
        <a
          href={`mailto:${profile.email}`}
          className="inline-flex h-11 items-center rounded-full border border-[var(--subtle)] bg-[var(--card)]/60 px-5 text-sm font-medium text-[var(--foreground)] backdrop-blur transition-colors hover:border-[var(--foreground)]/40"
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

      <div className="mt-10 flex items-center gap-4 text-sm text-[var(--muted)]">
        <span>📍 {profile.location}</span>
        <span aria-hidden className="text-[var(--subtle)]">·</span>
        <span className="flex items-center gap-1.5">
          Press <span className="kbd">⌘</span><span className="kbd">K</span> to navigate
        </span>
      </div>
    </section>
  );
}
