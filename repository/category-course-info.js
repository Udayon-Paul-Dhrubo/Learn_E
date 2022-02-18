const Repository = require('./database').Repository;

class Category_Course_Teacher_Info_Repository extends Repository {
    constructor() {
        super();
    }

    getTopCategories = async function() {

        const query = 'SELECT "Catagory", COUNT("course_id")AS "Total_Courses" FROM "Course" GROUP BY "Catagory"';
        const params = [];
        const result = await this.query(query, params, 'false');
        return result;
    }

    getTopCourses = async function() {
        const query = 'select * from "Course" ORDER BY "Rating"';
        const params = [];
        const result = await this.query(query, params, 'false');
        return result;
    }

    getTopTeachers = async function() {
        const query = 'select * from "User" where "User_ID" in (select "Teacher_ID" from "Teacher")';
        const params = [];
        const result = await this.query(query, params, 'false');
        return result;
    }

    getTestimonials_about_learnE = async function() {
        const query = 'SELECT U."Name",U."image",S."Testimonial" FROM "User" U JOIN "Student" S ON(U."User_ID"=S."Student_id") where S."Testimonial" is NOT NULL';
        const params = [];
        const result = await this.query(query, params, 'false');
        return result;
    }

    last_course_id_inserted = async function() {
        const query = 'select MAX("course_id")AS "id" from "Course" ';
        const params = [];
        const result = await this.query(query, params, 'false');
        return result;
    }


    //finding courses for specific catagory
    getCoursesOfCatagory = async function(Catagory) {

        const query = 'select * from "Course" where "Catagory"= :1';
        const params = [Catagory];
        const result = await this.query(query, params, 'false');
        return result;
    }

    getCoursesofSearch = async function(req) {

        const query = 'select * from "Course" where lower("Title") like :1 or lower("Catagory") like :1 ';
        const params = [req];
        const result = await this.query(query, params, 'false');
        return result;
    }

    getCourseOutside = async function(id) {
        const query = 'select * from "Course" where "course_id"= :1';
        const params = [id];
        const result = await this.query(query, params, 'false');
        return result;
    }

    getContentsOfCourse = async function(Course_ID) {

        const query = 'SELECT * FROM "Video_Content" JOIN "CourseModules" USING("Module_ID") WHERE "Course_ID"= :1 ORDER BY "Serial" ';
        const params = [Course_ID];
        const result = await this.query(query, params, 'false');
        return result;
    }
    findCourseById = async function(Course_ID) {
        const query = 'SELECT * FROM "Course" WHERE "course_id" = :1';
        const params = [Course_ID];
        const result = await this.query(query, params, 'false');
        return result;
    }
    findCourseTeacherById = async function(Course_ID) {
        const query = 'SELECT * FROM "CreateCourse" JOIN "User" ON ("Teacher_ID"="User_ID") WHERE "Course_ID"= :1';
        const params = [Course_ID];
        const result = await this.query(query, params, 'false');
        return result;
    }
    findReviewsOfCourse = async function(Course_ID) {
        const query = 'Select "Review","Name","image" FROM "Rating" JOIN "User" ON("Student_ID"="User_ID") WHERE "Course_ID"= :1 AND "Review" IS NOT NULL';
        const params = [Course_ID];
        const result = await this.query(query, params, 'false');
        return result;
    }

    findModulesByCourseId = async function(course_ID) {
        const query = 'SELECT * FROM "Module" JOIN "CourseModules" USING ("Module_ID") WHERE "Course_ID"= :1  ORDER BY "Serial"';
        const params = [course_ID];
        const result = await this.query(query, params, 'false');
        return result;
    }

    findContentsOfSingleModule = async function(Module_ID) {
        const query = 'SELECT * FROM "Video_Content"  WHERE "Module_ID"= :1';
        const params = [Module_ID];
        const result = await this.query(query, params, 'false');
        return result;
    }
    findModuleByModule_ID = async function(Module_ID) {
        const query = 'SELECT * FROM "Module"  WHERE "Module_ID"= :1';
        const params = [Module_ID];
        const result = await this.query(query, params, 'false');
        return result;
    }
    findVideoContentByContent_ID = async function(content_ID) {
        const query = 'SELECT * FROM "Video_Content"  WHERE "VideoContent_ID"= :1';
        const params = [content_ID];
        const result = await this.query(query, params, 'false');
        return result;
    }
    findQuizContentByContent_ID = async function(content_ID) {
        const query = 'SELECT * FROM "Quiz_Content"  WHERE "QuizContent_ID"= :1';
        const params = [content_ID];
        const result = await this.query(query, params, 'false');
        return result;
    }

    findQuizContentIDByModule_ID = async function(Module_ID) {
        const query = 'SELECT "QuizContent_ID" FROM "Quiz_Content"  WHERE "Module_ID"= :1 GROUP BY "QuizContent_ID" ';
        const params = [Module_ID];
        const result = await this.query(query, params, 'false');
        return result;
    }



}


exports.Category_Course_Teacher_Info_Repository = Category_Course_Teacher_Info_Repository;