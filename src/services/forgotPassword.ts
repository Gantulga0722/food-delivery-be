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

export const sendVerificationEmail = async (email: string) => {
  console.log("email form front", email);
  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

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
      to: `${email}`,
      subject: "Verification Code",
      text: `Your verification code is: ${veriCode}`,
    };

    const info = await transporter.sendMail(mailOptions);
    const user = await UserModel.findOne({ email: email });
    const updatePass = await UserModel.findByIdAndUpdate(user._id, {
      password: veriCode,
    });

    console.log("Email sent: " + info.response);
    return { success: true, message: "Email sent successfully" };
  } catch (error) {
    console.error("Error while sending email:", error);
    return { success: false, message: "Error while sending email" };
  }
};
