import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface RightBTNProps {
  icon: LucideIcon;
  label: string;
  iconSize: number;
}

export default function RightBTNComponent({
  icon: Icon,
  label,
  iconSize,
}: RightBTNProps) {
  return (
    <Button
      variant="secondary"
      className="bg-zinc-800 hover:bg-zinc-700 flex items-center gap-2"
    >
      <Icon size={iconSize} className="opacity-80" />
      {label}
    </Button>
  );
}
