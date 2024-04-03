import mongoose, { model, Schema } from "mongoose";

const categorySchema = new Schema({
  name: String,
});

export const CategoryModel =
  mongoose.models.Category || model("Category", categorySchema);
