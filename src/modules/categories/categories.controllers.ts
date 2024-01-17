import { NextFunction, Request, Response } from "express";
import {
  showAllCategoriesQuery,
  showOneCategoryQuery,
} from "./categories.services";
import { StatusCodes } from "http-status-codes";
import { successMsg, userMsg } from "../../utils/responseMsg";

export const getAllCategoriesController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = await showAllCategoriesQuery();
    const cats = data.map((row) => ({
      id: row.category_id,
      name: row.category_name,
      subCategories: data
        .filter((subRow) => subRow.category_id === row.subcategory_id)
        .map((sub) => ({
          id: sub.subcategory_id,
          name: sub.subcategory_name,
        })),
    }));
    return res
      .status(StatusCodes.OK)
      .json({ status: StatusCodes.OK, message: successMsg, data:cats });
  } catch (error) {
    next(error);
  }
};

export const getOneCategorysController = async (
  req: Request<{ id: number }, {}, {}>,
  res: Response,
  next: NextFunction
) => {
  try {
    const [data] = await showOneCategoryQuery(req.params.id);
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
