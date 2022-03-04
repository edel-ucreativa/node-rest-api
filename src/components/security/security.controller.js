const BaseController = require("../../base/base.controller")

const SecurityService = require('./security.service');
const securityService = new SecurityService();

const constants = require('../../common/constants');

class SecurityController extends BaseController {

    constructor() {
        super()
    }

    login = async (req, res) => {
        try {
            let result = await securityService.login(req.body);

            res.setHeader('Content-Type', 'application/json');
            res.setHeader('apiToken', constants.API_TOKEN);

            return res.status(200).send(JSON.stringify(result));
        } catch(e) {
            let error = {
                code: e.code,
                message: e.message
            }

            res.setHeader('Content-Type', 'application/json');
            return res.status(e.code).send(JSON.stringify(error));
        }
    }
}

module.exports = SecurityController;


