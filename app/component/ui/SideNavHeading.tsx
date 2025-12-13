"use client";

import React, { useState } from "react";
import { BotMessageSquareIcon, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import UserMenu from "@/components/navbar-components/user-menu";
import HStack from "@/app/Stack/HStack";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";

type Props = {
  onAddWorkspace?: (label: string) => void;
};

export default function SideNavHeading({ onAddWorkspace }: Props) {
  const [newLabel, setNewLabel] = useState("");

  const handleConfirm = () => {
    const trimmed = newLabel.trim();
    if (!trimmed) return;
    // call parent handler
    onAddWorkspace?.(trimmed);
    // reset input
    setNewLabel("");
    // Note: AlertDialogAction typically closes the dialog automatically
  };

  return (
    <header className="px-4 w-full">
      <div className="flex items-center justify-between gap-4 w-full ">
        {/* Left side: model select */}
        <div className="w-full">
          <Select aria-label="Select AI model" defaultValue="orion-alpha-45">
            <SelectTrigger className="**:data-desc:hidden w-full [&>svg]:shrink-0  text-white [&>svg]:text-white">
              <BotMessageSquareIcon aria-hidden="true" size={16} />
              <SelectValue placeholder="Choose an AI model" />
            </SelectTrigger>
            <SelectContent className="[&_*[role=option]>span]:start-auto bg-zinc-800 text-[#fff] [&_*[role=option]>span]:end-2 [&_*[role=option]]:ps-2 [&_*[role=option]]:pe-8">
              <SelectGroup className="flex flex-col gap-2">
                <SelectItem
                  value="orion-alpha-45"
                  className="border cursor-pointer"
                >
                  Orion-Alpha 4.5
                  <span
                    className="mt-1 block text-muted-foreground text-xs"
                    data-desc
                  >
                    Balanced performance and creativity
                  </span>
                </SelectItem>
                <SelectItem
                  value="orion-code-4"
                  className="border cursor-pointer"
                >
                  Orion-Code 4
                  <span
                    className="mt-1 block text-muted-foreground text-xs"
                    data-desc
                  >
                    Optimized for code generation and understanding
                  </span>
                </SelectItem>
                <SelectItem
                  value="nova-chat-4"
                  className="border cursor-pointer"
                >
                  Nova-Chat 4
                  <span
                    className="mt-1 block text-muted-foreground text-xs"
                    data-desc
                  >
                    Excels at natural, engaging conversations
                  </span>
                </SelectItem>
                <SelectItem
                  value="galaxy-max-4"
                  className="border cursor-pointer"
                >
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

        {/* Right side: actions */}
        <div className="flex items-center justify-end gap-2">
          <UserMenu />

          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button
                aria-label="Add file"
                className="size-8 rounded-full hover:bg-white/10 text-white shadow-none border border-white-500 cursor-pointer"
                size="icon"
                variant="ghost"
              >
                <Plus aria-hidden="true" className="text-white" size={16} />
              </Button>
            </AlertDialogTrigger>

            <AlertDialogContent>
              <div className="flex flex-col text-white max-sm:items-center sm:flex-row sm:gap-4">
                <AlertDialogHeader>
                  <AlertDialogTitle>Enter a File Name</AlertDialogTitle>
                  <AlertDialogDescription>
                    This will create a new workspace item.
                  </AlertDialogDescription>
                  <div className="mt-3">
                    <Input
                      value={newLabel}
                      onChange={(e) =>
                        setNewLabel((e.target as HTMLInputElement).value)
                      }
                      placeholder="File Name"
                      autoFocus
                    />
                  </div>
                </AlertDialogHeader>
              </div>

              <div className="flex justify-between mt-4">
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction
                  className="bg-white text-black"
                  onClick={handleConfirm}
                >
                  Confirm
                </AlertDialogAction>
              </div>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </header>
  );
}
