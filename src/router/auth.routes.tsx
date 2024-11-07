import { Route } from "react-router-dom";
import { AuthLayout } from "@/layouts";
import { SignInPage, SignUpPage } from "@/pages";
import { routesAuth } from "@/configs/routes.config";

const AuthRoutes = (
  <Route element={<AuthLayout />}>
    <Route path={routesAuth.signIn.path} element={<SignInPage />} />
    <Route path={routesAuth.signUp.path} element={<SignUpPage />} />
  </Route>
);

export default AuthRoutes;
