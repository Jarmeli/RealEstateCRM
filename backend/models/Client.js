import mongoose from 'mongoose';

const clientSchema = new mongoose.Schema({
    name: { type: String, required: true, maxlength: 100 },
    address: { type: String, maxlength: 200 },
    phoneNumber: { type: String, maxlength: 15 },
    clientType: { type: String, maxlength: 50 },
});

const Client = mongoose.model('Client', clientSchema);

export default Client;
