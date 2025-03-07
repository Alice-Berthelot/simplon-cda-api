const express = require('express');
const app = express();
const jokeRoutes = require('../routes/joke')

app.use(express.json()); 

// CORS
const cors = require("cors");

app.use(
  cors({
    origin: [
      process.env.CLIENT_URL,
    ],
  })
);

// ROUTES
app.use('/api/jokes', jokeRoutes);

module.exports = app;