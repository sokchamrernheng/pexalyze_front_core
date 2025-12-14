import type { User } from "./user";

export type AuthStatus = "authenticated" | "unauthenticated";

export type AuthState = {
  status: AuthStatus;
  user: User | null;
};
