require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/Db");

const enquiryRoutes = require("./routes/EnquiryRoutes");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());


// Home route
app.get("/", (req, res) => {
  res.send("MA Group Backend Running");
});



// Enquiry API
app.use("/api/enquiries", enquiryRoutes);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});