import { Dock, Home, Calendar, Grip } from "lucide-react";

export type SideNavItem = {
  value: string;
  label: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  section: "workspaces" | "main";
};

export const SIDE_NAV_ITEMS: SideNavItem[] = [
  {
    value: "tab-1",
    label: "Community Action Funds",
    icon: Dock,
    section: "workspaces",
  },
  { value: "tab-2", label: "Chevrolet Hub", icon: Dock, section: "workspaces" },
  {
    value: "tab-3",
    label: "P2025 - CAF iOS/Android App Management",
    icon: Dock,
    section: "workspaces",
  },
  { value: "home", label: "Home", icon: Home, section: "main" },
  { value: "my-work", label: "My Work", icon: Calendar, section: "main" },
  { value: "more", label: "More", icon: Grip, section: "main" },
];

export const SIDE_NAV_LABELS: Record<string, string> = SIDE_NAV_ITEMS.reduce(
  (acc, item) => {
    acc[item.value] = item.label;
    return acc;
  },
  {} as Record<string, string>
);
