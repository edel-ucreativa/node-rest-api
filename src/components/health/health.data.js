const DataBaseHelper = require('../../helper/db.helper');

ping = async () => {
    try {

        const dbHelper = new DataBaseHelper();
        const instance = dbHelper.init();

        const result = await instance.select(`
            SELECT 
                status, environment 
            FROM
                ucreativa.ping;
        `);

        console.log(result);
        return result[0];

    } catch (error) {
        console.log(error);
        throw error;
    }
}

module.exports = {
    ping
}