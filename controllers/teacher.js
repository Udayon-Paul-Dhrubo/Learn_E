const UserRepository = require('../repository/user-info').UserRepository;
const userRepository = new UserRepository();

const Category_Course_Teacher_Info_Repository = require('../repository/category-course-info').Category_Course_Teacher_Info_Repository;
const infoRepository = new Category_Course_Teacher_Info_Repository();



/* to show teacher search req */
let searched_teacers = [];
/* */

exports.getHome = async(req, res, next) => {

    const userId = req.params.ID;

    const category_repo = await infoRepository.getTopCategories();
    console.log(category_repo);

    const course_repo = await infoRepository.getTopCourses();
    console.log(course_repo);

    const teacher_repo = await infoRepository.getTopTeachers();
    console.log(teacher_repo);

    const user_repo = await userRepository.findById(userId);
    console.log(user_repo);

    if (category_repo.success && category_repo.success && user_repo.success) {
        return res.render('home/home-view', {
            pageTitle: 'Home',
            path: '/home',
            isStudent: 'false',
            logged_in: 'true',
            categories: category_repo.data,
            courses: course_repo.data,
            teachers: teacher_repo.data,
            userInfo: user_repo.data[0]
        })
    }

    res.render('home/home-view', {
        pageTitle: 'Home',
        path: '/home',
        isStudent: 'true',
        logged_in: 'true',
        categories: [],
        courses: [],
        teachers: [],
        userInfo: user_repo.data[0]
    })

}


exports.getAbout = async(req, res, next) => {

    const userId = req.params.ID;

    const user_repo = await userRepository.findById(userId);
    console.log(user_repo);

    const testimonial_repo = await infoRepository.getTestimonials_about_learnE();
    console.log(testimonial_repo);

    if (testimonial_repo.success && user_repo.success) {
        return res.render('home/about-view.ejs', {
            pageTitle: 'About',
            path: '/about',
            isStudent: 'false',
            logged_in: 'true',
            testimonials: testimonial_repo.data,
            userInfo: user_repo.data[0]
        })
    }

    const url = '/teacher/user/' + userId + '/';
    res.redirect(url)

}

exports.getCourses = async(req, res, next) => {

    const userId = req.params.ID;

    const user_repo = await userRepository.findById(userId);
    console.log(user_repo);

    const category_repo = await infoRepository.getTopCategories();
    console.log(category_repo);

    if (category_repo.success && user_repo.success) {
        return res.render('home/courses-view.ejs', {
            pageTitle: 'Courses',
            path: '/courses',
            isStudent: 'false',
            logged_in: 'true',
            categories: category_repo.data,
            userInfo: user_repo.data[0]
        })
    }

    const url = '/teacher/user/' + userId + '/';
    res.redirect(url)

}

exports.getTeachers = async(req, res, next) => {

    const userId = req.params.ID;

    const user_repo = await userRepository.findById(userId);
    console.log(user_repo);

    const teacher_repo = await infoRepository.getTopTeachers();
    console.log(teacher_repo);

    if (teacher_repo.success && user_repo.success) {
        return res.render('home/teacher-view.ejs', {
            pageTitle: 'Teachers',
            path: '/teachers',
            isStudent: 'false',
            logged_in: 'true',
            teachers: teacher_repo.data,
            userInfo: user_repo.data[0]
        })
    }

    const url = '/teacher/user/' + userId + '/';
    res.redirect(url)

}


/* */

exports.postSearch = async(req, res, next) => {

    const userId = req.params.ID;
    const user_repo = await userRepository.findById(userId);
    console.log(user_repo);

    let start = req.params.START;


    let searchReq = req.body.search_bar_req;
    console.log(searchReq);

    searchReq = searchReq.toLowerCase();

    let req_search = '%' + searchReq + '%';
    console.log(req_search)

    const search_repo = await infoRepository.getCoursesofSearch(req_search);
    console.log(search_repo);

    if (search_repo.success) {
        return res.render('home/course-list.ejs', {
            pageTitle: 'Courses',
            path: '/courses',
            isStudent: 'false',
            logged_in: 'true',
            req: searchReq,
            userInfo: user_repo.data[0],
            courses: search_repo.data,
            fromCategory: 'false',
            fromSearch: 'true',
            start: start
        })
    }


    let url = '/teacher/user/' + userId + '/';
    res.redirect(url);
}


