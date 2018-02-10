const mongoose = require('mongoose');

const matchSchema = new mongoose.Schema({
  competition: { type: String, required: true },
  date: { type: Date, required: true },
  teams: { type: Array, required: true }
});

module.exports = mongoose.model('Match', matchSchema);
