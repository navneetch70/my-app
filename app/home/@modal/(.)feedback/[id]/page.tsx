// app/home/@modal/(.)feedback/[id]/page.tsx
"use client";

import FeedbackSidebar from "../../../components/FeedbackSidebar";

export default function FeedbackModalPage({
  params,
}: {
  params: { id: string };
}) {
  return <FeedbackSidebar id={params.id} />;
}
