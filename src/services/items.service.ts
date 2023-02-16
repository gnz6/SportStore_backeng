import { Car } from "../interfaces/car.interface";
import { ItemModel } from "../models/Items";

const createItem = async({...args}:Car) =>{
    const responseInsert = await ItemModel.create({...args})
    return responseInsert;
}

const getAllItems = async()=>{
    const responseItem = await ItemModel.find({});
    return responseItem;
}

const getOneItem = async( item_id : string)=>{
    const responseItem = await ItemModel.findById(item_id);
    return responseItem;
}

const updateItem = async( item_id: string, body: Car)=>{
    const responseItem = await ItemModel.findByIdAndUpdate(item_id , body, {new:true});
    return responseItem;
}

const deleteItem = async( item_id : string)=>{
    const responseItem = await ItemModel.findByIdAndDelete(item_id);
    return responseItem;
}


export {createItem, getAllItems, getOneItem, updateItem, deleteItem};

