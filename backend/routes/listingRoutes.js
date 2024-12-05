import express from 'express';
import { createListing, getListings, getListing, updateListing, deleteListing } from '../controllers/listingController.js';

const router = express.Router();

router.post('/', createListing);
router.get('/', getListings);
router.get('/:id', getListing);
router.put('/:id', updateListing);
router.delete('/:id', deleteListing);

export default router;
