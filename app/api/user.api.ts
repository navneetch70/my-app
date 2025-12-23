import api from "@/lib/client";

export const getUserProfile = () => {
  return api.get("/users/me");
};
