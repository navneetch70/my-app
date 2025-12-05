"use client";

import React from "react";
import SideNavigation from "./side-navigation";
import Workspace from "./Workspace";
import { Tabs } from "@/components/ui/tabs";

export default function Layout() {
  const [tab, setTab] = React.useState("tab-1");

  return (
    <Tabs value={tab} onValueChange={setTab} className="w-full h-screen">
      <div className="flex h-full w-full overflow-hidden">
        <SideNavigation />
        <Workspace activeTab={tab} />
      </div>
    </Tabs>
  );
}
