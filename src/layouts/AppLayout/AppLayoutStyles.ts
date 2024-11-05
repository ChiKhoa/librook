import { tss } from "tss-react/mui";

export const useAppStyles = tss.create(() => {
  return {
    appLayout: {
      width: "100vw",
      height: "100vh",
      overflow: "auto",
    },
  };
});
