const Enquiry = require("../models/Enquiry");
const whatsappNumber = "918344748222";

const createEnquiry = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    const enquiry = await Enquiry.create({
      name,
      email,
      phone,
      message,
    });

    const whatsappMessage = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || "Not provided"}`,
      `Message: ${message}`
    ].join("\n");

    return res.status(201).json({
      success: true,
      message: "Enquiry submitted successfully",
      data: enquiry,
      whatsappUrl: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`,
    });
  } catch (error) {
    console.error("Error creating enquiry:", error.message || error);
    return res.status(500).json({
      success: false,
      message: error.message || "Unable to save enquiry",
    });
  }
};

module.exports = {
  createEnquiry,
};