const securityData = require('./security.data');
const ApiError = require('../../helper/api.error');

class SecurityService {

    constructor() { }

    // For test the health of microservice
    login = async (request) => {
        try {
            let result = await securityData.login(request);

            console.log(result[0]);
            console.log(result.length);

            if (result.length <= 0) {
                throw new ApiError(404, 'Sorry... Not Found! :(');
            }

            return result[0];
        } catch (error) {
            throw error
        }
    }
}

module.exports = SecurityService;