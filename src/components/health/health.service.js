const healthData = require('./health.data');

/**
 * Class to validate the api connection. 
 * 
 * @author edel
 * @version 1.0.0
 **/
class HealthService {

    constructor() { }

    // For test the health of microservice
    ping = async () => {
        let result = await healthData.ping();
        console.log(result[0]);
        return result[0];
    }
}

module.exports = HealthService;