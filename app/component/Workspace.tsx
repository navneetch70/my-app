// Workspace.tsx
"use client";

import React from "react";
import VStack from "../Stack/VStack";
import BreadComponent from "@/components/comp-452";
import HStack from "../Stack/HStack";
import NavComponent from "@/components/comp-581";
import TabComponent from "@/components/comp-436";

type WorkspaceProps = {
  currentTab: string;
};

export default function Workspace({ currentTab }: WorkspaceProps) {
  return (
    <VStack width="75vw" height="100%" style={{ padding: "16px", flex: 1 }}>
      <HStack width="100%" justify="space-between" align="center">
        <BreadComponent currentTab={currentTab} />
        <NavComponent />
      </HStack>
      <HStack width="100%">
        <TabComponent />
      </HStack>
    </VStack>
  );
}
