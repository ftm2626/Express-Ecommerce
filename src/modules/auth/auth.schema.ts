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
