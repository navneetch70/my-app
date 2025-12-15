// Workspace.tsx
"use client";

import React from "react";
import VStack from "../Stack/VStack";
import BreadComponent from "@/components/comp-452";
import HStack from "../Stack/HStack";
import NavComponent from "@/components/comp-581";

type WorkspaceProps = {
  currentLabel: string;
  activeWorkspaceId?: string | null;
  children: React.ReactNode;
};


export default function Workspace({ currentLabel, children }: WorkspaceProps) {
  return (
    <VStack width="75vw" height="100%" style={{ padding: "16px", flex: 1 }}>
      <HStack width="100%" justify="space-between" align="center">
        <BreadComponent label={currentLabel} />
        <NavComponent />
      </HStack>

      <VStack width="100%" className="mt-4">
        {children}
      </VStack>
    </VStack>
  );
}
