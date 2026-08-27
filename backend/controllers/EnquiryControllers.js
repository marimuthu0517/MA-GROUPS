const Enquiry = require("../models/Enquiry");
const nodemailer = require("nodemailer");

const emailUser = process.env.EMAIL_USER?.trim();
const emailPass = process.env.EMAIL_PASS?.replace(/\s+/g, "");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: emailUser,
    pass: emailPass
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

    const mailResult = await transporter.sendMail({
      from: emailUser,
      to: emailUser,
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

    console.log("Enquiry email sent:", mailResult.messageId);

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