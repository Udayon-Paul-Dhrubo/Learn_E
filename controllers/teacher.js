const UserRepository = require('../repository/user-info').UserRepository;
const userRepository = new UserRepository();

const Category_Course_Teacher_Info_Repository = require('../repository/category-course-info').Category_Course_Teacher_Info_Repository;
const infoRepository = new Category_Course_Teacher_Info_Repository();

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
            path: '/courses',
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
            teacher: courseTeacher_repo.data[0],
            reviews: review_repo.data,
            topCourses: TopCourse_repo.data,
            contents: content_repo.data

        })
    }

    let url = '/teacher/user/' + userId + '/';
    res.redirect(url);

}


exports.get_pre_add_course = async(req, res, next) => {
    const userId = req.params.ID;
    const user_repo = await userRepository.findById(userId);

    if (user_repo.success) {
        return res.render('course/add-a-course-view.ejs', {
            pageTitle: 'Add Course',
            path: '/addCourse',
            isStudent: 'false',
            logged_in: 'true',
            userInfo: user_repo.data[0],
            add_button: 'false',
            create_button: 'false' ////

        })
    }

    let url = '/teacher/user/' + userId + '/';
    res.redirect(url);


}


exports.post_pre_add_course = async(req, res, next) => {
    const userId = req.params.ID;
    const user_repo = await userRepository.findById(userId);

    res.redirect('')


}





exports.get_add_course = async(req, res, next) => {
    const userId = req.params.ID;
    const user_repo = await userRepository.findById(userId);
    console.log('there : ', user_repo);

    const teacher_repo = await userRepository.teacherInclude_in_course()

    if (user_repo.success) {
        return res.render('course/add-a-course-view.ejs', {
            pageTitle: 'Add Course',
            path: '/addCourse',
            isStudent: 'false',
            logged_in: 'true',
            userInfo: user_repo.data[0],
            add_button: 'false' ////

        })
    }

    let url = '/teacher/user/' + userId + '/';
    res.redirect(url);
}



exports.get_add_course_add_button_clicked = async(req, res, next) => {
    const userId = req.params.ID;
    const user_repo = await userRepository.findById(userId);

    console.log('there : ', user_repo);

    if (user_repo.success) {
        return res.render('course/add-a-course-view.ejs', {
            pageTitle: 'Add Course',
            path: '/addCourse',
            isStudent: 'false',
            logged_in: 'true',
            userInfo: user_repo.data[0],
            add_button: 'true' /////

        })
    }

    let url = '/teacher/user/' + userId + '/';
    res.redirect(url);
}

exports.postSearchTeacher = async(req, res, next) => {

    const userId = req.params.ID;
    const user_repo = await userRepository.findById(userId);
    console.log('there : ', user_repo);

    const reqName = req.body.reqName;
    console.log('reqName: ', reqName);

    const search_teacher_repo = await userRepository.searchTeacher_By_Name(reqName)
    console.log(teacher_repo);




    if (user_repo.success) {
        return res.render('course/add-a-course-view.ejs', {
            pageTitle: 'Add Course',
            path: '/addCourse',
            isStudent: 'false',
            logged_in: 'true',
            userInfo: user_repo.data[0],
            add_button: 'true', /////
            search_teachers: search_teacher_repo.data

        })
    }

    let url = '/teacher/user/' + userId + '/';
    res.redirect(url);

}