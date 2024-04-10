import { UserModel } from "@/models/user.schema";
import { UserType } from "@/utils/types/user";

export const ConfirmService = async (email: string, password: string) => {
  try {
    const users = await getUsers();
    const checkedUser = users.find(
      (user) => user.email === email && user.password === password
    );

    return checkedUser;
  } catch (error) {
    throw new Error("Invalid credentials");
  }
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
