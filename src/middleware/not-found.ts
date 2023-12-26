import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { notFoundMsg } from "../utils/responseMsg";

export const notFoundMiddleware = (req: Request, res: Response) => {
  res
    .status(StatusCodes.NOT_FOUND)
    .json({ status: StatusCodes.NOT_FOUND, message: notFoundMsg });
};
