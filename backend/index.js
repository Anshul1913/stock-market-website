import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

app.use(cors({
  origin: "https://traders-profit-club.vercel.app/",
  methods: ["GET", "POST"],
  credentials: true
}));
app.use(bodyParser.json());

// Contact Form API
app.post("/contact", async (req, res) => {
  const { name, contact, email, message } = req.body;

  try {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "chouhanansu@gmail.com",   // your Gmail
        pass: "zykp fxiv ltmz xbiu"           // Gmail App Password
      }
    });

    await transporter.sendMail({
      from: email || "noreply@stockclasses.com",
      to: "anshulchouhan1664@gmail.com",
      subject: "New Contact Form Submission - Stock Market Classes",
      text: `📩 New Lead:
      - Name: ${name}
      - Contact: ${contact}
      - Email: ${email}
      - Message: ${message}`
    });

    res.status(200).json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, message: "Error sending message", error });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
