import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import agentRoutes from './routes/agentRoutes.js';
import clientRoutes from './routes/clientRoutes.js';
import listingRoutes from './routes/listingRoutes.js';
import propertyRoutes from './routes/propertyRoutes.js';

dotenv.config();

const app = express();
app.use(express.json());

// Routes
app.use('/api/agents', agentRoutes);
app.use('/api/clients', clientRoutes);
app.use('/api/listings', listingRoutes);
app.use('/api/properties', propertyRoutes);

const PORT = process.env.PORT || 5001;

// Connect to MongoDB and start the server
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('MongoDB connected successfully');
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err.message);
    });
