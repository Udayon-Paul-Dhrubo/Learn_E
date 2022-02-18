const express = require('express');

const teacherController = require('../controllers/teacher')


//const router = express.Router()
const router = require('express-promise-router')()

router.get('/', teacherController.getHome)

router.get('/about', )

router.get('/user/:ID/add-course', teacherController.get_add_course)





module.exports = router