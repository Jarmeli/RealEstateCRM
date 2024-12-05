import mongoose from 'mongoose';

const agentSchema = new mongoose.Schema({
    name: { type: String, required: true, maxlength: 100 },
    email: { type: String, required: true, maxlength: 100 },
    phoneNumber: { type: String, maxlength: 15 },
    officeLocation: { type: String, maxlength: 100 },
});

const Agent = mongoose.model('Agent', agentSchema);

export default Agent;
