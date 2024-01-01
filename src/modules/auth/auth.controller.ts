import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import {
  authMsg,
  createdMsg,
  loginMsg,
  successMsg,
  userMsg,
} from "../../utils/responseMsg";
import {
  loginInputT,
  registerInputT,
  validateLogin,
  validateRegister,
} from "./auth.schema";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import {
  createCustomerService,
  getOneCustomerService,
} from "../customers/customers.services";
import { findOneRoleService } from "../roles/roles.services";
import { addUserService, findOneUserService } from "../users/users.services";
import { createAdminService } from "../admins/admins.services";

export const loginController = async (
  req: Request<{}, {}, loginInputT>,
  res: Response,
  next: NextFunction
) => {
  try {
    validateLogin(req.body);
    const { email, password } = req.body;
    const data = await getOneCustomerService(email);
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
      { userId: data[0].customer_id, email: data[0].email },
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

export const registerController = async (
  req: Request<{}, {}, registerInputT>,
  res: Response,
  next: NextFunction
) => {
  try {
    validateRegister(req.body);
    const { role, username, password, first_name, last_name, email } = req.body;
    const roleQuery = await findOneRoleService(role);
    if (roleQuery.length === 0) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ status: StatusCodes.BAD_REQUEST, message: authMsg.noRole });
    }
    const usernameQuery = await findOneUserService(username);
    if (usernameQuery.length > 0) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ status: StatusCodes.BAD_REQUEST, message: userMsg.exists });
    }
    const roleId = roleQuery[0].role_id;
    const hashedPwd = await bcrypt.hash(password, 10);
    const addUserQuery = await addUserService({
      userId: roleId,
      username,
      password: hashedPwd,
    });
    const userId = addUserQuery.insertId;
    const detailsTable =
      role === "Admin"
        ? await createAdminService({
            userId: userId,
            first_name,
            last_name,
            email,
          })
        : await createCustomerService({
            userId: userId,
            first_name,
            last_name,
            email,
          });
    return res
      .status(StatusCodes.CREATED)
      .json({ status: StatusCodes.CREATED, message: createdMsg });
  } catch (error) {
    next(error);
  }
};
