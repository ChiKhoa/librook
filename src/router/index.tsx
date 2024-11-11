import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import AuthRoutes from "./auth.routes";
import { ErrorPage, NotFoundPage } from "@/pages";
import { AppLayout, MainLayout } from "@/layouts";
import ProtectedRoutes from "./protected.routes";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AppLayout />} errorElement={<ErrorPage />}>
      {AuthRoutes}
      <Route element={<MainLayout />}>{ProtectedRoutes}</Route>
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

export default router;
