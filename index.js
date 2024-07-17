require('dotenv').config(); // Load environment variables from .env file

const keepAlive = require('./cron.js'); // Adjust path if necessary
keepAlive.start();

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Define a route for GET requests to "/"
app.get('/', (req, res) => {
  res.send({
    clientDir: process.env.CLIENT_DIR,
    startCmd: process.env.START_CMD,
    launcherVer: process.env.LAUNCHER_VER,
    clientVer: process.env.CLIENT_VER,
    patchVer: process.env.PATCH_VER,
    launcherUrl: process.env.LAUNCHER_URL,
    clientUrl: process.env.CLIENT_URL,
    patchUrl: process.env.PATCH_URL,
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
