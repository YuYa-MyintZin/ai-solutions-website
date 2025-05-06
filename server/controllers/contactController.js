const Contact = require('../models/contactModel');

const submitContact = async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    await newContact.save();
    res.status(201).json({ message: 'Contact submitted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to submit contact', error: err.message });
  }
};

const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch contacts', error: err.message });
  }
};

module.exports = { submitContact, getAllContacts };
