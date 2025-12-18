// /app/components/AppLayout.tsx
"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import VStack from "../Stack/VStack";
import Workspace from "./Workspace";
import SideNavigation from "./side-navigation/side-navigation";
import HStack from "../Stack/HStack";
import NavBarMainComponent from "@/components/comp-588";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [tabLabelMap, setTabLabelMap] = useState<Record<string, string>>({});

  const activeWorkspaceId = pathname.startsWith("/workspace/")
    ? pathname.split("/workspace/")[1]
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
          key={pathname} // ✅ ensures clean remount
          currentLabel={currentLabel}
          activeWorkspaceId={activeWorkspaceId}
        >
          {children}
        </Workspace>
      </HStack>
    </VStack>
  );
}
