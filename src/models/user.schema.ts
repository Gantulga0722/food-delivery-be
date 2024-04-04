import mongoose, { model, Schema } from "mongoose";

const UserSchema = new Schema({
  name: String,
  email: String,
  address: String,
  password: String,
  createdAt: Date,
  updatedAt: Date,
});

export const UserModel = mongoose.models.User || model("User", UserSchema);
