import { StatusCodes } from "http-status-codes";
import { Request, Response, NextFunction } from "express";
import { ValidationError } from "../utils/validation";

export const errorHandlerMiddelware = (
  err: Error | ValidationError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof ValidationError) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      status: StatusCodes.BAD_REQUEST,
      errors: err.details.errors,
    });
  }

  console.error(err);
  res.status(500).json({ error: "Internal Server Error" });
};