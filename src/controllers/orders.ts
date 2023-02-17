import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { getAllItems } from "../services/order.service";
import { RequestExt } from '../middlewares/session';

 

const getAll = async (req: RequestExt, res: Response) => {
  try {
    const allItems = await getAllItems();
    console.log(req.user)
    return res.status(200).json({ ok: true, data: allItems, user: req.user });
  } catch (error) {
    handleHttp(res, "ERROR_GET_ALL_ITEMS", error);
  }
};


export { getAll };
