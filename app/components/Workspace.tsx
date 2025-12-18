// components/Workspace.tsx
"use client";

import React from "react";
import VStack from "../Stack/VStack";
import HStack from "../Stack/HStack";
import BreadComponent from "@/components/comp-452";
import NavComponent from "@/components/comp-581";
import { theme } from "@/app/theme/theme";

type WorkspaceProps = {
  currentLabel: string;
  activeWorkspaceId?: string | null;
  children: React.ReactNode;
};

export default function Workspace({ currentLabel, children }: WorkspaceProps) {
  return (
    <VStack
      height="100%"
      style={{
        padding: "16px",
        flex: 1,
        backgroundColor: theme.page.bg,
        color: theme.text.primary,
      }}
    >
      {/* Header */}
      <HStack
        width="100%"
        justify="space-between"
        align="center"
        style={{
          borderBottom: `1px solid ${theme.border.subtle}`,
          paddingBottom: "12px",
        }}
      >
        <BreadComponent label={currentLabel} />
        <NavComponent />
      </HStack>

      {/* Content */}
      <VStack
        width="100%"
        className="mt-4"
        style={{
          backgroundColor: theme.surface.card,
          border: `1px solid ${theme.border.default}`,
          borderRadius: "8px",
          padding: "12px",
        }}
      >
        {children}
      </VStack>
    </VStack>
  );
}
