const dns = require("node:dns");
const mongoose = require("mongoose");

const connectDB = async () => {
  const mongoUri = process.env.MONGO_URI;

  if (!mongoUri) {
    throw new Error("MONGO_URI is not configured in backend/.env");
  }

  const dnsServers = (process.env.MONGO_DNS_SERVERS || "8.8.8.8,1.1.1.1")
    .split(",")
    .map((server) => server.trim())
    .filter(Boolean);

  dns.setServers(dnsServers);

  await mongoose.connect(mongoUri, {
    serverSelectionTimeoutMS: 10000
  });

  console.log("MongoDB Connected");
};

module.exports = connectDB;