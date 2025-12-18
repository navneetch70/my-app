// SideNavigation.tsx
"use client";

import React, { useEffect, useState } from "react";
import VStack from "../../Stack/VStack";
import Component from "./ui/tree";
import SideNavHeading from "./ui/SideNavHeading";
import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SIDE_NAV_ITEMS, SideNavItem } from "./side-nav-config";
import HStack from "../../Stack/HStack";
import { Dock, Ellipsis, Search } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { theme } from "../../theme/theme";
export type ModelKey =
  | "orion-alpha-45"
  | "orion-code-4"
  | "nova-chat-4"
  | "galaxy-max-4";

type SideNavigationProps = {
  onTabLabelMapChange?: (map: Record<string, string>) => void;
};

const createWorkspaceItem = (label: string): SideNavItem => {
  const slug = label.toLowerCase().replace(/[^a-z0-9]+/g, "-");

  return {
    id: slug,
    section: "workspaces",
    value: slug,
    label,
    icon: Dock,
  };
};

const INITIAL_WORKSPACES_BY_MODEL: Record<ModelKey, SideNavItem[]> = {
  "orion-alpha-45": [
    createWorkspaceItem("General Chat"),
    createWorkspaceItem("Product Brainstorm"),
    createWorkspaceItem("Marketing Ideas"),
  ],
  "orion-code-4": [
    createWorkspaceItem("Frontend Tasks"),
    createWorkspaceItem("API Development"),
    createWorkspaceItem("Bug Fixes"),
  ],
  "nova-chat-4": [
    createWorkspaceItem("Customer SupportCustomer Support SupportSupport"),
    createWorkspaceItem("FAQ Assistant"),
  ],
  "galaxy-max-4": [
    createWorkspaceItem("AI Research"),
    createWorkspaceItem("Large Data Analysis"),
    createWorkspaceItem("System Design"),
  ],
};

export default function SideNavigation({
  onTabLabelMapChange,
}: SideNavigationProps) {
  const searchParams = useSearchParams();
  const modelFromUrl = searchParams.get("model") as ModelKey | null;
  const pathname = usePathname();
  const router = useRouter();

  const isActive = (value: string) =>
    pathname === `/${value}` || pathname === `/workspace/${value}`;

  const [selectedModel, setSelectedModel] = useState<ModelKey>(
    modelFromUrl ?? "orion-alpha-45"
  );

  useEffect(() => {
    if (modelFromUrl && modelFromUrl !== selectedModel) {
      setSelectedModel(modelFromUrl);
    }
  }, [modelFromUrl]);

  const [workspaceByModel, setWorkspaceByModel] = useState<
    Record<ModelKey, SideNavItem[]>
  >(INITIAL_WORKSPACES_BY_MODEL);

  const workspaceItems = workspaceByModel[selectedModel] ?? [];

  useEffect(() => {
    const map: Record<string, string> = {};

    Object.values(workspaceByModel).forEach((items) =>
      items.forEach((item) => {
        map[item.value] = item.label;
      })
    );

    SIDE_NAV_ITEMS.forEach((item) => {
      map[item.value] = item.label;
    });

    onTabLabelMapChange?.(map);
  }, [workspaceByModel, onTabLabelMapChange]);

  const mainItems = SIDE_NAV_ITEMS.filter((item) => item.section === "main");

  const baseTriggerClass =
    "relative w-full max-w-full h-9 overflow-hidden flex items-center justify-start px-3 gap-2 after:absolute after:inset-y-1 after:left-0 after:w-0.5 after:rounded-full";

  const makeValueFromLabel = (label: string) =>
    label
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "") + `-${Date.now()}`;

  const handleAddWorkspace = (label: string) => {
    const trimmed = label.trim();
    if (!trimmed) return;

    const slug = makeValueFromLabel(trimmed);

    const newItem: SideNavItem = {
      id: slug,
      section: "workspaces",
      value: slug,
      label: trimmed,
      icon: Dock,
    };

    setWorkspaceByModel((prev) => ({
      ...prev,
      [selectedModel]: [newItem, ...(prev[selectedModel] || [])],
    }));
  };

  return (
    <VStack
      height="100%"
      style={{
        maxWidth: "400px",
        flex: 1,
        justifyContent: "space-between",
        backgroundColor: theme.surface.card,
        borderRight: `1px solid ${theme.border.default}`,
      }}
    >
      {/* 🔹 Scrollable content */}
      <VStack width="100%" className="flex-1 min-h-0 overflow-y-auto">
        <Component />

        <SideNavHeading
          selectedModel={selectedModel}
          onModelChange={(model) => {
            setSelectedModel(model);
            router.push(`${pathname}?model=${model}`, { scroll: false });
          }}
          onAddWorkspace={handleAddWorkspace}
        />

        {/* Workspace header */}
        <HStack
          width="100%"
          className="px-4"
          style={{ justifyContent: "space-between" }}
        >
          <span
            className="text-xs pl-2"
            style={{ color: theme.text.secondary }}
          >
            Workspaces
          </span>

          <HStack>
            {[Ellipsis, Search].map((Icon, i) => (
              <button
                key={i}
                className="size-8 rounded-full flex items-center justify-center"
                style={{
                  color: theme.icon.muted,
                }}
              >
                <Icon size={16} />
              </button>
            ))}
          </HStack>
        </HStack>

        {/* Workspace list */}
        <div className="flex flex-col gap-1 px-4 py-0 w-full">
          {workspaceItems.map((item) => {
            const ItemIcon = item.icon;
            const active = isActive(item.value);

            return (
              <button
                key={item.value}
                onClick={() =>
                  router.push(`/workspace/${item.value}?model=${selectedModel}`)
                }
                className={baseTriggerClass}
                style={{
                  color: active ? theme.text.primary : theme.text.secondary,
                  backgroundColor: active
                    ? theme.surface.elevated
                    : "transparent",
                }}
              >
                <div className="flex items-center gap-2 min-w-0 w-full">
                  <ItemIcon size={16} />
                  <span className="truncate" title={item.label}>
                    {item.label}
                  </span>
                </div>

                {active && (
                  <span
                    className="absolute left-0 inset-y-1 w-0.5 rounded-full"
                    style={{ backgroundColor: theme.text.primary }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </VStack>

      <div className="flex flex-col gap-1 px-4 py-3 w-full">
        {mainItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.value);

          return (
            <button
              key={item.value}
              onClick={() => router.push(`/${item.value}`)}
              className={baseTriggerClass}
              style={{
                color: active ? theme.text.primary : theme.text.secondary,
                backgroundColor: active
                  ? theme.surface.elevated
                  : "transparent",
              }}
            >
              <Icon size={16} />
              {item.label}

              {active && (
                <span
                  className="absolute left-0 inset-y-1 w-0.5 rounded-full"
                  style={{ backgroundColor: theme.text.primary }}
                />
              )}
            </button>
          );
        })}
      </div>
    </VStack>
  );
}
