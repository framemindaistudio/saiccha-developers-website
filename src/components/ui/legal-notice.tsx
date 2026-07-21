export function LegalNotice({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-10 rounded-card border border-dashed border-border-strong bg-surface p-5 text-sm leading-relaxed text-muted-foreground">
      {children}
    </div>
  );
}
