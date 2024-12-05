import mongoose from 'mongoose';

const agentLoginSchema = new mongoose.Schema({
    agentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Agent', required: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

const AgentLogin = mongoose.model('AgentLogin', agentLoginSchema);

export default AgentLogin;
