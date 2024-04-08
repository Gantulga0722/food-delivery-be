import { UserModel } from "@/models/user.schema";
import { UserType } from "@/utils/types/user";
import jwt from "jsonwebtoken";
// import { generateJwtToken } from "../utils/generate-token";

export const loginService = async (email: string, password: string) => {
  try {
    const users = await getUsers();
    const checkedUser = users.find(
      (user) => user.email === email && user.password === password
    );

    if (!checkedUser) {
      throw new Error("Invalid");
    }
    const secretKey = process.env.MySecretKey;
    if (!secretKey) {
      throw new Error("Key is missing.");
    }

    const userInfo = {
      email: checkedUser.email,
      name: checkedUser.name,
    };
    const newToken = jwt.sign(userInfo, secretKey, {
      expiresIn: "1h",
    });
    return newToken;
  } catch (error) {
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

export const getUsers = async (): Promise<UserType[]> => {
  try {
    const gotUsers = await UserModel.find();
    return gotUsers;
  } catch (e: any) {
    console.log(e.message);
    throw new Error(e.message);
  }
};
