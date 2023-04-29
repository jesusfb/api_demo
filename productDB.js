// you have to run this file Separately 
import {connectDB} from "./db/connect.js"
import { Product } from "./models/product.js"
import dotenv from "dotenv";
dotenv.config();
import ProductsJson from "./products.json"  assert { type: "json" };
const start = async ()=>{
    try{
        await connectDB(process.env.MONGODB_URL);
          await Product.deleteMany();
          await Product.create(ProductsJson);
          console.log("success");
    }catch(err){
        console.log(err);
    }
}
start();