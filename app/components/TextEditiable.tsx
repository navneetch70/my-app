"use client";

import { useId, useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

export default function TextEditComponent() {
  const id = useId();
  const [value, setValue] = useState(
    "Need to be fixedNeed to be fixedNeed to be fixedNeed to be fixedNeed to be fixedNeed to be fixed"
  );
  const [isExpanded, setIsExpanded] = useState(false);

  // Simple rule: longer titles get 2 rows when expanded
  const rows = value.length > 40 ? 2 : 1; // tweak 40 as needed

  const handleBlur = () => {
    setIsExpanded(false);
  };

  return (
    <div className="w-[70%]">
      {isExpanded ? (
        <Textarea
          id={id}
          value={value}
          rows={rows}
          autoFocus
          placeholder="Edit title…"
          onChange={(e) => setValue(e.target.value)}
          onBlur={handleBlur}
          className={cn(
            "w-full resize-none overflow-hidden",
            "min-h-[38px] max-h-[80px]",
            "rounded-md border border-input bg-transparent px-3 py-2",
            "text-sm leading-snug shadow-xs focus-visible:ring-[3px]"
          )}
        />
      ) : (
        <button
          type="button"
          onClick={() => setIsExpanded(true)}
          className={cn(
            "w-full rounded-md border border-input bg-transparent px-3 py-2",
            "text-sm leading-snug shadow-xs text-left",
            "hover:border-ring/70 focus-visible:outline-none focus-visible:ring-[3px]",
            !value && "text-muted-foreground"
          )}
        >
          <span className="block truncate">{value || "Edit title…"}</span>
        </button>
      )}
    </div>
  );
}
