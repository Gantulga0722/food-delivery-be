import { createFood } from "@/services/food";
import type { NextApiResponse, NextApiRequest } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const food = await createFood(
      1,
      "Main food",
      "Soup",
      14600,
      " https://s3-alpha-sig.figma.com/img/8de6/08f4/fc3d415a9e59a1a8de7a0d9189e0fa8d?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hi-Sz3PNJmvmFUnDLv6-pd5XAjtHvHGIbF5oCn~kHeF9rtLqvz38T42QSXrkuS-QW45u7WntjezZxUzNJ318o9tDGNJ1tf~fGjw8JQbH0CAh6RYHnoOnoFv8kXz4qlBE0qsYTJvxXUqo7mVWEcez~Xa7119AGxAXu4hF-~m9L~mF9VDIOioZXE7In2zPSPbmB~8Hcmlv-zHMy9d-1lsm0W68~-lnAr265zaSJPztllmDrc2qyXU9pVwoFeB7-T8h4im1Rp7I2Vy1O05ZoiiHe~eUwCGVzqV3~qPViekGmqVVpj2fzBbBw72Z7KM0KM56Wru6hS9NNbIkTnTzbC6RKQ__",
      ["Pastry", "Filling of choice"],
      100,
      0
    );
    res.status(200).json({ message: "Successfully", food });
  } catch (e: any) {
    return res.status(400).json({ message: e.message });
  }
};

export default handler;

