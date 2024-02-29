import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import { app } from "../app.js";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`\n MongoDB is connected!! DB HOST: ${connectionInstance.connection.host}`)
        app.on("Error", (error) => {
            console.log("Error in database.js ", error);
            throw error;
        })
        // console.log(connectionInstance)
    } catch (error) {
        console.log("MONGODB connection FAILED ", error);
        process.exit(1);
    }
}

export default connectDB;