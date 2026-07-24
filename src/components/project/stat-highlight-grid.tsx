import { Icon } from "@/lib/icon-map";
import { CountUp } from "@/components/motion/count-up";

export function StatHighlightGrid({
  stats,
}: {
  stats: { icon: string; value: string; label: string }[];
}) {
  const smCols =
    stats.length >= 4 ? "sm:grid-cols-4" : stats.length === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2";
  return (
    <div className={`grid grid-cols-2 gap-4 ${smCols}`}>
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="flex flex-col gap-4 rounded-card border border-border bg-surface p-6"
        >
          <Icon name={stat.icon} size={32} className="text-accent" />
          <CountUp
            value={stat.value}
            className="font-display text-3xl tracking-tight tabular-nums text-primary md:text-4xl"
          />
          <span className="text-sm leading-snug text-muted-foreground">{stat.label}</span>
        </div>
      ))}
    </div>
  );
}
