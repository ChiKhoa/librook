import { useBreakpoints } from "@/hooks/useBreakpoints";
import { Stack } from "@mui/material";
import { useStyles } from "./DynamicBoxStyles";

interface IProps {
  children: React.ReactNode;
}

export const DynamicBox: React.FC<IProps> = ({ children }) => {
  const {
    responsive: { isMobile, isTablet },
  } = useBreakpoints();
  const { classes: styles } = useStyles({ isMobile, isTablet });

  return <Stack className={styles.container}>{children}</Stack>;
};
