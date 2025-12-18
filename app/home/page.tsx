"use client";

import AppLayout from "../components/AppLayout";
import { theme } from "../theme/theme";
import { usePathname } from "next/navigation";

export default function HomePage() {
  const pathname = usePathname();

  return (
    <div className="relative z-20">
      <AppLayout>
        <div>
          <h2
            className="text-lg font-semibold"
            style={{ color: theme.text.primary }}
          >
            My Home
          </h2>
          <p style={{ color: theme.text.secondary }}>
            Tasks, assignments, and progress will appear here.
          </p>
        </div>
      </AppLayout>
    </div>
  );
}
