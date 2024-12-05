import mongoose from 'mongoose';

const listingSchema = new mongoose.Schema({
    propertyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Property', required: true },
    price: { type: Number, required: true },
    status: { type: String, enum: ['Available', 'Sold', 'Pending'], default: 'Available' },
    listedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'Agent', required: true },
});

const Listing = mongoose.model('Listing', listingSchema);

export default Listing;
