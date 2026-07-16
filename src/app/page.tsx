export default function Home() {
  return (
    <main className="min-h-screen bg-lk-bg-light">
      <div className="mx-auto flex min-h-screen max-w-[var(--lk-max-width)] flex-col items-center justify-center px-lk-3 py-lk-6">
        <span className="mb-lk-2 rounded-full border border-black/8 bg-lk-bg-light-muted px-lk-2 py-1 text-sm text-lk-text-muted">
          Phase 0 — Foundation
        </span>
        <h1 className="mb-lk-2 text-center text-4xl font-bold tracking-tight text-lk-text-primary md:text-5xl">
          <span className="text-lk-accent">LaunchKit</span>
        </h1>
        <p className="max-w-xl text-center text-lg leading-relaxed text-lk-text-muted">
          Professional email &amp; document templates for modern software teams.
          Built with Elements.
        </p>
        <div className="mt-lk-4 flex flex-wrap items-center justify-center gap-lk-2">
          <span className="rounded-lk-button bg-lk-accent px-lk-3 py-lk-2 text-sm font-medium text-white">
            Primary
          </span>
          <span className="rounded-lk-button border border-black/10 px-lk-3 py-lk-2 text-sm font-medium text-lk-text-primary">
            Secondary
          </span>
        </div>
        <div className="mt-lk-5 rounded-lk-card bg-lk-bg-primary p-lk-4 text-sm text-white/70">
          Design tokens loaded — dark surface preview
        </div>
      </div>
    </main>
  );
}