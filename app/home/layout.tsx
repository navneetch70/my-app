// app/home/layout.tsx
import type { ReactNode } from "react";

export default function HomeLayout({
  children,
  modal,
}: {
  children: ReactNode;
  modal: ReactNode;
}) {
  return (
    <div className="relative min-h-screen w-full">
      {children}
      {modal}
    </div>
  );
}
