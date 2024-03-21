import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("hello");
  } catch (error) {
    consoel.log(error.message, "sdfsdl");
    throw error;
  }
};

export default connectDB;
