import { Schema, Types, model, Model } from "mongoose";
import { Storage } from "../interfaces/storage.interface";

const StorageSchema = new Schema<Storage>({
    fileName:{
        type : String,
        required: true
    }, 
    path:{
        type : String,
        required: true
    }, 
    uid:{
        type : String,
        required: true
    }
})
const StorageModel = model("Storages", StorageSchema);
export { StorageModel };StorageSchema
