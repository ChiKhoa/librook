import { tss } from "tss-react/mui";
import bgImage from "@/assets/auth-bg.png";

export const useAuthStyles = tss
  .withParams<{ isFocus?: boolean; isSmallSize?: boolean }>()
  .create(({ theme, isFocus, isSmallSize }) => {
    const mainBtn = isSmallSize
      ? {
          width: "100%",
          aspectRatio: "auto",
          borderRadius: "4px",
        }
      : {
          width: "72px",
          aspectRatio: "1/1",
          borderRadius: "25%",
        };

    return {
      authLayout: {
        width: "100%",
        height: "100%",
      },
      layer: {
        backdropFilter: `blur(${isFocus ? 4 : 0}px)`,
      },
      background: {
        width: "100%",
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      },
      authPage: {
        flexGrow: "1",
      },
      mainBtn: {
        alignSelf: "center",
        minWidth: "60px",
        ...mainBtn,
      },
      link: {
        fontSize: isSmallSize ? "11px" : theme.typography.caption.fontSize,
        fontWeight: "700",
        textDecoration: "none",
        textTransform: "uppercase",
        color: `${theme.palette.grey[500]} !important`,
      },
    };
  });
