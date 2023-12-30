import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { loginMsg, successMsg } from "../../utils/responseMsg";
import { loginInputT, validateLogin } from "./auth.schema";
import { findUserService } from "./auth.services";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const loginController = async (
  req: Request<{}, {}, loginInputT>,
  res: Response,
  next: NextFunction
) => {
  try {
    validateLogin(req.body);
    const { email, password } = req.body;
    const data = await findUserService(email);
    if (data.length === 0) {
      return res.status(StatusCodes.UNAUTHORIZED).json({
        status: StatusCodes.UNAUTHORIZED,
        message: loginMsg.credentials,
      });
    }

    const passwordMatched = await bcrypt.compare(password, data[0].password);

    if (!passwordMatched) {
      return res.status(StatusCodes.UNAUTHORIZED).json({
        status: StatusCodes.UNAUTHORIZED,
        message: loginMsg.credentials,
      });
    }

    const token = jwt.sign(
      { userId: data[0].user_id, email: data[0].email },
      "jasi",
      { expiresIn: "30d" }
    );

    return res.status(StatusCodes.OK).json({
      status: StatusCodes.OK,
      message: successMsg,
      data: { token, data: data },
    });
  } catch (error) {
    next(error);
  }
};
