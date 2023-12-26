import { object, string } from "zod";

export const userSchema = {
  body: object({
    first_name: string({ required_error: "لطفا اسم را وارد کنید!" }),
    last_name: string({ required_error: "لطفا اسم را وارد کنید!" }),
    email: string({ required_error: "لطفا ایمیل را وارد کنید!" }).email(
      "فرمت ایمیل را درست وارد کنید!"
    ),
    password:string({required_error:"لطفا رمز عبور را وارد کنید."})
  }),
};