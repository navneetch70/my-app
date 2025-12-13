// comp-452 (BreadComponent).tsx
import { HomeIcon } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { SIDE_NAV_LABELS } from "../app/component/side-nav-config"; // adjust path

type BreadComponentProps = {
  currentTab: string;
};

export default function BreadComponent({ currentTab }: BreadComponentProps) {
  const label = SIDE_NAV_LABELS[currentTab] ?? "Home";

  return (
    <Breadcrumb>
      <BreadcrumbList className="rounded-md border bg-background px-3 py-2 shadow-xs">
        <BreadcrumbItem>
          <BreadcrumbLink href="#">
            <HomeIcon aria-hidden="true" size={16} />
            <span className="sr-only">Workspace</span>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>{label}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
