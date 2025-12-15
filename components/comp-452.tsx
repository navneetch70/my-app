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

type BreadComponentProps = {
  label: string;
};


export default function BreadComponent({ label }: BreadComponentProps) {

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
