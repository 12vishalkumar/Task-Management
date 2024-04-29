//********************************** Importing required libararies *************************************
import mongoose from 'mongoose';


//********************************** MongoDB Connectivity function **************************************
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log('MongoDB Connected Successfully');
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
    process.exit(1);
  }
};

export default connectDB;