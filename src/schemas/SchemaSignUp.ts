import * as yup from "yup";
import { TSignUp } from "@/types/FormsType";
import validate from "@/configs/fields.config";

export const schemaSignUp: yup.ObjectSchema<TSignUp> = yup.object({
  userName: yup
    .string()
    .required()
    .min(validate.authForm.userName.minLength)
    .max(validate.authForm.userName.maxLength)
    .label("Username"),
  email: yup
    .string()
    .required()
    .email()
    .min(validate.authForm.email.minLength)
    .max(validate.authForm.email.maxLength)
    .label("Email"),
  passWord: yup
    .string()
    .required()
    .min(validate.authForm.pwd.minLength)
    .max(validate.authForm.pwd.maxLength)
    .label("Password"),
  confirmPassWord: yup
    .string()
    .required()
    .min(validate.authForm.pwd.minLength)
    .max(validate.authForm.pwd.maxLength)
    .label("Confirm password"),
});
