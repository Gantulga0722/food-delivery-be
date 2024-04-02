import { createUser } from "@/services/user";
import type { NextApiResponse, NextApiRequest } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const user = await createUser("gosoo", "lastName", "email", 21);
    res.status(200).json({ message: "Successfully", user });
  } catch (e: any) {
    return res.status(400).json({ message: e.message });
  }
};

export default handler;
