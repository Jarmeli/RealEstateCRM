import Listing from '../models/Listing.js';

// Create a new listing
export const createListing = async (req, res) => {
    try {
        const { title, description, price, agentId, propertyId } = req.body;
        const listing = new Listing({ title, description, price, agentId, propertyId });
        await listing.save();
        res.status(201).json({ message: 'Listing created successfully', listing });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Get all listings
export const getListings = async (req, res) => {
    try {
        const listings = await Listing.find().populate('agentId').populate('propertyId');
        res.status(200).json(listings);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Get listing by ID
export const getListing = async (req, res) => {
    try {
        const listing = await Listing.findById(req.params.id).populate('agentId').populate('propertyId');
        if (!listing) {
            return res.status(404).json({ message: 'Listing not found' });
        }
        res.status(200).json(listing);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Update listing by ID
export const updateListing = async (req, res) => {
    try {
        const { title, description, price, agentId, propertyId } = req.body;
        const listing = await Listing.findByIdAndUpdate(
            req.params.id,
            { title, description, price, agentId, propertyId },
            { new: true }
        );
        if (!listing) {
            return res.status(404).json({ message: 'Listing not found' });
        }
        res.status(200).json({ message: 'Listing updated successfully', listing });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Delete listing by ID
export const deleteListing = async (req, res) => {
    try {
        const listing = await Listing.findByIdAndDelete(req.params.id);
        if (!listing) {
            return res.status(404).json({ message: 'Listing not found' });
        }
        res.status(200).json({ message: 'Listing deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};
