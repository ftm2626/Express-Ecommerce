import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { tokenMsg, unauthMsg } from "../utils/responseMsg";
import jwt from "jsonwebtoken";

export const authenticationMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers?.authorization || req?.cookies?.accessToken || "";
  if (!token) {
    return res
      .status(StatusCodes.NOT_FOUND)
      .json({ status: StatusCodes.NOT_FOUND, message: tokenMsg });
  }
  jwt.verify(token.replace(/^Bearer\s/, ""), "jasi", (err: any, decoded: any) => {
    if (err) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ status: StatusCodes.NOT_FOUND, message: unauthMsg });
    }
    req.body.userId = (decoded as any).userId;
    next();
  });
};
