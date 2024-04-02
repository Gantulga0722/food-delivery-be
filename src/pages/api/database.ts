import mongoose from "mongoose";
import { NextApiRequest, NextApiResponse } from "next";

const url: string = process.env.MONGO_DB_URL as string;

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const connect = async () => {
    try {
      await mongoose.connect(url);
      console.log("Database conneted successfully");
      res.send("Database conneted successfully");
    } catch (error) {
      console.log(error);
    }
  };

  connect();
};

export default handler;
