require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/Db");
const enquiryRoutes = require("./routes/EnquiryRoutes");

const app = express();

const allowedOrigins = process.env.CORS_ORIGIN
  ? process.env.CORS_ORIGIN.split(",").map((origin) => origin.trim().replace(/\/$/, "")).filter(Boolean)
  : "*";

app.use(
  cors({
    origin: allowedOrigins,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());

app.use("/api/enquiries", enquiryRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "MA Group Backend is running",
  });
});

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("MongoDB Connection Error:", error.message);
    process.exitCode = 1;
  }
};

startServer();