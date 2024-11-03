import { tss } from "tss-react/mui";

export const useAuthStyles = tss
  .withParams<{ isFocus?: boolean; isSmallSize?: boolean }>()
  .create(({ theme, isFocus, isSmallSize }) => {
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
        backgroundImage:
          "url(https://media.cntraveler.com/photos/5ab2dd37feb48e79b76f65fd/16:9/w_2580,c_limit/Stuttgart-City-Library-GettyImages-458074285.jpg)",
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
        width: isSmallSize ? "60px" : "72px",
        aspectRatio: "1/1",
        borderRadius: isSmallSize ? "20%" : "25%",
      },
      link: {
        fontSize: isSmallSize ? "11px" : theme.typography.caption.fontSize,
        fontWeight: "700",
        textDecoration: "none",
        textTransform: "uppercase",
        color: theme.palette.grey[500],
      },
    };
  });
