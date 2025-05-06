const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  companyName: String,
  businessType: String,
  email: { type: String, required: true },
  phone: String,
  serviceType: String,
  description: String,
}, {
  timestamps: true,
});

module.exports = mongoose.model('Contact', contactSchema);
