const Enquiry = require("../models/Enquiry");
const dns = require("dns").promises;
const nodemailer = require("nodemailer");

const emailUser = process.env.EMAIL_USER ? process.env.EMAIL_USER.trim() : "";
const emailPass = process.env.EMAIL_PASS ? process.env.EMAIL_PASS.replace(/\s+/g, "") : "";
const smtpHost = "smtp.gmail.com";

const transporterPromise = dns.lookup(smtpHost, { family: 4, verbatim: false }).then(({ address }) =>
  nodemailer.createTransport({
    host: address,
    port: 587,
    secure: false,
    requireTLS: true,
    connectionTimeout: 30000,
    greetingTimeout: 30000,
    socketTimeout: 30000,
    tls: {
      minVersion: "TLSv1.2",
      servername: smtpHost,
    },
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  })
);

const verifyEmailTransporter = async () => {
  if (!emailUser || !emailPass) {
    throw new Error("EMAIL_USER and EMAIL_PASS must be configured");
  }

  const transporter = await transporterPromise;
  await transporter.verify();
  console.log(`Email transporter verified for ${emailUser}`);
};

const createEnquiry = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    const enquiry = await Enquiry.create({
      name,
      email,
      phone,
      message,
    });

    const transporter = await transporterPromise;
    const mailResult = await transporter.sendMail({
      from: emailUser,
      to: emailUser,
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
      message: error.message || "Unable to send enquiry email",
    });
  }
};

module.exports = {
  createEnquiry,
  verifyEmailTransporter,
};