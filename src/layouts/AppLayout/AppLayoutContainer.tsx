import { Provider as ReduxProvider } from "react-redux";
import { AppLayoutView } from "./AppLayoutView";
import store from "@/store";

export default function AppLayout() {
  return (
    <ReduxProvider store={store}>
      <AppLayoutView />
    </ReduxProvider>
  );
}
