import { UserModel } from "@/models/user.schema";

export const SetNewPass = async (
  id: string,
  newPassword: string,
  email: string
) => {
  try {
    const checkedUser = await UserModel.findOne({ email });
    if (!checkedUser) {
      throw new Error("Invalid credentials");
    }

    try {
      await UserModel.findByIdAndUpdate(id, { password: newPassword });
    } catch (e: any) {
      throw new Error(e.message);
    }

    return checkedUser;
  } catch (error) {
    throw new Error("Invalid credentials");
  }
};
