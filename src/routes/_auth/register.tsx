import { useQueryClient } from "@tanstack/react-query";
import { createFileRoute, useRouteContext } from "@tanstack/react-router";
import { queryClient as singleton } from "@/lib/queryClient";
import { useAuth } from "@/contexts/auth.context";

export const Route = createFileRoute("/_auth/register")({
  component: RouteComponent,
});

function RouteComponent() {
  const hookClient = useQueryClient();
  const auth = useAuth();
  const context = useRouteContext({ from: "__root__" });
  console.log(context.auth === auth);
  return <div>Hello "/auth/register"!</div>;
}
