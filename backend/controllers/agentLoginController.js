import Agent from '../models/Agent.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// Login agent
export const agentLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required' });
        }

        // Find the agent by email
        const agent = await Agent.findOne({ email });
        if (!agent) {
            return res.status(404).json({ message: 'Agent not found' });
        }

        // Compare the password
        const isMatch = await bcrypt.compare(password, agent.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Generate JWT token
        const token = jwt.sign({ id: agent._id, email: agent.email }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({
            message: 'Login successful',
            token,
            agent: {
                id: agent._id,
                name: agent.name,
                email: agent.email,
                officeLocation: agent.officeLocation
            }
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};
