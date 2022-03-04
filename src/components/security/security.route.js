const { Router } = require('express');
const router = Router();

const SecurityController = require('./security.controller');
const securityController = new SecurityController();

router.post('/login', securityController.verifyApiToken, securityController.login);

module.exports = router;