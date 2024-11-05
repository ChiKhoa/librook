import { authRoutes } from "@/configs/routes.config";
import { Navigate, Outlet } from "react-router-dom";

interface IProps {
  isAuthenticated: boolean;
}

export const ProtectedLayoutView = ({ isAuthenticated }: IProps) => {
  if (!isAuthenticated) return <Navigate to={authRoutes.signIn.path} />;

  return (
    <>
      <Outlet />
    </>
  );
};
