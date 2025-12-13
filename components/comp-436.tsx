import {
  ArrowUpDown,
  BookText,
  Box,
  ChevronDownIcon,
  ChevronUpIcon,
  CircleUser,
  Ellipsis,
  EyeOff,
  Funnel,
  Mouse as House,
  Link2,
  PanelsTopLeft,
  Plus,
  Search,
  Table2,
  XIcon,
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
import { use, useState } from "react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

export default function TabComponent() {
  const [showFeedbackTable, setShowFeedbackTable] = useState(true);
  const [feedbackHandle, setFeedbackHandle] = useState(true);

  const router = useRouter();

  return (
    <Tabs defaultValue="tab-1" className="w-full">
      <ScrollArea>
        <TabsList className="relative mb-3 justify-start h-auto w-full gap-0.5 bg-transparent p-0 before:absolute before:inset-x-0 before:bottom-0 before:h-px before:bg-zinc-700">
          <TabsTrigger
            className="overflow-hidden rounded-b-none border-x border-t border-zinc-700 bg-zinc-900 py-2 text-zinc-400 data-[state=active]:z-10 data-[state=active]:bg-zinc-800 data-[state=active]:text-white data-[state=active]:shadow-none"
            value="tab-1"
          >
            <Ellipsis
              aria-hidden="true"
              className="-ms-0.5 me-1.5 opacity-60"
              size={16}
            />
            Main Table
          </TabsTrigger>
          <TabsTrigger
            className="overflow-hidden rounded-b-none border-x border-t border-zinc-700 bg-zinc-900 py-2 text-zinc-400 data-[state=active]:z-10 data-[state=active]:bg-zinc-800 data-[state=active]:text-white data-[state=active]:shadow-none"
            value="tab-2"
          >
            <BookText
              aria-hidden="true"
              className="-ms-0.5 me-1.5 opacity-60"
              size={16}
            />
            Form
          </TabsTrigger>

          <Plus
            aria-hidden="true"
            className="-ms-0.5 me-1.5 opacity-60 ml-2 cursor-pointer hover:text-white"
            size={16}
          />
        </TabsList>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <TabsContent value="tab-1">
        <HStack width="100%" style={{ justifyContent: "space-between" }}>
          <HStack>
            <div className="inline-flex divide-x divide-primary-foreground/30 rounded-md shadow-xs rtl:space-x-reverse border border-primary-foreground/20 bg-primary/10">
              <Button className="rounded-none bg-zinc-800 hover:bg-zinc-700 shadow-none first:rounded-s-md last:rounded-e-md focus-visible:z-10">
                New Item
              </Button>
              <Button
                aria-label="Options"
                className="rounded-none bg-zinc-800 hover:bg-zinc-700 shadow-none first:rounded-s-md last:rounded-e-md focus-visible:z-10"
                size="icon"
              >
                <ChevronDownIcon aria-hidden="true" size={16} />
              </Button>
            </div>
            <RightBTNComponent iconSize={16} icon={Search} label="Search" />
            <RightBTNComponent iconSize={16} icon={CircleUser} label="Person" />
            <RightBTNComponent iconSize={16} icon={Funnel} label="Filter" />
            <RightBTNComponent iconSize={16} icon={ArrowUpDown} label="Sort" />
            <RightBTNComponent iconSize={16} icon={EyeOff} label="Hide" />
            <RightBTNComponent iconSize={16} icon={Table2} label="Group by" />
            <RightBTNComponent iconSize={16} icon={Ellipsis} label="" />
          </HStack>
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
            {/* Header that toggles the table */}
            <HStack
              className={cn(
                "mt-4 bg-zinc-900 border border-zinc-700 p-2 cursor-pointer select-none text-[#5494f2]",
                showFeedbackTable
                  ? "rounded-t-md border-b-0" // open: top rounded, no bottom border
                  : "rounded-md border-b-zinc-700" // closed: full rounded box
              )}
              onClick={() => setShowFeedbackTable((prev) => !prev)}
            >
              {showFeedbackTable ? (
                <ChevronDownIcon className="transition-all" />
              ) : (
                <ChevronUpIcon className="transition-all" />
              )}
              Incoming Feedback
            </HStack>

            {/* Table container (only if open) */}
            {showFeedbackTable && (
              <HStack
                width="100%"
                className="bg-zinc-900 rounded-b-md border border-zinc-700"
              >
                <TableComponent />
              </HStack>
            )}

            {/* Add new group button */}
            <div className="inline-flex divide-x divide-primary-foreground/30 mt-4 rounded-md shadow-xs rtl:space-x-reverse border border-primary-foreground/20 bg-primary/10">
              <Button className="rounded-none bg-zinc-800 hover:bg-zinc-700 shadow-none first:rounded-s-md last:rounded-e-md focus-visible:z-10">
                <Plus aria-hidden="true" size={16} />
                Add new group
              </Button>
            </div>
          </VStack>
        )}
      </TabsContent>
      <TabsContent value="tab-2">
        <p className="p-4 pt-1 text-center text-zinc-500 text-xs">
          Content for Tab 2
        </p>
      </TabsContent>
      <TabsContent value="tab-3">
        <p className="p-4 pt-1 text-center text-zinc-500 text-xs">
          Content for Tab 3
        </p>
      </TabsContent>
    </Tabs>
  );
}
