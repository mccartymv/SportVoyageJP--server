const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
  gameId: { type: String, required: true, unique: true },
  startTime: { type: Date, required: true }, // Update from 'date' to 'startTime'
  homeTeam: { type: String, required: true },
  awayTeam: { type: String, required: true },
  venue: { // Change venue to an object
    name: { type: String, required: true },
    city: { type: String, required: true },
    coordinates: { type: String, required: true }
  }
});

module.exports = mongoose.model('Game', gameSchema);
