const oracledb = require('oracledb');
oracledb.outFormat = oracledb.OBJECT;

class Repository {
    constructor() {
        this.connection = undefined;
    }

    query = async function (query, params, add) {
        if (this.connection === undefined) {
            this.connection = await oracledb.getConnection({ 
                user: "c##learne", 
                password: "learne", 
                connectionString: "localhost/orcl" });
        }
        try {
            

            if( add == 'false'){
                let result = await this.connection.execute(query, params);
                return {                
                    success:true,
                    data: result.rows
                }
            }
            else {
                let result = await this.connection.execute(query, params, {autoCommit: true});
                return {
                    success: result.rowsAffected
                }
            }           

        } catch (error) {
            console.log(error);
            return {
                success:false,
                error
            }
        }
    };
}

exports.Repository = Repository;