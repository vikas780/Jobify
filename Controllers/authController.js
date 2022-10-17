const User = require('../model/User')
const { StatusCodes } = require('http-status-codes')
const { BadRequestError } = require('../Errors/index')

const register = async (req, res) => {
  const { name, email, password } = req.body
  if (!name || !email || !password) {
    throw new BadRequestError('please provide all values')
  }
  const user = await User.create(req.body)
  const token = user.createJWT()

  res
    .status(StatusCodes.CREATED)
    .json({
      user: {
        email: user.email,
        lastName: user.lastName,
        location: user.location,
        name: user.name,
      },
      token,
    })
}
const login = async (req, res) => {
  res.send('Login Page h re bawa')
}
const updateUser = async (req, res) => {
  res.send('updateUser form here')
}

module.exports = {
  register,
  login,
  updateUser,
}