exports.get_Category_view = async(req, res, next) => {

    const userId = req.params.ID;
    const user_repo = await userRepository.findById(userId);
    console.log('here : ', user_repo);

    const reqCategory = req.params.CATEGORY;
    console.log('here : ', reqCategory);

    let start = req.params.START;
    console.log(start);

    const search_repo = await infoRepository.getCoursesOfCatagory(reqCategory);
    console.log(search_repo);

    if (user_repo.success && search_repo.success) {
        return res.render('home/course-list.ejs', {
            pageTitle: 'Courses',
            path: '/profile',
            isStudent: 'false',
            logged_in: 'true',
            req: reqCategory,
            userInfo: user_repo.data[0],
            courses: search_repo.data,
            fromCategory: 'true',
            fromSearch: 'false',
            start: start
        })
    }

    let url = '/teacher/user/' + userId + '/';
    res.redirect(url);

}

exports.getProfileView = async(req, res, next) => {
    const userId = req.params.ID;
    const user_repo = await userRepository.findById(userId);
    console.log(user_repo);
    const coursesTaken = await userRepository.coursesCreatedByIndividualTeacher(userId);
    console.log(coursesTaken);


    if (user_repo.success) {
        return res.render('profile/profile-view.ejs', {
            pageTitle: 'My Profile',
            path: '/profile',
            isStudent: 'false',
            logged_in: 'true',
            editReq: 'false',
            userInfo: user_repo.data[0],
            myCoursesReq: 'true',
            courses: coursesTaken.data,

        })
    }
}


exports.PostEditProfileView = async(req, res, next) => {
    const userId = req.params.ID;
    let user_repo = await userRepository.findById(userId);
    console.log(user_repo);
    const coursesTaken = await userRepository.coursesCreatedByIndividualTeacher(userId);

    const name = req.body.name;
    console.log("new name :", name)
    const email = req.body.email;
    console.log("new email :", email)
    const pass = req.body.pass;
    console.log("new password :", pass)
    const re_pass = req.body.re_pass;
    if (req.files) console.log("some file was uploaded ");
    else console.log("no file found");
    var file = req.files.uploaded_image;
    var img_name = file.name;
    console.log(img_name);
    file.mv('public/img/' + file.name);

    const updateUser = await userRepository.updateUser(userId, name, email, pass, img_name);
    // console.log(updateUser.data.success);
    user_repo = await userRepository.findById(userId);

    if (user_repo.success) {
        return res.render('profile/profile-view.ejs', {
            pageTitle: 'My Profile',
            path: '/profile',
            isStudent: 'false',
            logged_in: 'true',
            editReq: 'false',
            userInfo: user_repo.data[0],
            myCoursesReq: 'true',
            courses: coursesTaken.data,

        })
    }
}
exports.createNewModule = async(req, res, next) => {
    console.log("CREATING A NEW MODULE");
    const userId = req.params.ID;
    const user_repo = await userRepository.findById(userId);
    console.log('here : ', user_repo);

    const courseId = req.params.CRSID;
    console.log('here : ', courseId);
    const course_repo = await infoRepository.findCourseById(courseId);
    //firgure out a new module ID
    const lastInsertedModule = await infoRepository.getLastInsertedModuleID();
    console.log("new Module Id :", lastInsertedModule);
    let newModule_ID = lastInsertedModule.data[0].Module_ID + 1;
    console.log("new Module Id :", newModule_ID);
    //create a new module
    //insert into module table
    const newModule = await infoRepository.addNewModule(newModule_ID, userId);




    //find out the serial it needs to be added
    const serial = await infoRepository.findSerialOfLastInsertedModuleOfCourse(courseId);
    console.log(serial);
    let serialNext = serial.data[0].Serial + 1;
    console.log("serial to be added : ", serialNext)
        //insert into course modules
    const ModuleAddedToCourse = await infoRepository.addModuleToCourse(courseId, newModule_ID, serialNext);
    let url = '/teacher/user/' + userId + '/add-course/' + courseId + '/' + newModule_ID + '/';
    res.redirect(url);
}
exports.editProfileView = async(req, res, next) => {
    const userId = req.params.ID;
    const user_repo = await userRepository.findById(userId);
    console.log(user_repo);
    const coursesTaken = await userRepository.coursesCreatedByIndividualTeacher(userId);


    if (user_repo.success) {
        return res.render('profile/profile-view.ejs', {
            pageTitle: 'My Profile',
            path: '/profile',
            isStudent: 'false',
            logged_in: 'true',
            editReq: 'true',
            userInfo: user_repo.data[0],
            myCoursesReq: 'false',
            courses: coursesTaken.data,

        })

    }
}


