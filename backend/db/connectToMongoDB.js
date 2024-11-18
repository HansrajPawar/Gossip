import mongoose from "mongoose";

const connectToMongoDB = async () => {
  try {
    const mongoDBUri = process.env.MONGODB_URI;
    await mongoose.connect(mongoDBUri);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB", error.message);
  }
};

export default connectToMongoDB;
