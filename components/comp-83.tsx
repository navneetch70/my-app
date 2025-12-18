import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { theme } from "@/app/theme/theme";

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
      variant="ghost"
      className="flex items-center gap-2 shadow-none"
      style={{
        backgroundColor: theme.surface.card,
        border: `1px solid ${theme.border.default}`,
        color: theme.text.secondary,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = theme.surface.elevated;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = theme.surface.card;
      }}
    >
      <Icon size={iconSize} style={{ color: theme.icon.muted }} />
      {label && <span>{label}</span>}
    </Button>
  );
}
