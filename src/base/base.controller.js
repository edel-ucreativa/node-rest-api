const constants = require('../common/constants');
const ApiError = require('../helper/api.error');

/**
 * Class used to validate the JWT tokens for request
 * 
 * @version 1.0
 * @author edel (1.0)
 **/
 class BaseController {

    /**
     * Default constructor
     **/
    constructor() { }

    verifyApiToken = (req, res, next) => {
        try {
            const bearerHeader = req.headers['authorization'];

            if (typeof bearerHeader !== 'undefined') {
                const bearer = bearerHeader.split(' ');
                const token = bearer[1];

                if(token !== constants.API_TOKEN){
                    throw new ApiError(403, 'Invalid Token :(');
                }

                //jwtHelper.verify(token)

            } else {
                throw new ApiError(403, 'Invalid Token :(');
            }
        } catch (e) {
            
            let error = {
                code: e.code,
                message: e.message
            };

            res.setHeader('Content-Type', 'application/json');
            return res.status(error.code).send(JSON.stringify(error));
        }

        next();
    }
}

module.exports = BaseController;