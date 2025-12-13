import { queryClient } from "@/lib/queryClient";
import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth")({
  beforeLoad: ({ context, location }) => {
    console.log(context);
    const is = context.queryClient === queryClient;
    console.log(is);
    // if (!context) {
    //   throw redirect({
    //     to: "/login",
    //     search: { from: location.href },
    //   });
    // }
  },
  component: () => <Outlet />,
});
