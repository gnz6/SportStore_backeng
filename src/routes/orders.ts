import { Router } from "express";
import { getAll } from "../controllers/orders";
import checkJwt from "../middlewares/session";

const router = Router();


router.get("/", checkJwt , getAll)


export { router };
