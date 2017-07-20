var express = require('express');
var router = express.Router();
var userCont = require('../controllers/usersController')
var artCont = require('../controllers/articlesController')

router.get('/api/users', userCont.getAll)
router.get('/api/users/:id', userCont.getOne)
router.post('/api/users', userCont.create)
router.post('/auth/users/login', userCont.loginNya)
router.post('/auth/users/verify-token', userCont.verifyToken)
router.put('/api/users/:id', userCont.updateOne)
router.delete('/api/users/:id', userCont.deleteOne)

router.get('/api/articles', artCont.getAll)
router.get('/api/articles/:id', artCont.getOne)
router.get('/api/articles/by-author/:username', artCont.getByAuthor)
router.get('/api/articles/by-category/:category', artCont.getByCategory)
router.post('/api/articles', artCont.create)
router.put('/api/articles/:id', artCont.updateOne)
router.delete('/api/articles/:id', artCont.deleteOne)

module.exports = router;
