const Blog = require('../models/BlogModel');

const createBlog = async (req, res) => {
  const { title, content } = req.body;
  const imagePath = req.file ? req.file.path : '';

  const blog = new Blog({ title, content, image: imagePath });
  await blog.save();
  res.status(201).json(blog);
};

const getBlogs = async (req, res) => {
  const blogs = await Blog.find();
  res.json(blogs);
};

const updateBlog = async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  if (!blog) return res.status(404).json({ message: 'Blog not found' });

  blog.title = req.body.title || blog.title;
  blog.content = req.body.content || blog.content;
  if (req.file) blog.image = req.file.path;

  await blog.save();
  res.json(blog);
  

 
  
};

const deleteBlog = async (req, res) => {
  await Blog.findByIdAndDelete(req.params.id);
  res.status(204).end();
};

module.exports = { createBlog, getBlogs, updateBlog, deleteBlog };

