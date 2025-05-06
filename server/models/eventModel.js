const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String, // image path
}, {
  timestamps: true
});

module.exports = mongoose.model('Event', eventSchema);
