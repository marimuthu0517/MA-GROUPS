require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/Db");
const enquiryRoutes = require("./routes/EnquiryRoutes");

const app = express();


// Middleware
const allowedOrigins = process.env.CORS_ORIGIN
  ? process.env.CORS_ORIGIN.split(",").map((origin) => origin.trim()).filter(Boolean)
  : true;

app.use(cors({ origin: allowedOrigins }));
app.use(express.json());


// Routes
app.use("/api/enquiries", enquiryRoutes);


// Test route
app.get("/", (req, res) => {
  res.json({
    message: "MA Group Backend is running"
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
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("MongoDB Connection Error:", error.message);
    process.exitCode = 1;
  }
};

startServer();