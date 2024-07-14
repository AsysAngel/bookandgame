const express = require('express');
const app = express();
const port = 5500;
const ipAddress = '127.0.0.1';
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(express.static(path.join(__dirname, 'public')));
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
    const { name, email, phone, description } = req.body;
    console.log('Form submitted:');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Phone:', phone);
    console.log('Description:', description)
    res.send('Form received');
  });

app.listen(port, ipAddress, () => {
    console.log(`Server running on http://${ipAddress}:${port}`);
});

app.use((req, res, next) => {
    res.status(404).send('File not found');
  });