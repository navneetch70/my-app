import { HomeIcon } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const BREADCRUMB_TITLES = {
  "tab-1": "Overview",
  "tab-2": "Projects",
  "tab-3": "Packages",
} as const;

type TabKey = keyof typeof BREADCRUMB_TITLES;

type BreadComponentProps = {
  tab: string; // or TabKey if you want to be strict
};

export default function BreadComponent({ tab }: BreadComponentProps) {
  const title = BREADCRUMB_TITLES[tab as TabKey] ?? "Overview";

  return (
    <Breadcrumb>
      <BreadcrumbList className="rounded-md border bg-background px-3 py-2 shadow-xs">
        <BreadcrumbItem>
          <BreadcrumbLink href="#">
            <HomeIcon aria-hidden="true" size={16} />
            <span className="sr-only">Home</span>
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbSeparator />

        <BreadcrumbItem>
          <BreadcrumbPage>{title}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
