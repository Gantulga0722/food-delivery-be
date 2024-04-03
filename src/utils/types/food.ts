export type FoodType = {
  name: string;
  categoryId: string;
  price: number;
  image: string;
  description: string;
  sale?: number;
  stock: number;
  ingredients: string[];
};
