import { generateJwtToken } from "../utils/generate-token";

export const loginService = async (email: string, password: string) => {
  if (email == "bla@gmail.com" && password == "bla") {
    const userInfo = {
      email: email,
      name: "John Doe",
    };
    return generateJwtToken(userInfo);
  } else {
    throw new Error("Invalid credentials");
  }
};
