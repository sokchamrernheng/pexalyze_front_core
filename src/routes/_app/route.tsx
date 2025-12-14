import { Spinner } from "@/components/ui/spinner";
import { useAuth } from "@/contexts/auth.context";
import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_app")({
  beforeLoad: ({ context, location }) => {
    if (context.auth.status !== "authenticated") {
      throw redirect({
        to: "/login",
        search: { from: location.href },
        replace: true,
      });
    }
  },
  component: () => <Outlet />,
});

// function RouteComponent() {
//   const auth = useAuth();

//   return auth.status === "loading" ? (
//     <Spinner className="size-8" />
//   ) : (
//     <Outlet />
//   );
// }
