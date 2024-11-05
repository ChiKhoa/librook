enum EPathPrefix {
  AUTH = "/auth",
}

export const authRoutes = {
  signIn: {
    name: "Sign in",
    path: `${EPathPrefix.AUTH}/sign-in`,
  },
  signUp: {
    name: "Sign up",
    path: `${EPathPrefix.AUTH}/sign-up`,
  },
};

export const protectedRoutes = {
  dashboard: {
    name: "Dashboard",
    path: `/dashboard`,
  },
};
