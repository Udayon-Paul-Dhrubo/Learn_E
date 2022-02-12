const Category_Course_Teacher_Info_Repository = require('../repository/category-course-info').Category_Course_Teacher_Info_Repository;
const infoRepository = new Category_Course_Teacher_Info_Repository();


exports.getHome = async(req, res, next) => {

    const category_repo = await infoRepository.getTopCategories();
    console.log(category_repo);

    const course_repo = await infoRepository.getTopCourses();
    console.log(course_repo);

    const teacher_repo = await infoRepository.getTopTeachers();
    console.log(teacher_repo);

    if (category_repo.success && category_repo.success) {
        return res.render('home/home-view.ejs', {
            pageTitle: 'Home',
            path: '/home',
            isStudent: 'false',
            logged_in: 'false',
            categories: category_repo.data,
            courses: course_repo.data,
            teachers: teacher_repo.data
        })
    }

    res.render('home/home-view.ejs', {
        pageTitle: 'Home',
        path: '/home',
        isStudent: 'false',
        logged_in: 'false',
        categories: [],
        courses: [],
        teachers: []
    })

}

exports.postSearch = (req, res, next) => {
    const searchReq = req.body.search_bar_req;
    console.log(searchReq);
    

    //more to add later
    res.redirect('/');
}

exports.getAbout = async(req, res, next) => {

    const testimonial_repo = await infoRepository.getTestimonials_about_learnE();
    console.log(testimonial_repo);

    if (testimonial_repo.success) {
        return res.render('home/about-view.ejs', {
            pageTitle: 'About',
            path: '/about',
            isStudent: 'false',
            logged_in: 'false',
            testimonials: testimonial_repo.data
        })
    }
    res.redirect('/');

}