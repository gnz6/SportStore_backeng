import { Router } from "express";
import session from "../middlewares/session";
import { addFavourite } from '../controllers/favs';

const router = Router();

router.put("/:product_id", session, addFavourite);


export { router };
