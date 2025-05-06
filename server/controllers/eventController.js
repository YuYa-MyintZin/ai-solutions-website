const Event = require('../models/eventModel');

// CREATE
const createEvent = async (req, res) => {
  const { title, description } = req.body;
  const imagePath = req.file ? req.file.path : '';
  const event = new Event({ title, description, image: imagePath });
  await event.save();
  res.status(201).json(event);
};

// READ
const getEvents = async (req, res) => {
  const events = await Event.find();
  res.json(events);
};

// UPDATE
const updateEvent = async (req, res) => {
  const event = await Event.findById(req.params.id);
  if (!event) return res.status(404).json({ message: 'Event not found' });

  event.title = req.body.title || event.title;
  event.description = req.body.description || event.description;
  if (req.file) event.image = req.file.path;

  await event.save();
  res.json(event);
};

// DELETE
const deleteEvent = async (req, res) => {
  await Event.findByIdAndDelete(req.params.id);
  res.status(204).end();
};

module.exports = {
  createEvent,
  getEvents,
  updateEvent,
  deleteEvent,
};
