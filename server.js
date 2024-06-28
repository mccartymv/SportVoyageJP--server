const express = require('express');
const connectDB = require('./config/db');
const gameRoutes = require('./routes/gameRoutes');
const cors = require('cors');

// Load environment variables
require('dotenv').config();

// Connect to MongoDB
connectDB();

const app = express();

// Enable CORS for all routes
app.use(cors());

// Middleware
app.use(express.json());

// Routes
app.use('/api', gameRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
