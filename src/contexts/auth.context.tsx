import { createContext, useContext } from "react";
import { useWhoAmI } from "@/queries/auth.queries";
import type { AuthState } from "@/types/auth.state";

const AuthContext = createContext<AuthState | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { data, isLoading } = useWhoAmI();
  const state: AuthState = isLoading
    ? { status: "loading", user: null }
    : data
      ? { status: "authenticated", user: data }
      : { status: "unauthenticated", user: null };

  return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used inside AuthProvider");
  }
  return ctx;
}

// function useAuth() {
//   const router = useRouter()
//   const [user, setUser] = useState<User | null>(null)

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged((user) => {
//       setUser(user)
//       router.invalidate()
//     })

//     return unsubscribe
//   }, [])

//   return user
// }
