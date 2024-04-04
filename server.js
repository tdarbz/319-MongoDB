const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// Connect to MongoDB update
mongoose.connect('mongodb+srv://tdarby:password1234@perscholas.sy8txne.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true });

// Middleware
app.use(bodyParser.json());

// Import routes
const userRoutes = require('./routes/userRoutes');
const movieRoutes = require('./routes/movieRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
app.use('/users', userRoutes);
app.use('/movies', movieRoutes);
app.use('/reviews', reviewRoutes);

// Start server
app.listen(3000, () => console.log('Server started on port 3000'));
