import { OrderModel } from "../models/order";


const getAllItems = async () => {
    const responseItem = await OrderModel.find({});
    return responseItem;
  };

  export {getAllItems}