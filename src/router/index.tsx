import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import AuthRoutes from "./auth.routes";
import { ErrorPage } from "@/pages";
import { AppLayout } from "@/layouts";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />} errorElement={<ErrorPage />}>
      {AuthRoutes}
    </Route>
  )
);

export default router;
