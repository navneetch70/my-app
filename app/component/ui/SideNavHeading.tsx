"use client";
import {
  BotMessageSquareIcon,
  MessageCircleDashedIcon,
  Plus,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import UserMenu from "@/components/navbar-components/user-menu";
import HStack from "@/app/Stack/HStack";

export default function SideNavHeading() {
  return (
    <header className="px-4 w-full">
      <div className="flex items-center justify-between gap-4 w-full ">
        {/* Left side */}
        <div className="w-full">
          <Select aria-label="Select AI model" defaultValue="orion-alpha-45">
            <SelectTrigger className="**:data-desc:hidden w-full [&>svg]:shrink-0  text-white [&>svg]:text-white">
              <BotMessageSquareIcon aria-hidden="true" size={16} />
              <SelectValue placeholder="Choose an AI model" />
            </SelectTrigger>
            <SelectContent className="[&_*[role=option]>span]:start-auto [&_*[role=option]>span]:end-2 [&_*[role=option]]:ps-2 [&_*[role=option]]:pe-8">
              <SelectGroup>
                <SelectLabel className="ps-2">Models</SelectLabel>
                <SelectItem value="orion-alpha-45">
                  Orion-Alpha 4.5
                  <span
                    className="mt-1 block text-muted-foreground text-xs"
                    data-desc
                  >
                    Balanced performance and creativity
                  </span>
                </SelectItem>
                <SelectItem value="orion-code-4">
                  Orion-Code 4
                  <span
                    className="mt-1 block text-muted-foreground text-xs"
                    data-desc
                  >
                    Optimized for code generation and understanding
                  </span>
                </SelectItem>
                <SelectItem value="nova-chat-4">
                  Nova-Chat 4
                  <span
                    className="mt-1 block text-muted-foreground text-xs"
                    data-desc
                  >
                    Excels at natural, engaging conversations
                  </span>
                </SelectItem>
                <SelectItem value="galaxy-max-4">
                  Galaxy-Max 4
                  <span
                    className="mt-1 block text-muted-foreground text-xs"
                    data-desc
                  >
                    Most powerful model for complex tasks
                  </span>
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        {/* Right side: Actions */}
        <div className="flex items-center justify-end gap-2">
          {/* Layout button */}

          {/* User menu */}
          <UserMenu />
          <Button
            aria-label="Temporary chat"
            className="size-8 rounded-full hover:bg-white/10 text-white shadow-none border border-white-500 cursor-pointer"
            size="icon"
            variant="ghost"
          >
            <Plus aria-hidden="true" className="text-white" size={16} />
          </Button>
        </div>
      </div>
    </header>
  );
}
