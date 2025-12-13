// components/TextAreaComposer.tsx
"use client";

import { useId, useState } from "react";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  SmilePlus,
  Paperclip,
  Image,
  AtSign,
  Hash,
  Bold,
  Italic,
  Underline,
  ALargeSmall,
  ListOrdered,
  List,
  ListTree,
  Link2,
  TextAlignEnd,
  Minus,
  CircleCheckBig,
  ArrowRightLeft,
  Pencil,
} from "lucide-react";

export default function TextAreaComposer() {
  const id = useId();
  const [isExpanded, setIsExpanded] = useState(false);
  const [value, setValue] = useState("");

  const handleFocus = () => {
    setIsExpanded(true);
  };

  const handleCancel = () => {
    setIsExpanded(false);
    setValue("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  const canSubmit = value.trim().length > 0;

  return (
    <div
      className={cn(
        "w-full rounded-md border border-zinc-700 bg-zinc-900/70 text-sm transition-all duration-200",
        isExpanded ? "p-2 px-3" : "px-2 pb-2"
      )}
    >
      {/* TOP TOOLBAR – only when expanded */}
      {isExpanded && (
        <div className="mb-2 flex items-center justify-between text-xs text-zinc-400">
          <div className="flex items-center gap-4">
            <Bold className="h-3.5 w-3.5 cursor-pointer" />
            <Italic className="h-3.5 w-3.5 cursor-pointer" />
            <Underline className="h-3.5 w-3.5 cursor-pointer" />
            <ALargeSmall className="h-3.5 w-3.5 cursor-pointer" />
            <ListOrdered className="h-3.5 w-3.5 cursor-pointer" />
            <List className="h-3.5 w-3.5 cursor-pointer" />
            <ListTree className="h-3.5 w-3.5 cursor-pointer" />
            <Link2 className="h-3.5 w-3.5 cursor-pointer" />
            <TextAlignEnd className="h-3.5 w-3.5 cursor-pointer" />
            <Minus className="h-3.5 w-3.5 cursor-pointer" />
            <ArrowRightLeft className="h-3.5 w-3.5 cursor-pointer" />
            <CircleCheckBig className="h-3.5 w-3.5 cursor-pointer" />
          </div>
        </div>
      )}

      {/* TEXTAREA */}
      <Textarea
        id={id}
        placeholder="Leave a comment"
        value={value}
        onFocus={handleFocus}
        onChange={handleChange}
        rows={isExpanded ? 4 : 1}
        className={cn(
          // kill double borders/shadows and make it blend with card
          "border-none bg-transparent px-0 shadow-none focus-visible:ring-0 focus-visible:border-none placeholder:text-zinc-500",
          isExpanded ? "min-h-[96px]" : "min-h-[32px]"
        )}
      />

      {/* BOTTOM TOOLBAR – always visible, changes slightly when expanded */}
      <div className="mt-2 flex items-center justify-between">
        <div className="flex items-center gap-4 text-zinc-400">
          <SmilePlus className="h-4 w-4 cursor-pointer hover:text-zinc-200" />
          <Paperclip className="h-4 w-4 cursor-pointer hover:text-zinc-200" />
          <Image className="h-4 w-4 cursor-pointer hover:text-zinc-200" />
          <Pencil className="h-4 w-4 cursor-pointer hover:text-zinc-200" />
        </div>

        {isExpanded ? (
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              className=" px-2 text-xs bg-[#B53B22] text-white-400 hover:text-zinc-100"
              onClick={handleCancel}
            >
              Cancel
            </Button>
            <Button
              size="sm"
              className="px-3 text-xs bg-[#5494f2] text-white-400"
              disabled={!canSubmit}
              onClick={() => {
                // TODO: send update
                console.log("Update:", value);
                setIsExpanded(false);
                setValue("");
              }}
            >
              Update
            </Button>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
