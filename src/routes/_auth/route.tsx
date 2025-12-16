import { Spinner } from "@/components/ui/spinner";
import { useAuth } from "@/contexts/auth.context";
import { createFileRoute, Navigate, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth")({
  component: RouteComponent,
});


function RouteComponent () {
  const auth = useAuth();
  if (auth.status === 'loading') {
    return <Spinner/>;
  }
  if (auth.status === 'authenticated') {
    return <Navigate to="/home" replace />
  }
  return <Outlet/>;
}