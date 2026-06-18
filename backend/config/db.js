const mongoose = require("mongoose");

async function connectDB() {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    console.warn(
      "[db] MONGODB_URI not set — running without a database connection. Enquiries will not be persisted."
    );
    return;
  }

  try {
    await mongoose.connect(uri);
    console.log("[db] Connected to MongoDB");
  } catch (err) {
    console.error("[db] Failed to connect to MongoDB:", err.message);
    console.warn("[db] Server will continue running without persistence.");
  }
}

module.exports = connectDB;
