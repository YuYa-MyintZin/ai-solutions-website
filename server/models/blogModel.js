const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: String,
  content: String,
  image: String, // Save image path
});

module.exports = mongoose.model('Blog', blogSchema);
