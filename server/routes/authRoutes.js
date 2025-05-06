const express = require('express');
const router = express.Router();
const { loginAdmin, createAdmin } = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');

// @route   POST /api/admin/login
// @desc    Login admin
// @access  Public
router.post('/login', loginAdmin);

// @route   POST /api/admin/create
// @desc    Create new admin
// @access  Private (protected)
router.post('/create', createAdmin);



module.exports = router;
