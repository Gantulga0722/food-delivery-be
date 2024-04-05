import mongoose, { model, Schema } from "mongoose";

const FoodSchema = new Schema({
  category: { type: Schema.Types.ObjectId, ref: "category" },
  foodName: String,
  price: Number,
  imagePath: String,
  ingredients: String,
  stock: Number,
  sale: Number,
});

export const FoodModel = mongoose.models.Food || model("Food", FoodSchema);
