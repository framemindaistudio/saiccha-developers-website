import { Icon } from "@/lib/icon-map";
import { cn } from "@/lib/utils";

type TileItem = { icon: string; label: string };

export function IconTileGrid({
  items,
  columns = 4,
}: {
  items: TileItem[];
  columns?: 2 | 3 | 4;
}) {
  return (
    <div
      className={cn(
        "grid grid-cols-2 gap-4",
        columns === 4 ? "sm:grid-cols-3 lg:grid-cols-4" : columns === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2"
      )}
    >
      {items.map((item) => (
        <div
          key={item.label}
          className="flex flex-col items-center gap-3 rounded-card border border-border bg-surface-raised p-6 text-center"
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary text-primary">
            <Icon name={item.icon} size={30} />
          </div>
          <span className="text-base leading-snug font-medium">{item.label}</span>
        </div>
      ))}
    </div>
  );
}
