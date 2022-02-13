const express = require('express');

const studentController = require('../controllers/student')


//const router = express.Router()
const router = require('express-promise-router')()

router.get('/user/:ID/', studentController.getHome)

router.post('/user/:ID/search', studentController.postSearch)

router.get('/user/:ID/about', studentController.getAbout)

router.get('/user/:ID/courses', studentController.getCourses)

router.get('/user/:ID/teachers', studentController.getTeachers)

router.get('/user/:ID/category-view/:CATEGORY/', studentController.get_Category_view)

//router.get('/user/:ID/my-courses', studentController.getMyCourses)

//router.get('/user/:ID/profile-view', studentController.getProfileView)



module.exports = router