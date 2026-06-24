import mongoose from "mongoose";
import "dotenv/config";

const connectDB= async ()=>{
try{
await mongoose.connect("mongodb://mongodb:27017")
console.log("db connected");
}catch(e){
console.error(e)
}
}


connectDB();
console.log("PORT set in env is, "+process.env.PORT)
