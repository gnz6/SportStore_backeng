import { Router } from "express";
import { logUser, registerUser } from "../controllers/auth";

const router = Router();

router.post("/login", logUser);
router.post("/register", registerUser);


export { router };
