import { Router } from "express";
import {
  create,
  deleteOne,
  getAll,
  getOne,
  updateOne,
} from "../controllers/item";
import { logMiddleWare } from "../middlewares/log";

const router = Router();

router.get("/",logMiddleWare, getAll);
router.post("/", create);
router.get("/:item_id", getOne);
router.put("/:item_id", updateOne);
router.delete("/:item_id", deleteOne);

export { router };
