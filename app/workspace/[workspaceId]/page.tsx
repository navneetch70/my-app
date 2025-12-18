"use client";

import AppLayout from "@/app/components/AppLayout";
import TabComponent from "@/components/comp-436";
import { useParams } from "next/navigation";

export default function WorkspaceItemPage() {
  const { workspaceId } = useParams<{ workspaceId: string }>();

  return (
    <div className="relative z-20">
      <AppLayout key={`workspace-${workspaceId}`}>
        <TabComponent />
      </AppLayout>
    </div>
  );
}
