enum EPathPrefix {
  AUTH = "/auth",
}

export const routesAuth = {
  signIn: {
    name: "Sign in",
    path: `${EPathPrefix.AUTH}/sign-in`,
  },
  signUp: {
    name: "Sign up",
    path: `${EPathPrefix.AUTH}/sign-up`,
  },
};

export const routesProtected = {
  dashboard: {
    name: "Dashboard",
    path: `/dashboard`,
  },
};
