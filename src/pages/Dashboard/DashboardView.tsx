import { Stack } from "@mui/material";
import { useStyles } from "./DashboardStyles";

export const DashboadView = () => {
  const { classes: styles } = useStyles();

  return (
    <div className={styles.container}>
      <Stack>DASHBOARD</Stack>
    </div>
  );
};
