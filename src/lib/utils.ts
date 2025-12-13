import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { httpClient } from "./httpClient";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const login = async (payload: { email: string; password: string }) => {
  const res = await httpClient.post("/auth/login", payload);
  return res.data;
};
