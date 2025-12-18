"use client";

import { theme } from "@/app/theme/theme";

export default function MyWorkPage() {
  return (
    <div>
      <h2
        className="text-lg font-semibold"
        style={{ color: theme.text.primary }}
      >
        My Work
      </h2>
      <p style={{ color: theme.text.secondary }}>
        Tasks, assignments, and progress will appear here.
      </p>
    </div>
  );
}
