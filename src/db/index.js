import dotenv from "dotenv";
import mongoose from "mongoose";
import {db_name} from "../constant.js"
dotenv.config({path :'./.env'})

const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONODB_URL}/${db_name}`);
        console.log(`mongodb connected to ${mongoose.connection.host}`);
    } catch (error) {
        console.log(` mongoDB is not connected to ${mongoose.connection.host}`);
        process.exit(1);
    }
}

export default connectDB;