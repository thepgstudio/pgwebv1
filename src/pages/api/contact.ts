import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function emailHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const { name, email, message } = req.body;

      const transporter = nodemailer.createTransport({
        host: "smtp.zoho.com",
        port: 465,
        secure: true,
        auth: {
          user: "office@thepgstudio.com",
          pass: "Office07@thepgstudio",
        },
      });

      const mailOption = {
        from: "office@thepgstudio.com",
        to: "office@thepgstudio.com",
        subject: "New Contact Form Submission",
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      };

      await transporter.sendMail(mailOption);

      res
        .status(200)
        .json({ status: true, message: "Form Submitted successfully" });
    } catch (err) {
      console.log(err);
      res.status(500).json({ status: false, message: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ status: false, message: "Method not allowed" });
  }
}
