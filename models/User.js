// models/User.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true } // Consider using bcrypt to hash passwords
});

module.exports = mongoose.model('User', UserSchema);
