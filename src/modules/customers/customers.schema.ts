import { z } from "zod";
import { validateData } from "../../utils/validation";

export const customerSchema = z.object({
  first_name: z.string({ required_error: "لطفا اسم را وارد کنید!" }),
  last_name: z.string({ required_error: "لطفا اسم را وارد کنید!" }),
  email: z
    .string({ required_error: "لطفا ایمیل را وارد کنید!" })
    .email("فرمت ایمیل را درست وارد کنید!"),
  password: z.string({ required_error: "لطفا رمز عبور را وارد کنید." }),
});

export type customerInputT = z.infer<typeof customerSchema>;

export const validateCustomer = (data: unknown): customerInputT => {
  return validateData(customerSchema, data);
};

export const updateCustomerSchema = z.object({
  first_name: z.string({ required_error: "لطفا اسم را وارد کنید!" }),
  last_name: z.string({ required_error: "لطفا اسم را وارد کنید!" }),
  email: z
    .string({ required_error: "لطفا ایمیل را وارد کنید!" })
    .email("فرمت ایمیل را درست وارد کنید!"),
});

export type updateCustomerInputT = z.infer<typeof updateCustomerSchema>;

export const validateUpdateCustomer = (data: unknown): updateCustomerInputT => {
  return validateData(updateCustomerSchema, data);
};
