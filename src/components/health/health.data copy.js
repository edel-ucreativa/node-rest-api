// require class
const DataBaseHelper = require('../../helper/db.helper');

const SCHEMA = process.env.DB_SCHEMA || 'public'

// For test the health of microservice
ping = async() => {
    try {
        const dbHelper = new DataBaseHelper();
        const instance = dbHelper.init();

        const result = await instance.select(`
            SELECT 
                status, environment 
            FROM 
            ${SCHEMA}.ping
        `);

        return result;
    } catch (e) {
        console.log("error " + e);
        throw e;
    }
}

module.exports = {
    ping
}