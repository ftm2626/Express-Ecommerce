import { Router } from "express";
import { createUser } from "../user/user.controller";
import { loginController } from "./auth.controller";

const router = Router();

router.post("/register", createUser);
router.post("/login", loginController);

export default router;
