import { Router } from "express";
import {
  getAllCategoriesController,
  getOneCategorysController,
} from "./categories.controllers";

const router = Router();

router.route("/").get(getAllCategoriesController);
router.route("/:id").get(getOneCategorysController);

export default router;
