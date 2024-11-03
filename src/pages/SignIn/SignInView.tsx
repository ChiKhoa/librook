import {
  Button,
  Checkbox,
  FormControlLabel,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { useAuthDispatch } from "@/layouts/AuthLayout/auth-store";
import { blur, focus } from "@/layouts/AuthLayout/focused-slice";
import { InputPassword } from "@/components/common/InputPwd/InputPwd";
import LoginIcon from "@mui/icons-material/Login";
import { useAuthStyles } from "@/layouts/AuthLayout/AuthLayoutStyles";
import { useBreakpoints } from "@/hooks/useBreakpoints";

export default function SignInView() {
  const { isMobile, isTablet } = useBreakpoints();
  const isSmallSize = isMobile || isTablet;

  const { classes: styles } = useAuthStyles({ isSmallSize });
  const dispatch = useAuthDispatch();

  const size = isSmallSize ? "small" : "medium";

  return (
    <Stack justifyContent="space-between" gap={4} className={styles.authPage}>
      <Stack gap={2}>
        <Typography variant="h6" component="h6" fontWeight="700" align="center">
          Sign in
        </Typography>
        <Stack gap={4}>
          <Stack gap={2}>
            <TextField
              name="username"
              size={size}
              label="Username or email address"
              onFocus={() => dispatch(focus())}
              onBlur={() => dispatch(blur())}
            />
            <InputPassword
              name="password"
              size={size}
              onFocus={() => dispatch(focus())}
              onBlur={() => dispatch(blur())}
            />
            <div>
              <FormControlLabel
                name="rememberMe"
                control={<Checkbox size={size} />}
                label={
                  <Typography fontSize={"14px"}>Stay signed in</Typography>
                }
              ></FormControlLabel>
            </div>
          </Stack>
          <Tooltip
            describeChild
            title="Sign in"
            arrow
            enterDelay={500}
            leaveDelay={200}
          >
            <Button
              variant="contained"
              className={styles.mainBtn}
              aria-label="Sign in"
            >
              <LoginIcon />
            </Button>
          </Tooltip>
        </Stack>
      </Stack>
      <Stack alignItems="center">
        <Typography variant="caption" className={styles.link}>
          Forgot password?
        </Typography>
        <Typography variant="caption" className={styles.link}>
          Create account?
        </Typography>
      </Stack>
    </Stack>
  );
}
