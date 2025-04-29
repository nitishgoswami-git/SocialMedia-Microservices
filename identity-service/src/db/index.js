import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import {logger} from "../utils/logger.js"

const connectDB = async () =>{
    try{
        const fullURI = `${process.env.MONGODB_URI}/${DB_NAME}`;
        // console.log("Connecting to MongoDB with URI:", fullURI); // <== TEMP LOG

        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
        logger.info("Connected to mongodb")
        // console.log(connectionInstance)

    }catch(err){
        console.log("MONGODB connection error", err);
        process.exit(1)
    }
}

export default connectDB