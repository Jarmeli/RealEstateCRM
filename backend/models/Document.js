import mongoose from 'mongoose';

const documentSchema = new mongoose.Schema({
    title: { type: String, required: true, maxlength: 200 },
    filePath: { type: String, required: true },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'Agent', required: true },
    associatedClient: { type: mongoose.Schema.Types.ObjectId, ref: 'Client' },
});

const Document = mongoose.model('Document', documentSchema);

export default Document;
