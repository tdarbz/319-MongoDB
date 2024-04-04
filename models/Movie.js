// models/Movie.js
const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
  title: { type: String, required: true, index: true },
  director: { type: String, required: true },
  genre: { type: String, required: true, index: true },
  releaseYear: { type: Number, required: true },
  reviews: [{ user: String, rating: { type: Number, min: 1, max: 5 }, reviewText: String }]
});

module.exports = mongoose.model('Movie', MovieSchema);
