import { UserModel } from "@/models/user.schema";
import { UserType } from "@/utils/types/user";
import jwt from "jsonwebtoken";
// import { generateJwtToken } from "../utils/generate-token";

export const loginService = async (email: string, password: string) => {
  try {
    const users = await getUsers();
    const checkedUser = users.filter((user) => {
      user.email == email && user.password == password;
      return user;
    });
    console.log("checked", checkedUser);
    const userInfo = {
      email: checkedUser[0].email,
      name: checkedUser[0].name,
    };
    const newToken = jwt.sign(userInfo, "my-super-duper-secret-key", {
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
