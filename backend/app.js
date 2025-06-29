const express = require('express');
const path = require('path');
const cors = require('cors');
const postRoutes = require('./routes/postRoutes');
const errorHandler = require('./middlewares/errorMiddleware');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use('/images', express.static(path.resolve(__dirname, 'output')));

// Routes
app.use('/api/post', postRoutes);

// Error handling
app.use(errorHandler);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});