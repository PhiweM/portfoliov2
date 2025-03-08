require('dotenv').config();
const express = require('express');
const cors = require('cors');
const projectRoutes = require('./routes/projectRoutes');
const connectDB = require('./config/db');

const app = express();

// // Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/projects', projectRoutes);

// MongoDB Connection
connectDB();

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

