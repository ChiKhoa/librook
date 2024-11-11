import stylesVariables from "@/configs/styles-variables.config";
import { tss } from "tss-react/mui";

export const useStyles = tss.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 24px",
    height: stylesVariables.topBarHeight + "px",
    color: "#000",
    backgroundColor: "#fff",
  },
});
