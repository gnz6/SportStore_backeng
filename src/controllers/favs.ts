import { Request, Response } from "express";
import { toogleFav } from "../services/fav.service";
import { RequestExt } from "../middlewares/isAdmin";

export const addFavourite = async (
  { params, user }: RequestExt,
  res: Response
) => {
  const { product_id } = params;
  try {
    const response = await toogleFav(product_id, user?.id);

    if (response === "CANT_GET_USER_OR_PRODUCT") {
      return res
        .status(400)
        .json({ ok: false, data: "Missing product or user" });
    }
    if (response === "REQUEST_ERROR") {
      return res
        .status(400)
        .json({ ok: false, data: "Internal server error , please try again" });
    }
    if (response === "FAV_TOGGLE") {
      return res
        .status(200)
        .json({ ok: true, data: "Product added/remove to favourites" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ ok: false, data: "Internal server error" });
  }
};
