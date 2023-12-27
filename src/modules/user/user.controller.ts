import { NextFunction, Request, Response } from "express";
import { createUserService } from "./user.services";
import { StatusCodes } from "http-status-codes";
import { createdMsg } from "../../utils/responseMsg";
import { userInputT, validateUser } from "./user.schema";
import bcrypt from "bcrypt";

export const createUser = async (
  req: Request<{}, {}, userInputT>,
  res: Response,
  next: NextFunction
) => {
  try {
    validateUser(req.body);
    const { last_name, first_name, email, password } = req.body;
    const hashedPwd = await bcrypt.hash(password, 10);
    await createUserService({
      first_name,
      last_name,
      email,
      password: hashedPwd,
    });
    return res
      .status(StatusCodes.OK)
      .json({ status: StatusCodes.CREATED, msg: createdMsg });
  } catch (error) {
    next(error);
  }
};
