const DataBaseHelper = require('../../helper/db.helper');

// For test the health of microservice
let login = async(request) => {
    try {
        console.log(request);

        const dbHelper = new DataBaseHelper();
        const instance = dbHelper.init();

        const result = await instance.select(`
            SELECT 
                email, user_type, status
            FROM 
                ucreativa.users
            WHERE 
                email = '${request.email}'
            AND
                user_password = '${request.password}'
        `);

        console.log(result);
        return result;

    } catch (e) {
        console.log("error " + e);
        throw e;
    }
}

module.exports = {
    login
}
