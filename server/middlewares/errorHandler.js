module.exports = (err, req, res, next) => {
  let code = 500
  let errMsg = []

  if (err.errCode) {
    code = err.errCode
    errMsg.push(err.msg)
  } else {
    errMsg.push(err)
  }

  res.status(code).json({
    code,
    errMsg,
  })
}
