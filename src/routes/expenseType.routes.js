const express = require('express');
const router = express.Router();
const expeseTypeController = require('../controllers/expenseType.controller');
// const authMiddleware = require('../middleware/auth.middleware');

router.get('/read/:id', expeseTypeController.readById);
router.post('/read', expeseTypeController.read);
router.post('/create', expeseTypeController.create);
router.put('/:id', expeseTypeController.update);
router.delete('/delete/:id', expeseTypeController.delete);
// router.get('/profile', authMiddleware.verifyToken, authController.profile);

module.exports = router;
