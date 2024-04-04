import { UserModel } from "@/models/user.schema";
import jwt from "jsonwebtoken";
// import { generateJwtToken } from "../utils/generate-token";

export const loginService = async (email: string, password: string) => {
  if (email == "admin@gmail.com" && password == "admin") {
    const userInfo = {
      email: email,
      name: "John Doe",
    };
    const newToken = jwt.sign(userInfo, "my-super-duper-secret-key", {
      expiresIn: "1h",
    });
    return newToken;
  } else {
    throw new Error("Invalid credentials");
  }
};

export const createUser = async (
  name: string,
  email: string,
  address: string,
  password: string
) => {
  try {
    const createUser = await UserModel.create({
      name,
      address,
      email,
      password,
    });
    console.log(createUser);
    return createUser;
  } catch (e: any) {
    console.log(e.message);
  }

  return createUser;
};
