import { Router } from "express";
import { getAllProductsController, getOneProductsController } from "./products.controllers";

const router = Router();

router.route("/").get(getAllProductsController);
router.route("/:id").get(getOneProductsController)

export default router;
