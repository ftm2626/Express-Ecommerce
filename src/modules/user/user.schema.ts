import { z } from "zod";
import { validateData } from "../../utils/validation";

export const userSchema = z.object({
  first_name: z.string({ required_error: "لطفا اسم را وارد کنید!" }),
  last_name: z.string({ required_error: "لطفا اسم را وارد کنید!" }),
  email: z
    .string({ required_error: "لطفا ایمیل را وارد کنید!" })
    .email("فرمت ایمیل را درست وارد کنید!"),
  password: z.string({ required_error: "لطفا رمز عبور را وارد کنید." }),
});

export type userInputT = z.infer<typeof userSchema>;

export const validateUser = (data: unknown): userInputT => {
  return validateData(userSchema, data);
};

export const updateUserSchema = z.object({
  first_name: z.string({ required_error: "لطفا اسم را وارد کنید!" }),
  last_name: z.string({ required_error: "لطفا اسم را وارد کنید!" }),
  email: z
    .string({ required_error: "لطفا ایمیل را وارد کنید!" })
    .email("فرمت ایمیل را درست وارد کنید!"),
});

export type updateUserInputT = z.infer<typeof updateUserSchema>;

export const validateUpdateUser = (data: unknown): updateUserInputT => {
  return validateData(updateUserSchema, data);
};
