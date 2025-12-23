// my-app/app/%28app%29/workspace/%5BlocationId%5D/page.tsx
"use client";

import { getLocationById, getMonths } from "@/app/api/workspace.api";
import Workspace from "@/app/components/Workspace";
import VStack from "@/app/Stack/VStack";
import TabComponent from "@/components/comp-436";
import { useParams } from "next/navigation";
import { use, useEffect, useState } from "react";

export default function WorkspacePage() {
  const params = useParams();
  const locationId = params.locationId as string | undefined;
  const source = params.source as string | undefined;
  const [months, setMonths] = useState<string[]>([]);
  const [location, setLocation] = useState<any>({ name: "" });

  useEffect(() => {
    if (locationId && source) {
      getMonths(locationId, source).then((response) => {
        setMonths(response.data as any);
      });
    }
  }, [locationId, source]);

  useEffect(() => {
    if (locationId) {
      getLocationById(locationId).then((response) => {
        setLocation(response.data as any);
      });
    }
  }, [locationId]);

  const currentLabel = location
    ? `${location.name} > ${source?.toUpperCase()}`
    : "Loading...";

  console.log("WorkspacePage params:", params, months);
  return (
    <VStack style={{ flex: 1 }} width="100%">
      <Workspace
        currentLabel={currentLabel}
        activeWorkspaceId={locationId || null}
      >
        <TabComponent months={months} locationId={locationId} source={source} />
      </Workspace>
    </VStack>
  );
}
