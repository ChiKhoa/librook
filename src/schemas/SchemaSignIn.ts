import * as yup from "yup";
import { TSignIn } from "@/types/FormsType";

export const schemaSignIn: yup.ObjectSchema<TSignIn> = yup.object({
  userNameOrEmail: yup.string().required().label("Username or email"),
  passWord: yup.string().required().label("Password"),
  rememberMe: yup.boolean().required(),
});
