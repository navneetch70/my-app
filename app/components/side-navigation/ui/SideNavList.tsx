"use client";

import * as TabsPrimitive from "@radix-ui/react-tabs";
import type * as React from "react";
import { cn } from "@/lib/utils";
import { theme } from "@/app/theme/theme";

/* =========================
   Tabs Root
   ========================= */
function Tabs({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn("flex flex-col gap-2", className)}
      {...props}
    />
  );
}

/* =========================
   Tabs List
   ========================= */
function TabsList({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        "inline-flex w-fit items-center justify-start gap-0.5 rounded-md p-0",
        className
      )}
      style={{
        backgroundColor: theme.surface.card,
        borderBottom: `1px solid ${theme.border.default}`,
      }}
      {...props}
    />
  );
}

/* =========================
   Tabs Trigger
   ========================= */
function TabsTrigger({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-t-md px-3 py-1.5 text-sm font-medium outline-none transition-all",
        "disabled:pointer-events-none disabled:opacity-50",
        className
      )}
      style={{
        backgroundColor: theme.surface.card,
        color: theme.text.secondary,
        border: `1px solid ${theme.border.default}`,
        borderBottom: "none",
      }}
      {...props}
    />
  );
}

/* =========================
   Tabs Content
   ========================= */
function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("flex-1 outline-none", className)}
      {...props}
    />
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent };
