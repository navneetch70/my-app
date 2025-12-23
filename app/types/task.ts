// Raw API response (ONLY what backend sends)
export type TaskApiResponse = {
  id: string;
  user_name: string;
  user_email: string;
  status: "Active" | "Inactive" | "Pending";
  balance: number;
  location_name: string;
  created_at: string;
  updated_at: string;
  // 👉 backend can send more fields, we ignore safely
};
