import express from 'express';
import { registerAgent, loginAgent } from '../controllers/agentLoginController.js'; // Import the controller functions

const router = express.Router();

// Route for agent registration (creating an agent login)
router.post('/register', registerAgent);

// Route for agent login
router.post('/login', loginAgent);

export default router;