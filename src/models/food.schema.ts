import { model, Schema } from "mongoose";

const FoodSchema = new Schema({
  id: Number,
  category: String,
  foodName: String,
  price: Number,
  imagePath: String,
  ingredients: [{ type: String }],
  stock: Number,
  sale: Number,
});

export const FoodModel = model("Food", FoodSchema);
