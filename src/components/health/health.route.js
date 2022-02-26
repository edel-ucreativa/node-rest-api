const { Router } = require('express');
const router = Router();

const HealthController = require('./health.controller');
const healthController = new HealthController();

router.get('/ping', healthController.ping);

module.exports = router;