export type TSignIn = {
  userNameOrEmail: string;
  passWord: string;
  rememberMe: boolean;
};

export type TSignUp = {
  userName: string;
  email: string;
  passWord: string;
  confirmPassWord: string;
};
