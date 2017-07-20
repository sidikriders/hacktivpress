const Article = require('../models/Articles');

function getAll(req, res) {
  Article.find({}, function(err, result) {
    if (err) res.send(err)
    else res.send(result)
  })
}

function getOne(req, res) {
  Article.findOne({
    _id: req.params.id
  }, function(err, result) {
    if (err) res.send(err)
    else res.send(result)
  })
}

function getByAuthor(req, res) {
  Article.find({
    author: req.params.username
  }, function(err, result) {
    if (err) res.send(err)
    else res.send(result)
  })
}

function getByCategory(req, res) {
  Article.find({
    category: req.params.category
  }, function(err, result) {
    if (err) res.send(err)
    else res.send(result)
  })
}

function create(req, res) {
  Article.create({
    title: req.body.title,
    content: req.body.content,
    author: req.body.username,
    category: req.body.category,
    createdAt: new Date()
  }, function(err, result) {
    if (err) res.send(err)
    else res.send(result)
  })
}

function updateOne(req, res) {
  Article.findOneAndUpdate({
    _id: req.params.id
  }, {
    title: req.body.title,
    content: req.body.content,
    category: req.body.category
  }, function(err, result) {
    if (err) res.send(err)
    else res.send(result)
  })
}

function deleteOne(req, res) {
  Article.remove({
    _id: req.params.id
  }, function(err, result) {
    if (err) res.send(err)
    else res.send(result)
  })
}

module.exports = {
  getAll,
  getOne,
  getByAuthor,
  getByCategory,
  create,
  updateOne,
  deleteOne
}
