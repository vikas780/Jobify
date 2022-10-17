require('dotenv').config()
require('express-async-errors')
const express = require('express')
const connectDB = require('./DB/connect')

const app = express()

const authRouter = require('./Route/authRouter')
const jobsRouter = require('./Route/jobsRouter')

//middleware
const notFoundMiddleware = require('./middleware/NotFound')
const errorHandelerMiddleware = require('./middleware/ErrorHandeler')

app.use(express.json())
app.get('/', (req, res) => {
  res.send('Hello world')
})

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/jobs', jobsRouter)

app.use(notFoundMiddleware)
app.use(errorHandelerMiddleware)

const port = process.env.PORT || 5000
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, () =>
      console.log(`Server is listening on Port ${port}...`)
    )
  } catch (error) {
    console.log(error)
  }
}
start()
