const CustomApiError = require('./CustomApiError')
const { StatusCodes } = require('http-status-codes')
class BadReqestError extends CustomApiError {
  constructor(message) {
    super(message)
    this.statusCode = StatusCodes.BAD_REQUEST
  }
}
module.exports = BadReqestError
