const express = require('express');
const router = express.Router();
const { submitContact, getAllContacts } = require('../controllers/contactController');
const { protect } = require('../middleware/authMiddleware');

// Public route for form submission
router.post('/', submitContact);

// Admin-only: view all contacts
router.get('/', protect, getAllContacts);

module.exports = router;
