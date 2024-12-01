const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// Routes
const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
