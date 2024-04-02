import { FoodModel } from "@/models/food.schema";

export const createFood = async (
  id: number,
  category: string,
  foodName: string,
  price: number,
  imagePath: string,
  ingredients: any[],
  stock: number,
  sale: number
) => {
  const createFood = FoodModel.create({
    id,
    category,
    foodName,
    price,
    imagePath,
    ingredients,
    stock,
    sale,
  });
  return createFood;
};
