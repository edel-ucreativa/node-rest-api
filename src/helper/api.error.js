/**
 * Custom Class used to manage the errors of the microservice
 * 
 * @version 1.0
 * @author edel (1.0)
 **/
class ApiError extends Error {

    constructor(code, message) {
        super(message)

        this.code = code
        this.message = message
    }

    code() {
        return this.code
    }

    message() {
        return this.message
    }

}

module.exports = ApiError;