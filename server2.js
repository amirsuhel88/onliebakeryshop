const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const PORT = 8081;


// Middleware to set Content Security Policy headers
app.use((req, res, next) => {
    res.setHeader("Content-Security-Policy", "default-src 'none'; font-src 'self' https://fonts.googleapis.com");
    next();
});

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// MySQL database connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bakeryshop'
});

connection.connect(err => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL database');
});
app.post('/', (req,res)=>{
    return res.json("from backend")
})

app.get('/signup', (req, res) => {
    // Retrieve information from the login table
    connection.query('SELECT * FROM login', (err, results) => {
        if (err) {
            console.error('Error retrieving users:', err);
            return res.status(500).json({ error: 'Failed to retrieve users' });
        }
        res.status(200).json(results);
    });
});
// Route handler for /signup POST requests
app.post('/signup', (req, res) => {
    const { email, phone, name, password } = req.body;

    if (!email || !phone || !name || !password) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    // Insert user into the login table
    const query = 'INSERT INTO login (email, phone, name, password) VALUES (?, ?, ?, ?)';
    connection.query(query, [email, phone, name, password], (err, results) => {
        if (err) {
            console.error('Error inserting user:', err);
            return res.status(500).json({ error: 'Failed to signup' });
        }
        console.log('User signed up successfully');
        res.status(200).json({ message: 'Signup successful' });
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
