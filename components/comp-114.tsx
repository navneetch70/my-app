import { ChevronDownIcon, Link2 } from "lucide-react";
import { Button } from "@/components/ui/button";

type InviteBtnProps = {
  label: string; // 🔥 button text
  icon?: React.ReactNode; // optional left icon
  onClick?: () => void;
  onOptionsClick?: () => void;
};

export default function InviteBtnComponent({
  label,
  icon = <Link2 aria-hidden="true" className="opacity-60" size={16} />,
  onClick,
  onOptionsClick,
}: InviteBtnProps) {
  return (
    <div className="inline-flex divide-x divide-primary-foreground/30 rounded-md shadow-xs rtl:space-x-reverse border border-primary-foreground/20 bg-primary/10">
      <Button
        className="rounded-none shadow-none first:rounded-s-md last:rounded-e-md focus-visible:z-10"
        onClick={onClick}
      >
        {icon}
        {label}
      </Button>

      <Button
        aria-label="Options"
        className="rounded-none shadow-none first:rounded-s-md last:rounded-e-md focus-visible:z-10"
        size="icon"
        onClick={onOptionsClick}
      >
        <ChevronDownIcon aria-hidden="true" size={16} />
      </Button>
    </div>
  );
}
