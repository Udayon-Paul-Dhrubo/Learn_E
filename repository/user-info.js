const Repository = require('./database').Repository;

class UserRepository extends Repository {
    constructor(){
        super();
    }

    findById = async function(userId){
        const query = 'select * from USERS where "User_ID" = :1';
        const params = [userId];
        const result = await this.query(query, params, 'false');
        return result;
    }

    findByEmail = async function(userEmail){
        const query = 'select * from USERS where "Email" = :1';
        const params = [userEmail];
        const result = await this.query(query, params, 'false');
        return result;
    }

    addUser = async function(id, name, email, password ){
        console.log({id, name, email, password })
        const query = 'insert into USERS("User_ID", "Username", "Email", "Password") values(:1, :2, :3, :4)';
        const params = [id, name, email, password];
        const result = await this.query(query, params, 'true');
        return result;
    }
}


exports.UserRepository = UserRepository;