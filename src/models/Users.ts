import { Schema, Types, model, Model } from "mongoose";
import { User } from "../interfaces/user.interface";

const UserSchema = new Schema<User>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    required:true,
    default:false
  },
  favourites:[{
    type:String, 
    default:[],
  }]
});

const UserModel = model("Users", UserSchema);
export { UserModel };
