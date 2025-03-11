const mongoose = require('mongoose');

const LeaderboardSchema = new mongoose.Schema({
  username: { type: String, required: true },
  score: { type: Number, required: true },
  subject: { type: String, required: true }
  //CHANGE DEPENDING ON YOUR SCHEME
  //i.e
  //firstname: { type: String, required: true }
  //surname: { type: String, required: true }
  //score: { type: Number, required: true }

}, { timestamps: true });

// Export schema to name leaderboard
module.exports = mongoose.model('LeaderboardEntry', LeaderboardSchema, 'Leaderboard');
