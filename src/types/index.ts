export interface IUser {
  _id?: string;
  email: string;
  username?: string;
  password?: string;
}
export interface IToast {
  text: string;
  type?: "success" | "error";
}
