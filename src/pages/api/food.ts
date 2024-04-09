import { corsAllow } from "@/helper/cors";
import connect from "@/helper/db";
import { createFood, getFoods } from "@/services/food";
import { AnyError } from "mongodb";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  await connect();
  await corsAllow(req, res);
  const body = req.body;
  // const header = req.headers;
  // const authorization = header.authorization;
  // const token = authorization?.split("")[1] || "";

  // try {
  //   const result = jwt.verify(token as string, process.TOKE_SECRET || "", {});
  //   const decoded = jwt.decode(token);
  //   const date = new Date(decoded.exp * 1000);
  // } catch (e: any) {
  //   console.log(e.message);
  //   throw new Error(e.message);
  // }

  switch (req.method) {
    case "POST":
      try {
        const result = await createFood(
          body.foodName,
          body.category,
          body.price,
          body.imagePath,
          body.ingredients,
          body.sale
        );
        return res.status(200).json(result);
      } catch (e: any) {
        return res.status(400).json({ message: e.message });
      }
    case "GET":
      try {
        const foods = await getFoods();
        return res.status(200).json({ foods: foods });
      } catch (e: any) {
        return res.status(400).json({ message: e.message });
      }
  }
}