exports.get_course_view = async(req, res, next) => {
    const userId = req.params.ID;
    const user_repo = await userRepository.findById(userId);
    console.log('here : ', user_repo);

    const courseId = req.params.CRSID;
    console.log('here : ', courseId);
    const course_repo = await infoRepository.findCourseById(courseId);
    console.log('here : ', course_repo);
    const courseTeacher_repo = await infoRepository.findCourseTeacherById(courseId);
    console.log('here : ', courseTeacher_repo);
    const content_repo = await infoRepository.getContentsOfCourse(courseId);
    console.log(content_repo);
    const review_repo = await infoRepository.findReviewsOfCourse(courseId);
    console.log("REVIEWS :", review_repo);
    const TopCourse_repo = await infoRepository.getTopCourses();
    console.log(TopCourse_repo);


    if (user_repo.success && course_repo.success && content_repo.success) {
        return res.render('course/course-view.ejs', {
            pageTitle: 'Course',
            path: '/course',
            isStudent: 'false',
            logged_in: 'true',
            userInfo: user_repo.data[0],
            course: course_repo.data[0],
            teachers: courseTeacher_repo.data,
            reviews: review_repo.data,
            topCourses: TopCourse_repo.data,
            contents: content_repo.data,
            weekView: 'false'

        })
    }

    let url = '/teacher/user/' + userId + '/';
    res.redirect(url);

}


exports.get_pre_add_course = async(req, res, next) => {
    const userId = req.params.ID;
    const user_repo = await userRepository.findById(userId);
    console.log(user_repo);

    if (user_repo.success) {
        return res.render('course/add-a-course-view.ejs', {
            pageTitle: 'Add Course',
            path: '/addCourse',
            isStudent: 'false',
            logged_in: 'true',
            userInfo: user_repo.data[0],
            create_button: 'false', ////
            weekView: 'false'
        })
    }

    let url = '/teacher/user/' + userId + '/';
    res.redirect(url);


}


exports.post_pre_add_course = async(req, res, next) => {
    const userId = req.params.ID;
    const id_repo = await infoRepository.last_course_id_inserted();
    console.log(id_repo)
    const new_id = id_repo.data[0].id + 1;
    console.log(new_id)

    const title = req.body.course_name;
    console.log(title);

    const course_repo = await infoRepository.add_new_course(new_id, title);
    console.log(course_repo);

    const add_repo = await infoRepository.add_teacher_into_new_course(userId, new_id);
    console.log(add_repo);

    let url = '/teacher/user/' + userId + '/add-course/' + new_id;
    res.redirect(url);
}


