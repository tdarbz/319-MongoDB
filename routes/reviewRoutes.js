// routes/reviewRoutes.js
const express = require('express');
const router = express.Router();
const Review = require('../models/Review');

// Create a new review
router.post('/', async (req, res) => {
  const review = new Review(req.body);
  await review.save();
  res.status(201).send(review);
});

// Get all reviews
router.get('/', async (req, res) => {
  const reviews = await Review.find();
  res.send(reviews);
});

// Get a review by id
router.get('/:id', async (req, res) => {
  const review = await Review.findById(req.params.id);
  res.send(review);
});

// Update a review by id
router.patch('/:id', async (req, res) => {
  const review = await Review.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(review);
});

// Delete a review by id
router.delete('/:id', async (req, res) => {
  await Review.findByIdAndDelete(req.params.id);
  res.status(204).send();
});

module.exports = router;
