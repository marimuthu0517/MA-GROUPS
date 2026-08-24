const express = require("express");

const {
  createEnquiry,
  getEnquiries
} = require("../controllers/EnquiryControllers");

const router = express.Router();

router.post("/", createEnquiry);

router.get("/", getEnquiries);

module.exports = router;