import { Router } from "express";
import {
  deleteOneCustomerController,
  getAllCustomersController,
  getOneCustomerController,
  updateCustomerController,
} from "./customers.controller";

const router = Router();

router.route("/customers").get(getAllCustomersController);
router
  .route("/customers/:id")
  .get(getOneCustomerController)
  .delete(deleteOneCustomerController)
  .put(updateCustomerController);

export default router;
