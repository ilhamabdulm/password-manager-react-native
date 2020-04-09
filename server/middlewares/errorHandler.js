module.exports = (err, req, res, next) => {
  let code = 500
  let errMsg = []

  if (err.errCode) {
    code = err.errCode
    errMsg.push(err.msg)
  } else {
    if (err.name === 'JsonWebTokenError') {
      code = 401
      errMsg.push('You are not authorized, missing access token')
    } else {
      errMsg.push(err)
    }
  }

  res.status(code).json({
    code,
    errMsg,
  })
}
