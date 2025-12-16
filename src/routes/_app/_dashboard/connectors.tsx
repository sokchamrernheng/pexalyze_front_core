import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/_dashboard/connectors')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_app/_dashboard/datasources"!</div>
}
