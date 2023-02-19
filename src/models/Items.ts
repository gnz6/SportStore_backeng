import { Schema, Types , model, Model } from "mongoose";
import { Product } from "../interfaces/product.interface";


const ItemSchema = new Schema<Product>({
   color: {
    type:String,
    required: true
   },
   price:{
    type:Number,
    required: true
   },
   brand:[{
    type:String,
    enum:["Nike", "Adidas", "Jordan"],
    required: true
   }],
   model:{
    type:String,
    required: true
   },
   description:{
      type:String,
   },
   madeFor:[{
      type:String,
      enum:["man", "woman", "kids"],
      default:"man",
      required:true
   }],
   picture:{
      type:String
   },
   category:[{
      type:String,
      enum: ["sneakers", "top", "bottom", "accessories", "other"],
      default:"other",
      required:true
   }]
}
)

const ItemModel = model("Items", ItemSchema)
export {ItemModel}