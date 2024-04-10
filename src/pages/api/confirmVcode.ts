// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connect from "@/helper/db";
import { ConfirmService } from "@/services/confirm";
import mongoose from "mongoose";
import type { NextApiRequest, NextApiResponse } from "next";
import NextCors from "nextjs-cors";

type Data = {
  message?: string;
  user?: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  await connect();
  await NextCors(req, res, {
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200,
  });
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
  const data = req.body;
  const { email, password } = data;

  try {
    const checkUser = await ConfirmService(email, password);
    if (checkUser) {
      return res.status(200).json({ user: checkUser, message: "successful" });
    }
  } catch (e: any) {
    return res.status(400).json({ message: e.message });
  }
}
