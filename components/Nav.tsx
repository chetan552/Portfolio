import ThemeToggle from "./ThemeToggle";
import CommandPaletteTrigger from "./CommandPaletteTrigger";

const links = [
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[var(--background)]/75 border-b border-[var(--subtle)]">
      <nav className="mx-auto flex h-14 max-w-3xl items-center justify-between px-6">
        <a
          href="#top"
          className="text-sm font-semibold tracking-tight text-[var(--foreground)]"
        >
          Chetan<span className="text-[var(--accent)]">.</span>
        </a>
        <div className="flex items-center gap-1 sm:gap-2">
          <ul className="hidden gap-1 sm:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="rounded px-3 py-1.5 text-sm text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <CommandPaletteTrigger />
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
