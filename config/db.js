const mysql = require('mysql2');
require('dotenv').config();

const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

// Test the connection
db.getConnection((err, connection) => {
    if (err) {
        console.error('Database connection failed:', err.message);
        process.exit(1); // Exit the process if the connection fails
    } else {
        console.log('Database connected successfully.');
        connection.release(); // Release the connection back to the pool
    }
});

module.exports = db;
