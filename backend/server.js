require('dotenv').config();
const express = require('express');
const cors = require('cors');
const projectRoutes = require('./routes/projectRoutes');
const connectDB = require('./config/db');
const app = express();
const path = require('path');

// // Middleware
app.use(cors());
app.use(express.json());


app.use(express.static(path.join(__dirname, '../frontend/build')));


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});

// Routes
app.use('/projects', projectRoutes);

// MongoDB Connection
connectDB();

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

