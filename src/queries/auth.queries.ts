import { queryOptions, useQuery } from "@tanstack/react-query";
import { authService } from "@/services/auth.service";

export function useWhoAmI() {
  return useQuery(whoAmIQuery);
}

// export function useWhoAmI() {
//   return useQuery({
//     queryKey: ["auth", "me"],
//     queryFn: authService.whoAmI,
//     retry: false,
//     staleTime: 5 * 60_000, // cache it
//   });
// }

export const whoAmIQuery = queryOptions({
  queryKey: ["auth", "me"],
  queryFn: authService.whoAmI,
  retry: false,
  staleTime: 5 * 60_000,
});

// export const whoAmIQuery = queryOptions({
//   queryKey: ['auth', 'me'],
//   queryFn: async () => {
//     try {
//       return await api.whoAmI() // returns User
//     } catch {
//       return null // IMPORTANT: guest, not error
//     }
//   },
//   retry: false,
//   staleTime: Infinity,
// })
