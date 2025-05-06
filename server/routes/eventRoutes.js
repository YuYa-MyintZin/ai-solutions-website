const express = require('express');
const router = express.Router();
const upload = require('../middleware/uploadMiddleware');
const { protect } = require('../middleware/authMiddleware');
const {
  createEvent,
  getEvents,
  updateEvent,
  deleteEvent
} = require('../controllers/eventController');

router.get('/', getEvents);
router.post('/', protect, upload.single('image'), createEvent);
router.put('/:id', protect, upload.single('image'), updateEvent);
router.delete('/:id', protect, deleteEvent);

module.exports = router;
