import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import AuthRoutes from "./auth.routes";
import { ErrorPage, NotFoundPage } from "@/pages";
import { AppLayout } from "@/layouts";
import ProtectedRoutes from "./protected.routes";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AppLayout />} errorElement={<ErrorPage />}>
      {AuthRoutes}
      {ProtectedRoutes}
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

export default router;
