import {  Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { Storage } from "../interfaces/storage.interface";
import storageService from "../services/storage.service";
import { RequestExt } from "../middlewares/session";

const getFile = async (req: RequestExt, res: Response) => {
  try {
    const { user, file } = req;
    const uploadData = {
      fileName: `${file?.filename}`,
      uid: `${user?.id}`,
      path: `${file?.path}`,
    };

    const response = await storageService.registerUpload({
      uid: uploadData.uid,
      fileName: uploadData.fileName,
      path: uploadData.path,
    });
    res.status(201).json({ok:true, data: response})
  } catch (error) {
    console.log(error);
    handleHttp(res, "CANT_GET_FILE", error);
  }
};

export { getFile };
