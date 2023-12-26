import { z, ZodError } from "zod";

export class ValidationError extends Error {
  constructor(public details: ZodError) {
    super("Validation Error");
    this.name = "ValidationError";
  }
}

export const validateData = <T>(
  schema: z.ZodType<T, any, any>,
  data: unknown
): T => {
  try {
    return schema.parse(data);
  } catch (error) {
    if (error instanceof ZodError) {
      throw new ValidationError(error);
    }
    throw error;
  }
};
