const express = require('express')
const studentRouter = require('./student.route')
const router = express.Router()

router.use('/api', studentRouter)

module.exports = router