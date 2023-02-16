import { Schema, Types, model, Model } from "mongoose";
import { Order } from '../interfaces/order.interface';

const OrderSchema = new Schema<Order>({
products:[{
    type: Types.ObjectId,
    ref: "Items",
    required:true
}],
total:{
    type:Number,
    required:true
}
})
const OrderModel = model("Orders", OrderSchema);
export { OrderModel };
