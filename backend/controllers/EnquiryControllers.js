const Enquiry = require("../models/Enquiry");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

const createEnquiry = async (req, res) => {
  try {

    const { name, email, phone, message } = req.body;

    const enquiry = await Enquiry.create({
      name,
      email,
      phone,
      message
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New MA Group Enquiry - ${name}`,

      html: `
        <h2>New Website Enquiry</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>

        <h3>Project Details</h3>
        <p>${message}</p>
      `
    });

    res.status(201).json({
      success: true,
      message: "Enquiry submitted successfully",
      enquiry
    });

  } catch (error) {

    console.log("Enquiry Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to submit enquiry"
    });

  }
};

const getEnquiries = async (req, res) => {
  try {

    const enquiries = await Enquiry.find()
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      enquiries
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};

module.exports = {
  createEnquiry,
  getEnquiries
};