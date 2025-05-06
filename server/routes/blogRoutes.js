const express = require('express');
const router = express.Router();
const upload = require('../middleware/uploadMiddleware');
const {
  createBlog,
  getBlogs,
  updateBlog,
  deleteBlog
} = require('../controllers/blogController');
const { protect } = require('../middleware/authMiddleware');

router.get('/', getBlogs);
router.post('/', protect, upload.single('image'), createBlog);
router.put('/:id', protect, upload.single('image'), updateBlog);
router.delete('/:id', protect, deleteBlog); // optional

module.exports = router;

