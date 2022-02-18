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


exports.get_add_course = async(req, res, next) => {
    const userId = req.params.ID;
    const user_repo = await userRepository.findById(userId);

    console.log('there : ', user_repo);

    if (user_repo.success) {
        return res.render('course/add-a-course-view.ejs', {
            pageTitle: 'Add Course',
            path: '/insideCourse',
            isStudent: 'false',
            logged_in: 'true',
            userInfo: user_repo.data[0]

        })
    }

    let url = '/teacher/user/' + userId + '/';
    res.redirect(url);
}