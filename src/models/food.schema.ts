import mongoose, { model, Schema } from "mongoose";

const FoodSchema = new Schema({
  id: Number,
  category: { type: Schema.Types.ObjectId, ref: "Category" },
  foodName: String,
  price: Number,
  imagePath: String,
  ingredients: [{ type: String }],
  stock: Number,
  sale: Number,
});

export const FoodModel = mongoose.models.Food || model("Food", FoodSchema);
