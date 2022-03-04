// require others
const express = require("express");

const router = express.Router();
const apiRoutes = express.Router();

const HealthRouter = require('./src/components/health/health.route');
const SecurityRouter = require('./src/components/security/security.route');

//default middlewares
apiRoutes.use(express.json());

// Custom Routes
apiRoutes.use("/health", HealthRouter);
apiRoutes.use("/auth", SecurityRouter);

// Context
router.use("/api/v1", apiRoutes);

// Export all routes
module.exports = router;