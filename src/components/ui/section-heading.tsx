import { cn } from "@/lib/utils";

export function SectionHeading({
  title,
  subtitle,
  align = "left",
  tone = "default",
  className,
}: {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  tone?: "default" | "inverted";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex max-w-2xl flex-col gap-4",
        align === "center" && "mx-auto items-center text-center",
        className
      )}
    >
      <h2 className="font-display text-3xl leading-[1.1] tracking-tight md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle ? (
        <p
          className={cn(
            "max-w-lg text-base leading-relaxed",
            tone === "inverted" ? "text-on-primary/75" : "text-muted-foreground"
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
