import { Dock, Home, Calendar, Grip } from "lucide-react";

export type SideNavItem = {
  value: string;
  label: string;
  id: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  section: "workspaces" | "main";
};

export const SIDE_NAV_ITEMS: SideNavItem[] = [
  {
    value: "tab-1",
    label: "Community Action Funds",
    icon: Dock,
    section: "workspaces",
    id: "1",
  },
  { value: "tab-2", label: "Chevrolet Hub", icon: Dock, section: "workspaces",id:"2" },
  {
    value: "tab-3",
    label: "P2025 - CAF iOS/Android App Management",
    icon: Dock,
    section: "workspaces",
    id: "3",
  },
  { value: "home", label: "Home", icon: Home, section: "main",id:"home" },
  { value: "my-work", label: "My Work", icon: Calendar, section: "main" ,id:"my-work"},
  { value: "more", label: "More", icon: Grip, section: "main",id:"more" },
];

export const SIDE_NAV_LABELS: Record<string, string> = SIDE_NAV_ITEMS.reduce(
  (acc, item) => {
    acc[item.value] = item.label;
    return acc;
  },
  {} as Record<string, string>
);
