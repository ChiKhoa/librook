import { ProtectedLayoutView } from "./ProtectedLayoutView";

export default function ProtectedLayoutContainer() {
  const isAuthenticated = true;

  return <ProtectedLayoutView isAuthenticated={isAuthenticated} />;
}
