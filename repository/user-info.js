const Repository = require('./database').Repository;

class UserRepository extends Repository {
    constructor() {
        super();
    }
    findById = async function(userId){
        const query = 'select * from "User" where "User_ID" = :1';
        const params = [userId];
        const result = await this.query(query, params, 'false');
        return result;
    }

    findByEmail = async function(userEmail){
        const query = 'select * from "User" where "Email" = :1';
        const params = [userEmail];
        const result = await this.query(query, params, 'false');
        return result;
    }

    addUser = async function(id, name, email, password, student ){
        console.log({id, name, email, password })
        
        const query = 'insert into "User"("User_ID", "Username", "Email", "Password") values(:1, :2, :3, :4)';
        const params = [id, name, email, password];
        const result = await this.query(query, params, 'true');

        if(student){
            const query = 'insert into "Student"("Student_id") values(:1)';
            const params = [id];
            const result = await this.query(query, params, 'true');
        }
        else{
            const query = 'insert into "Teacher"("Teacher_ID") values(:1)';
            const params = [id];
            const result = await this.query(query, params, 'true');
        }
        return result;
    }

    isStudent = async function(userEmail) {
        const query = 'select "Student_id" from "Student" where "Student_id"=( select "User_ID" from "User" where "Email" = :1)';
        const params = [userEmail];
        const result = await this.query(query, params, 'false');
        return result;
    }

    isTeacher = async function(userEmail) {
        const query = 'select "Teacher_ID" from "Teacher" where "Teacher_ID"=( select "User_ID" from "User" where "Email" = :1)';
        const params = [userEmail];
        const result = await this.query(query, params, 'false');
        return result;
    }

    last_user_id_inserted = async function() {
        const query = 'select MAX("User_ID")AS "id" from "User" ';
        const params = [];
        const result = await this.query(query, params, 'false');
        return result;
    }


}


exports.UserRepository = UserRepository;