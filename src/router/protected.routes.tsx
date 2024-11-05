import { Route } from "react-router-dom";
import { ProtectedLayout } from "@/layouts";
import { protectedRoutes } from "@/configs/routes.config";
import { DashboardPage } from "@/pages";

const ProtectedRoutes = (
  <Route element={<ProtectedLayout />}>
    <Route path={protectedRoutes.dashboard.name} element={<DashboardPage />} />
  </Route>
);

export default ProtectedRoutes;
