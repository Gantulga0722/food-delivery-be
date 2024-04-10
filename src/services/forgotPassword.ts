import { nanoid } from "nanoid";
import { UserModel } from "@/models/user.schema";
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "Gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.MyEmail,
    pass: process.env.MyPassword,
  },
});

const isValidEmail = (email: any) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const sendVerificationEmail = async (email: string) => {
  if (!isValidEmail(email)) {
    return { success: false, message: "Invalid email address" };
  }

  const veriCode = nanoid(6);
  try {
    const existingUser = await UserModel.findOne({ email });
    if (!existingUser) {
      return {
        success: false,
        message: "User does not exist",
      };
    }

    const mailOptions = {
      from: process.env.MyEmail,
      to: email,
      subject: "Verification Code",
      text: `Your verification code is: ${veriCode}`,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, message: "Error while sending email" };
  }
};
