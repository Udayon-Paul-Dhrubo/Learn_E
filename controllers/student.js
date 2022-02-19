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
            isStudent: 'true',
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
            isStudent: 'true',
            logged_in: 'true',
            req: searchReq,
            userInfo: user_repo.data[0],
            courses: search_repo.data,
            fromCategory: 'false',
            fromSearch: 'true',
            start: start
        })
    }


    let url = '/student/user/' + userId + '/';
    res.redirect(url);
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
            isStudent: 'true',
            logged_in: 'true',
            testimonials: testimonial_repo.data,
            userInfo: user_repo.data[0]
        })
    }

    const url = '/student/user/' + userId + '/';
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
            isStudent: 'true',
            logged_in: 'true',
            categories: category_repo.data,
            userInfo: user_repo.data[0]
        })
    }

    const url = '/student/user/' + userId + '/';
    res.redirect(url)

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
            isStudent: 'true',
            logged_in: 'true',
            req: reqCategory,
            userInfo: user_repo.data[0],
            courses: search_repo.data,
            fromCategory: 'true',
            fromSearch: 'false',
            start: start
        })
    }

}
exports.getSingleCourseInsideView = async(req, res, next) => {
    
   
    const userId = req.params.ID;
    const user_repo = await userRepository.findById(userId);
    console.log('here : user_repo', user_repo);

    const courseId = req.params.CRSID;
    console.log('here : courseId ', courseId);
    const course_repo = await infoRepository.findCourseById(courseId);
    console.log('here : course_repo', course_repo);
    const Module_repo = await infoRepository.findModulesByCourseId(courseId);
    console.log('here : Module_repo ', Module_repo);
    const purchased= await infoRepository.isPurchased(courseId,userId);
    if(purchased.data.length==0)
    {const newPurchase=await infoRepository.createNewPurchase(courseId,userId);
    console.log("new purchase : ",courseId,userId);
    console.log("new purchase repo : ",newPurchase.success);}
    

    if (user_repo.success && course_repo.success) {
        return res.render('course/course-inside-view.ejs', {
            pageTitle: 'Course',
            path: '/insideCourse',
            isStudent: 'true',
            logged_in: 'true',
            weekView: 'false',
            videoView: 'false',
            quizView: 'false',
            gradeView: 'false',
            userInfo: user_repo.data[0],
            course: course_repo.data[0],
            modules: Module_repo.data

        })
    }
}

exports.getSingleCourseInsideModuleView = async(req, res, next) => {

    const userId = req.params.ID;
    const user_repo = await userRepository.findById(userId);
    console.log('here : ', user_repo);

    const courseId = req.params.CRSID;
    const moduleId = req.params.Module_ID;
    console.log('here : ', courseId);
    const course_repo = await infoRepository.findCourseById(courseId);
    console.log('here : ', course_repo);
    const Module_repo = await infoRepository.findModulesByCourseId(courseId);
    console.log('here : ', Module_repo);
    const VideoContent_repo = await infoRepository.findContentsOfSingleModule(moduleId);
    const Module = await infoRepository.findModuleByModule_ID(moduleId);
    console.log('Module Founded : ', Module_repo);
    const QuizContent_repo = await infoRepository.findQuizContentIDByModule_ID(moduleId);

    if (user_repo.success && course_repo.success) {
        return res.render('course/course-inside-view.ejs', {
            pageTitle: 'Course',
            path: '/insideCourse',
            isStudent: 'true',
            logged_in: 'true',
            weekView: 'true',
            videoView: 'false',
            quizView: 'false',
            gradeView: 'false',
            userInfo: user_repo.data[0],
            course: course_repo.data[0],
            modules: Module_repo.data,
            thisModule: Module.data[0],
            VideoContents: VideoContent_repo.data,
            QuizContent :QuizContent_repo.data[0]

        })
    }
}
exports.getSingleCourseVideoContentView = async(req, res, next) => {

    const userId = req.params.ID;
    const user_repo = await userRepository.findById(userId);
    console.log('here : ', user_repo);

    const courseId = req.params.CRSID;
    const moduleId = req.params.Module_ID;
    const VideoContent_ID=req.params.VideoContent_ID;
    console.log('here : ', courseId);
    const course_repo = await infoRepository.findCourseById(courseId);
    console.log('here : ', course_repo);
    const Module_repo = await infoRepository.findModulesByCourseId(courseId);
    console.log('here : ', Module_repo);
    const content_repo = await infoRepository.findContentsOfSingleModule(moduleId);
    const Module = await infoRepository.findModuleByModule_ID(moduleId);
    console.log('Module Founded : ', Module_repo);
    const video_content=await infoRepository.findVideoContentByContent_ID(VideoContent_ID);

    if (user_repo.success && course_repo.success) {
        return res.render('course/course-inside-view.ejs', {
            pageTitle: 'Course',
            path: '/insideCourse',
            isStudent: 'true',
            logged_in: 'true',
            weekView: 'false',
            videoView: 'true',
            quizView: 'false',
            gradeView: 'false',
            userInfo: user_repo.data[0],
            course: course_repo.data[0],
            modules: Module_repo.data,
            thisModule: Module.data[0],
            contents: content_repo.data,
            video_content:video_content.data[0]

        })
    }
}
exports.getSingleCourseQuizContentView = async(req, res, next) => {

    const userId = req.params.ID;
    const user_repo = await userRepository.findById(userId);
    console.log('here : ', user_repo);

    const courseId = req.params.CRSID;
    const moduleId = req.params.Module_ID;
    const QuizContent_ID=req.params.QuizContent_ID;
    console.log('here : ', courseId);
    const course_repo = await infoRepository.findCourseById(courseId);
    console.log('here : ', course_repo);
    const Module_repo = await infoRepository.findModulesByCourseId(courseId);
    console.log('here : ', Module_repo);
    const content_repo = await infoRepository.findContentsOfSingleModule(moduleId);
    const Module = await infoRepository.findModuleByModule_ID(moduleId);
    console.log('Module Founded : ', Module_repo);
    const quiz_content=await infoRepository.findQuizContentByContent_ID(QuizContent_ID);
    console.log(quiz_content);

    if (user_repo.success && course_repo.success) {
        return res.render('course/course-inside-view.ejs', {
            pageTitle: 'Course',
            path: '/insideCourse',
            isStudent: 'true',
            logged_in: 'true',
            weekView: 'false',
            videoView: 'false',
            quizView: 'true',
            gradeView: 'false',
            userInfo: user_repo.data[0],
            course: course_repo.data[0],
            modules: Module_repo.data,
            thisModule: Module.data[0],
            contents: content_repo.data,
            quiz_content:quiz_content.data

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
    var isPurchased;
    const purchased= await infoRepository.isPurchased(courseId,userId);
    if(purchased.data.length==0)isPurchased=false;
    else
    isPurchased=true;
    
    if (user_repo.success && course_repo.success && content_repo.success) {
        return res.render('course/course-view.ejs', {
            pageTitle: 'Course',
            path: '/course',
            isStudent: 'true',
            logged_in: 'true',
            userInfo: user_repo.data[0],
            course: course_repo.data[0],
            teacher: courseTeacher_repo.data[0],
            reviews: review_repo.data,
            topCourses: TopCourse_repo.data,
            contents: content_repo.data,
            purchased: isPurchased

        })
    }

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
            isStudent: 'true',
            logged_in: 'true',
            teachers: teacher_repo.data,
            userInfo: user_repo.data[0]
        })
    }

    const url = '/student/user/' + userId + '/';
    res.redirect(url)

}