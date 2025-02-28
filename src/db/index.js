import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connectDb = async () =>{
try{
 const connectionInstance =   await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
 console.log(`\n ${connectionInstance.connection.host}`)
}catch(error){
console.log(error)
process.exit()
}

}
export default connectDb;