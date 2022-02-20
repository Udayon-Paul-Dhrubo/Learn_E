const express = require('express');

const teacherController = require('../controllers/teacher')


//const router = express.Router()
const router = require('express-promise-router')()

router.get('/user/:ID/', teacherController.getHome)

router.get('/user/:ID/about', teacherController.getAbout)

router.get('/user/:ID/courses', teacherController.getCourses)

router.get('/user/:ID/teachers', teacherController.getTeachers)

router.get('/user/:ID/profile-view', teacherController.getProfileView)
router.get('/user/:ID/profile-view/edit', teacherController.editProfileView);
router.post('/user/:ID/profile-view/edit', teacherController.PostEditProfileView);


/* */

router.post('/user/:ID/search/:START', teacherController.postSearch)

router.get('/user/:ID/category-view/:CATEGORY/:START', teacherController.get_Category_view)

router.get('/user/:ID/course-view/:CRSID', teacherController.get_course_view)

router.get('/user/:ID/add-course/pre', teacherController.get_pre_add_course)
router.post('/user/:ID/add-course/pre', teacherController.post_pre_add_course)


router.get('/user/:ID/add-course/:CRSID', teacherController.get_add_course)
router.post('/user/:ID/add-course/:CRSID/search-teacher', teacherController.post_search_add_course)
router.get('/user/:ID/add-course/:CRSID/add-teacher/show-teachers', teacherController.get_add_course_add_teacher_show)
router.get('/user/:ID/add-course/:CRSID/add-teacher/:TEACHID', teacherController.get_add_course_add_teacher)

//router.get('/user/:ID/add-course/:CRSID/add-quiz', teacherController.get_add_course_add_course)
//router.post('/user/:ID/add-course/:CRSID/add-quiz', teacherController.post_add_course_add_course)














module.exports = router