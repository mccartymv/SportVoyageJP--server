const express = require('express');
const { getAllGames, getGamesByTeam } = require('../controllers/gameController');
const router = express.Router();

// Routes
router.get('/games', getAllGames);
router.get('/games/team/:teamName', getGamesByTeam);

module.exports = router;
