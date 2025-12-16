import { httpClient } from "@/lib/httpClient";
import type { User } from "@/types/user";

export const authService = {
  whoAmI: async (): Promise<User | null> => {
    try {
      const res = await httpClient.get("/auth/whoAmI");
      return res.data.data;
    } catch (err: any) {
      if (err.response?.status === 401) {
        return null;
      }
      throw err;
    }
  },

  login: async (payload: { email: string; password: string }) => {
    const res = await httpClient.post("/auth/login", payload);
    return res.data;
  },

  logout: async () => {
    await httpClient.post("/auth/logout");
  },
};
