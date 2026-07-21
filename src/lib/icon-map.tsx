import {
  ShieldCheck,
  Leaf,
  Handshake,
  Buildings,
  Drop,
  Tree,
  PersonSimpleWalk,
  Barbell,
  Baby,
  Mountains,
  GridFour,
  House,
  ClipboardText,
  Path,
  ChartLineUp,
  SunHorizon,
  CloudRain,
  SignIn,
  Boat,
  SwimmingPool,
  FlowerLotus,
  Heartbeat,
  TennisBall,
  SoccerBall,
  ForkKnife,
  Binoculars,
} from "@phosphor-icons/react/ssr";
import type { Icon as PhosphorIcon } from "@phosphor-icons/react";

export const iconMap: Record<string, PhosphorIcon> = {
  ShieldCheck,
  Leaf,
  Handshake,
  Buildings,
  Drop,
  Tree,
  PersonSimpleWalk,
  Barbell,
  Baby,
  Mountains,
  GridFour,
  House,
  ClipboardText,
  Path,
  ChartLineUp,
  SunHorizon,
  CloudRain,
  SignIn,
  Boat,
  SwimmingPool,
  FlowerLotus,
  Heartbeat,
  TennisBall,
  SoccerBall,
  ForkKnife,
  Binoculars,
};

export function Icon({
  name,
  size = 24,
  className,
}: {
  name: string;
  size?: number;
  className?: string;
}) {
  const Comp = iconMap[name] ?? ShieldCheck;
  return <Comp size={size} weight="duotone" className={className} />;
}
