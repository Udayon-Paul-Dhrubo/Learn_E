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
    findModuleByModule_ID = async function(Module_ID, Course_ID) {
        const query = 'SELECT * FROM "Module" JOIN "CourseModules" USING ("Module_ID") WHERE  "Module_ID"= :1 AND "Course_ID"= :2 ';
        const params = [Module_ID, Course_ID];
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
        const query = 'SELECT * FROM "Quiz_Content"  WHERE "Module_ID"= :1 order BY "QuizContent_ID" ';
        const params = [Module_ID];
        const result = await this.query(query, params, 'false');
        return result;
    }

    isPurchased = async function(course_ID, student_ID) {
        const query = 'SELECT * FROM "PurchaseHistory" WHERE "Course_ID"= :1 AND "Student_ID"= :2 ';
        const params = [course_ID, student_ID];
        const result = await this.query(query, params, 'false');
        return result;
    }
    createNewPurchase = async function(course_ID, student_ID) {
        const query = 'INSERT INTO "PurchaseHistory"("Student_ID","Course_ID") VALUES(:1 , :2) ';
        const params = [student_ID, course_ID];
        const result = await this.query(query, params, 'true');
        return result;
    }


    searchTeacher_By_Name = async function(reqName) {
        const query = 'select * from "User" where LOWER("Name") like :1 and "User_ID" =  ANY ( select "Teacher_ID" from "Teacher");';
        const params = [reqName];
        const result = await this.query(query, params, 'false');
        return result;
    }

    add_new_course = async function(new_id, title) {
        const query = 'INSERT INTO "Course"("course_id","Title" ) VALUES(:1 ,:2 ) ';
        const params = [new_id, title];
        const result = await this.query(query, params, 'true');
        return result;
    }

    add_teacher_into_new_course = async function(teacher_id, course_id) {
        const query = 'INSERT INTO "CreateCourse"("Teacher_ID","Course_ID") VALUES(:1, :2) ';
        const params = [teacher_id, course_id];
        const result = await this.query(query, params, 'true');
        return result;
    }


    searchTeacherByTeacherName = async function(teacher_Name) {
        const query = 'SELECT * FROM ("User"  JOIN "Teacher" ON("User_ID"="Teacher_ID")) WHERE LOWER("Name") like :1';
        const params = [teacher_Name];
        const result = await this.query(query, params, 'false');
        return result;
    }

    insert_Completion = async function(courseId, studentId, ContentId, ModuleId) {
        const query = 'insert into "Completion" ("Course_ID","Student_ID","Content_ID","Module_ID") values ( :1, :2, :3, :4)';
        const params = [courseId, studentId, ContentId, ModuleId];
        const result = await this.query(query, params, 'true');
        return result;
    }

    get_Completion_of_a_module = async function(courseId, studentId, ModuleId) {
        const query = 'select "Content_ID" from "Completion" where "Course_ID" = :1 and "Student_ID" = :1 and "Module_ID" = :1';
        const params = [courseId, studentId, ModuleId];
        const result = await this.query(query, params, 'false');
        return result;
    }
    getLastInsertedModuleID = async function() {
        const query = 'SELECT MAX("Module_ID") AS "Module_ID" FROM "Module" ';
        const params = [];
        const result = await this.query(query, params, 'false');
        return result;
    }

    addNewModule = async function(Module_ID, Teacher_ID) {
        const query = 'INSERT INTO "Module"("Module_ID","Teacher_ID") VALUES( :1, :2) ';
        const params = [Module_ID, Teacher_ID];
        const result = await this.query(query, params, 'true');
        return result;
    }

    findSerialOfLastInsertedModuleOfCourse = async function(courseId) {
        const query = ' SELECT MAX("Serial")  AS "Serial","Course_ID" FROM "CourseModules" WHERE "Course_ID"= :1   GROUP BY "Course_ID" ';
        const params = [courseId];
        const result = await this.query(query, params, 'false');
        return result;
    }
    addModuleToCourse = async function(courseId, ModuleId, Serial) {
        const query = 'INSERT INTO "CourseModules"("Course_ID","Module_ID","Serial") VALUES(:1,:2,:3)';
        const params = [courseId, ModuleId, Serial];
        const result = await this.query(query, params, 'true');
        return result;
    }
    getLastInsertedVideoContentID = async function() {
        const query = 'SELECT MAX("VideoContent_ID") AS "VideoID" FROM "Video_Content" ';
        const params = [];
        const result = await this.query(query, params, 'false');
        return result;
    }
    getLastInsertedQuizContentID = async function() {
        const query = 'SELECT MAX("QuizContent_ID") AS "QuizID" FROM "Quiz_Content" ';
        const params = [];
        const result = await this.query(query, params, 'false');
        return result;
    }
    addNewVideo = async function(VideoContent_ID, ModuleId, Title, description, Video_Name) {
        const query = 'INSERT INTO "Video_Content"("VideoContent_ID","Module_ID","Topic","Description","Video") VALUES(:1,:2,:3,:4, :5)';
        const params = [VideoContent_ID, ModuleId, Title, description, Video_Name];
        const result = await this.query(query, params, 'true');
        return result;
    }
    addQuizQuestion = async function(QuizContent_ID, ModuleId, question, option1, option2, option3, option4, answer, question_ID) {
        const query = 'INSERT INTO "Quiz_Content"("QuizContent_ID","Module_ID","Question","Option1","Option2","Option3","Option4","Answer","Question_ID") VALUES(:1,:2,:3,:4, :5,:6,:7,:8,:9)';
        const params = [QuizContent_ID, ModuleId, question, option1, option2, option3, option4, answer, question_ID];
        const result = await this.query(query, params, 'true');
        return result;
    }



    get_ansQues_by_courseId = async function(courseId) {
        const query = 'select (select "Name" from "User" where "User_ID" = f."Student_ID") "Student_Name", ' +
            '(select "image" from "User" where "User_ID" = f."Student_ID") "Student_Image", ' +
            'select (select "Name" from "User" where "User_ID" = f."Teacher_ID") "Teacher_Name", ' +
            '(select "image" from "User" where "User_ID" = f."Teacher_ID") "Teacher_Image", ' +
            '"Question", "Answer" ' +
            'from "FAQ" f ' +
            ' where "Course_ID" = :1 and "Answer" is not null;';
        const params = [courseId];
        const result = await this.query(query, params, 'false');
        return result;

    }

    get_Ques_by_courseId = async function(courseId) {
        const query = 'select (select "Name" from "User" where "User_ID" = f."Student_ID") "Student_Name", ' +
            '(select "image" from "User" where "User_ID" = f."Student_ID") "Student_Image", ' +
            '"Question", "Question_ID"' +
            'from "FAQ" f ' +
            ' where "Course_ID" = :1 and "Answer" is null;';
        const params = [courseId];
        const result = await this.query(query, params, 'false');
        return result;
    }

    get_ansQues_by_courseId_studentId = async function(courseId, studentId) {
        const query = 'select (select "Name" from "User" where "User_ID" = f."Student_ID") "Student_Name", ' +
            '(select "image" from "User" where "User_ID" = f."Student_ID") "Student_Image", ' +
            'select (select "Name" from "User" where "User_ID" = f."Teacher_ID") "Teacher_Name", ' +
            '(select "image" from "User" where "User_ID" = f."Teacher_ID") "Teacher_Image", ' +
            '"Question", "Answer" ' +
            'from "FAQ" f ' +
            ' where "Course_ID" = :1 and "Student_ID" = :2 and "Answer" is not null;';
        const params = [courseId, studentId];
        const result = await this.query(query, params, 'false');
        return result;
    }

    get_Ques_by_courseId = async function(courseId, studentId) {
        const query = 'select (select "Name" from "User" where "User_ID" = f."Student_ID") "Student_Name", ' +
            '(select "image" from "User" where "User_ID" = f."Student_ID") "Student_Image", ' +
            '"Question", "Question_ID"' +
            'from "FAQ" f ' +
            ' where "Course_ID" = :1 and "Student_ID" = :2 and "Answer" is null;';
        const params = [courseId, studentId];
        const result = await this.query(query, params, 'false');
        return result;
    }

    get_last_questionId_in_faq = async function() {

        const query = 'select max("Question_ID") from FAQ;';
        const params = [];
        const result = await this.query(query, params, 'false');
        return result;
    }

    insert_into_FAQ = async function(quesId, courseId, studentId, question) {
        const query = 'insert into "FAQ"("Question_ID", "Course_ID", "Student_ID", "Question") values(:1, :2, :3, :4);';
        const params = [quesId, courseId, studentId, question];
        const result = await this.query(query, params, 'true');
        return result;
    }

    giveAnsToFaq_by_quesId = async function(quesId, answer, teacherId) {
        const query = 'update "FAQ" set "Answer" = :2, "Teacher_ID" = :3 where "Question_ID" = :1;'
        const params = [quesId, answer, teacherId];
        const result = await this.query(query, params, 'true');
        return result;
    }








}


exports.Category_Course_Teacher_Info_Repository = Category_Course_Teacher_Info_Repository;