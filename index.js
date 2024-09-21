require('dotenv').config(); // Load environment variables from .env file

const keepAlive = require('./cron.js'); // Adjust path if necessary
keepAlive.start();

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // Allow all origins
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  next();
});


// Define a route for GET requests to "/"
app.get('/', (req, res) => {
  res.send(process.env.JSON);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
