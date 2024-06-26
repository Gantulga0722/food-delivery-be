import { corsAllow } from "@/helper/cors";
import connect from "@/helper/db";
import { sendVerificationEmail } from "@/services/forgotPassword";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  await connect();
  await corsAllow(req, res);
  const body = req.body;
  console.log("request", body.email);

  switch (req.method) {
    case "POST":
      try {
        const result = await sendVerificationEmail(body.email);
        return res.status(200).json(result);
      } catch (e: any) {
        return res.status(400).json({ message: e.message });
      }
  }
}
