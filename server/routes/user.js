const router = require('express').Router()
const UserController = require('../controllers/userController')
const Authentication = require('../middlewares/authentication')

router.get('/', Authentication, UserController.getUserInfo)
router.post('/register', UserController.register)
router.post('/login', UserController.login)

module.exports = router
