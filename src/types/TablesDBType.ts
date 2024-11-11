export enum EUserRole {
  STAFF = "staff",
  ADMIN = "admin",
}

export type TTableUser = {
  userId: string;
  userName: string;
  email: string;
  role: EUserRole;
};
