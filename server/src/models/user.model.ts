import mongoose, { Schema } from "mongoose";

interface IUser {
  id: number;
  first_name: string;
  auth_date: string;
  hash: string;
}

const userSchema = new Schema<IUser>({
  id: Number,
  first_name: String,
  auth_date: Date,
  hash: String,
});

const UserModel = mongoose.model<IUser>("user", userSchema);
