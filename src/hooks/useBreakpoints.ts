import { useMediaQuery, useTheme } from "@mui/material";
import { IBreakpoints } from "@/types/HooksType";

/**
 * @returns
 * - `isMobile`: [0px - 600px)
 * - `isTablet`: [600px - 900px)
 * - `isSmallDesktop`: [900px - 1200px)
 * - `isDesktop`: [1200px - 1536px)
 * - `isBigDesktop`: [1536px - infinity)
 */
export const useBreakpoints = (): IBreakpoints => {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.only("xs"));
  const isTablet = useMediaQuery(theme.breakpoints.only("sm"));
  const isSmallDesktop = useMediaQuery(theme.breakpoints.only("md"));
  const isDesktop = useMediaQuery(theme.breakpoints.only("lg"));
  const isBigDesktop = useMediaQuery(theme.breakpoints.only("xl"));

  return {
    isMobile,
    isTablet,
    isSmallDesktop,
    isDesktop,
    isBigDesktop,
  };
};
