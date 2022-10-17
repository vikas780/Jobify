const { StatusCodes } = require('http-status-codes')
const errorHandelerMiddleware = (err, req, res, next) => {
  const defaultError = {
    statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || 'Something went wrong try later',
  }
  //Missing Values Error
  if (err.name === 'ValidationError') {
    ;(defaultError.statusCode = StatusCodes.BAD_REQUEST),
      (defaultError.msg = Object.values(err.errors)
        .map((item) => item.message)
        .join(','))
  }
  if (err.code && err.code === 11000) {
    defaultError.statusCode = StatusCodes.BAD_REQUEST
    defaultError.msg = `${Object.keys(err.keyValue)} field has to be unique`
  }
  res.status(defaultError.statusCode).json({ msg: defaultError.msg })
}

module.exports = errorHandelerMiddleware
