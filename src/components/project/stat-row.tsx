import { Icon } from "@/lib/icon-map";

export function StatRow({
  stats,
}: {
  stats: { icon: string; label: string; value: string }[];
}) {
  return (
    <div className="grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="flex flex-col gap-3 rounded-card border border-border bg-surface-raised p-6"
        >
          <Icon name={stat.icon} size={30} className="text-primary" />
          <span className="font-display text-3xl tracking-tight tabular-nums md:text-4xl">
            {stat.value}
          </span>
          <span className="text-sm text-muted-foreground">{stat.label}</span>
        </div>
      ))}
    </div>
  );
}
