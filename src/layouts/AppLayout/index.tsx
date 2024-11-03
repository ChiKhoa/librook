import { Outlet } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import "./app-layout.css";
import ThemeProvider from "@/providers/theme-provider";

export default function AppLayout() {
  return (
    <div className="app-layout">
      <CssBaseline />
      <ThemeProvider>
        <Outlet />
      </ThemeProvider>
    </div>
  );
}
