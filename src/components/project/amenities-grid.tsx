import { Icon } from "@/lib/icon-map";

export function AmenitiesGrid({
  amenities,
}: {
  amenities: { icon: string; title: string; body: string }[];
}) {
  return (
    <div className="grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
      {amenities.map((item) => (
        <div key={item.title} className="flex flex-col gap-3">
          <Icon name={item.icon} size={24} className="text-primary" />
          <h3 className="text-base font-medium tracking-tight">{item.title}</h3>
          <p className="text-sm leading-relaxed text-muted-foreground">{item.body}</p>
        </div>
      ))}
    </div>
  );
}
