import { Router } from "express";
import { getUsers, logUser, registerUser } from "../controllers/auth";
import isAdmin from "../middlewares/isAdmin";
import session from "../middlewares/session"

const router = Router();

router.post("/login", logUser);
router.post("/register", registerUser);
router.get("/users",session, isAdmin , getUsers); // middleware isAdmin


export { router };
