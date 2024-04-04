// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Create a new user
router.post('/', async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.status(201).send(user);
});

// Get all users
router.get('/', async (req, res) => {
  const users = await User.find();
  res.send(users);
});

// Get a user by id
router.get('/:id', async (req, res) => {
  const user = await User.findById(req.params.id);
  res.send(user);
});

// Update a user by id
router.patch('/:id', async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(user);
});

// Delete a user by id
router.delete('/:id', async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.status(204).send();
});

module.exports = router;
