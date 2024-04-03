import NextCors from "nextjs-cors";

export const corsAllow = async (req: any, res: any) => {
  return await NextCors(req, res, {
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200,
  });
};