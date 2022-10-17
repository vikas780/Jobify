const mongoose = require('mongoose')

const connectDB = (url) => {
  return mongoose.connect(url) // it returns a function so when we invoke this function we have to use async function
}

module.exports = connectDB
