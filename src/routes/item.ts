import { Router } from "express";
import {
  create,
  deleteOne,
  getAll,
  getOne,
  updateOne,
} from "../controllers/item";

const router = Router();

router.get("/", getAll);
router.post("/", create);
router.get("/:item_id", getOne);
router.put("/:item_id", updateOne);
router.delete("/:item_id", deleteOne);

export { router };
