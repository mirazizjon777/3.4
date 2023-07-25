import mongoose from "mongoose";

export default async () => {
  try {
    mongoose.connect(process.env.MONGO as string);
    console.log("db connected...");
  } catch (error) {
    console.log(error);
  }
};
