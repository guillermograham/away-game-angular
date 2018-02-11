const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  content: { type: String },
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User' }
},{
  timestamps: true
});

const barSchema = new mongoose.Schema({
  name: { type: String },
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User' },
  rating: Number,
  imageOne: String,
  address: {
    line1: { type: String },
    line2: String,
    city: { type: String },
    postcode: { type: String },
    lat: Number,
    lng: Number
  },
  website: String,
  telephone: String,
  description: String,
  fixtures: [{ type: mongoose.Schema.ObjectId, ref: 'Match' }],
  reviews: [ reviewSchema ]
});

module.exports = mongoose.model('Bar', barSchema);
