const express = require('express');
const connectDB = require('./config/db');
const gameRoutes = require('./routes/gameRoutes');

// Load environment variables
require('dotenv').config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api', gameRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
