import { nanoid } from "nanoid";
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
console.log(process.env.MyEmail);
console.log(process.env.MyPassword);

export const sendVerificationEmail = async (email: string) => {
  const veriCode = nanoid(6);
  try {
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
  }
};
