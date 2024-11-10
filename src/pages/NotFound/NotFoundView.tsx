import { Box, Stack, Typography } from "@mui/material";
import { useStyles } from "./NotFoundStyles";
import "./not-found.scss";

const NotFoundView = () => {
  const { classes: styles } = useStyles();

  return (
    <Box className={styles.container}>
      <Box className="header">
        <Stack
          alignItems="center"
          justifyContent="center"
          className={styles.contentWrapper}
        >
          <Typography variant="h5" component="h1" className={styles.title}>
            Error <code>404</code> Page
          </Typography>
          <Box className={styles.description}>
            <Typography component="p">
              The page you are looking for cannot be found.
            </Typography>
            <Typography component="p">
              It might have been removed, renamed, temporarily unavailable, or
              possibly never existed.
            </Typography>
          </Box>
        </Stack>
        <Box>
          <svg
            className={styles.wavesWrapper}
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
            shapeRendering="auto"
          >
            <defs>
              <path
                id="gentle-wave"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              />
            </defs>
            <g className="parallax">
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="0"
                fill="rgba(255,255,255,0.7"
              />
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="3"
                fill="rgba(255,255,255,0.5)"
              />
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="5"
                fill="rgba(255,255,255,0.3)"
              />
              <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
            </g>
          </svg>
        </Box>
      </Box>
      <Stack
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        className={styles.footerContent}
      >
        <Typography className="link">Go to homepage</Typography>
      </Stack>
    </Box>
  );
};

export default NotFoundView;
