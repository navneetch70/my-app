"use client";

import { useEffect, useRef } from "react";
import styles from "../../MinimalHero.module.css";
import { backgroundColors } from "./colors";
import { THEME_MODE } from "@/app/theme/theme";

export default function BackgroundEffects() {
  const gradientRef = useRef<HTMLDivElement>(null);

  // 🔑 pick correct background palette
  const bg =
    THEME_MODE === "dark" ? backgroundColors.dark : backgroundColors.light;

  useEffect(() => {
    // Ripple click
    const onClick = (e: MouseEvent) => {
      const ripple = document.createElement("div");
      ripple.style.position = "fixed";
      ripple.style.left = `${e.clientX}px`;
      ripple.style.top = `${e.clientY}px`;
      ripple.style.width = "4px";
      ripple.style.height = "4px";
      ripple.style.background = bg.ripple;
      ripple.style.borderRadius = "50%";
      ripple.style.transform = "translate(-50%, -50%)";
      ripple.style.pointerEvents = "none";
      ripple.style.animation = "pulse-glow 1s ease-out forwards";
      document.body.appendChild(ripple);
      setTimeout(() => ripple.remove(), 1000);
    };

    // Floating elements on scroll
    let triggered = false;
    const onScroll = () => {
      if (triggered) return;
      triggered = true;

      document
        .querySelectorAll<HTMLElement>(`.${styles.floatingElement}`)
        .forEach((el, i) => {
          setTimeout(() => {
            el.style.animationPlayState = "running";
          }, i * 200);
        });
    };

    document.addEventListener("click", onClick);
    window.addEventListener("scroll", onScroll);

    return () => {
      document.removeEventListener("click", onClick);
      window.removeEventListener("scroll", onScroll);
    };
  }, [bg]);

  return (
    <>
      {/* SVG GRID */}
      <svg className="absolute inset-0 h-full w-full">
        <defs>
          <pattern
            id="grid"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 60 0 L 0 0 0 60"
              fill="none"
              stroke={bg.grid}
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Floating dots */}
      <div
        className={styles.floatingElement}
        style={{ top: "25%", left: "15%" }}
      />
      <div
        className={styles.floatingElement}
        style={{ top: "60%", left: "85%" }}
      />
      <div
        className={styles.floatingElement}
        style={{ top: "40%", left: "10%" }}
      />
      <div
        className={styles.floatingElement}
        style={{ top: "75%", left: "90%" }}
      />

      {/* Mouse gradient */}
      <div
        ref={gradientRef}
        className="pointer-events-none fixed h-96 w-96 rounded-full opacity-0 blur-3xl transition-all duration-500"
        style={{
          background: `radial-gradient(
            circle,
            ${bg.glow} 0%,
            transparent 70%
          )`,
        }}
      />
    </>
  );
}
