const express = require('express');
const app = express();
const port = 5500;
const ipAddress = '127.0.0.1';

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static('Project 1'));
// Route to serve index.html on the root URL
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Route to serve about.html
app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/about.html');
});

// Route to serve contact.html
app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/contact.html');
});

app.post('/submit-form', (req, res) => {
    const formData = req.body;
    // Process the formData (e.g., send email, save to database)
    console.log(formData); // For demonstration purposes

    // Example: send email using SMTP.js
    // Ensure you have configured SMTP.js in your project1.js file

    // Example response
    res.send('Form submitted successfully!');
});

app.listen(port, ipAddress, () => {
    console.log(`Server running on http://${ipAddress}:${port}`);
});
