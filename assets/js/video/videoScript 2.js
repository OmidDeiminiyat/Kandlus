const express = require('express');
const mysql = require('mysql');

const app = express();

// Configure MariaDB connection
const dbConfig = {
    host: 'localhost:3306',
    user: 'kandlus',
    password: 'tfr53teuomid0199',
    database: 'kandlus_kandlus'
};

const connection = mysql.createConnection(dbConfig);

// Define an API endpoint to fetch data
app.get('/api/data', (req, res) => {
    connection.query('SELECT * FROM your_table', (error, results) => {
        if (error) {
            return res.status(500).json({ error });
        }
        res.json(results);
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});






