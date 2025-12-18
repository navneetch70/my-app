// app/@modal/(.)workspace/[workspaceId]/row/[rowId]/page.tsx
"use client";

import { useRouter } from "next/navigation";
import {
  Activity,
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TextAreaComponent from "@/components/comp-59";
import AvatarComponent from "@/components/comp-390";
import TextEditComponent from "@/app/components/TextEditiable";
import { theme } from "@/app/theme/theme";

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
      className="fixed inset-y-0 right-0 z-[999] w-[40%] rounded-l-md backdrop-blur-md"
      style={{
        backgroundColor: theme.surface.modal,
        borderLeft: `1px solid ${theme.border.default}`,
        color: theme.text.primary,
      }}
    >
      <VStack width="100%" height="100%" style={{ padding: "10px" }}>
        {/* HEADER */}
        <HStack style={{ justifyContent: "space-between" }}>
          <Button
            onClick={close}
            variant="ghost"
            size="sm"
            style={{
              color: theme.icon.primary,
            }}
          >
            <XIcon size={16} />
          </Button>
        </HStack>

        {/* TITLE ROW */}
        <HStack width="100%" style={{ justifyContent: "space-between" }}>
          <TextEditComponent />

          <HStack>
            <AvatarComponent />

            <VStack
              width="1px"
              height="100%"
              style={{ backgroundColor: theme.border.default }}
            />

            <Ellipsis size={14} style={{ color: theme.icon.muted }} />
          </HStack>
        </HStack>

        {/* TABS */}
        <Tabs defaultValue="tab-1" className="w-full">
          <ScrollArea>
            <TabsList
              className="relative mb-3 h-auto w-full justify-start gap-0.5 bg-transparent p-0"
              style={{
                borderBottom: `1px solid ${theme.border.default}`,
              }}
            >
              {[
                { value: "tab-1", icon: Home, label: "Updates" },
                { value: "tab-2", icon: File, label: "Files" },
                { value: "tab-3", icon: Activity, label: "Activity Log" },
                { value: "tab-4", icon: Box, label: "Info Boxes" },
                { value: "tab-5", icon: WalletCards, label: "Item Card" },
              ].map(({ value, icon: Icon, label }) => (
                <TabsTrigger
                  key={value}
                  value={value}
                  className="text-xs rounded-b-none border-x border-t px-2 py-2"
                  style={{
                    backgroundColor: theme.surface.card,
                    borderColor: theme.border.default,
                    color: theme.text.secondary,
                  }}
                >
                  <Icon size={12} className="mr-1 opacity-70" />
                  {label}
                </TabsTrigger>
              ))}

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
            <HStack width="100%" gap={8}>
              <HStack
                className="text-xs uppercase rounded-md p-2"
                style={{
                  backgroundColor: theme.surface.elevated,
                  color: theme.text.secondary,
                }}
              >
                <Mail size={14} />
                Update via mail
              </HStack>

              <HStack
                className="text-xs uppercase rounded-md p-2"
                style={{
                  backgroundColor: theme.surface.elevated,
                  color: theme.text.secondary,
                }}
              >
                <MessageCircleHeart size={14} />
                Give feedback
              </HStack>
            </HStack>

            <HStack width="100%" className="pt-4">
              <TextAreaComponent />
            </HStack>
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

          {/* TAB 3 */}
          <TabsContent value="tab-3">
            <p
              className="p-4 pt-1 text-center text-xs"
              style={{ color: theme.text.muted }}
            >
              Content for Tab 3
            </p>
          </TabsContent>
        </Tabs>
      </VStack>
    </div>
  );
}
