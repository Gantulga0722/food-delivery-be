import jwt from "jsonwebtoken";

export const generateJwtToken = (payload: any) => {
  return jwt.sign(payload, "my-super-duper-secret-key", { expiresIn: "1h" });
};
