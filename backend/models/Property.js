import mongoose from 'mongoose';

const propertySchema = new mongoose.Schema({
    address: { type: String, required: true, maxlength: 200 },
    size: { type: Number }, // Size in square feet
    type: { type: String, enum: ['Residential', 'Commercial'], required: true },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'Client', required: true },
});

const Property = mongoose.model('Property', propertySchema);

export default Property;
