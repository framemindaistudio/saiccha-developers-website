import { Reveal } from "@/components/motion/reveal";

export function ProjectSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28 border-t border-border py-14 first:border-t-0">
      <Reveal className="flex flex-col gap-6">
        <h2 className="font-display text-2xl tracking-tight md:text-3xl">{title}</h2>
        <div className="flex flex-col gap-6">{children}</div>
      </Reveal>
    </section>
  );
}
