import { profile } from "@/lib/content";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-[var(--subtle)] py-20 sm:py-24">
      <SectionHeading
        eyebrow="Contact"
        title="Let's build something."
        description="The fastest way to reach me is email. I read everything, even if I can't always reply quickly."
      />
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
        <a
          href={`mailto:${profile.email}`}
          className="inline-flex h-12 items-center rounded-full bg-[var(--foreground)] px-6 text-sm font-medium text-[var(--background)] transition-opacity hover:opacity-90"
        >
          {profile.email}
        </a>
        <div className="flex gap-4 text-sm">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--muted)] underline decoration-[var(--subtle)] decoration-1 underline-offset-4 transition-colors hover:text-[var(--foreground)] hover:decoration-[var(--foreground)]/60"
          >
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--muted)] underline decoration-[var(--subtle)] decoration-1 underline-offset-4 transition-colors hover:text-[var(--foreground)] hover:decoration-[var(--foreground)]/60"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
