// SideNavigation.tsx
"use client";

import React, { useEffect, useState } from "react";
import VStack from "../../Stack/VStack";
import Component from "./ui/tree";
import SideNavHeading from "./ui/SideNavHeading";
import { SIDE_NAV_ITEMS, SideNavItem } from "./side-nav-config";
import HStack from "../../Stack/HStack";
import { Dock, Ellipsis, Search } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { theme } from "../../theme/theme";
import { getAssignedLocations } from "@/app/api/home.api";

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

export default function SideNavigation({
  onTabLabelMapChange,
}: SideNavigationProps) {
  const searchParams = useSearchParams();
  const modelFromUrl = searchParams.get("model") as string | null;
  const pathname = usePathname();
  const router = useRouter();

  const isActive = (value: string) =>
    pathname === `/${value}` || pathname === `/workspace/${value}`;

  const [selectedModel, setSelectedModel] = useState<string | undefined>(
    modelFromUrl || undefined
  );

  useEffect(() => {
    if (modelFromUrl && modelFromUrl !== selectedModel) {
      setSelectedModel(modelFromUrl);
    }
  }, [modelFromUrl]);

  const mainItems = SIDE_NAV_ITEMS.filter((item) => item.section === "main");

  const baseTriggerClass =
    "relative w-full max-w-full h-9 overflow-hidden flex items-center justify-start px-3 gap-2 after:absolute after:inset-y-1 after:left-0 after:w-0.5 after:rounded-full";

  const [locations, setLocations] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!selectedModel) {
      setSelectedModel(locations[0]?._id || null);
    }
  }, [locations]);

  useEffect(() => {
    getAssignedLocations()
      .then((res) => {
        setLocations(res.data);
      })
      .catch((err) => {
        console.error("Failed to fetch locations", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const currentLocation = locations.find((loc) => loc._id === selectedModel);
  const sources = Object.keys(currentLocation?.sources || {});

  const workspaceItems = sources.map((source) => createWorkspaceItem(source));

  // if (loading) return <p>Loading...</p>;

  return (
    <VStack
      height="100vh"
      style={{
        maxWidth: "350px",
        width: "350px",
        justifyContent: "space-between",
        backgroundColor: theme.surface.card,
        borderRight: `1px solid ${theme.border.default}`,
      }}
    >
      {/* 🔹 Scrollable content */}
      <VStack width="100%" className="flex-1 min-h-0 overflow-y-auto">
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
        <Component />

        <SideNavHeading
          selectedModel={selectedModel}
          onModelChange={(model) => {
            setSelectedModel(model);
            router.push(`${pathname}?model=${model}`, { scroll: false });
          }}
          onAddWorkspace={() => {}}
          locations={locations}
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
            Banks
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
                onClick={() => {
                  router.push(`/workspace/${selectedModel}/${item.value}`, {
                    scroll: false,
                  });
                }}
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
    </VStack>
  );
}
