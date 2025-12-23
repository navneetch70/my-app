import api from "@/lib/client";

type LoginPayload = {
  email: string;
  password: string;
};

type LoginResponse = {
  access_token: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
};

export const login = (data: LoginPayload) =>
  api.post<LoginResponse>("/auth/login", data);
