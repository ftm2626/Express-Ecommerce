import { NextFunction, Request, Response } from "express";
import {
  deleteOneCustomerService,
  getAllCustomersService,
  getOneCustomerService,
  updateCustomerService,
} from "./customers.services";
import { StatusCodes } from "http-status-codes";
import { createdMsg, successMsg, userMsg } from "../../utils/responseMsg";
import {
  updateCustomerInputT,
  validateUpdateCustomer,
} from "./customers.schema";


export const getAllCustomersController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = await getAllCustomersService();
    return res
      .status(StatusCodes.OK)
      .json({ status: StatusCodes.OK, message: successMsg, data });
  } catch (error) {
    next(error);
  }
};

export const getOneCustomerController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = await getOneCustomerService(+req.params.id);
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

export const deleteOneCustomerController = async (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
) => {
  try {
    const customer = await getOneCustomerService(req.params.id);
    if (customer.length === 0) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ status: StatusCodes.CREATED, message: userMsg.noUser });
    }
    await deleteOneCustomerService(+req.params.id);
    return res
      .status(StatusCodes.OK)
      .json({ status: StatusCodes.OK, message: successMsg });
  } catch (error) {
    next(error);
  }
};

export const updateCustomerController = async (
  req: Request<{ id: string }, {}, updateCustomerInputT>,
  res: Response,
  next: NextFunction
) => {
  try {
    validateUpdateCustomer(req.body);
    const { last_name, first_name, email } = req.body;
    const customer = await getOneCustomerService(req.params.id);
    if (customer.length === 0) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ status: StatusCodes.BAD_REQUEST, message: userMsg.noUser });
    }
    await updateCustomerService(
      {
        first_name,
        last_name,
        email,
      },
      +req.params.id
    );
    return res
      .status(StatusCodes.OK)
      .json({ status: StatusCodes.OK, message: successMsg });
  } catch (error) {
    next(error);
  }
};
