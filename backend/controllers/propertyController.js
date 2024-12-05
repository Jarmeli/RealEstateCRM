import Property from '../models/Property.js';

// Create a new property
export const createProperty = async (req, res) => {
    try {
        const { address, price, size, bedrooms, bathrooms } = req.body;
        const property = new Property({ address, price, size, bedrooms, bathrooms });
        await property.save();
        res.status(201).json({ message: 'Property created successfully', property });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Get all properties
export const getProperties = async (req, res) => {
    try {
        const properties = await Property.find();
        res.status(200).json(properties);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Get property by ID
export const getProperty = async (req, res) => {
    try {
        const property = await Property.findById(req.params.id);
        if (!property) {
            return res.status(404).json({ message: 'Property not found' });
        }
        res.status(200).json(property);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Update property by ID
export const updateProperty = async (req, res) => {
    try {
        const { address, price, size, bedrooms, bathrooms } = req.body;
        const property = await Property.findByIdAndUpdate(
            req.params.id,
            { address, price, size, bedrooms, bathrooms },
            { new: true }
        );
        if (!property) {
            return res.status(404).json({ message: 'Property not found' });
        }
        res.status(200).json({ message: 'Property updated successfully', property });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Delete property by ID
export const deleteProperty = async (req, res) => {
    try {
        const property = await Property.findByIdAndDelete(req.params.id);
        if (!property) {
            return res.status(404).json({ message: 'Property not found' });
        }
        res.status(200).json({ message: 'Property deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};
