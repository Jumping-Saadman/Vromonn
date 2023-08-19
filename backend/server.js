const express = require('express');

// express app
const app = express();

// routes
app.get('/', (req, res) => {
    res.json({mssg: 'Welcome to the app'});
});

// listen for reqests
app.listen(3000, () => {
    console.log('listening on port 3000!!');
});