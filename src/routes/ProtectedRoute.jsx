import { useAuth } from "../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRouteCordinator() {
  const { isAuthenticated, actualRole } = useAuth();
  console.log(actualRole);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace/>;
  }

  return <Outlet />;
}

export default ProtectedRouteCordinator;
