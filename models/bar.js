const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  content: { type: String, required: true },
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
},{
  timestamps: true
});

const barSchema = new mongoose.Schema({
  name: { type: String, required: true },
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User' },
  rating: Number,
  imageOne: String,
  address: {
    line1: { type: String, required: true },
    line2: String,
    city: { type: String, required: true },
    postcode: { type: String, required: true },
    lat: Number,
    lng: Number
  },
  website: String,
  telephone: String,
  description: String,
  fixtures: [{ type: mongoose.Schema.ObjectId, ref: 'Match', required: true }],
  reviews: [ reviewSchema ]
});

module.exports = mongoose.model('Bar', barSchema);
