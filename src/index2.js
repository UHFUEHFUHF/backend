// require('dotenv').config()
import dotenv from "dotenv"
import connectDb from "./db/index.js";

dotenv.config({
    path: "./env"
})

connectDb();





/*
import express from "express";
const app = express();
;(async ()=>{
    try {
   await  mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)  
   app.on("error", ()=>{
    console.log("my app not able to talk ")
   }) 
   app.listen(process.env.PORT,()=>{
    console.log(`app is listening at port ${process.env.PORT}`)
   })
    } catch (error) {
        console.log(error)
        throw error
    }
})()
    */