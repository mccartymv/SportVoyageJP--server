const Game = require('../models/Game');

// Get all games
const getAllGames = async (req, res) => {
  try {
    const games = await Game.find({});
    res.json(games);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
};

// Get games by team
const getGamesByTeam = async (req, res) => {
  const { teamName } = req.params;
  try {
    const games = await Game.find({ $or: [{ homeTeam: teamName }, { awayTeam: teamName }] });
    res.json(games);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
};

module.exports = {
  getAllGames,
  getGamesByTeam,
};
