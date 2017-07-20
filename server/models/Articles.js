const mongoose = require('mongoose');

var articleShema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  category: [{
    type: String,
  }],
  createdAt: {
    type: String,
    required: true
  }
})

var Article = mongoose.model('Article', articleShema)

module.exports = Article;
