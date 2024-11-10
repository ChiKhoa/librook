import { AppBar, Avatar, Typography } from "@mui/material";
import { useStyles } from "./TopBarStyles";

export const TopBar = () => {
  const { classes: styles } = useStyles();

  return (
    <AppBar className={styles.container}>
      <Typography
        variant={"h5"}
        component="h1"
        fontFamily="fantasy"
        align="center"
      >
        Librook
      </Typography>
      <Avatar>A</Avatar>
    </AppBar>
  );
};
