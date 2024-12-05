import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables

export const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGO_URI;
    
    // Debug: Log the mongoURI to verify it's loaded correctly
    console.log('Mongo URI:', mongoURI);

    if (!mongoURI) {
      throw new Error('MONGO_URI is not defined in the environment variables');
    }

    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1); // Exit process with failure
  }
};
