"use client";

import { useId, useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { theme } from "../theme/theme";

export default function TextEditComponent() {
  const id = useId();
  const [value, setValue] = useState(
    "Need to be fixedNeed to be fixedNeed to be fixedNeed to be fixed"
  );
  const [isExpanded, setIsExpanded] = useState(false);

  const rows = value.length > 40 ? 2 : 1;

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
            "rounded-md px-3 py-2 text-sm leading-snug shadow-none focus-visible:ring-0"
          )}
          style={{
            backgroundColor: theme.surface.card,
            border: `1px solid ${theme.border.default}`,
            color: theme.text.primary,
          }}
        />
      ) : (
        <button
          type="button"
          onClick={() => setIsExpanded(true)}
          className={cn(
            "w-full rounded-md px-3 py-2 text-left text-sm leading-snug shadow-none",
            !value && "opacity-70"
          )}
          style={{
            backgroundColor: theme.surface.card,
            border: `1px solid ${theme.border.default}`,
            color: value ? theme.text.primary : theme.text.muted,
          }}
        >
          <span className="block truncate">{value || "Edit title…"}</span>
        </button>
      )}
    </div>
  );
}
