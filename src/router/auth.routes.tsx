import { Route } from "react-router-dom";
import { AuthLayout } from "@/layouts";
import { SignInPage, SignUpPage } from "@/pages";
import { authRoutes } from "@/configs/routes.config";

const AuthRoutes = (
  <Route element={<AuthLayout />}>
    <Route path={authRoutes.signIn.path} element={<SignInPage />} />
    <Route path={authRoutes.signUp.path} element={<SignUpPage />} />
  </Route>
);

export default AuthRoutes;
