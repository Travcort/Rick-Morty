// Express Router
import express from 'express';
const router = express.Router();

// Controllers for the Routes
import { base, getLocation, getCharacter, getEpisode } from '../controllers/morty.controller.js';

// Routes
router.get('/', base);
router.get('/character/:id', getCharacter);
router.get('/location/:id', getLocation);
router.get('/episode/:id', getEpisode);

export default router;