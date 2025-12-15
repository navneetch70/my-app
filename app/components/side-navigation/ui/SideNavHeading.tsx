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
import type { ModelKey } from '../side-navigation'
type Props = {
  onAddWorkspace?: (label: string) => void;
  onModelChange?: (model: ModelKey) => void;
  selectedModel?: ModelKey;
};

export default function SideNavHeading({
  onAddWorkspace,
  onModelChange,
  selectedModel,
}: Props) {
  const [newLabel, setNewLabel] = useState("");

  const handleConfirm = () => {
    const trimmed = newLabel.trim();
    if (!trimmed) return;
    onAddWorkspace?.(trimmed);
    setNewLabel("");
  };

  return (
    <header className="px-4 w-full">
      <div className="flex items-center justify-between gap-4 w-full">
        {/* Left side: model select */}
        <div className="w-full">
          <Select
            value={selectedModel}
            onValueChange={(value) => onModelChange?.(value as ModelKey)}
          >
            <SelectTrigger className="w-full text-white [&>svg]:text-white">
              <BotMessageSquareIcon size={16} />
              <SelectValue placeholder="Choose an AI model" />
            </SelectTrigger>

            <SelectContent className="bg-zinc-800 text-white">
              <SelectGroup className="flex flex-col gap-2">
                <SelectItem value="orion-alpha-45">
                  Orion-Alpha 4.5
                </SelectItem>

                <SelectItem value="orion-code-4">
                  Orion-Code 4
                </SelectItem>

                <SelectItem value="nova-chat-4">
                  Nova-Chat 4
                </SelectItem>

                <SelectItem value="galaxy-max-4">
                  Galaxy-Max 4
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        {/* Right side: actions */}
        <div className="flex items-center gap-2">
          <UserMenu />

          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button
                aria-label="Add file"
                size="icon"
                variant="ghost"
                className="size-8 rounded-full hover:bg-white/10 text-white"
              >
                <Plus size={16} />
              </Button>
            </AlertDialogTrigger>

            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Enter a File Name</AlertDialogTitle>
                <AlertDialogDescription>
                  This will create a new workspace item.
                </AlertDialogDescription>

                <Input
                  className="mt-3"
                  value={newLabel}
                  onChange={(e) => setNewLabel(e.target.value)}
                  placeholder="File Name"
                  autoFocus
                />
              </AlertDialogHeader>

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
