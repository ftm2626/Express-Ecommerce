import { NextFunction, Request, Response } from "express";
import { showAllProductsQuery, showOneProductQuery } from "./producst.services";
import { StatusCodes } from "http-status-codes";
import { successMsg, userMsg } from "../../utils/responseMsg";

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

export const getOneProductsController = async (
  req: Request<{ id: number }, {}, {}>,
  res: Response,
  next: NextFunction
) => {
  try {
    const [data] = await showOneProductQuery(req.params.id);
    if (data.length === 0) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ status: StatusCodes.BAD_REQUEST, message: userMsg.noUser });
    }
    return res
      .status(StatusCodes.OK)
      .json({ status: StatusCodes.OK, message: successMsg, data });
  } catch (error) {
    next(error);
  }
};
