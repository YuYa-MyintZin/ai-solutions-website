import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Blog {
  _id: string;
  title: string;
  content: string;
}

const ManageBlogs: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [editId, setEditId] = useState<string | null>(null);

  const token = localStorage.getItem('adminToken');

  const fetchBlogs = async () => {
    const res = await axios.get('http://localhost:5000/api/admin/blogs', {
      headers: { Authorization: `Bearer ${token}` },
    });
    setBlogs(res.data);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const blogData = { title, content };

    if (editId) {
      await axios.put(`http://localhost:5000/api/admin/blogs/${editId}`, blogData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setEditId(null);
    } else {
      await axios.post('http://localhost:5000/api/admin/blogs', blogData, {
        headers: { Authorization: `Bearer ${token}` },
      });
    }

    setTitle('');
    setContent('');
    fetchBlogs();
  };

  const handleEdit = (blog: Blog) => {
    setTitle(blog.title);
    setContent(blog.content);
    setEditId(blog._id);
  };

  const handleDelete = async (id: string) => {
    await axios.delete(`http://localhost:5000/api/admin/blogs/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    fetchBlogs();
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Manage Blogs</h2>

      <form onSubmit={handleSubmit} className="space-y-4 mb-6">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border px-4 py-2 rounded"
          required
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full border px-4 py-2 rounded"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          {editId ? 'Update Blog' : 'Create Blog'}
        </button>
      </form>

      <ul className="space-y-2">
        {blogs.map((blog) => (
          <li key={blog._id} className="border p-4 rounded shadow">
            <h3 className="font-semibold">{blog.title}</h3>
            <p>{blog.content}</p>
            <div className="mt-2 space-x-2">
              <button
                onClick={() => handleEdit(blog)}
                className="text-blue-600 hover:underline"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(blog._id)}
                className="text-red-600 hover:underline"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageBlogs;
