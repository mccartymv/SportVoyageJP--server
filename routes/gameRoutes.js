const express = require('express');
const { getAllGames, getGamesByTeam, getUniqueTeams, getUniqueVenues } = require('../controllers/gameController');

const router = express.Router();

// Routes
router.get('/games', getAllGames);
router.get('/games/team/:teamName', getGamesByTeam);
router.get('/games/venue/:venueName', getGamesByVenue);
router.get('/teams', getUniqueTeams);
router.get('/venues', getUniqueVenues);

module.exports = router;
