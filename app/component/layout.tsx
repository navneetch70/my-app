// Layout.tsx
"use client";

import { useState } from "react";
import { Tabs } from "@/components/ui/tabs";
import VStack from "../Stack/VStack";
import Workspace from "./Workspace";
import SideNavigation from "./side-navigation";
import HStack from "../Stack/HStack";
import NavBarComponent from "@/components/comp-591";
import NavBarMainComponent from "@/components/comp-588";

export default function Layout() {
  const [currentTab, setCurrentTab] = useState("tab-1");

  return (
    <Tabs
      value={currentTab}
      onValueChange={setCurrentTab}
      className="w-full h-screen"
    >
      <VStack width="100%" height="100%" gap={0} style={{ display: "flex" }}>
        <HStack width="100vw">
          <NavBarMainComponent />
        </HStack>
        <HStack width="100%" height="100%">
          <SideNavigation />
          <Workspace currentTab={currentTab} />
        </HStack>
      </VStack>
    </Tabs>
  );
}
