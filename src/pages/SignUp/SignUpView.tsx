import { SubmitHandler, useForm } from "react-hook-form";
import { Button, Stack, TextField, Tooltip, Typography } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import { TSignUp } from "@/types/FormsType";
import { useBreakpoints } from "@/hooks/useBreakpoints";
import { useRootDispatch } from "@/store";
import { blur, focus } from "@/store/slices/AuthSlice";
import { useAuthStyles } from "@/layouts/AuthLayout/AuthLayoutStyles";
import { InputPwd } from "@/components/common/InputPwd/InputPwd";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaSignUp } from "@/schemas/SchemaSignUp";
import { Link } from "react-router-dom";
import { routesAuth } from "@/configs/routes.config";

export default function SignUpView() {
  const { isMobile, isTablet } = useBreakpoints();
  const isSmallSize = isMobile || isTablet;

  const { classes: styles } = useAuthStyles({ isSmallSize });
  const dispatch = useRootDispatch();

  const size = isSmallSize ? "small" : "medium";
  const mainBtnContent = isSmallSize ? "Sign up" : <ArrowForward />;

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<TSignUp>({
    resolver: yupResolver(schemaSignUp),
  });

  const onSubmit: SubmitHandler<TSignUp> = (data) => {
    if (data.passWord !== data.confirmPassWord) {
      setError(
        "confirmPassWord",
        {
          message: "Confirm password does not match",
          type: "disabled",
        },
        {
          shouldFocus: true,
        }
      );
    } else {
      console.log("NO ERROR");
    }
  };

  return (
    <Stack justifyContent="space-between" gap={4} className={styles.authPage}>
      <Stack gap={2}>
        <Typography variant="h6" component="h6" fontWeight="700" align="center">
          Sign up
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack gap={4}>
            <Stack gap={2}>
              <TextField
                {...register("userName")}
                label="Username"
                size={size}
                onFocus={() => dispatch(focus())}
                onBlur={() => dispatch(blur())}
                error={Boolean(errors.userName)}
                helperText={errors.userName?.message}
              />
              <TextField
                {...register("email")}
                label="Email address"
                size={size}
                onFocus={() => dispatch(focus())}
                onBlur={() => dispatch(blur())}
                error={Boolean(errors.email)}
                helperText={errors.email?.message}
              />
              <InputPwd
                register={register("passWord")}
                size={size}
                onFocus={() => dispatch(focus())}
                onBlur={() => dispatch(blur())}
                error={Boolean(errors.passWord)}
                helperText={errors.passWord?.message}
              />
              <InputPwd
                register={register("confirmPassWord")}
                label="Confirm password"
                size={size}
                onFocus={() => dispatch(focus())}
                onBlur={() => dispatch(blur())}
                error={Boolean(errors.confirmPassWord)}
                helperText={errors.confirmPassWord?.message}
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
                type="submit"
                variant="contained"
                className={styles.mainBtn}
                aria-label="Sign up"
              >
                {mainBtnContent}
              </Button>
            </Tooltip>
          </Stack>
        </form>
      </Stack>
      <Stack alignItems="center">
        <Typography variant="caption" className={styles.link}>
          <Link to={routesAuth.signIn.path}>Already have an account?</Link>
        </Typography>
      </Stack>
    </Stack>
  );
}
