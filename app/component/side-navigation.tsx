"use client";

import React, { useState } from "react";
import VStack from "../Stack/VStack";
import Component from "./ui/tree";
import SideNavHeading from "./ui/SideNavHeading";
import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SIDE_NAV_ITEMS, SideNavItem } from "./side-nav-config";
import HStack from "../Stack/HStack";
import { Dock, Ellipsis, Search } from "lucide-react";
import { Tabs } from "@/components/ui/tabs";

export default function SideNavigation() {
  // start from config, but use local state so we can add items dynamically
  const initialWorkspaceItems = SIDE_NAV_ITEMS.filter(
    (item) => item.section === "workspaces"
  );

  const mainItems = SIDE_NAV_ITEMS.filter((item) => item.section === "main");

  const [workspaceItems, setWorkspaceItems] = useState<SideNavItem[]>(
    initialWorkspaceItems
  );

  const baseTriggerClass =
    "relative w-full justify-start px-3 py-1.5 gap-1 text-muted-foreground hover:bg-white/10 hover:text-white data-[state=active]:bg-transparent data-[state=active]:text-white data-[state=active]:shadow-none after:absolute after:inset-y-1 after:left-0 after:w-0.5 after:rounded-full after:bg-transparent data-[state=active]:after:bg-white";

  // helper to make a unique value slug
  const makeValueFromLabel = (label: string) =>
    label
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "") + `-${Date.now()}`;

  // called by SideNavHeading when user confirms adding a new file/workspace
  const handleAddWorkspace = (label: string) => {
    const trimmed = label.trim();
    if (!trimmed) return;
    const newItem: SideNavItem = {
      section: "workspaces",
      value: makeValueFromLabel(trimmed),
      label: trimmed,
      // fallback to a generic icon if you want; import and change as needed
      icon: Dock,
    };
    setWorkspaceItems((prev) => [newItem, ...prev]);
  };

  return (
    <VStack
      height="100%"
      className="border-r border-zinc-600 h-full shadow-[inset_-2px_-1px_10px_0_rgba(255,255,255,0.2)]"
      style={{ maxWidth: "400px", justifyContent: "space-between", flex: 1 }}
    >
      {/* 🔹 Main scrollable content */}
      <VStack className="flex-1 min-h-0 overflow-y-auto">
        <Component />

        {/* Pass the handler into the heading so Confirm adds into workspaceItems */}
        <SideNavHeading onAddWorkspace={handleAddWorkspace} />

        <HStack
          width="100%"
          className="px-4"
          style={{ justifyContent: "space-between" }}
        >
          <HStack className="text-white text-xs pl-2">Workspaces</HStack>

          <HStack>
            <button className="size-8 rounded-full hover:bg-white/10 text-white">
              <Ellipsis size={16} />
            </button>

            <button className="size-8 rounded-full hover:bg-white/10 text-white">
              <Search size={16} />
            </button>
          </HStack>
        </HStack>

        <TabsList className="flex flex-col gap-1 px-4 py-0 text-white bg-transparent">
          {workspaceItems.map((item) => {
            const ItemIcon = item.icon ?? (() => null);
            return (
              <TabsTrigger
                key={item.value}
                value={item.value}
                className={baseTriggerClass}
              >
                {/* if your icon type is a lucide component or similar */}
                {ItemIcon ? (
                  <ItemIcon className="opacity-60" size={16} />
                ) : null}
                {item.label}
              </TabsTrigger>
            );
          })}
        </TabsList>
        {/* Bottom Menu  */}
      </VStack>

      <TabsList className="flex flex-col gap-1 px-4 py-3 text-white bg-transparent shrink-0">
        {mainItems.map((item) => {
          const Icon = item.icon;
          return (
            <TabsTrigger
              key={item.value}
              value={item.value}
              className={baseTriggerClass}
            >
              <Icon className="opacity-60" size={16} />
              {item.label}
            </TabsTrigger>
          );
        })}
      </TabsList>
    </VStack>
  );
}
