"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { profile } from "@/lib/content";

type Cmd = {
  id: string;
  label: string;
  hint: string;
  group: "Jump to" | "Open";
  href: string;
  external?: boolean;
};

const commands: Cmd[] = [
  { id: "projects", label: "Projects", hint: "Personal products and side bets", group: "Jump to", href: "#projects" },
  { id: "experience", label: "Experience", hint: "Career timeline", group: "Jump to", href: "#experience" },
  { id: "about", label: "About", hint: "A bit more about me", group: "Jump to", href: "#about" },
  { id: "skills", label: "Skills", hint: "Tools and stacks", group: "Jump to", href: "#skills" },
  { id: "contact", label: "Contact", hint: "Get in touch", group: "Jump to", href: "#contact" },
  { id: "github", label: "GitHub", hint: "github.com/chetan552", group: "Open", href: profile.github, external: true },
  { id: "linkedin", label: "LinkedIn", hint: "linkedin.com/in/chetanchad", group: "Open", href: profile.linkedin, external: true },
  { id: "email", label: "Email", hint: profile.email, group: "Open", href: `mailto:${profile.email}` },
];

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const [prevQuery, setPrevQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  // Reset selection when the query changes (state-from-prior-state pattern)
  if (query !== prevQuery) {
    setPrevQuery(query);
    setActive(0);
  }

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return commands;
    return commands.filter((c) =>
      `${c.label} ${c.hint} ${c.group}`.toLowerCase().includes(q)
    );
  }, [query]);

  const close = useCallback(() => {
    setOpen(false);
    setQuery("");
    setActive(0);
  }, []);

  const run = useCallback(
    (cmd: Cmd) => {
      close();
      if (cmd.href.startsWith("#")) {
        const el = document.querySelector(cmd.href);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        history.replaceState(null, "", cmd.href);
        return;
      }
      if (cmd.external) {
        window.open(cmd.href, "_blank", "noopener,noreferrer");
      } else {
        window.location.href = cmd.href;
      }
    },
    [close]
  );

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const isMeta = e.metaKey || e.ctrlKey;
      if (isMeta && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
        return;
      }
      if (!open) return;
      if (e.key === "Escape") {
        e.preventDefault();
        close();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setActive((i) => Math.min(i + 1, filtered.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setActive((i) => Math.max(i - 1, 0));
      } else if (e.key === "Enter") {
        e.preventDefault();
        const cmd = filtered[active];
        if (cmd) run(cmd);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, active, filtered, close, run]);

  useEffect(() => {
    if (open) {
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  }, [open]);

  if (!open) return null;

  const grouped = filtered.reduce<Record<string, Cmd[]>>((acc, c) => {
    (acc[c.group] ||= []).push(c);
    return acc;
  }, {});

  let cursor = -1;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Command palette"
      className="fixed inset-0 z-[100] flex items-start justify-center px-4 pt-[14vh]"
    >
      <button
        aria-label="Close command palette"
        onClick={close}
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
      />
      <div className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-[var(--subtle)] bg-[var(--card)] shadow-2xl">
        <div className="flex items-center gap-3 border-b border-[var(--subtle)] px-4">
          <SearchIcon />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search or jump to…"
            className="h-12 w-full bg-transparent text-sm text-[var(--foreground)] placeholder:text-[var(--muted)] focus:outline-none"
          />
          <span className="kbd">esc</span>
        </div>
        <ul ref={listRef} className="max-h-[60vh] overflow-y-auto py-1">
          {filtered.length === 0 ? (
            <li className="px-4 py-6 text-center text-sm text-[var(--muted)]">No matches</li>
          ) : (
            Object.entries(grouped).map(([group, cmds]) => (
              <li key={group}>
                <p className="px-4 pt-3 pb-1 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">
                  {group}
                </p>
                <ul>
                  {cmds.map((c) => {
                    cursor++;
                    const isActive = cursor === active;
                    return (
                      <li key={c.id}>
                        <button
                          type="button"
                          onMouseEnter={() => setActive(cursor)}
                          onClick={() => run(c)}
                          className={`flex w-full items-center justify-between gap-4 px-4 py-2.5 text-left text-sm transition-colors ${
                            isActive
                              ? "bg-[var(--subtle)]/60 text-[var(--foreground)]"
                              : "text-[var(--foreground)]/85 hover:bg-[var(--subtle)]/40"
                          }`}
                        >
                          <span className="flex flex-col">
                            <span className="font-medium">{c.label}</span>
                            <span className="text-xs text-[var(--muted)]">{c.hint}</span>
                          </span>
                          <span className="kbd">↵</span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </li>
            ))
          )}
        </ul>
        <div className="flex items-center justify-between border-t border-[var(--subtle)] px-4 py-2 text-[11px] text-[var(--muted)]">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1"><span className="kbd">↑</span><span className="kbd">↓</span> navigate</span>
            <span className="flex items-center gap-1"><span className="kbd">↵</span> select</span>
          </div>
          <span>Built for keyboards</span>
        </div>
      </div>
    </div>
  );
}

function SearchIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--muted)]" aria-hidden="true">
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  );
}
