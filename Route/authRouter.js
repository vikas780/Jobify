const express = require('express')
const router = express.Router()

const { register, login, updateUser } = require('../controllers/authController')

router.post('/register', register)
router.post('/login', login)
router.patch('/updateUser', updateUser)

module.exports = router
