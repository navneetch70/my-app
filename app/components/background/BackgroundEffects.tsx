"use client";

import { useEffect, useRef } from "react";
import { colors } from "./colors";

export default function BackgroundEffects() {
  const gradientRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate words
    const words = document.querySelectorAll<HTMLElement>(".word");
    words.forEach((word) => {
      const delay = parseInt(word.dataset.delay || "0", 10);
      setTimeout(() => {
        word.style.animation = "word-appear 0.8s ease-out forwards";
      }, delay);
    });

    // Mouse gradient
    const gradient = gradientRef.current;
    const onMouseMove = (e: MouseEvent) => {
      if (!gradient) return;
      gradient.style.left = `${e.clientX - 192}px`;
      gradient.style.top = `${e.clientY - 192}px`;
      gradient.style.opacity = "1";
    };

    const onMouseLeave = () => {
      if (gradient) gradient.style.opacity = "0";
    };

    // Ripple click
    const onClick = (e: MouseEvent) => {
      const ripple = document.createElement("div");
      ripple.style.position = "fixed";
      ripple.style.left = `${e.clientX}px`;
      ripple.style.top = `${e.clientY}px`;
      ripple.style.width = "4px";
      ripple.style.height = "4px";
      ripple.style.background = "rgba(200,180,160,0.6)";
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
        .querySelectorAll<HTMLElement>(".floating-element")
        .forEach((el, i) => {
          setTimeout(() => {
            el.style.animationPlayState = "running";
          }, i * 200);
        });
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("click", onClick);
    window.addEventListener("scroll", onScroll);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("click", onClick);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      {/* SVG GRID BACKGROUND */}
      <svg className="absolute inset-0 h-full w-full">
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path
              d="M 60 0 L 0 0 0 60"
              fill="none"
              stroke="rgba(200,180,160,0.08)"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Floating dots */}
      <div className="floating-element" style={{ top: "25%", left: "15%" }} />
      <div className="floating-element" style={{ top: "60%", left: "85%" }} />
      <div className="floating-element" style={{ top: "40%", left: "10%" }} />
      <div className="floating-element" style={{ top: "75%", left: "90%" }} />

      {/* Mouse gradient */}
      <div
        ref={gradientRef}
        className="pointer-events-none fixed h-96 w-96 rounded-full opacity-0 blur-3xl transition-all duration-500"
        style={{
          background: `radial-gradient(circle, ${colors[500]}0D 0%, transparent 100%)`,
        }}
      />
    </>
  );
}
