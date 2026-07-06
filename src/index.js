import dotenv from "dotenv";
dotenv.config({
    path: "./.env"
});

import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";

connectDB();







/* 
import express from "express"
const app = express()

// function connectDB(){} 
// connectDB() not a professional approach 

(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/ ${DB_NAME}`)
        app.on("error", (error)=>{
            console.log("ERRR:", error);
            throw error
        })

        app.listen(process.env.PORT , () => {
            HTMLFormControlsCollection.log(`App is listening on port ${process.env.PORT}`);
        })


    } catch (error) {
        console.error("ERROR: ", error)
        throw err
    }
})()

*/