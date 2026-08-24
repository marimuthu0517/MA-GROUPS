require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/Db");
const enquiryRoutes = require("./routes/EnquiryRoutes");

const app = express();


// Middleware
app.use(cors());
app.use(express.json());


// MongoDB
connectDB();


// Routes
app.use("/api/enquiries", enquiryRoutes);


// Test route
app.get("/", (req, res) => {
  res.json({
    message: "MA Group Backend is running"
  });
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});