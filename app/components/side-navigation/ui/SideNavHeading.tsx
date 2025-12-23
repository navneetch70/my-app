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
// import type { ModelKey } from "../side-navigation";
import { theme } from "../../../theme/theme";

type Props = {
  onAddWorkspace?: (label: string) => void;
  onModelChange?: (model: string) => void;
  selectedModel?: string | undefined;
  locations?: any[];
};

export default function SideNavHeading({
  onAddWorkspace,
  onModelChange,
  selectedModel,
  locations,
}: Props) {
  const [newLabel, setNewLabel] = useState("");

  const handleConfirm = () => {
    const trimmed = newLabel.trim();
    if (!trimmed) return;
    onAddWorkspace?.(trimmed);
    setNewLabel("");
  };

  return (
    <header className="w-full px-4">
      <div className="flex w-full items-center justify-between gap-4">
        {/* LEFT – MODEL SELECT */}
        <div className="w-full">
          <Select
            value={selectedModel}
            onValueChange={(value) => onModelChange?.(value as string)}
          >
            <SelectTrigger
              className="w-full gap-2"
              style={{
                backgroundColor: theme.surface.card,
                border: `1px solid ${theme.border.default}`,
                color: theme.text.primary,
              }}
            >
              <BotMessageSquareIcon
                size={16}
                style={{ color: theme.icon.muted }}
              />
              <SelectValue placeholder="Choose an AI model" />
            </SelectTrigger>

            <SelectContent
              style={{
                backgroundColor: theme.surface.card,
                border: `1px solid ${theme.border.default}`,
                color: theme.text.primary,
              }}
            >
              <SelectGroup className="flex flex-col gap-1">
                {locations?.map((location, index) => {
                  return (
                    <SelectItem key={index} value={location._id}>
                      {location.name}
                    </SelectItem>
                  );
                })}
                {/* <SelectItem value="orion-alpha-45">Orion-Alpha 4.5</SelectItem>
                <SelectItem value="orion-code-4">Orion-Code 4</SelectItem>
                <SelectItem value="nova-chat-4">Nova-Chat 4</SelectItem>
                <SelectItem value="galaxy-max-4">Galaxy-Max 4</SelectItem> */}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        {/* RIGHT – ACTIONS */}
        {/* <div className="flex items-center gap-2">
          <UserMenu />

          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button
                aria-label="Add workspace"
                size="icon"
                variant="ghost"
                style={{
                  color: theme.icon.primary,
                }}
              >
                <Plus size={16} />
              </Button>
            </AlertDialogTrigger>

            <AlertDialogContent
              style={{
                backgroundColor: theme.surface.modal,
                border: `1px solid ${theme.border.default}`,
                color: theme.text.primary,
              }}
            >
              <AlertDialogHeader>
                <AlertDialogTitle>Enter a File Name</AlertDialogTitle>
                <AlertDialogDescription style={{ color: theme.text.muted }}>
                  This will create a new workspace item.
                </AlertDialogDescription>

                <Input
                  className="mt-3"
                  value={newLabel}
                  onChange={(e) => setNewLabel(e.target.value)}
                  placeholder="File Name"
                  autoFocus
                  style={{
                    backgroundColor: theme.surface.card,
                    border: `1px solid ${theme.border.default}`,
                    color: theme.text.primary,
                  }}
                />
              </AlertDialogHeader>

              <div className="mt-4 flex justify-between">
                <AlertDialogCancel
                  style={{
                    backgroundColor: theme.surface.card,
                    border: `1px solid ${theme.border.default}`,
                    color: theme.text.primary,
                  }}
                >
                  Cancel
                </AlertDialogCancel>

                <AlertDialogAction
                  onClick={handleConfirm}
                  style={{
                    backgroundColor: theme.button.primary.bg,
                    color: theme.button.primary.text,
                  }}
                >
                  Confirm
                </AlertDialogAction>
              </div>
            </AlertDialogContent>
          </AlertDialog>
        </div> */}
      </div>
    </header>
  );
}
