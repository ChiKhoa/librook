import { Outlet } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import ThemeProvider from "@/providers/theme-provider";
import { useAppStyles } from "./AppLayoutStyles";

export const AppLayoutView = () => {
  const { classes: styles } = useAppStyles();

  return (
    <div className={styles.appLayout}>
      <CssBaseline />
      <ThemeProvider>
        <Outlet />
      </ThemeProvider>
    </div>
  );
};
