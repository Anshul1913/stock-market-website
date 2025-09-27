import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();

app.use(cors({
  origin: "https://traders-profit-club.vercel.app", // your frontend
  methods: ["GET", "POST"],
  credentials: true
}));
app.use(bodyParser.json());

// Contact Form API
app.post("/contact", async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    // Formsubmit endpoint
    const formsubmitEndpoint = `https://formsubmit.co/ajax/${process.env.FORMSUBMIT_EMAIL}`;

    const response = await axios.post(formsubmitEndpoint, {
      name,
      email,
      subject,
      message
    }, {
      headers: {
        "Content-Type": "application/json"
      }
    });

    // Formsubmit returns JSON
    if (response.data.success === "true" || response.data.success === true) {
      res.status(200).json({ success: true, message: "Message sent successfully!" });
    } else {
      res.status(500).json({ success: false, message: "Failed to send message" });
    }
  } catch (error) {
    console.error("Error sending email:", error.message);
    res.status(500).json({ success: false, message: "Error sending message", error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
