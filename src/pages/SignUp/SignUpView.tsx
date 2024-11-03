import { InputPassword } from "@/components/common/InputPwd/InputPwd";
import { Button, Stack, TextField, Tooltip, Typography } from "@mui/material";
import { useAuthDispatch } from "@/layouts/AuthLayout/auth-store";
import { blur, focus } from "@/layouts/AuthLayout/focused-slice";
import { useAuthStyles } from "@/layouts/AuthLayout/AuthLayoutStyles";
import { ArrowForward } from "@mui/icons-material";
import { useBreakpoints } from "@/hooks/useBreakpoints";

export default function SignUpView() {
  const { isMobile, isTablet } = useBreakpoints();
  const isSmallSize = isMobile || isTablet;

  const { classes: styles } = useAuthStyles({ isSmallSize });
  const dispatch = useAuthDispatch();

  const size = isSmallSize ? "small" : "medium";

  return (
    <Stack justifyContent="space-between" gap={4} className={styles.authPage}>
      <Stack gap={2}>
        <Typography variant="h6" component="h6" fontWeight="700" align="center">
          Sign up
        </Typography>
        <Stack gap={4}>
          <Stack gap={2}>
            <TextField
              name="username"
              label="Username"
              size={size}
              onFocus={() => dispatch(focus())}
              onBlur={() => dispatch(blur())}
            />
            <TextField
              name="email"
              label="Email address"
              size={size}
              onFocus={() => dispatch(focus())}
              onBlur={() => dispatch(blur())}
            />
            <InputPassword
              name="pwd"
              size={size}
              onFocus={() => dispatch(focus())}
              onBlur={() => dispatch(blur())}
            />
            <InputPassword
              name="confirmPwd"
              size={size}
              label="Confirm password"
              onFocus={() => dispatch(focus())}
              onBlur={() => dispatch(blur())}
            />
          </Stack>
          <Tooltip
            describeChild
            title="Sign up"
            arrow
            enterDelay={500}
            leaveDelay={200}
          >
            <Button
              variant="contained"
              className={styles.mainBtn}
              aria-label="Sign up"
            >
              <ArrowForward />
            </Button>
          </Tooltip>
        </Stack>
      </Stack>
      <Stack alignItems="center">
        <Typography variant="caption" className={styles.link}>
          Already have an account?
        </Typography>
      </Stack>
    </Stack>
  );
}
