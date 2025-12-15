// app/@modal/(.)workspace/[workspaceId]/row/[rowId]/page.tsx
"use client";

import { useRouter } from "next/navigation";
import {
  Activity,
  BookText,
  Box,
  Ellipsis,
  File,
  Home,
  Mail,
  MessageCircleHeart,
  Plus,
  WalletCards,
  XIcon,
} from "lucide-react";
import VStack from "@/app/Stack/VStack";
import HStack from "@/app/Stack/HStack";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Tabs } from "@/components/ui/tabs";
import { TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TextAreaComponent from "@/components/comp-59";
import AvatarComponent from "@/components/comp-390";
import TextEditComponent from "@/app/components/TextEditiable";

export default function FeedbackSidebar({
  params,
}: {
  params: {
    workspaceId: string;
    rowId: string;
  };
}) {
  const router = useRouter();
  const close = () => router.back();

  return (
    <div
      className="fixed inset-y-0 right-0 z-[999] w-[40%] rounded-l-md
 text-white backdrop-blur-md border-l border-zinc-800"
    >
      <VStack width="100%" height="100%" style={{ padding: "10px" }}>
        <HStack
          style={{
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {" "}
          <Button
            onClick={close}
            variant="ghost"
            size="sm"
            className="px-2 bg-zinc-800 text-sm text-zinc-200 hover:bg-zinc-700"
          >
            <XIcon size={16} />
          </Button>
        </HStack>

        <HStack width="100%" style={{ justifyContent: "space-between" }}>
          <TextEditComponent />
          <HStack width="auto" height="100%">
            <AvatarComponent />
            <VStack
              width="1px"
              height="100%"
              style={{ backgroundColor: "white" }}
            ></VStack>
            <Ellipsis size={14} />
          </HStack>
        </HStack>

        <Tabs defaultValue="tab-1" className="w-full">
          <ScrollArea>
            <TabsList className="relative mb-3 justify-start h-auto w-full gap-0.5 bg-transparent p-0 before:absolute before:inset-x-0 before:bottom-0 before:h-px before:bg-zinc-700">
              <TabsTrigger
                className="text-xs overflow-hidden rounded-b-none border-x border-t border-zinc-700 bg-zinc-900 py-2 text-zinc-400 data-[state=active]:z-10 data-[state=active]:bg-zinc-800 data-[state=active]:text-white data-[state=active]:shadow-none"
                value="tab-1"
              >
                <Home
                  aria-hidden="true"
                  className="-ms-0.5 me-1.5 opacity-60"
                  size={12}
                />
                Updates
              </TabsTrigger>
              <TabsTrigger
                className="text-xs overflow-hidden rounded-b-none border-x border-t border-zinc-700 bg-zinc-900 py-2 text-zinc-400 data-[state=active]:z-10 data-[state=active]:bg-zinc-800 data-[state=active]:text-white data-[state=active]:shadow-none"
                value="tab-2"
              >
                <File
                  aria-hidden="true"
                  className="-ms-0.5 me-1.5 opacity-60"
                  size={12}
                />
                Files
              </TabsTrigger>
              <TabsTrigger
                className="text-xs overflow-hidden rounded-b-none border-x border-t border-zinc-700 bg-zinc-900 py-2 text-zinc-400 data-[state=active]:z-10 data-[state=active]:bg-zinc-800 data-[state=active]:text-white data-[state=active]:shadow-none"
                value="tab-3"
              >
                <Activity
                  aria-hidden="true"
                  className="-ms-0.5 me-1.5 opacity-60"
                  size={12}
                />
                Activity Log
              </TabsTrigger>
              <TabsTrigger
                className="text-xs overflow-hidden rounded-b-none border-x border-t border-zinc-700 bg-zinc-900 py-2 text-zinc-400 data-[state=active]:z-10 data-[state=active]:bg-zinc-800 data-[state=active]:text-white data-[state=active]:shadow-none"
                value="tab-4"
              >
                <Box
                  aria-hidden="true"
                  className="-ms-0.5 me-1.5 opacity-60"
                  size={12}
                />
                Info Boxes
              </TabsTrigger>
              <TabsTrigger
                className="text-xs overflow-hidden rounded-b-none border-x border-t border-zinc-700 bg-zinc-900 py-2 text-zinc-400 data-[state=active]:z-10 data-[state=active]:bg-zinc-800 data-[state=active]:text-white data-[state=active]:shadow-none"
                value="tab-5"
              >
                <WalletCards
                  aria-hidden="true"
                  className="-ms-0.5 me-1.5 opacity-60"
                  size={12}
                />
                Item Card
              </TabsTrigger>

              <Plus
                aria-hidden="true"
                className="-ms-0.5 me-1.5 text-white opacity-60 ml-2 cursor-pointer hover:text-white"
                size={16}
              />
            </TabsList>

            <ScrollBar orientation="horizontal" />
          </ScrollArea>
          <TabsContent value="tab-1">
            <HStack width="100%">
              <HStack className="text-zinc-200 text-xs bg-zinc-800 p-2 uppercase rounded-md">
                <Mail size={14} />
                Update via mail
              </HStack>

              <HStack className="text-zinc-200 text-xs bg-zinc-800 p-2 uppercase rounded-md">
                <MessageCircleHeart size={14} />
                Give feedback
              </HStack>
            </HStack>
            <HStack width="100%" className="pt-4">
              <TextAreaComponent />
            </HStack>
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
      </VStack>
    </div>
  );
}
