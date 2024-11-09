import { SubmitHandler, useForm } from "react-hook-form";
import { TSignIn } from "@/types/FormsType";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Button,
  Checkbox,
  FormControlLabel,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import { useBreakpoints } from "@/hooks/useBreakpoints";
import { useRootDispatch } from "@/store";
import { blur, focus } from "@/store/slices/AuthSlice";
import { InputPwd } from "@/components/common/InputPwd/InputPwd";
import { useAuthStyles } from "@/layouts/AuthLayout/AuthLayoutStyles";
import { schemaSignIn } from "@/schemas/SchemaSignIn";
import { Link, useNavigate } from "react-router-dom";
import { routesAuth, routesProtected } from "@/configs/routes.config";
import { setUserInfor } from "@/store/slices/UserInforSlice";
import { hardUserInfor } from "@/utils/data/mock-up";

export default function SignInView() {
  const navigate = useNavigate();
  const {
    responsive: { isMobile, isTablet },
  } = useBreakpoints();
  const isSmallSize = isMobile || isTablet;

  const { classes: styles } = useAuthStyles({ isSmallSize });
  const dispatch = useRootDispatch();

  const size = isSmallSize ? "small" : "medium";
  const mainBtnContent = isSmallSize ? "Sign in" : <LoginIcon />;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TSignIn>({
    resolver: yupResolver(schemaSignIn),
    defaultValues: {
      userNameOrEmail: "123456",
      passWord: "password",
    },
  });

  const onSubmit: SubmitHandler<TSignIn> = () => {
    dispatch(setUserInfor(hardUserInfor));
    navigate(routesProtected.dashboard.path);
  };

  return (
    <Stack justifyContent="space-between" gap={4} className={styles.authPage}>
      <Stack gap={2}>
        <Typography variant="h6" component="h6" fontWeight="700" align="center">
          Sign in
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack gap={4}>
            <Stack gap={2}>
              <TextField
                {...register("userNameOrEmail")}
                size={size}
                label="Username or email address"
                onFocus={() => dispatch(focus())}
                onBlur={() => dispatch(blur())}
                error={Boolean(errors.userNameOrEmail)}
                helperText={errors.userNameOrEmail?.message}
              />
              <InputPwd
                register={register("passWord")}
                size={size}
                onFocus={() => dispatch(focus())}
                onBlur={() => dispatch(blur())}
                error={Boolean(errors.passWord)}
                helperText={errors.passWord?.message}
              />
              <div>
                <FormControlLabel
                  {...register("rememberMe")}
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
                type="submit"
                variant="contained"
                className={styles.mainBtn}
                aria-label="Sign in"
              >
                {mainBtnContent}
              </Button>
            </Tooltip>
          </Stack>
        </form>
      </Stack>
      <Stack alignItems="center">
        <Typography variant="caption" className={styles.link}>
          Forgot passWord?
        </Typography>
        <Typography variant="caption" className={styles.link}>
          <Link to={routesAuth.signUp.path}>Create account?</Link>
        </Typography>
      </Stack>
    </Stack>
  );
}
