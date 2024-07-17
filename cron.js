require('dotenv').config(); // Load environment variables from .env file

const cron = require('cron');
const http = require('http');

const backendUrl = process.env.BACKEND_URL;
const keepAlive = new cron.CronJob('*/1 * * * *', function () {
    // This function will be executed every 1 minute.
    console.log(`Fetching server`);

    // Perform an HTTP GET request to hit any backend API.
    http
        .get(backendUrl, (res) => {
            let data = '';

            // Collect data chunks.
            res.on('data', (chunk) => {
                data += chunk;
            });

            // When the response is complete, log the result.
            res.on('end', () => {
                if (res.statusCode === 200) {
                    console.log('Server fetched');
                    console.log('Response:', data);
                } else {
                    console.error(
                        `Failed to fetch server with status code: ${res.statusCode}`
                    );
                    console.error('Response:', data);
                }
            });
        })
        .on('error', (err) => {
            console.error('Error during Fetch:', err.message);
        });
});

// Export the cron job.
module.exports = {
    start: () => keepAlive.start()
};
