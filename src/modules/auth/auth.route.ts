import { Router } from "express";
import { createCustomer } from "../customers/customers.controller";
import { loginController } from "./auth.controller";

const router = Router();

router.post("/register", createCustomer);
router.post("/login", loginController);

export default router;
