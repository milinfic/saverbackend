const express = require('express');
const router = express.Router();
const expeseController = require('../controllers/expense.controller');
// const authMiddleware = require('../middleware/auth.middleware');

router.post('/read', expeseController.read);
router.get('/read/:id', expeseController.readById);
router.post('/create', expeseController.create);
router.put('/update/:id', expeseController.update);
router.delete('/delete/:id', expeseController.delete);
// router.get('/profile', authMiddleware.verifyToken, authController.profile);

module.exports = router;
