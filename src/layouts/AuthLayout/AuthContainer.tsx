import { Provider as ReduxProvider } from "react-redux";
import AuthView from "./AuthView";
import authStore from "./auth-store";

export default function AuthContainer() {
  return (
    <ReduxProvider store={authStore}>
      <AuthView />
    </ReduxProvider>
  );
}
