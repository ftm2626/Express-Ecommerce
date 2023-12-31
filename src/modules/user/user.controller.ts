import { NextFunction, Request, Response } from "express";
import {
  createUserService,
  deleteOneUserService,
  getAllUsersService,
  getOneUserService,
  updateUserService,
} from "./user.services";
import { StatusCodes } from "http-status-codes";
import { createdMsg, successMsg, userMsg } from "../../utils/responseMsg";
import { updateUserInputT, userInputT, validateUser } from "./user.schema";
import bcrypt from "bcrypt";
import { findUserService } from "../auth/auth.services";

export const createUser = async (
  req: Request<{}, {}, userInputT>,
  res: Response,
  next: NextFunction
) => {
  try {
    validateUser(req.body);
    const { last_name, first_name, email, password } = req.body;
    const hashedPwd = await bcrypt.hash(password, 10);
    const user = await findUserService(email);
    if (user.length === 1) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ status: StatusCodes.CREATED, message: userMsg.exists });
    }
    await createUserService({
      first_name,
      last_name,
      email,
      password: hashedPwd,
    });
    return res
      .status(StatusCodes.CREATED)
      .json({ status: StatusCodes.CREATED, message: createdMsg });
  } catch (error) {
    next(error);
  }
};

export const getAllUsersController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = await getAllUsersService();
    return res
      .status(StatusCodes.OK)
      .json({ status: StatusCodes.OK, message: successMsg, data });
  } catch (error) {
    next(error);
  }
};

export const getOneUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = await getOneUserService(+req.params.id);
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

export const deleteOneUserController = async (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await findUserService(req.params.id);
    if (user.length === 0) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ status: StatusCodes.CREATED, message: userMsg.noUser });
    }
    await deleteOneUserService(+req.params.id);
    return res
      .status(StatusCodes.OK)
      .json({ status: StatusCodes.OK, message: successMsg });
  } catch (error) {
    next(error);
  }
};

export const updateUserController = async (
  req: Request<{ id: string }, {}, updateUserInputT>,
  res: Response,
  next: NextFunction
) => {
  try {
    validateUser(req.body);
    const { last_name, first_name, email } = req.body;
    const user = await findUserService(req.params.id);
    if (user.length === 0) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ status: StatusCodes.CREATED, message: userMsg.noUser });
    }
    await updateUserService(
      {
        first_name,
        last_name,
        email,
      },
      +req.params.id
    );
    return res
      .status(StatusCodes.CREATED)
      .json({ status: StatusCodes.CREATED, message: createdMsg });
  } catch (error) {
    next(error);
  }
};
