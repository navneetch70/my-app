import React from "react";
import VStack from "../Stack/VStack";
import Component from "./ui/tree";
import SideNavHeading from "./ui/SideNavHeading";
import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BoxIcon,
  Calendar,
  Dock,
  Grip,
  Home,
  HomeIcon,
  PanelsTopLeftIcon,
} from "lucide-react";

export default function SideNavigation() {
  return (
    <VStack
      height="100vh"
      style={{ borderRight: "1px solid white", maxWidth: "400px" }}
    >
      <Component />
      <SideNavHeading />
      <TabsList className="flex-col h-full flex  items-start justify-start gap-1  rounded-none bg-transparent px-4 py-0 text-white">
        <TabsTrigger
          className="
            relative w-full justify-start
            px-3 py-1.5
              gap-1
            text-muted-foreground
            hover:bg-white/10 hover:text-white
            data-[state=active]:bg-transparent
            data-[state=active]:text-white
            data-[state=active]:shadow-none
            after:absolute after:inset-y-1 after:left-0 after:w-0.5
            after:rounded-full after:bg-transparent
            data-[state=active]:after:bg-white
          "
          value="tab-1"
        >
          <Dock
            aria-hidden="true"
            className="-ms-0.5 me-1.5 opacity-60"
            size={16}
          />
          Community Action Funds
        </TabsTrigger>
        <TabsTrigger
          className="
            relative w-full justify-start
            px-3 py-1.5
            gap-1
            text-muted-foreground
            hover:bg-white/10 hover:text-white
            data-[state=active]:bg-transparent
            data-[state=active]:text-white
            data-[state=active]:shadow-none
            after:absolute after:inset-y-1 after:left-0 after:w-0.5
            after:rounded-full after:bg-transparent
            data-[state=active]:after:bg-white
          "
          value="tab-2"
        >
          <Dock
            aria-hidden="true"
            className="-ms-0.5 me-1.5 opacity-60"
            size={16}
          />
          Chevrolet Hub
        </TabsTrigger>
        <TabsTrigger
          className="
            relative w-full justify-start
            px-3 py-1.5
            gap-1
            text-muted-foreground
            hover:bg-white/10 hover:text-white
            data-[state=active]:bg-transparent
            data-[state=active]:text-white
            data-[state=active]:shadow-none
            after:absolute after:inset-y-1 after:left-0 after:w-0.5
            after:rounded-full after:bg-transparent
            data-[state=active]:after:bg-white
          "
          value="tab-3"
        >
          <Dock
            aria-hidden="true"
            className="-ms-0.5 me-1.5 opacity-60"
            size={16}
          />
          P2025 - CAF iOS/Android App Management
        </TabsTrigger>
      </TabsList>
      <TabsList className="flex-col gap-1 rounded-none bg-transparent px-4 py-0 text-white pb-4">
        <TabsTrigger
          value="home"
          className="
            relative w-full justify-start
            px-3 py-1.5
            gap-1
            text-muted-foreground
            hover:bg-white/10 hover:text-white
            data-[state=active]:bg-transparent
            data-[state=active]:text-white
            data-[state=active]:shadow-none
            after:absolute after:inset-y-1 after:left-0 after:w-0.5
            after:rounded-full after:bg-transparent
            data-[state=active]:after:bg-white
          "
        >
          <Home
            aria-hidden="true"
            className="-ms-0.5 me-1.5 opacity-60"
            size={16}
          />
          Home
        </TabsTrigger>
        <TabsTrigger
          value="my-work"
          className="
            relative w-full justify-start
            px-3 py-1.5
            gap-1
            text-muted-foreground
            hover:bg-white/10 hover:text-white
            data-[state=active]:bg-transparent
            data-[state=active]:text-white
            data-[state=active]:shadow-none
            after:absolute after:inset-y-1 after:left-0 after:w-0.5
            after:rounded-full after:bg-transparent
            data-[state=active]:after:bg-white
          "
        >
          <Calendar
            aria-hidden="true"
            className="-ms-0.5 me-1.5 opacity-60"
            size={16}
          />
          My Work
        </TabsTrigger>
        <TabsTrigger
          value="more"
          className="
            relative w-full justify-start
            px-3 py-1.5
            gap-1
            text-muted-foreground
            hover:bg-white/10 hover:text-white
            data-[state=active]:bg-transparent
            data-[state=active]:text-white
            data-[state=active]:shadow-none
            after:absolute after:inset-y-1 after:left-0 after:w-0.5
            after:rounded-full after:bg-transparent
            data-[state=active]:after:bg-white
          "
        >
          <Grip
            aria-hidden="true"
            className="-ms-0.5 me-1.5 opacity-60"
            size={16}
          />
          More
        </TabsTrigger>
      </TabsList>
    </VStack>
  );
}
