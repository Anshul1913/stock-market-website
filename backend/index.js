// backend/index.js
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import nodemailer from "nodemailer";

const app = express();

// Middleware
app.use(cors({
  origin: "https://traders-profit-club.vercel.app", // your frontend
  methods: ["GET", "POST"],
  credentials: true
}));
app.use(bodyParser.json());

// Contact Form API
app.post("/contact", async (req, res) => {
  const { name, email, contact, message } = req.body;

  if (!name || !email || !contact || !message) {
    return res.status(400).json({ success: false, message: "Please fill all required fields" });
  }

  try {
    // Configure transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,         // Your Gmail (set in Render env vars)
        pass: process.env.GMAIL_APP_PASSWORD  // Gmail App Password (set in Render env vars)
      }
    });

    // Send the email
    await transporter.sendMail({
      from: email,                             // sender (user who fills the form)
      to: process.env.GMAIL_RECEIVER,          // receiver email (your email)
      subject: "New Contact Form Submission",
      text: `📩 New Contact Form Submission:

- Name: ${name}
- Email: ${email}
- Contact: ${contact}
- Message: ${message}`
    });

    res.status(200).json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, message: "Error sending message", error: error.message });
  }
});

// Port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
