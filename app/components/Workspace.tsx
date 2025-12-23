// components/Workspace.tsx
"use client";

import React, { useEffect } from "react";
import VStack from "../Stack/VStack";
import HStack from "../Stack/HStack";
import BreadComponent from "@/components/comp-452";
import NavComponent from "@/components/comp-581";
import { theme } from "@/app/theme/theme";
import { usePathname } from "next/navigation";

type WorkspaceProps = {
  currentLabel: string;
  activeWorkspaceId?: string | null;
  children: React.ReactNode;
};

export default function Workspace({
  currentLabel,
  activeWorkspaceId,
  children,
}: WorkspaceProps) {
  const pathname = usePathname();

  // ✅ Force a re-render when the workspace ID changes
  useEffect(() => {
    // This will trigger when workspace navigation occurs
  }, [activeWorkspaceId, pathname]);
  return (
    <VStack
      height="100%"
      style={{
        padding: "16px",
        flex: 1,
        backgroundColor: theme.page.bg,
        color: theme.text.primary,
      }}
      width="100%"
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
        <div key={`workspace-content-${activeWorkspaceId || pathname}`}>
          {children}
        </div>
      </VStack>
    </VStack>
  );
}
