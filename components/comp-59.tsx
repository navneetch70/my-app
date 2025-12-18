"use client";

import { useId, useState } from "react";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  SmilePlus,
  Paperclip,
  Image,
  Pencil,
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
} from "lucide-react";
import { theme } from "@/app/theme/theme";

export default function TextAreaComposer() {
  const id = useId();
  const [isExpanded, setIsExpanded] = useState(false);
  const [value, setValue] = useState("");

  const canSubmit = value.trim().length > 0;

  return (
    <div
      className={cn(
        "w-full rounded-md transition-all duration-200",
        isExpanded ? "p-2 px-3" : "px-2 pb-2"
      )}
      style={{
        backgroundColor: theme.surface.card,
        border: `1px solid ${theme.border.default}`,
      }}
    >
      {/* TOP TOOLBAR */}
      {isExpanded && (
        <div
          className="mb-2 flex items-center justify-between text-xs"
          style={{ color: theme.icon.muted }}
        >
          <div className="flex items-center gap-4">
            {[
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
              ArrowRightLeft,
              CircleCheckBig,
            ].map((Icon, i) => (
              <Icon key={i} className="h-3.5 w-3.5 cursor-pointer" />
            ))}
          </div>
        </div>
      )}

      {/* TEXTAREA */}
      <Textarea
        id={id}
        placeholder="Leave a comment"
        value={value}
        onFocus={() => setIsExpanded(true)}
        onChange={(e) => setValue(e.target.value)}
        rows={isExpanded ? 4 : 1}
        className={cn(
          "border-none bg-transparent px-0 shadow-none focus-visible:ring-0",
          isExpanded ? "min-h-[96px]" : "min-h-[32px]"
        )}
        style={{
          color: theme.text.primary,
        }}
      />

      {/* BOTTOM BAR */}
      <div className="mt-2 flex items-center justify-between">
        <div
          className="flex items-center gap-4"
          style={{ color: theme.icon.muted }}
        >
          <SmilePlus className="h-4 w-4 cursor-pointer" />
          <Paperclip className="h-4 w-4 cursor-pointer" />
          <Image className="h-4 w-4 cursor-pointer" />
          <Pencil className="h-4 w-4 cursor-pointer" />
        </div>

        {isExpanded && (
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              style={{
                color: theme.text.secondary,
              }}
              onClick={() => {
                setIsExpanded(false);
                setValue("");
              }}
            >
              Cancel
            </Button>

            <Button
              size="sm"
              disabled={!canSubmit}
              style={{
                backgroundColor: theme.button.primary.bg,
                color: theme.button.primary.text,
              }}
              onClick={() => {
                console.log("Update:", value);
                setIsExpanded(false);
                setValue("");
              }}
            >
              Update
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
