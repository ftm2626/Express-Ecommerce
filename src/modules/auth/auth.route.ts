import { Router } from "express";
import { createUser } from "../user/user.controller";

const router = Router();

router.post("/register", createUser);

export default router;
