export function Tag({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-line bg-ink-soft px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-muted">
      {children}
    </span>
  );
}
