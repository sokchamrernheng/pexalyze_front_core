import {
  queryOptions,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { authService } from "@/services/auth.service";

export function useWhoAmI() {
  return useQuery(whoAmIQuery);
}

export const whoAmIQuery = queryOptions({
  queryKey: ["auth", "me"],
  queryFn: authService.whoAmI,
  retry: false,
  staleTime: 5 * 60_000,
});

export function useLogin() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (input: { email: string; password: string }) =>
      authService.login(input),

    onSuccess: async () => {
      // 🔑 THIS is the key step
      await queryClient.invalidateQueries({
        queryKey: ["auth", "me"],
      });
    },
  });
}
