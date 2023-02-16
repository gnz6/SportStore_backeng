import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import {
  createItem,
  deleteItem,
  getAllItems,
  getOneItem,
  updateItem,
} from "../services/items.service";

const getOne = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const item = await getOneItem(id);
    return res.status(200).json({ ok: true, data: item });
  } catch (error) {
    console.log(error);
    handleHttp(res, "ERROR_GET_ITEM", error);
  }
};
const getAll = async (req: Request, res: Response) => {
  try {
    const allItems = await getAllItems();
    return res.status(200).json({ ok: true, data: allItems });
  } catch (error) {
    console.log(error);
    handleHttp(res, "ERROR_GET_ALL_ITEMS", error);
  }
};

const create = async ({ body }: Request, res: Response) => {
  try {
    const item = await createItem(body);
    return res.status(201).json({ ok: true, data: item });
  } catch (error) {
    console.log(error);
    handleHttp(res, "ERROR_CREATE", error);
  }
};

const updateOne = async ({ params, body }: Request, res: Response) => {
  try {
    const { id } = params;
    const item = await updateItem(id, body);
    return res.status(200).json({ ok: true, data: item });
  } catch (error) {
    console.log(error);
    handleHttp(res, "ERROR_UPDATE", error);
  }
};
const deleteOne = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    await deleteItem(id);
    return res.status(200).json({ ok: true, data: `Object ${id} deleted` });
  } catch (error) {
    console.log(error);
    handleHttp(res, "ERROR_DELETE", error);
  }
};

export { getAll, getOne, create, updateOne, deleteOne };
