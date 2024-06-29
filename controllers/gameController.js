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

// Get unique teams with their game counts
const getUniqueTeams = async (req, res) => {
  try {
    const games = await Game.find();
    const teams = {};

    games.forEach(game => {
      teams[game.homeTeam] = (teams[game.homeTeam] || 0) + 1;
      teams[game.awayTeam] = (teams[game.awayTeam] || 0) + 1;
    });

    res.json(teams);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
};

// Get unique venues with their game counts
const getUniqueVenues = async (req, res) => {
  try {
    const games = await Game.find();
    const venues = {};

    games.forEach(game => {
      const venueName = `${game.venue.name}, ${game.venue.city}`;
      venues[venueName] = (venues[venueName] || 0) + 1;
    });

    res.json(venues);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
};

// Get games by venue
const getGamesByVenue = async (req, res) => {
  const { venueName } = req.params;
  try {
    const [venue, city] = venueName.split(', ');
    const games = await Game.find({
      'venue.name': venue,
      'venue.city': city
    });
    res.json(games);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
};

module.exports = { getAllGames, getGamesByTeam, getUniqueTeams, getUniqueVenues, getGamesByVenue };

