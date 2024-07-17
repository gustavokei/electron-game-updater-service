require('dotenv').config(); // Load environment variables from .env file

const keepAlive = require('./cron.js'); // Adjust path if necessary
keepAlive.start();

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Define a route for GET requests to "/"
app.get('/', (req, res) => {
  res.send({
    1: {
      clientDir: process.env.CLIENT_DIR1,
      startCmd: process.env.START_CMD1,
      launcherVer: process.env.LAUNCHER_VER1,
      clientVer: process.env.CLIENT_VER1,
      patchVer: process.env.PATCH_VER1,
      launcherUrl: process.env.LAUNCHER_URL1,
      clientUrl: process.env.CLIENT_URL1,
      patchUrl: process.env.PATCH_URL1,
    },
    2: {
      clientDir: process.env.CLIENT_DIR2,
      startCmd: process.env.START_CMD2,
      launcherVer: process.env.LAUNCHER_VER2,
      clientVer: process.env.CLIENT_VER2,
      patchVer: process.env.PATCH_VER2,
      launcherUrl: process.env.LAUNCHER_URL2,
      clientUrl: process.env.CLIENT_URL2,
      patchUrl: process.env.PATCH_URL2,
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
