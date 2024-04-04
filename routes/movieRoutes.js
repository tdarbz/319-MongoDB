// routes/movieRoutes.js
const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');

// Create a new movie
router.post('/', async (req, res) => {
  const movie = new Movie(req.body);
  await movie.save();
  res.status(201).send(movie);
});

// Get all movies
router.get('/', async (req, res) => {
  const movies = await Movie.find();
  res.send(movies);
});

// Get a movie by id
router.get('/:id', async (req, res) => {
  const movie = await Movie.findById(req.params.id);
  res.send(movie);
});

// Update a movie by id
router.patch('/:id', async (req, res) => {
  const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(movie);
});

// Delete a movie by id
router.delete('/:id', async (req, res) => {
  await Movie.findByIdAndDelete(req.params.id);
  res.status(204).send();
});

module.exports = router;
