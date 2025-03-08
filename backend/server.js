import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import projectRoutes from './routes/projectRoutes.js';
import connectDB from './config/db.js';

// Load environment variables
dotenv.config({path:'./backend/.env'});
// console.log("MONGO_URI:", process.env.MONGO_URI);


const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/projects', projectRoutes);

// MongoDB Connection
connectDB();

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
