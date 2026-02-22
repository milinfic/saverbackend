const express = require('express');
const router = express.Router();
const expeseTypeController = require('../controllers/expenseType.controller');
// const authMiddleware = require('../middleware/auth.middleware');

router.post('/read', expeseTypeController.read);
router.post('/create', expeseTypeController.create);
router.post('/update', expeseTypeController.update);
router.post('/delete', expeseTypeController.delete);
// router.get('/profile', authMiddleware.verifyToken, authController.profile);

module.exports = router;
