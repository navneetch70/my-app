"use client";

import type React from "react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import VStack from "@/app/Stack/VStack";
import HStack from "@/app/Stack/HStack";
import NavBarMainComponent from "@/components/comp-588";
import SideNavigation from "@/app/components/side-navigation/side-navigation";
import Workspace from "@/app/components/Workspace";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [tabLabelMap, setTabLabelMap] = useState<Record<string, string>>({});

  // If the path is /workspace/<id>/<source> we only want the id part
  const activeWorkspaceId = pathname.startsWith("/workspace/")
    ? pathname.split("/workspace/")[1].split("/")[0]
    : null;

  const currentLabel =
    (activeWorkspaceId && tabLabelMap[activeWorkspaceId]) ||
    tabLabelMap[pathname.replace("/", "")] ||
    "Home";

  return (
    <VStack width="100vw" height="100vh" gap={0}>
      {/* Top Navbar */}
      <HStack width="100vw">
        <NavBarMainComponent />
      </HStack>

      {/* Main Content */}
      <HStack width="100%" height="100%" gap={0}>
        <SideNavigation onTabLabelMapChange={setTabLabelMap} />

        <Workspace
          currentLabel={currentLabel}
          activeWorkspaceId={activeWorkspaceId}
        >
          {children}
        </Workspace>
      </HStack>
    </VStack>
  );
}
