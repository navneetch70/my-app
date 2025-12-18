// app/(app)/layout.tsx
"use client";

import { Suspense, useState } from "react";
import { usePathname } from "next/navigation";
import VStack from "../Stack/VStack";
import Workspace from "../components/Workspace";
import SideNavigation from "../components/side-navigation/side-navigation";
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
        <Suspense fallback={<div>Loading...</div>}>
          <SideNavigation onTabLabelMapChange={setTabLabelMap} />
        </Suspense>

        <Workspace
          key={pathname}
          currentLabel={currentLabel}
          activeWorkspaceId={activeWorkspaceId}
        >
          {children}
        </Workspace>
      </HStack>
    </VStack>
  );
}
