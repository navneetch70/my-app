"use client";

import {
  ArrowUpDown,
  BookText,
  ChevronDownIcon,
  ChevronUpIcon,
  CircleUser,
  Ellipsis,
  EyeOff,
  Funnel,
  Plus,
  Search,
  Table2,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/rightTab";
import HStack from "@/app/Stack/HStack";
import RightBTNComponent from "./comp-83";
import VStack from "@/app/Stack/VStack";
import TableComponent from "./comp-477";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { theme } from "@/app/theme/theme";
import InviteBtnComponent from "./comp-114";

export default function TabComponent() {
  const [showFeedbackTable, setShowFeedbackTable] = useState(true);
  const [feedbackHandle, setFeedbackHandle] = useState(true);

  const router = useRouter();

  return (
    <Tabs defaultValue="tab-1" className="w-full">
      {/* TOP TABS */}
      <ScrollArea>
        <TabsList
          className="relative mb-3 h-auto w-full justify-start gap-0.5 bg-transparent p-0"
          style={{
            borderBottom: `1px solid ${theme.border.default}`,
          }}
        >
          <TabsTrigger
            value="tab-1"
            className="rounded-b-none border-x border-t py-2"
            style={{
              backgroundColor: theme.surface.card,
              borderColor: theme.border.default,
              color: theme.text.secondary,
            }}
            data-state="active"
          >
            <Ellipsis size={16} className="me-1.5 opacity-60" />
            Main Table
          </TabsTrigger>

          <TabsTrigger
            value="tab-2"
            className="rounded-b-none border-x border-t py-2"
            style={{
              backgroundColor: theme.surface.card,
              borderColor: theme.border.default,
              color: theme.text.secondary,
            }}
          >
            <BookText size={16} className="me-1.5 opacity-60" />
            Form
          </TabsTrigger>

          <Plus
            size={16}
            className="ml-2 cursor-pointer"
            style={{ color: theme.icon.muted }}
          />
        </TabsList>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>

      {/* TAB 1 */}
      <TabsContent value="tab-1">
        <HStack width="100%" style={{ justifyContent: "space-between" }}>
          {/* LEFT CONTROLS */}
          <HStack>
            <div
              className="inline-flex divide-x rounded-md"
              style={{
                border: `1px solid ${theme.border.default}`,
                backgroundColor: theme.surface.card,
              }}
            >
              <InviteBtnComponent
                label="New Item"
                icon={<Plus size={16} className="opacity-60" />}
              />
            </div>

            <RightBTNComponent iconSize={16} icon={Search} label="Search" />
            <RightBTNComponent iconSize={16} icon={CircleUser} label="Person" />
            <RightBTNComponent iconSize={16} icon={Funnel} label="Filter" />
            <RightBTNComponent iconSize={16} icon={ArrowUpDown} label="Sort" />
            <RightBTNComponent iconSize={16} icon={EyeOff} label="Hide" />
            <RightBTNComponent iconSize={16} icon={Table2} label="Group by" />
            <RightBTNComponent iconSize={16} icon={Ellipsis} label="" />
          </HStack>

          {/* RIGHT TOGGLE */}
          <HStack onClick={() => setFeedbackHandle((prev) => !prev)}>
            <RightBTNComponent
              iconSize={16}
              icon={feedbackHandle ? ChevronDownIcon : ChevronUpIcon}
              label=""
            />
          </HStack>
        </HStack>

        {feedbackHandle && (
          <VStack gap={0}>
            {/* FEEDBACK HEADER */}
            <HStack
              className={cn(
                "mt-4 cursor-pointer select-none p-2",
                showFeedbackTable ? "rounded-t-md border-b-0" : "rounded-md"
              )}
              style={{
                backgroundColor: theme.surface.card,
                border: `1px solid ${theme.border.default}`,
                color: theme.text.primary,
              }}
              onClick={() => setShowFeedbackTable((prev) => !prev)}
            >
              {showFeedbackTable ? <ChevronDownIcon /> : <ChevronUpIcon />}
              Incoming Feedback
            </HStack>

            {/* TABLE */}
            {showFeedbackTable && (
              <HStack
                width="100%"
                className="rounded-b-md"
                style={{
                  backgroundColor: theme.surface.card,
                  border: `1px solid ${theme.border.default}`,
                  borderTop: "none",
                  overflow: "hidden",
                }}
              >
                <TableComponent />
              </HStack>
            )}

            {/* ADD GROUP */}
            <div
              className="mt-4 inline-flex divide-x rounded-md"
              style={{
                border: `1px solid ${theme.border.default}`,
                backgroundColor: theme.surface.card,
              }}
            >
              <Button
                className="rounded-none shadow-none"
                style={{
                  backgroundColor: theme.surface.card,
                  color: theme.text.primary,
                }}
              >
                <Plus size={16} className="mr-2" />
                Add new group
              </Button>
            </div>
          </VStack>
        )}
      </TabsContent>

      {/* TAB 2 */}
      <TabsContent value="tab-2">
        <p
          className="p-4 pt-1 text-center text-xs"
          style={{ color: theme.text.muted }}
        >
          Content for Tab 2
        </p>
      </TabsContent>
    </Tabs>
  );
}
