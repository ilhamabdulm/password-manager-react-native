const router = require('express').Router()
const AccountController = require('../controllers/accountController')
const Authentication = require('../middlewares/authentication')

router.get('/', Authentication, AccountController.getAll)
router.get('/:id', Authentication, AccountController.getDetails)
router.post('/', Authentication, AccountController.addAccount)
router.delete('/:id', Authentication, AccountController.deleteAccount)
router.put('/:id', Authentication, AccountController.editAccountDetails)

module.exports = router
