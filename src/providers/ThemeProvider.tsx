import { PropsWithChildren } from "react";
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles/";
import "@/assets/fonts/Poppins";

export default function ThemeProvider({ children }: PropsWithChildren) {
  const theme = createTheme({
    typography: {
      fontFamily: "Poppins, sans-serif",
    },
  });

  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
}
