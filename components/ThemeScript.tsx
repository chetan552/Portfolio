// Inline script to apply the saved theme before first paint to avoid a flash.
const script = `(() => { try { const t = localStorage.getItem('theme'); const d = t === 'dark' || (!t && window.matchMedia('(prefers-color-scheme: dark)').matches); if (d) document.documentElement.classList.add('dark'); } catch (_) {} })();`;

export default function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
