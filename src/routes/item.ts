import { Router, Request, Response } from "express";

export const router = Router();

router.get("/", (req: Request ,res: Response) => {})
router.post("/", (req: Request ,res: Response) => {})
router.get("/:item_id", (req: Request ,res: Response) => {})
router.put("/:item_id", (req: Request ,res: Response) => {})
router.delete("/:item_id", (req: Request ,res: Response) => {})

