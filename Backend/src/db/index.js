import mongoose from "mongoose"
import {DB_NAME} from "../../src/constants.js"
 
const connectDB = async () => {
    try {
       const connectionInstance =  await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
 
       console.log(`\n MongoDB connected successfully !! DB HOST: ${connectionInstance.connection.host} `);
    } catch (error) {
        console.log("MondoDB connection error", error);
        process.exit(1)
    }
}

export default connectDB;



