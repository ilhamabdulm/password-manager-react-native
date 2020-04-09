const User = require('../models/user')
const { generateToken } = require('../helpers/jwt')
const { comparePass } = require('../helpers/bcrypt')

class UserController {
  static register(req, res, next) {
    const userData = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    }

    User.create(userData)
      .then((result) => {
        res.status(201).json({
          userData: result,
          message: 'Registration Success',
          status: 201,
        })
      })
      .catch(next)
  }

  static login(req, res, next) {
    const userData = {
      email: req.body.email,
      password: req.body.password,
    }

    User.findOne({ email: userData.email })
      .then((result) => {
        if (!result) {
          throw { errCode: 401, msg: 'Invalid email/password' }
        } else {
          const compare = comparePass(userData.password, result.password)
          if (!compare) {
            throw { errCode: 401, msg: 'Invalid email/password' }
          } else {
            const token = generateToken({
              _id: result._id,
              email: result.email,
            })
            res.status(200).json({
              message: 'Login success',
              token: token,
              status: 200,
            })
          }
        }
      })
      .catch(next)
  }
}

module.exports = UserController
