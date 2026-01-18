import { Navigate } from "react-router-dom";
import { useAuthContext } from "../hooks";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user } = useAuthContext();

  if (!user) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
}
