// models/Review.js
const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
  user: { type: String, required: true },
  movie: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie', required: true },
  rating: { type: Number, min: 1, max: 5, required: true },
  reviewText: { type: String, required: true }
});

module.exports = mongoose.model('Review', ReviewSchema);
