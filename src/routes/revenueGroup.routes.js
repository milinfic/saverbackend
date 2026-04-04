const express = require('express');
const router = express.Router();
const revenueGroupController = require('../controllers/revenueGroup.controller');
const authMiddleware = require('../middleware/auth.middleware');

router.get('/read/:id', authMiddleware.verifyToken, revenueGroupController.readById);
router.post('/read', authMiddleware.verifyToken, revenueGroupController.read);
router.post('/create', authMiddleware.verifyToken, revenueGroupController.create);
router.put('/:id', authMiddleware.verifyToken, revenueGroupController.update);
router.delete('/delete/:id', authMiddleware.verifyToken, revenueGroupController.delete);

module.exports = router;