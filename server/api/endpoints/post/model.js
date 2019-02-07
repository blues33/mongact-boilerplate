const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  author: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
    unique: true,
  },
  categories: {
    type: Array,
  },
});

module.exports = mongoose.model('post', PostSchema);
