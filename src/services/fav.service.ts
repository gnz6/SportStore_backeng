import { ItemModel } from "../models/Items";
import { UserModel } from "../models/Users";
import { User } from "../interfaces/user.interface";

export const toogleFav = async (
  product_id: string = "",
  user_id: string = ""
) => {
  try {
    const product = await ItemModel.findOne({ _id: product_id });
    const findUser = await UserModel.findOne({ _id: user_id });
    if (!findUser || !product) return "CANT_GET_USER_OR_PRODUCT";

    let userFavs: string[] = findUser.favourites;

    if (userFavs.includes(product_id)) {
      userFavs = userFavs.filter((fav) => fav !== product_id);
    } else if (!userFavs.includes(product_id)) {
      userFavs.push(product_id);
    }
    findUser.favourites = userFavs;
    await UserModel.findByIdAndUpdate(user_id, findUser, {
      new: true,
    });

    return "FAV_TOGGLE";
  } catch (error) {
    console.log(error);
    return "REQUEST_ERROR";
  }
};
