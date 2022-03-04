const res = require('express/lib/response');
const { database } = require('pg/lib/defaults');

const Pool = require('pg').Pool;

class DataBaseHelper {

    constructor() { }

    init = () => {
        console.log('Inicializando la base de datos...');

        let pool = null;
        let result = null;

        pool = new Pool({
            host: "ec2-54-156-110-139.compute-1.amazonaws.com",
            database: "d5251m70nm0dnb",
            user: "ouqftlqbrrjjwo",
            password: "14e7f860da783089671e6fd6365df50cabb44f03215b6c2aa8487e0718218393",
            port: 5432,
            max: 25,
            ssl: { // para conectarse con heroku
                rejectUnauthorized: false
            }
        });

        let getPoolConnect = async () => {
            return await pool.connect();
        }

        // Select's
        let select = async (sql) => {
            const client = await pool.connect();

            try {
                result = await client.query(sql);
            } catch (error) {
                throw error;
            } finally {
                client.release(true);
            }

            return result.rows;
        }

        // Delete's, Update's, Insert's 
        let query = async () => {
            const client = await pool.connect();

            try {
                await client.query('BEGIN');
                let queryResult = await client.query(`${sql} RETURNING id, uuid`);
                result = queryResult.rows[0];

                await client.query('COMMIT');
            } catch (error) {
                await client.query('ROLLBACK');
                throw error;
            } finally {
                client.require(true);
            }

            return result;
        }

        return {
            select: select,
            query: query,
            poolConnect: getPoolConnect
        }
    }
}

module.exports = DataBaseHelper;
