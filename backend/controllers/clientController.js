import Client from '../models/Client.js';

// Create a new client
export const createClient = async (req, res) => {
    try {
        const { name, address, phoneNumber, clientType } = req.body;
        if (!name) {
            return res.status(400).json({ message: 'Name is required' });
        }
        const client = new Client({ name, address, phoneNumber, clientType });
        await client.save();
        res.status(201).json({ message: 'Client created successfully', client });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Get all clients
export const getClients = async (req, res) => {
    try {
        const clients = await Client.find();
        res.status(200).json(clients);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Get client by ID
export const getClient = async (req, res) => {
    try {
        const client = await Client.findById(req.params.id);
        if (!client) {
            return res.status(404).json({ message: 'Client not found' });
        }
        res.status(200).json(client);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Update client by ID
export const updateClient = async (req, res) => {
    try {
        const { name, address, phoneNumber, clientType } = req.body;
        const client = await Client.findByIdAndUpdate(
            req.params.id,
            { name, address, phoneNumber, clientType },
            { new: true }
        );
        if (!client) {
            return res.status(404).json({ message: 'Client not found' });
        }
        res.status(200).json({ message: 'Client updated successfully', client });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Delete client by ID
export const deleteClient = async (req, res) => {
    try {
        const client = await Client.findByIdAndDelete(req.params.id);
        if (!client) {
            return res.status(404).json({ message: 'Client not found' });
        }
        res.status(200).json({ message: 'Client deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};
