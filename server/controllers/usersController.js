const User = require('../models/Users');
const bcrypt = require('bcrypt');
var saltRounds = 10;
const jwt = require('jsonwebtoken');

function getAll(req, res) {
  User.find({}, function(err, result) {
    if (err) res.send(err)
    else res.send(result)
  })
}

function getOne(req, res) {
  User.findOne({
    _id: req.params.id
  }, function(err, result) {
    if (err) res.send(err)
    else res.send(result)
  })
}

function create(req, res) {
  let hash = bcrypt.hashSync(req.body.password, saltRounds);
  User.find({
    username: req.body.username
  }, function(err, resilt) {
    if (err) {
      res.send(err)
    } else if (resilt.length > 0) {
      res.send("failUsername")
    } else {
      User.create({
        name: req.body.name,
        username: req.body.username,
        password: hash
      }, function(erro, result) {
        if (erro) res.send(erro)
        else res.send("success")
      })
    }
  })
}

function loginNya(req, res) {
  User.find({
    username: req.body.username
  }, function(err, result) {
    if (err) {
      res.send(err)
    } else if (result.length < 1) {
      res.send("failUsername")
    } else if (bcrypt.compareSync(req.body.password, result[0].password)) {
      // let tokennya = jwt.sign({
      //   id: result[0]._id,
      //   username: result[0].username
      // }, "pressMachine")
      // let obeje = {
      //   name: result[0].name,
      //   token: tokennya
      // }
      res.send({
        name: result[0].name,
        token: jwt.sign({
          id: result[0]._id,
          username: result[0].username
        }, "pressMachine")
      })
    } else {
      res.send("failPassword")
    }
  })
}

function verifyToken(req, res) {
  res.send(jwt.verify(req.body.token, "pressMachine"))
}

function updateOne(req, res) {
  User.findOneAndUpdate({
    _id: req.params.id
  }, {
    name: req.body.name
  }, function(err, result) {
    if (err) res.send(err)
    else res.send(result)
  })
}

function deleteOne(req, res) {
  User.remove({
    _id: req.params.id
  }, function(err, result) {
    if (err) res.send(err)
    else res.send(result)
  })
}

module.exports = {
  getAll,
  getOne,
  create,
  loginNya,
  verifyToken,
  updateOne,
  deleteOne
}
