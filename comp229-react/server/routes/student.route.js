const express = require('express')
const { getStudentResponse } = require('../controllers/student.controller')
const studentRouter = express.Router()

studentRouter
    .route('/student')
    .get(getStudentResponse)

module.exports = studentRouter