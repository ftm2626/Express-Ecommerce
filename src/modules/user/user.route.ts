import { Router } from "express";
import {
  deleteOneUserController,
  getAllUsersController,
  getOneUserController,
  updateUserController,
} from "./user.controller";

const router = Router();

router.route("/users").get(getAllUsersController);
router.route("/:id").get(getOneUserController).delete(deleteOneUserController).put(updateUserController);

export default router;
