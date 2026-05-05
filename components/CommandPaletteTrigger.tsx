"use client";

import { useSyncExternalStore } from "react";

const noopSubscribe = () => () => {};
const getSnapshot = () => /Mac|iPhone|iPad/.test(navigator.platform);
const getServerSnapshot = () => true;

export default function CommandPaletteTrigger() {
  const isMac = useSyncExternalStore(noopSubscribe, getSnapshot, getServerSnapshot);

  function open() {
    const e = new KeyboardEvent("keydown", {
      key: "k",
      metaKey: isMac,
      ctrlKey: !isMac,
      bubbles: true,
    });
    window.dispatchEvent(e);
  }

  return (
    <button
      type="button"
      onClick={open}
      aria-label="Open command palette"
      className="hidden h-9 items-center gap-2 rounded-full border border-[var(--subtle)] px-3 text-xs text-[var(--muted)] transition-colors hover:border-[var(--foreground)]/40 hover:text-[var(--foreground)] sm:inline-flex"
    >
      <span>Search</span>
      <span className="flex items-center gap-1" suppressHydrationWarning>
        <span className="kbd">{isMac ? "⌘" : "Ctrl"}</span>
        <span className="kbd">K</span>
      </span>
    </button>
  );
}
