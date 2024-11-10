import { Outlet } from "react-router-dom";
import { Container, Stack } from "@mui/material";
import { TopBar } from "@/components/layout/TopNav/TopBar";
import { useStyles } from "./MainLayoutStyles";

export const MainLayoutView = () => {
  const { classes: styles } = useStyles();

  return (
    <Stack className={styles.container}>
      <TopBar />
      <Container className={styles.contentWrapper}>
        <Outlet />
      </Container>
    </Stack>
  );
};
