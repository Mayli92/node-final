import { Router } from "express";
import {login } from "../controllers/auth_controller.js";
import router from "./products_router";

const router = Router();

router.post("/login", login);

export default router;