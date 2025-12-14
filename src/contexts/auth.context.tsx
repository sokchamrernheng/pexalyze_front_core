import { createContext, useContext } from "react";
import { useWhoAmI } from "@/queries/auth.queries";
import type { AuthState } from "@/types/auth.state";

const AuthContext = createContext<AuthState | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { data } = useWhoAmI();
  console.log(data);
  const state: AuthState =
    data == null
      ? { status: "unauthenticated", user: null }
      : { status: "authenticated", user: data };
  console.log(state);
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
