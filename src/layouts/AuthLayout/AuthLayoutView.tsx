import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { Box, Stack, Typography } from "@mui/material";
import { useBreakpoints } from "@/hooks/useBreakpoints";
import { RootState } from "@/store";
import { DynamicBox } from "@/components/auth/DynamicBox/DynamicBox";
import { useAuthStyles } from "./AuthLayoutStyles";
import "./auth-layout.scss";

export default function AuthLayoutView() {
  const isFocus = useSelector((state: RootState) => state.authLayout.isFocus);
  const {
    responsive: { isMobile, isTablet },
  } = useBreakpoints();

  const { classes: styles, cx } = useAuthStyles({ isFocus });

  return (
    <Stack direction="row" className={styles.authLayout}>
      <DynamicBox>
        <Typography
          variant={isMobile || isTablet ? "h4" : "h3"}
          component="h1"
          fontFamily="fantasy"
          align="center"
          margin="16px 0"
        >
          Librook
        </Typography>
        <Outlet />
      </DynamicBox>
      <Box className={styles.background}>
        <Box className={cx("layer", styles.layer)} />
      </Box>
    </Stack>
  );
}
