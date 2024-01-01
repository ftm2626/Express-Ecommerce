import { z } from "zod";

export const registerUserSchema = z.object({
  username: z.string({ required_error: "لطفا نام کاربری را وارد کنید!" }),
  password: z.string({ required_error: "لطفا رمز عبور را وارد کنید" }),
});
