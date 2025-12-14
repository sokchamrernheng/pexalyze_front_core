import { authService } from "@/services/auth.service";
import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth")({
  beforeLoad: async ({ context, location }) => {
    if (context.auth.status !== "unauthenticated") {
      console.log("true");
      throw redirect({
        to: "/home",
        search: { from: location.href },
        replace: true,
      });
    }
    console.log("false", context.auth.status);
  },
  component: () => <Outlet />,
});
