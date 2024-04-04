import { createUser } from "@/services/user";
import type { NextApiResponse, NextApiRequest } from "next";
import { corsAllow } from "@/helper/cors";
import connect from "@/helper/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  await connect();
  await corsAllow(req, res);
  const body = req.body;
  console.log(body);
  try {
    const result = await createUser(
      body.name,
      body.email,
      body.address,
      body.password
    );
    return res.status(200).json(result);
  } catch (e: any) {
    return res.status(400).json({ message: e.message });
  }
}
