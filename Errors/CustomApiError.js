class CustomApiError extends Error {
  constructor(message) {
    super(message)
    this.statusCode = StatusCodes.BAD_REQUEST
  }
}
module.exports = CustomApiError
