import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import luxuryHomeRoutes from './routers/luxuryHomeRoutes.js';
import authRoutes from "./authRoutes.mjs"

const app = express();

// Middleware
app.use(cors()); // Enable CORS for all requests
app.use(morgan('dev')); // Log requests to the console in 'dev' format
app.use(express.json()); // Parse JSON bodies
app.use("/api/auth", authRoutes)
app.use('/api/luxuryhomes', luxuryHomeRoutes);

// Export the configured app
export default app;