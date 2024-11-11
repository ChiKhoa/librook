import { useSelector } from "react-redux";
import { ProtectedLayoutView } from "./ProtectedLayoutView";
import { RootState } from "@/store";

export default function ProtectedLayoutContainer() {
  const { userInfor } = useSelector((state: RootState) => state.userInfor);
  const isAuthenticated = Boolean(userInfor);

  return <ProtectedLayoutView isAuthenticated={isAuthenticated} />;
}
