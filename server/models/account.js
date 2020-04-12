const { model, Schema, Types } = require('mongoose')

const accountSchema = new Schema({
  url: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  owner: {
    type: Types.ObjectId,
    ref: 'User',
  },
  logo: {
    type: String,
  },
})

const Account = model('Account', accountSchema)

module.exports = Account
