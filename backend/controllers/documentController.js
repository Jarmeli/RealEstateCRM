import Document from '../models/Document.js';

// Create a new document
export const createDocument = async (req, res) => {
    try {
        const { title, description, agentId, propertyId, fileUrl } = req.body;

        if (!title || !agentId || !propertyId || !fileUrl) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        // Create a new document instance
        const newDocument = new Document({
            title,
            description,
            agentId,
            propertyId,
            fileUrl
        });

        // Save the document to the database
        await newDocument.save();

        res.status(201).json({
            message: 'Document created successfully',
            document: newDocument
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Get all documents
export const getDocuments = async (req, res) => {
    try {
        const documents = await Document.find();
        res.status(200).json(documents);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Get a single document by ID
export const getDocumentById = async (req, res) => {
    try {
        const { id } = req.params;

        const document = await Document.findById(id);
        if (!document) {
            return res.status(404).json({ message: 'Document not found' });
        }

        res.status(200).json(document);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Update a document by ID
export const updateDocument = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, agentId, propertyId, fileUrl } = req.body;

        const document = await Document.findById(id);
        if (!document) {
            return res.status(404).json({ message: 'Document not found' });
        }

        // Update document fields
        document.title = title || document.title;
        document.description = description || document.description;
        document.agentId = agentId || document.agentId;
        document.propertyId = propertyId || document.propertyId;
        document.fileUrl = fileUrl || document.fileUrl;

        await document.save();

        res.status(200).json({
            message: 'Document updated successfully',
            document
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Delete a document by ID
export const deleteDocument = async (req, res) => {
    try {
        const { id } = req.params;

        const document = await Document.findByIdAndDelete(id);
        if (!document) {
            return res.status(404).json({ message: 'Document not found' });
        }

        res.status(200).json({ message: 'Document deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};
