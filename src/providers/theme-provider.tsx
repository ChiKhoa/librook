import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles/";
import { PropsWithChildren } from "react";

export default function ThemeProvider({ children }: PropsWithChildren) {
  const theme = createTheme({
    typography: {
      fontFamily: "cursive",
    },
  });

  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
}
