import type { User } from "./user";

export type AuthStatus = "authenticated" | "unauthenticated" | "loading";

export type AuthState = {
  status: AuthStatus;
  user: User | null;
};
