const express = require('express');
const router = express.Router();
const revenueController = require('../controllers/dashboard.controller');
// const authMiddleware = require('../middleware/auth.middleware');

router.get('/', revenueController.read);

module.exports = router;
