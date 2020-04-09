const router = require('express').Router()
const User = require('./user')
const Account = require('./account')

router.use('/users', User)
router.use('/accounts', Account)

module.exports = router
