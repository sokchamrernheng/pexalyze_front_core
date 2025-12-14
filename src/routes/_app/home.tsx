import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/_app/home")({
  component: RouteComponent,
});

function RouteComponent() {
  useEffect(() => {
    console.log("its rendering");
  });

  return <div>Hello "/_app/home"!</div>;
}
