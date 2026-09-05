const Enquiry = require("../models/Enquiry");
const nodemailer = require("nodemailer");

const emailUser = process.env.EMAIL_USER ? process.env.EMAIL_USER.trim() : "";
const emailPass = process.env.EMAIL_PASS ? process.env.EMAIL_PASS.replace(/\s+/g, "") : "";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
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
      message,
    });

    const mailResult = await transporter.sendMail({
      from: emailUser,
      to: "magroups0517@gmail.com",
      replyTo: email,
      subject: `New MA Group Enquiry - ${name}`,
      text: [
        "New Website Enquiry",
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || "Not provided"}`,
        `Message: ${message}`
      ].join("\n")
    });

    console.log("Enquiry email sent:", mailResult.messageId);

    return res.status(201).json({
      success: true,
      message: "Enquiry submitted successfully",
      data: enquiry,
    });
  } catch (error) {
    console.error("Error creating enquiry:", error.message || error);
    return res.status(500).json({
      success: false,
      message: "Unable to send enquiry email",
    });
  }
};

module.exports = {
  createEnquiry,
};