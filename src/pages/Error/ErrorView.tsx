import { ErrorResponse, useRouteError } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";
import "./error.scss";

export default function ErrorView() {
  const error = useRouteError() as Error & ErrorResponse;

  return (
    <Stack
      width={"100vw"}
      height={"100vh"}
      alignItems={"center"}
      justifyContent={"center"}
      gap={4}
      className="background"
    >
      <Typography variant="h4" component={"h1"}>
        Oops!
      </Typography>
      <Stack alignItems={"center"} justifyContent={"center"} gap={2}>
        <Typography fontWeight={300}>
          Sorry, an unexpected error has occurred.
        </Typography>
        <Typography fontWeight={300}>
          Description: {error.statusText || error.message || "No description"}
        </Typography>
      </Stack>
      <Button variant="contained">Back to homepage</Button>
    </Stack>
  );
}
