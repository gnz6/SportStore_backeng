import { Router } from "express";
import isAdmin from '../middlewares/isAdmin';
import session from "../middlewares/session";
import {
  create,
  deleteOne,
  getAll,
  getOne,
  updateOne,
} from "../controllers/item";

const router = Router();

router.get("/", getAll);
router.post("/", session , isAdmin, create);
router.get("/:item_id", getOne);
router.put("/:item_id", session , isAdmin, updateOne);
router.delete("/:item_id", session , isAdmin, deleteOne);

export { router };
