const express = require('express');

const studentController = require('../controllers/student')


//const router = express.Router()
const router = require('express-promise-router')()

router.get('/user/:ID/', studentController.getHome)

router.post('/user/:ID/search/:START', studentController.postSearch)

router.get('/user/:ID/about', studentController.getAbout)

router.get('/user/:ID/courses', studentController.getCourses)

router.get('/user/:ID/teachers', studentController.getTeachers)

router.get('/user/:ID/category-view/:CATEGORY/:START', studentController.get_Category_view)

router.get('/user/:ID/course-view/:CRSID', studentController.get_course_view)
router.get('/user/:ID/course-inside-view/:CRSID', studentController.getSingleCourseInsideView)
router.get('/user/:ID/course-inside-view/:CRSID/:Module_ID', studentController.getSingleCourseInsideModuleView)
router.get('/user/:ID/course-inside-view/:CRSID/:Module_ID/video/:VideoContent_ID', studentController.getSingleCourseVideoContentView)
router.get('/user/:ID/course-inside-view/:CRSID/:Module_ID/quiz/:SERIAL', studentController.getSingleCourseQuizContentView)
router.post('/user/:ID/course-inside-view/:CRSID/:Module_ID/quiz/:SERIAL', studentController.postSingleCourseQuizContentView)
    //router.get('/user/:ID/my-courses', studentController.getMyCourses)

router.get('/user/:ID/profile-view', studentController.getProfileView)
router.get('/user/:ID/profile-view/edit', studentController.editProfileView);
router.post('/user/:ID/profile-view/edit', studentController.PostEditProfileView);




module.exports = router