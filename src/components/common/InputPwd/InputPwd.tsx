import { useState } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  IconButton,
  InputAdornment,
  TextField,
  TextFieldProps,
} from "@mui/material";

interface IProps {
  register?: UseFormRegisterReturn;
}

export const InputPwd = (props: Omit<TextFieldProps, "type"> & IProps) => {
  const { register, ...restProps } = props;
  const [isShow, setIsShow] = useState(false);

  const toggleShowPwd = (currentValue: boolean) => {
    setIsShow(!currentValue);
  };
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  const handleMouseUpPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <TextField
      {...register}
      label="Password"
      type={isShow ? "text" : "password"}
      slotProps={{
        input: {
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label={
                  isShow ? "Hide the password" : "Display the password"
                }
                onClick={() => toggleShowPwd(isShow)}
                onMouseDown={handleMouseDownPassword}
                onMouseUp={handleMouseUpPassword}
              >
                {isShow ? (
                  <VisibilityOff fontSize="small" />
                ) : (
                  <Visibility fontSize="small" />
                )}
              </IconButton>
            </InputAdornment>
          ),
        },
      }}
      {...restProps}
    />
  );
};
