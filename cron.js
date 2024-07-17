require('dotenv').config(); // Load environment variables from .env file

const cron = require('cron');
const https = require('https');

const backendUrl = process.env.BACKEND_URL;
const keepAlive = new cron.CronJob('*/14 * * * *', function () {
    // This function will be executed every 14 minutes.
    console.log(`Fetching server`);

    // Perform an HTTPS GET request to hit any backend API.
    https
        .get(backendUrl, (res) => {
            if (res.statusCode === 200) {
                console.log('Server fetched');
                console.log(res)
            } else {
                console.error(
                    `Failed to fetch server with status code: ${res.statusCode}`
                );
            }
        })
        .on('error', (err) => {
            console.error('Error during Fetch:', err.message);
        });
});

// Export the cron job.
module.exports = {
    start: () => keepAlive.start()
};
