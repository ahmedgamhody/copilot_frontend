import { Navigate, Outlet } from "react-router-dom";
// import { useAppSelector } from "../store/hooks";

export default function ProtectedAuthRoutes() {
  const token = "klf";
  if (token) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}
