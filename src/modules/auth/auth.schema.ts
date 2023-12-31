import { z } from "zod";
import { validateData } from "../../utils/validation";

export const loginSchema = z.object({
  email: z
    .string({ required_error: "لطفا ایمیل را وارد کنید!" })
    .email("فرمت ایمیل را درست وارد کنید!"),
  password: z.string({ required_error: "لطفا رمز عبور را وارد کنید." }),
});

export type loginInputT = z.infer<typeof loginSchema>;

export const validateLogin = (data: unknown): loginInputT => {
  return validateData(loginSchema, data);
};


export const registerSchema = z.object({
  role: z.string({ required_error: "لطفا نقش را وارد کنید." }),
  username: z.string({ required_error: "لطفا نام کاربری را وارد کنید." }),
  first_name: z.string({ required_error: "لطفا اسم را وارد کنید." }),
  last_name: z.string({ required_error: "لطفا فامیلی را وارد کنید." }),
  email: z
    .string({ required_error: "لطفا ایمیل را وارد کنید!" })
    .email("فرمت ایمیل را درست وارد کنید!"),
  password: z.string({ required_error: "لطفا رمز عبور را وارد کنید." }),
});

export type registerInputT = z.infer<typeof registerSchema>;

export const validateRegister = (data: unknown): registerInputT => {
  return validateData(registerSchema, data);
};