exports.get_add_course = async(req, res, next) => {
    const userId = req.params.ID;
    const courseId = req.params.CRSID;

    const user_repo = await userRepository.findById(userId);
    const Module_repo = await infoRepository.findModulesByCourseId(courseId);
    console.log(Module_repo);


    const course_repo = await infoRepository.findCourseById(courseId);
    //find existing modules, if any. 


    const teachers_repo = await infoRepository.findCourseTeacherById(courseId);



    if (user_repo.success && course_repo.success) {
        return res.render('course/add-a-course-view.ejs', {
            pageTitle: 'Add Course',
            path: '/addCourse',
            isStudent: 'false',
            logged_in: 'true',
            userInfo: user_repo.data[0],
            courseInfo: course_repo.data[0],
            create_button: 'true',
            teachers_in: teachers_repo.data,
            req_teachers: [],
            req_teachers_show: 'false',
            weekView: 'false',
            modules: Module_repo.data

        })
    }

    let url = '/teacher/user/' + userId + '/';
    res.redirect(url);
}
exports.getSingleCourseInsideModuleView = async(req, res, next) => {
    console.log("single course inside view")
    const userId = req.params.ID;
    const user_repo = await userRepository.findById(userId);


    const courseId = req.params.CRSID;
    const moduleId = req.params.Module_ID;

    const course_repo = await infoRepository.findCourseById(courseId);

    const Module_repo = await infoRepository.findModulesByCourseId(courseId);

    const VideoContent_repo = await infoRepository.findContentsOfSingleModule(moduleId);

    const Module = await infoRepository.findModuleByModule_ID(moduleId, courseId);
    console.log(Module.data[0]);
    //  const content_repo = await infoRepository.findContentsOfSingleModule(moduleId);
    // const QuizContent_repo = await infoRepository.findQuizContentIDByModule_ID(moduleId);


    const QuizContent_repo = await infoRepository.findQuizContentIDByModule_ID(moduleId);
    console.log('quiz: ', QuizContent_repo.data[0]);
    const teachers_repo = await infoRepository.findCourseTeacherById(courseId);

    if (user_repo.success && course_repo.success) {
        return res.render('course/add-a-course-view.ejs', {
            pageTitle: 'Course',
            path: '/insideCourse',
            isStudent: 'false',
            create_button: 'true',
            logged_in: 'true',
            weekView: 'true',
            videoView: 'false',
            quizView: 'false',
            gradeView: 'false',
            userInfo: user_repo.data[0],
            courseInfo: course_repo.data[0],
            modules: Module_repo.data,
            thisModule: Module.data[0],
            VideoContents: VideoContent_repo.data,
            QuizContent: QuizContent_repo.data,
            teachers_in: teachers_repo.data,
            req_teachers: [],
            req_teachers_show: 'false',
            add_video_button: 'false',
            add_quiz_button: 'false'

        })
    }
}

exports.post_search_add_course = async(req, res, next) => {
    const userId = req.params.ID;
    const courseId = req.params.CRSID;
    const user_repo = await userRepository.findById(userId);


    const course_repo = await infoRepository.findCourseById(courseId);


    const teachers_repo = await infoRepository.findCourseTeacherById(courseId);


    let req_src = req.body.search_bar_req;
    console.log(req_src);

    req_src = '%' + req_src + '%';

    const req_src_teacher_repo = await infoRepository.searchTeacherByTeacherName(req_src);
    console.log('req-search : ', req_src_teacher_repo);

    let url = '';

    if (user_repo.success && course_repo.success && req_src_teacher_repo.success) {
        if (req_src_teacher_repo.data.length > 0) searched_teacers = req_src_teacher_repo.data;
        else searched_teacers = [];

        console.log('here in post : ', searched_teacers);

        url = '/teacher/user/' + userId + '/add-course/' + courseId + '/add-teacher/show-teachers';
        return res.redirect(url);
    }
    url = '/teacher/user/' + userId + '/';
    res.redirect(url);

}


exports.get_add_course_add_teacher_show = async(req, res, next) => {

    const userId = req.params.ID;
    const courseId = req.params.CRSID;

    const user_repo = await userRepository.findById(userId);


    const course_repo = await infoRepository.findCourseById(courseId);


    const teachers_repo = await infoRepository.findCourseTeacherById(courseId);


    console.log('here in get : ', searched_teacers);


    if (user_repo.success && course_repo.success) {
        return res.render('course/add-a-course-view.ejs', {
            pageTitle: 'Add Course',
            path: '/addCourse',
            isStudent: 'false',
            logged_in: 'true',
            userInfo: user_repo.data[0],
            courseInfo: course_repo.data[0],
            create_button: 'true',
            teachers_in: teachers_repo.data,
            req_teachers: searched_teacers,
            req_teachers_show: 'true',
            weekView: 'false'
        })
    }

    url = '/teacher/user/' + userId + '/';
    res.redirect(url);


}





