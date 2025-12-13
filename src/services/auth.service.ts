import { httpClient } from "@/lib/httpClient";
import type { User } from "@/types/user";

export const authService = {
  whoAmI: async (): Promise<User> => {
    const res = await httpClient.get("/auth/whoAmI");
    console.log("whoamIcalled");
    return res.data;
  },

  login: async (payload: { email: string; password: string }) => {
    const res = await httpClient.post("/auth/login", payload);
    return res.data;
  },

  logout: async () => {
    await httpClient.post("/auth/logout");
  },
};
