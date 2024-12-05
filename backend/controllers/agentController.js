import Agent from '../models/Agent.js';

// Create a new agent
export const createAgent = async (req, res) => {
    try {
        const { name, email, phoneNumber, officeLocation } = req.body;
        if (!name || !email) {
            return res.status(400).json({ message: 'Name and Email are required' });
        }
        const agent = new Agent({ name, email, phoneNumber, officeLocation });
        await agent.save();
        res.status(201).json({ message: 'Agent created successfully', agent });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Get all agents
export const getAgents = async (req, res) => {
    try {
        const agents = await Agent.find();
        res.status(200).json(agents);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Get agent by ID
export const getAgent = async (req, res) => {
    try {
        const agent = await Agent.findById(req.params.id);
        if (!agent) {
            return res.status(404).json({ message: 'Agent not found' });
        }
        res.status(200).json(agent);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Update agent by ID
export const updateAgent = async (req, res) => {
    try {
        const { name, email, phoneNumber, officeLocation } = req.body;
        const agent = await Agent.findByIdAndUpdate(
            req.params.id,
            { name, email, phoneNumber, officeLocation },
            { new: true }
        );
        if (!agent) {
            return res.status(404).json({ message: 'Agent not found' });
        }
        res.status(200).json({ message: 'Agent updated successfully', agent });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Delete agent by ID
export const deleteAgent = async (req, res) => {
    try {
        const agent = await Agent.findByIdAndDelete(req.params.id);
        if (!agent) {
            return res.status(404).json({ message: 'Agent not found' });
        }
        res.status(200).json({ message: 'Agent deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};
