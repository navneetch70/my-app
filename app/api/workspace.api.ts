import api from "@/lib/client";

export const getTasks = (
  locationId: string,
  source: string,
  n_month: string
) => {
  return api.get(
    `tasks/assigned?location_id=${locationId}&n_month=${n_month}&source=${source}`
  );
};

export const getMonths = (locationId: string, source: string) => {
  return api.get(`tasks/months?location_id=${locationId}&source=${source}`);
};

export const getLocationById = (locationId: string) => {
  return api.get(`/locations/${locationId}`);
};
