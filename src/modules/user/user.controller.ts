import { NextFunction, Request, Response } from "express";
import { createUserService } from "./user.services";
import { StatusCodes } from "http-status-codes";
import { createdMsg } from "../../utils/responseMsg";
import { userInputT, validateUser } from "./user.schema";

export const createUser = async (
  req: Request<{}, {}, userInputT>,
  res: Response,
  next:NextFunction
) => {
  try {
    validateUser(req.body)
    await createUserService({ ...req.body });
    return res
      .status(StatusCodes.OK)
      .json({ status: StatusCodes.CREATED, msg: createdMsg });
    
  } catch (error) {
    next(error)
  }
};
