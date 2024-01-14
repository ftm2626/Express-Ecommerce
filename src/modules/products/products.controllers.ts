import { NextFunction, Request, Response } from "express";
import { showAllProductsQuery } from "./producst.services";
import { StatusCodes } from "http-status-codes";
import { successMsg } from "../../utils/responseMsg";

export const getAllProductsController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = await showAllProductsQuery();
    return res
      .status(StatusCodes.OK)
      .json({ status: StatusCodes.OK, message: successMsg, data });
  } catch (error) {
    next(error);
  }
};
