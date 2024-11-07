import { Route } from "react-router-dom";
import { ProtectedLayout } from "@/layouts";
import { routesProtected } from "@/configs/routes.config";
import { DashboardPage } from "@/pages";

const ProtectedRoutes = (
  <Route element={<ProtectedLayout />}>
    <Route path={routesProtected.dashboard.name} element={<DashboardPage />} />
  </Route>
);

export default ProtectedRoutes;
