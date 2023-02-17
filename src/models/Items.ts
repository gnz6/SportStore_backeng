import { Schema, Types , model, Model } from "mongoose";
import { Car } from "../interfaces/car.interface";


const ItemSchema = new Schema<Car>({
   color: {
    type:String,
    required: true
   },
   gas:{
    type:String,
    enum :["gasoline", "electric", "other"],
    defaultValue:"gasoline",
    required: true
   },
   year:{
    type:Number,
    required: true
   },
   motor:{
    type:String,
    enum: [ "1.0" , "1.4" , "1.6" , "1.8" , "2.0" ]
   },
   price:{
    type:Number,
    required: true
   },
   brand:{
    type:String,
    required: true
   },
   model:{
    type:String,
    required: true
   },
   doors:{
      type: Number,
      required: true
   },
   used:{
      type:Boolean,
      default:false,
      required:true
   },
   kilometers:{
      type:Number,
      default:0,
   }
}
)

const ItemModel = model("Items", ItemSchema)
export {ItemModel}