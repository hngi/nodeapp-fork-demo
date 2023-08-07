const express = require('express');
const app = express();
const PORT = 3000;

// Root route
app.get('/', (req, res) => {
    res.send('<h1>Welcome to the Home Page!</h1>');
});

// About route
app.get('/about', (req, res) => {
    res.send('<h1>This is the About Us Page.</h1>');
});

// Contact route
app.get('/contact', (req, res) => {
    res.send('<h1>This is the Contact Us Page.</h1>');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
