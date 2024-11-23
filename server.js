const express = require('express');
const bodyParser = require('body-parser');
const schoolRoutes = require('./routes/school');
require('dotenv').config();
const db = require('./config/db'); 

const app = express();
app.use(express.json());
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    console.log('Request Body:', req.body);
    next();
});

app.use('/api', schoolRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
