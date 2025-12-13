// app/home/feedback/[id]/page.tsx
"use client";

import Page from "../../page"; // your /home page component
import FeedbackSidebar from "../../components/FeedbackSidebar";

export default function FeedbackFullPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <>
      {/* Background + layout (same as /home) */}
      <Page />
      {/* Sidebar on the right */}
      <FeedbackSidebar id={params.id} />
    </>
  );
}
