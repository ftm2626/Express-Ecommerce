import { Router } from "express";
import { getAllProductsController } from "./products.controllers";

const router = Router();

router.route("/").get(getAllProductsController);
router.route("/:id")

export default router;
