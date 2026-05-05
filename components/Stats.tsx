const stats = [
  { value: "20+", label: "Years building software" },
  { value: "6", label: "Companies shipped at" },
  { value: "6+", label: "Personal products live" },
  { value: "OSS", label: "Liferay & NetBeans" },
];

export default function Stats() {
  return (
    <section aria-label="At a glance" className="border-t border-[var(--subtle)] py-10">
      <ul className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
        {stats.map((s) => (
          <li key={s.label} className="flex flex-col">
            <span className="text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
              {s.value}
            </span>
            <span className="mt-1 text-xs uppercase tracking-[0.14em] text-[var(--muted)]">
              {s.label}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
