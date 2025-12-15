//Workspace Item Page
"use client";

import AppLayout from "@/app/components/AppLayout";
import BackgroundEffects from "@/app/components/background/BackgroundEffects";
import TabComponent from "@/components/comp-436";
import { useParams } from "next/navigation";

export default function WorkspaceItemPage() {
  const { workspaceId } = useParams<{ workspaceId: string }>();

  return (
      <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-[#1a1d18] via-black to-[#2a2e26] text-[#e6e1d7]">
         <BackgroundEffects />
   
         <div className="relative z-20">
           <AppLayout>
             <TabComponent />
           </AppLayout>
         </div>
       </div>
  );
}
