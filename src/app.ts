import "dotenv/config";
import express from "express";
import cors from "cors";
import { router } from "./routes";
import db from './config/mongo';

const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());
app.use(express.json())

//Items
app.use( router )
db();

app.listen(PORT, ()=>{
    console.log(`Server running on Port ${PORT}`);
    
})