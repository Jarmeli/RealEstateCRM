import express from 'express';
import { createDocument, getDocuments, getDocumentById, updateDocument, deleteDocument } from '../controllers/documentController.js';

const router = express.Router();

// Create a document
router.post('/', createDocument);

// Get all documents
router.get('/', getDocuments);

// Get a single document by ID
router.get('/:id', getDocumentById);

// Update a document by ID
router.put('/:id', updateDocument);

// Delete a document by ID
router.delete('/:id', deleteDocument);

export default router;
