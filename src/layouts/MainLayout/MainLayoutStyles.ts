import stylesVariables from "@/configs/styles-variables.config";
import { tss } from "tss-react/mui";

export const useStyles = tss.create({
  container: {
    marginTop: stylesVariables.topBarHeight + "px",
  },
  contentWrapper: {
    padding: "16px 0",
    backgroundColor: "#f1f1f1",
  },
});
