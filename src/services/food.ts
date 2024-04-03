import { FoodModel } from "@/models/food.schema";
import { FoodType } from "@/utils/types/food";

export const createFood = async (name: string) => {
  const createFood = FoodModel.create({ name });
  return createFood;
};

export const getFoods = async (): Promise<FoodType[]> => {
  try {
    const categories = await FoodModel.find();
    return categories;
  } catch (e: any) {
    throw new Error(e.message);
  }
};

export const getFoodById = async (id: string) => {
  try {
    const food = await FoodModel.findOne({ _id: id });
    return food;
  } catch (e: any) {
    throw new Error(e.message);
  }
};

export const deleteFood = async (id: string) => {
  try {
    await FoodModel.deleteOne({ _id: id });
  } catch (e: any) {
    throw new Error(e.message);
  }
};

export const updateFood = async (id: string, updateInfo: Partial<FoodType>) => {
  try {
    await FoodModel.updateOne({ _id: id }, { updateInfo });
  } catch (e: any) {
    throw new Error(e.message);
  }
};
