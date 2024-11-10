import { tss } from "tss-react/mui";

export const useStyles = tss.create({
  container: {
    width: "100vw",
    height: "100vh",
  },
  contentWrapper: {
    width: "50vw",
    minWidth: "360px",
    height: "65vh",
    margin: "0 auto",
    color: "white",
    textAlign: "center",
  },
  title: {
    padding: "24px 0",
    fontWeight: "500",
    textTransform: "uppercase",
    ["& > code"]: {
      padding: "0 16px",
      fontSize: "48px",
      fontWeight: "700",
      letterSpacing: "4px",
    },
  },
  description: {
    ["& > p"]: {
      fontWeight: "300",
    },
  },
  wavesWrapper: {
    width: "100%",
    height: "15vh",
    minHeight: "100px",
    maxHeight: "150px",
    marginBottom: "-7px" /*Fix for safari/chrome gap*/,
  },
  footerContent: {
    height: "20vh",
    ["& > .link"]: {
      padding: "8px 16px",
      color: "#8e2de2",
      fontWeight: "500",
      textTransform: "uppercase",
      ["&:hover"]: {
        textDecoration: "underline",
        cursor: "pointer",
      },
    },
  },
});
