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
        const query = 'select "Testimonial",(SELECT "Name" FROM "User" WHERE "User_ID"=T."Student_id")AS "Student_Name" from "Student" T where "Testimonial" IS NOT NULL';
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




}


exports.Category_Course_Teacher_Info_Repository = Category_Course_Teacher_Info_Repository;