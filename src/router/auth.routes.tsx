import { Route } from "react-router-dom";
import { AuthLayout } from "@/layouts";
import { SignInPage, SignUpPage } from "@/pages";

const AuthRoutes = (
  <Route path="auth" element={<AuthLayout />}>
    <Route path="sign-in" element={<SignInPage />} />
    <Route path="sign-up" element={<SignUpPage />} />
  </Route>
);

export default AuthRoutes;
