import { profile } from "@/lib/content";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[var(--subtle)] py-10">
      <div className="flex flex-col items-start justify-between gap-3 text-xs text-[var(--muted)] sm:flex-row sm:items-center">
        <p>
          © {year} {profile.name}. Built with Next.js + Tailwind. Hosted on Vercel.
        </p>
        <p className="font-mono">{profile.location}</p>
      </div>
    </footer>
  );
}
