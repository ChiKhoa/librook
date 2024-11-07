import { tss } from "tss-react/mui";
import { IBreakpoints } from "@/types/hooks";
import { CSSObject } from "tss-react";

export const useStyles = tss
  .withParams<Pick<IBreakpoints, "isMobile" | "isTablet">>()
  .create(({ isMobile, isTablet }) => {
    const css: CSSObject =
      isMobile || isTablet
        ? {
            maxWidth: "380px",
            width: "100vw",
            top: "50%",
            left: "50%",
            borderRadius: "8px",
            boxShadow:
              "0px 6px 6px -3px rgba(0, 0, 0, 0.2), 0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12)",
            transform: "translateX(-50%) translateY(-50%)",
            zIndex: "1",
          }
        : {
            width: "400px",
            top: "0",
            bottom: "0",
            left: "0",
          };

    return {
      container: {
        position: "fixed",
        background: "white",
        overflow: "hidden",
        zIndex: "1",
        padding: "24px",
        ...css,
      },
    };
  });
