const Account = require('../models/account')

class AccountController {
  static getAll(req, res, next) {
    const owner = req.loggedIn._id
    Account.find({ owner: owner })
      .then((results) => {
        res.status(200).json(results)
      })
      .catch(next)
  }

  static addAccount(req, res, next) {
    const data = {
      url: req.body.url,
      username: req.body.username,
      password: req.body.password,
      owner: req.loggedIn._id,
    }

    Account.create(data)
      .then((result) => {
        res.status(201).json({
          msg: 'New account added',
          result,
        })
      })
      .catch(next)
  }

  static getDetails(req, res, next) {
    const id = req.params.id

    Account.findById(id)
      .then((result) => {
        res.status(200).json(result)
      })
      .catch(next)
  }

  static deleteAccount(req, res, next) {
    const id = req.params.id
    const owner = req.loggedIn._id

    Account.findById(id)
      .then((result) => {
        if (!result) {
          throw { errCode: 404, msg: 'Account not found' }
        }
        if (String(result.owner) !== owner) {
          throw { errCode: 403, msg: 'You are not authorized' }
        } else {
          return Account.deleteOne({ _id: id })
        }
      })
      .then((response) => {
        res.status(200).json({
          msg: 'Account removed',
          response,
        })
      })
      .catch(next)
  }

  static editAccountDetails(req, res, next) {
    const id = req.params.id
    const owner = req.loggedIn._id
    const updatedData = {
      url: req.body.url,
      username: req.body.username,
      password: req.body.password,
      owner: owner,
    }

    Account.findById(id)
      .then((result) => {
        if (String(result.owner) !== owner) {
          throw { errCode: 403, msg: 'You are not authorized' }
        } else {
          return Account.findByIdAndUpdate(id, updatedData)
        }
      })
      .then((response) => {
        res.status(201).json({
          msg: 'Account updated',
          response,
        })
      })
      .catch(next)
  }
}

module.exports = AccountController
