import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/hello")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div className="bg-pink-200">Hello "/hello"!</div>;
}
