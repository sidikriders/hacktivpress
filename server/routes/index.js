var express = require('express');
var router = express.Router();
var userCont = require('../controllers/usersController')


router.get('/api/users', userCont.getAll)
router.get('/api/users/:id', userCont.getOne)
router.post('/api/users', userCont.create)
router.post('/auth/users/login', userCont.loginNya)
router.post('/auth/users/verify-token', userCont.verifyToken)
router.put('/api/users/:id', userCont.updateOne)
router.delete('/api/users/:id', userCont.deleteOne)

router.get('/articles', )
router.get('/articles/:id', )
router.post('/articles', )
router.put('/articles/:id', )
router.delete('/articles/:id', )

module.exports = router;
