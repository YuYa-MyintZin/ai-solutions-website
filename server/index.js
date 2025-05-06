const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const authRoutes = require('./routes/authRoutes');
const blogRoutes = require('./routes/blogRoutes');
const eventRoutes = require('./routes/eventRoutes');
const contactRoutes = require('./routes/contactRoutes');
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// API routes
app.use('/api/admin', authRoutes);
app.use('/api/admin/blogs', blogRoutes);  
app.use('/uploads', express.static('uploads'));
app.use('/api/admin/events', eventRoutes);
app.use('/api/customer/contact', contactRoutes);


// Connect to MongoDB and start server
mongoose
  .connect(process.env.MONGODB_CONNECTION)
  .then(() => {
    console.log('MongoDB connected');
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.log(err));

