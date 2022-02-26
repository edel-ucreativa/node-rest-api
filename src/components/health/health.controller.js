const BaseController = require("../../base/base.controller")

const HealthService = require('./health.service');
const healthService = new HealthService()

class HealthController extends BaseController {

    constructor() {
        super()
    }

    ping = async (req, res) => {
        try {
            let result = await healthService.ping();

            res.setHeader('Content-Type', 'application/json');
            return res.status(200).send(JSON.stringify(result));
        } catch (e) {
            let error = {
                code: e.code,
                message: e.message
            }

            res.setHeader('Content-Type', 'application/json');
            return res.status(500).send(JSON.stringify(error));
        }
    }
}

module.exports = HealthController;