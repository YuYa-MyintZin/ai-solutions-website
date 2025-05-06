import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Event {
  _id: string;
  title: string;
  description: string;
  image?: string;
}

const ManageEvents: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [editId, setEditId] = useState<string | null>(null);

  const token = localStorage.getItem('adminToken');

  const fetchEvents = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/admin/events', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setEvents(res.data);
    } catch (err) {
      console.error('Failed to fetch events:', err);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    if (image) formData.append('image', image);

    try {
      if (editId) {
        await axios.put(`http://localhost:5000/api/admin/events/${editId}`, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        });
        setEditId(null);
      } else {
        await axios.post('http://localhost:5000/api/admin/events', formData, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        });
      }

      setTitle('');
      setDescription('');
      setImage(null);
      fetchEvents();
    } catch (err) {
      console.error('Failed to submit event:', err);
    }
  };

  const handleEdit = (event: Event) => {
    setTitle(event.title);
    setDescription(event.description);
    setEditId(event._id);
  };

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`http://localhost:5000/api/admin/events/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchEvents();
    } catch (err) {
      console.error('Failed to delete event:', err);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Manage Events</h2>

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
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border px-4 py-2 rounded"
          required
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files?.[0] || null)}
          className="w-full border p-2 rounded"
        />
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          {editId ? 'Update Event' : 'Create Event'}
        </button>
      </form>

      <ul className="space-y-4">
        {events.map((event) => (
          <li key={event._id} className="border p-4 rounded shadow flex gap-4">
            {event.image && (
              <img
                src={`http://localhost:5000/${event.image}`}
                alt="event"
                className="w-40 h-32 object-cover rounded"
              />
            )}
            <div className="flex-1">
              <h3 className="font-semibold text-lg">{event.title}</h3>
              <p className="text-sm">{event.description}</p>
              <div className="mt-2 space-x-2">
                <button
                  onClick={() => handleEdit(event)}
                  className="text-blue-600 hover:underline"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(event._id)}
                  className="text-red-600 hover:underline"
                >
                  Delete
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageEvents;
