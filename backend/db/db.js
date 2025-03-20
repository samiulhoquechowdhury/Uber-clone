require("dotenv").config();

const mongoose = require("mongoose");
const dbURI = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(dbURI, {
      //   useNewUrlParser: true,
      //   useUnifiedTopology: true,
    });

    console.log("MongoDB connected successfully!");
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
