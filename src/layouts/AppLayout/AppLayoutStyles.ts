import { tss } from "tss-react/mui";

export const useAppStyles = tss.create(() => {
  return {
    appLayout: {
      width: "100%",
      height: "100%",
    },
  };
});
