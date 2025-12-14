import axios from "axios";
import { queryClient } from "./queryClient";

export const httpClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10_000,
  withCredentials: true, // if using cookies / auth
});

httpClient.interceptors.response.use(
  (res) => res,
  async (error) => {
    if (error.response?.status === 401) {
      console.log("401 in interceptor");
      queryClient.setQueryData(["auth", "me"], null);
      // queryClient.invalidateQueries({ queryKey: ["auth"] });
    }
    return Promise.reject({
      type: "http",
      status: error.response?.status,
      message: error.response?.data?.message ?? "Request failed",
    });
  }
);
