import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { getAllItems } from "../services/order.service";

 
const getAll = async (req: Request, res: Response) => {
  try {
    const allItems = await getAllItems();
    return res.status(200).json({ ok: true, data: allItems });
  } catch (error) {
    handleHttp(res, "ERROR_GET_ALL_ITEMS", error);
  }
};


export { getAll };
