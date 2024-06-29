const express = require('express');
const { getAllGames, getGamesByTeam, getUniqueTeams, getUniqueVenues, getGamesByVenue } = require('../controllers/gameController');

const router = express.Router();

// Routes
router.get('/games', getAllGames);
router.get('/games/team/:teamName', getGamesByTeam);
router.get('/teams', getUniqueTeams);
router.get('/venues', getUniqueVenues);
router.get('/games/venue/:venueName', getGamesByVenue);

module.exports = router;
