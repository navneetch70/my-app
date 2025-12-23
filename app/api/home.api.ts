import api from "@/lib/client";

export type AssignedLocation = {
  id: string;
  name: string;
  city?: string;
  state?: string;
};

export const getAssignedLocations = () => {
  return api.get<AssignedLocation[]>("/locations/assigned");
};
