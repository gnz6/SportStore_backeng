import { StorageModel } from "../models/storage";
import { Storage } from '../interfaces/storage.interface';

const registerUpload = async({uid, path, fileName}: Storage) =>{
    const response = await StorageModel.create({uid, path, fileName});
    return response;
}


export ={registerUpload};