import type { User } from "./user";

export type AuthStatus = "loading" | "authenticated" | "unauthenticated";

export type AuthState = {
  status: AuthStatus;
  user: User | null;
};
