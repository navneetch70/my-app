"use client";

import React from "react";
import SideNavigation from "./side-navigation";
import { Tabs } from "@/components/ui/tabs";
import VStack from "../Stack/VStack";
import BreadComponent from "@/components/comp-452";

type WorkspaceProps = {
  activeTab: string;
};

export default function Workspace({ activeTab }: WorkspaceProps) {
  return (
    <VStack width="75vw" height="100vh" style={{ padding: "16px" }}>
      <BreadComponent tab={activeTab} />
      <div className="h-10 w-10 bg-red-500">test</div>
      {/* other content */}
    </VStack>
  );
}
