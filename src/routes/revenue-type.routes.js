const express = require('express');
const router = express.Router();
const revenueController = require('../controllers/revenue-type.controller');
// const authMiddleware = require('../middleware/auth.middleware');

router.post('/read', revenueController.read);
router.get('/read/:id', revenueController.readById);
router.post('/create', revenueController.create);
router.put('/update/:id', revenueController.update);
router.delete('/delete/:id', revenueController.delete);
// router.get('/profile', authMiddleware.verifyToken, authController.profile);

module.exports = router;
