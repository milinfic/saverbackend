const express = require('express');
const router = express.Router();
const expenseGroupController = require('../controllers/expenseGroup.controller');
// const authMiddleware = require('../middleware/auth.middleware');

router.get('/read/:id', expenseGroupController.readById);
router.post('/read', expenseGroupController.read);
router.post('/create', expenseGroupController.create);
router.put('/:id', expenseGroupController.update);
router.delete('/delete/:id', expenseGroupController.delete);
// router.get('/profile', authMiddleware.verifyToken, authController.profile);

module.exports = router;
