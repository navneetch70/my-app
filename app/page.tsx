"use client";

import VStack from "./Stack/VStack";
import BackgroundEffects from "./components/background/BackgroundEffects";
import SignInPage from "./login/page";
import { theme } from "./theme/theme";

export default function MinimalHero() {
  return (
    <div
      className="relative min-h-screen w-full overflow-hidden"
      style={{
        background: `linear-gradient(
          to bottom right,
          ${theme.page.bg},
          ${theme.surface.elevated}
        )`,
        color: theme.text.primary,
      }}
    >
      {/* BACKGROUND (always below) */}
      <div className="absolute inset-0 z-0">
        <BackgroundEffects />
      </div>

      {/* CONTENT (always above) */}
      <div className="relative z-10">
        <VStack>
          <SignInPage />
        </VStack>
      </div>
    </div>
  );
}