exports.get_add_course_add_teacher = async(req, res, next) => {

    const userId = req.params.ID;
    const courseId = req.params.CRSID;
    const new_teacher_id = req.params.TEACHID;

    console.log('course id : ', courseId);
    console.log('new_teacher_id : ', new_teacher_id);


    const temp_repo = await infoRepository.add_teacher_into_new_course(new_teacher_id, courseId);
    console.log(temp_repo);

    let url = '/teacher/user/' + userId + '/add-course/' + courseId;
    res.redirect(url);

}


exports.get_add_course_add_video = async(req, res, next) => {

    const userId = req.params.ID;
    const courseId = req.params.CRSID;
    const moduleId = req.params.Module_ID;

    const user_repo = await userRepository.findById(userId);
    const course_repo = await infoRepository.findCourseById(courseId);

    const teachers_repo = await infoRepository.findCourseTeacherById(courseId);
    const Module_repo = await infoRepository.findModulesByCourseId(courseId);

    const Module = await infoRepository.findModuleByModule_ID(moduleId, courseId);
    console.log(Module.data[0]);
    const VideoContent_repo = await infoRepository.findContentsOfSingleModule(moduleId);
    const QuizContent_repo = await infoRepository.findQuizContentIDByModule_ID(moduleId);

    if (user_repo.success && course_repo.success) {
        return res.render('course/add-a-course-view.ejs', {
            pageTitle: 'Course',
            path: '/insideCourse',
            isStudent: 'false',
            create_button: 'true',
            logged_in: 'true',
            weekView: 'true',
            videoView: 'false',
            quizView: 'false',
            gradeView: 'false',
            userInfo: user_repo.data[0],
            courseInfo: course_repo.data[0],
            modules: Module_repo.data,
            thisModule: Module.data[0],
            VideoContents: VideoContent_repo.data,
            QuizContent: QuizContent_repo.data[0],
            teachers_in: teachers_repo.data,
            req_teachers: [],
            req_teachers_show: 'false',
            add_video_button: 'true',
            add_quiz_button: 'false'

        })
    }

    let url = '/teacher/user/' + userId + '/add-course/' + courseId;
    res.redirect(url);

}

exports.post_add_course_add_video = async(req, res, next) => {
    const userId = req.params.ID;
    const courseId = req.params.CRSID;
    const moduleId = req.params.Module_ID;

    let url = '/teacher/user/' + userId + '/add-course/' + courseId + '/' + moduleId;
    res.redirect(url);
}



exports.get_add_course_add_quiz = async(req, res, next) => {

    const userId = req.params.ID;
    const courseId = req.params.CRSID;
    const moduleId = req.params.Module_ID;

    const user_repo = await userRepository.findById(userId);
    const course_repo = await infoRepository.findCourseById(courseId);
    const teachers_repo = await infoRepository.findCourseTeacherById(courseId);
    const Module_repo = await infoRepository.findModulesByCourseId(courseId);

    const Module = await infoRepository.findModuleByModule_ID(moduleId, courseId);
    console.log(Module.data[0]);
    const VideoContent_repo = await infoRepository.findContentsOfSingleModule(moduleId);
    const QuizContent_repo = await infoRepository.findQuizContentIDByModule_ID(moduleId);

    if (user_repo.success && course_repo.success) {
        return res.render('course/add-a-course-view.ejs', {
            pageTitle: 'Course',
            path: '/insideCourse',
            isStudent: 'false',
            create_button: 'true',
            logged_in: 'true',
            weekView: 'true',
            videoView: 'false',
            quizView: 'false',
            gradeView: 'false',
            userInfo: user_repo.data[0],
            courseInfo: course_repo.data[0],
            modules: Module_repo.data,
            thisModule: Module.data[0],
            VideoContents: VideoContent_repo.data,
            QuizContent: QuizContent_repo.data[0],
            teachers_in: teachers_repo.data,
            req_teachers: [],
            req_teachers_show: 'false',
            add_video_button: 'false',
            add_quiz_button: 'true'

        })
    }
    let url = '/teacher/user/' + userId + '/add-course/' + courseId;
    res.redirect(url);

}

exports.post_add_course_add_quiz = async(req, res, next) => {
    const userId = req.params.ID;
    const courseId = req.params.CRSID;
    const moduleId = req.params.Module_ID;


    let url = '/teacher/user/' + userId + '/add-course/' + courseId + '/' + moduleId;
    res.redirect(url);

}